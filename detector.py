# import the necessary packages
from __future__ import print_function
from imutils.object_detection import non_max_suppression
from imutils import paths
import numpy as np
import argparse
import imutils
import cv2
import RPi.GPIO as GPIO
from threading import Thread
from picamera.array import PiRGBArray
from picamera import PiCamera
import time
import logging
import requests
from dotenv import dotenv_values
from datetime import datetime

envs = dotenv_values(".env")

logging.basicConfig(
    filename='detector.log',
    format='%(asctime)s %(message)s',
    level=logging.INFO,
    datefmt='%Y-%m-%d %H:%M:%S')

print("Para finalizar la ejecucion presione q")

# Inicializar camara https://projects.raspberrypi.org/en/projects/getting-started-with-picamera/4
resX = 240
resY = 180
camera = PiCamera()
camera.resolution = (resX,resY)
camera.framerate = 10
rawCapture = PiRGBArray(camera, size=(resX, resY))

# Variables de conteo de entrada y salida
peopleIn = 0
peopleOut = 0

print("Inicializando camara")
print(time.strftime("%H_%M_%S"))
fourcc = cv2.cv.CV_FOURCC(*'XVID')
out = cv2.VideoWriter(time.strftime("%H_%M_%S")+'.avi',fourcc, 20.0, (resX, resY))

# Inicializar Detector de personas generico
hog = cv2.HOGDescriptor() # Depende de la version de cv2
hog.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector()) # Depende de la version de cv2
detectFlag = 0
frameCounter = 0
# Tiempo de inicializacion de la camara
time.sleep(0.1)

GPIO.setmode(GPIO.BOARD)

GPIO.setup(16, GPIO.OUT)

def sendAPICall(action):
    url = envs['URL']
    requests.post(url, data={'date':datetime.now(), 'action': action})



# methods for IN and OUT counters
def testEntered(x, y, z):
    if((x >= 50) and  (x <= 130) and (x < z[0]) and (z[0]>0) and (z[0]> 130)):
        print (x,z[0],"IN")
        return True
    return False

def testOut(x, y, z):
    if((x >= 50) and  (x <= 130) and (x > z[0]) and (z[0]>0) and z[0]<50):
        print (x,z[0],"OUT")
        return True
    return False

prevPerson = (0,0)

def classfier(testImage, threadNum, capTime, frameCounter):
    global peopleIn, peopleOut, peopleTotal, prevPerson
    (rects, weights) = hog.detectMultiScale(testImage, winStride=(8, 8), padding=(16, 16), scale=1.1)

    rects = np.array([[x, y, x + w, y + h] for (x, y, w, h) in rects])
    pick = non_max_suppression(rects, probs=None, overlapThresh=0.65)

    cv2.line(image, (50,0), (50,192), (250, 0, 1), 2)   # Linea Azul
    cv2.line(image, (130,0), (130,192), (0, 0, 255), 2) # Linea Roja
    
    for (xA, yA, xB, yB) in pick:
        frameCounter = 0
        cv2.rectangle(testImage, (xA, yA), (xB, yB), (0, 255, 0), 2)

        rectangleCenterPont = ((xA + xB) /2, (yA + yB) /2 )
        cv2.circle(testImage, rectangleCenterPont, 1, (0,0,255), 5)

        if(testEntered((xA + xB) /2, (yA + yB) /2,prevPerson)):
            peopleIn += 1
            logging.info('IN')
            t_in = Thread(target = sendAPICall, args = ("IN"))
            t_in.start()

        if(testOut((xA + xB) /2, (yA + yB) /2,prevPerson)):
            peopleOut += 1
            logging.info('OUT')
            t_out = Thread(target = sendAPICall, args = ("OUT"))
            t_out.start()
        
        prevPerson = rectangleCenterPont
	

    cv2.putText(image, "In: {}".format(str(peopleIn)), (10, 50),
        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)
    cv2.putText(image, "Out: {}".format(str(peopleOut)), (10, 70),
        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)
    cv2.putText(image, "Total: {}".format(str(peopleIn - peopleOut)), (10, 90),
        cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 255), 2)
    curTime = time.time()
    out.write(testImage)
    cv2.imshow("After NMS", testImage)

# Captura la camara
i = 0
frameCount = 0
prevTime = time.time()
for frame in camera.capture_continuous(rawCapture, format="bgr", use_video_port=True):
    if (frameCounter < 11):
        GPIO.output(16, GPIO.LOW)
        print ("Waiting ", frameCounter)
        frameCounter += 1
    else:
        GPIO.output(16,GPIO.HIGH)
    image = frame.array
    captureTime = time.time()
    prevTime = captureTime
    t1 = Thread(target = classfier, args = (image,i,captureTime,frameCounter))
    t1.start()
    threadPick = t1.join()


    key = cv2.waitKey(1) & 0xFF

    rawCapture.truncate(0)

    if key == ord("q"):
        cleanup_stop_thread();
        sys.exit()
  