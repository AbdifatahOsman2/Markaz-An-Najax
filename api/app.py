from flask import Flask, g
from flask_cors import CORS
from flask_login import LoginManager
from peewee import DoesNotExist
DEBUG = True
PORT = 8051

app = Flask(__name__)
from db import DATABASE,initialize
from student import Student
from user import User
from resources.students import student
from resources.users import user

login_manager = LoginManager()
app = Flask(__name__)

app.secret_key = "wabaladubduub"
login_manager.init_app(app)

@login_manager.user_loader
def load_user(userId):
    try:
        return User.get(User.id == userid)
    except DoesNotExist:
        return None

@app.before_request
def before_request():
    g.db = DATABASE
    g.db.connect()

@app.after_request
def after_request(response):
    g.db.close()
    return response

@app.route('/')
def index():
    return 'hi'

CORS(student, origins=['http://localhost:3000'], supports_credentials=True)
CORS(user, origins=['http://localhost:3000'], supports_credentials=True)

app.register_blueprint(student)
app.register_blueprint(user)

if __name__ == '__main__':
    initialize([User, Student])
    app.run(debug=DEBUG, port=PORT)