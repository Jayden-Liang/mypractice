from wtforms import TextAreaField, SubmitField, StringField, PasswordField, HiddenField
from wtforms.validators import DataRequired, Length, Email
from flask_wtf import FlaskForm

class LoginForm(FlaskForm):
    next = HiddenField()
    username = StringField('用户名或邮箱',
                           [DataRequired(), Length(3, 254)])
    password = PasswordField('密码', [DataRequired(), Length(6,128)])
