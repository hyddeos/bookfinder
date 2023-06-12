from django.shortcuts import render
from django.shortcuts import redirect, render
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from django.contrib import messages

# Own functions
from frontend.assets.bookbeat_scraper import get_books
from frontend.assets.save_to_db import save_books
from frontend.assets.load_from_db import load_books

# Models
from frontend.models import *


# Create your views here.


def index(request):
    user = request.user

    if user:
        books = load_books(user)

    return render(
        request,
        "frontend/index.html",
        {
            "books": books,
        },
    )


def update_books(request):
    books = get_books()
    save_books(books)
    print("--UPDATE DONE--")
    response = redirect("/")
    return response


@csrf_exempt
def handle_login(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            print("login succesful")
            return redirect("/")
        else:
            # Invalid credentials
            messages.error(request, "Invalid username or password.")
            return redirect("/")
    else:
        return render(request, "index.html")


def handle_logout(request):
    logout(request)
    return redirect("/")
