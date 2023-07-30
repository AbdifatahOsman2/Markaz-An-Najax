from peewee import *
import datetime

DATABASE = PostgresqlDatabase('students')


def initialize(tables):
    DATABASE.connect()
    DATABASE.create_tables(tables, safe=True)
    print("TABLES Created")
    DATABASE.close()