from flask import request, jsonify, Blueprint
from flask_bcrypt import generate_password_hash, check_password_hash
from flask_login import login_user, current_user, logout_user, login_required
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict
from user import User

user = Blueprint('users', __name__, url_prefix='/api/user')

@user.route('/register', methods=["POST"])
def register():
    body = request.get_json()
    body['email'] = body['email'].lower()
    try:
        User.get(User.email == body['email'])
        return jsonify(message="A user with that name already exists"), 401
    except DoesNotExist:
        body['password'] = generate_password_hash(body['password'])
        user = User.create(**body)
        login_user(user)
        user_dict = model_to_dict(user)
        del user_dict['password']
        return jsonify(user_dict), 201
