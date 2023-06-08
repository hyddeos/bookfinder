from django.shortcuts import render
from frontend.assets.bookbeat_scraper import get_books
from frontend.assets.save_to_db import save_books
from django.shortcuts import redirect, render
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_exempt
from frontend.models import User
import json

# Create your views here.


def index(request):
    return render(
        request,
        "frontend/index.html",
        {
            "books": " test books",
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
            return render(
                request,
                "accounts/login.html",
                {"error": "Invalid username or password."},
            )
    else:
        return render(request, "fixthis.html")
