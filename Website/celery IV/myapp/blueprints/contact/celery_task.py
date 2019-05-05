
from flask_mail import Message
from myapp.app import create_celery_app
celery = create_celery_app()


# def send_mail(subject, to, body):
    


@celery.task()
def deliver_email(name, email, content):
    from myapp.extensions import mail
    message = Message(content, recipients=[email], body='fuck you')
    mail.send_message(message)
    return None


