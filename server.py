import os
import sys

from flask import Flask, jsonify


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev'
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route('/logs')
    def daily():
        logs = open('detector.log', 'r')
        actions = []

        for log in logs.readlines():
            data = log.split(' ')
            actions.append( {
                'date': data[0],
                'time': data[1],
                'action': data[2]
            } )
        
        return jsonify(
            data=actions,
            size=len(actions)
        )

    return app