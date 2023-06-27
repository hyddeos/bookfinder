from django.urls import path
from . import views
from frontend.views import handler404

urlpatterns = [
    path("", views.index),
    path("updatebooks", views.update_books),  # update services
    path("login", views.handle_login),
    path("logout", views.handle_logout),
    path("update", views.handle_user_book),  # update user books
    path("readlist", views.readlist),
    path("maybelist", views.maybelist),
    path("notlist", views.notlist),
    path("browse", views.browselist),
]

handler404 = "frontend.views.handler404"
