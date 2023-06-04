from django.urls import path
from . import views

urlpatterns = [path("", views.index), path("updatebooks", views.update_books)]
