import datetime
from peewee import *

from db import DATABASE

class Student(Model):
    name = CharField()
    gender = CharField()
    student_level = CharField()
    attendance = IntegerField()
    behavior = IntegerField()
    date = DateTimeField(default= datetime.datetime.now)

    class Meta:
        database = DATABASE