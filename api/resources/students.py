from flask import Blueprint, jsonify, request
from playhouse.shortcuts import model_to_dict
from peewee import DoesNotExist
from flask_login import login_required, current_user
from student import Student

student = Blueprint('students', __name__, url_prefix='/api/students')


@student.route('/', methods=['GET'])
def get_all_students():
    try:
        students = [model_to_dict(student) for student in Student.select()]
        return jsonify(students), 200
    except DoesNotExist:
        return jsonify(message="error getting resources")


@student.route('/<id>', methods=["GET"])
def get_one_student(id):
    student = Student.get_by_id(id)
    print(student.__dict__)
    return jsonify(model_to_dict(student)), 200


@student.route('/', methods=['POST'])
def create_student():
    body = request.get_json()
    student = Student.create(**body)
    student_dict = model_to_dict(student)
    return jsonify(student_dict), 201