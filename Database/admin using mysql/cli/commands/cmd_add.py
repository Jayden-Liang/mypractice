import subprocess
from project.blueprints.user.models import User, Role
import click
from faker import Faker
import random
fake = Faker()
from project.app import create_app
from project.extensions import db
from flask import current_app

app = create_app()
db.app = app

@click.group()
def cli():
    """ add test users """
    pass


def add_role_account():
    admin = Role.query.filter_by(name='Admin').first()
    if admin is None:
        admin = Role(name= 'Admin')
        db.session.add(admin)
        db.session.commit()
    standard =Role.query.filter_by(name='Normal_Users').first()
    if standard is None:
        user = Role(name='Normal_Users')
        db.session.add(user)
        db.session.commit()



@click.command()
def users():
    """
    generate users and data
    """
    user_emails = []
    data =[]
    for i in range(300):
        user_emails.append(fake.email())
    while True:
        email = user_emails.pop()
        user_set = {
              'username': fake.name(),
              'email': email,
              'password': User.encryptpassword('password'),
              'ct': fake.iso8601(tzinfo=None, end_datetime=None),
              'last_login_ip': fake.ipv4_private(),
              'current_login_ip': fake.ipv4_private()
        }
        data.append(user_set)
        if len(user_emails) <=0:
            break
    fisrt_admin = {
         'username': fake.name(),
         'email': app.config['SEED_ADMIN_EMAIL'],
         'password': User.encryptpassword(app.config['SEED_ADMIN_PASSWORD']),
         'ct': fake.iso8601(tzinfo=None, end_datetime=None),
         'last_login_ip': fake.ipv4_private(),
         'current_login_ip': fake.ipv4_private()
    }
    data.append(fisrt_admin)
    with app.app_context():
        db.drop_all()
        db.create_all()
        # User.query.delete()   #批量删除
        # db.session.commit()
        print('删除了')
        db.engine.execute(User.__table__.insert(), data)
        all = User.query.all()
        add_role_account()
        admin = Role.query.filter_by(name='Admin').first()
        user = Role.query.filter_by(name='Normal_Users').first()
        for u in all:
            i = random.random()
            if i <= 0.05:
                admin.users.append(u)
            else:
                user.users.append(u)
        db.session.commit()
        print('insert success')








cli.add_command(users)
