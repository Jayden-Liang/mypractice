from wtforms import TextAreaField, SubmitField, StringField, PasswordField, HiddenField
from wtforms.validators import DataRequired, Length, Email
from flask_wtf import FlaskForm

def sayhi():
    print('hi.forms')

class LoginForm(FlaskForm):
    next = HiddenField()
    identity = StringField('用户名或邮箱',
                           [DataRequired(), Length(3, 254)])
    password = PasswordField('密码', [DataRequired(), Length(6,128)])


class signupForm(FlaskForm):
    email = StringField(validators=[
        Length(3, 68),
        DataRequired(),
        Email(),    #here add a validator to check if it is the same in db
    ])
    password = PasswordField('密码', [DataRequired(), Length(6,128)])

class getuserForm(FlaskForm):
    username = StringField('用户名',
                           [DataRequired(), Length(3, 254)])

class update_emailForm(FlaskForm):
    email = StringField(validators=[
        Length(3, 68),
        DataRequired(),
        Email(),
    ])
    curent_password = PasswordField('密码', [DataRequired(), Length(6,128)])
    new_email = StringField(validators=[
        Length(3, 68),
        DataRequired(),
        Email(),
    ])

class update_pwdForm(FlaskForm):
    identity = StringField('用户名或邮箱',
                           [DataRequired(), Length(3, 254)])
    curent_password = PasswordField('密码', [DataRequired(), Length(6,128)])
    new_pwd = PasswordField('密码', [DataRequired(), Length(6,128)])
