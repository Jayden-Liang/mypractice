from flask import Flask, render_template

def create_app():
    app = Flask(__name__)
    app.config['debug']= True
    @app.route('/')
    def index():
        return render_template('index.html')
    @app.route('/dfdesfdddf1f')
    def inde():
        return render_template('index.html')

    return app
