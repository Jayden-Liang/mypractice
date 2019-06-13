from flask import Flask, render_template

def create_app():
    app = Flask(__name__)
    app.config['debug']= True
    @app.route('/')
    def index():
        return render_template('index.html')
    @app.route('/test')
    def inde():
        return render_template('cover-background.html')
    @app.route('/game')
    def indess():
        return render_template('pig-game.html')

    @app.route('/tecssssssest')
    def indxe():
        return render_template('cover-background.html')

    return app
