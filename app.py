import os
import sys

from flask import Flask, jsonify, render_template, send_from_directory
from flask_cors import CORS, cross_origin

def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True, static_url_path='/static')
    app.config.from_mapping(
        SECRET_KEY='dev'
    )
    cors = CORS(app, resources={r"/*": {"origins": "*"}})

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
                'action': data[2].replace("\n", "")
            } )
        
        response = jsonify(
            actions=actions,
            size=len(actions)
        )
        return response

    @app.route('/<path:path>')
    def send_js(path):
        return send_from_directory('static', path)
    
    @app.route('/')
    def dashboard():
        return render_template('index.html')

    return app