import sys

logs = open('detector.log', 'r')
actions = []

for log in logs.readlines():
    data = log.split(' ')
    actions.append( {
        'date': data[0],
        'time': data[1],
        'action': data[2]
    } )

print(actions)