# Contador de personas usando OpenCV sobre Rasberry Pi con Pi Camera
Este proyecto fue realizado usando la libreria OpenCV, su objetivo es el conteo de personas en un recinto por medio del procesamiento de imagen.

## Instalacion

Actualizar repositorios
```bash
sudo apt-get update
sudo apt-get upgrade
```

Instalar dependencias de GCC y C++
```bash
sudo apt-get install build-essential
```

Instalar dependencias de manejo de media y paquetes
```bash
sudo apt-get install cmake libgtk2.0-dev pkg-config libavcodec-dev libavformat-dev libswscale-dev 
```

Instalar dependencias de python
```bash
sudo apt-get install python-dev python-numpy libtbb2 libtbb-dev  libjpeg-dev   libpng-dev libtiff-dev libjasper-dev libdc1394-22-dev
```

Instalar OpenCV y MatPlotLib para anotaciones
```bash
sudo apt-get install python-opencv
sudo apt-get install python-matplotlib
```

Verifica la istalacion de OpenCV
```python
python
# En la consola de python
import cv2
cv2.__version___        # Debe retornar la version de OpenCV
```
_En caso de necesitar implementar una camara web generica seguir esta [guia](https://www.hackster.io/deligence-technologies/person-counting-system-using-opencv-and-python-faf14f).

## Ejecutar el script
```bash
python detector.py
```

# Dashboard de datos

Este contador cuenta con un dashboard que muestra en tiempo real las interacciones y estadisticas que el dispositivo ha recogido en el tiempo. Este dashboard fue desarrollado sobre flask por la parte del servidor y el cliente en Vue.Js

## Requisitos

* Python 3.8
* Node 16

## Instalar dependencias

Instalar dependencias del servidor
```bash
pip install -U flask-cors
pip install flask
pip install requests
pip install python-dotenv
```

Instalar dependencias de desarrollo del cliente
```bash
cd dashboard
yarn install
```

## Ejecutar el dashboard
_Es necesario tener un archivo de logs presente llamado detector.log_
```bash
flask run
# Abrir una nueva terminal
cd dashboard
yarn serve
```

## Actualizar produccion
```bash
cd dashboard
yarn generate
cp -r dist/* ../static/
cd ..
cp static/index.html templates/
```

## Ejecutar en produccion
```bash
flask run
```