from django.urls import path
from . import views

urlpatterns = [
    path("", views.index),
    path("updatebooks", views.update_books),
    path("login", views.handle_login),
    path("logout", views.handle_logout),
]
