'''Use this for production'''

from .base import *

DEBUG = False
ALLOWED_HOSTS += ['18.223.165.101', 'ifamust.com',
                  'www.ifamust.com', 'https://ifamust.com', 'https://www.ifamust.com']
WSGI_APPLICATION = 'home.wsgi.prod.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'ifamust',
        'USER': 'ubuntu',
        'PASSWORD': 'ccc11226',
        'HOST': 'ec2-18-223-165-101.us-east-2.compute.amazonaws.com',
        'PORT': '5432',
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

STRIPE_PUBLIC_KEY = 'pk_test_51HUjG4KRoFNgompUeDWgm4LgGD3E7B4gmMmg0kWF1FOPcnjeOhPsQOKMkaaLVxEeBTH7NXasnB6GkEAXfHTG8x9r004X5GZ5tg'
STRIPE_SECRET_KEY = 'sk_test_51HUjG4KRoFNgompUrQbd5gnL0OzylBD9ljEH11JQ0ROVBAmHIJz5HAPP8DAiBOQXi1SduUBY3qDoi7xIEL9v7I8Q00YiNNXgoH'
