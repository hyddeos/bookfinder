from django.shortcuts import render
from django.shortcuts import redirect, render
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from django.contrib import messages
from django.http import JsonResponse
import json


# Own functions
from frontend.assets.bookbeat_scraper import get_books
from frontend.assets.load_from_db import load_books

# Models
from frontend.models import *


# Create your views here.


def index(request):
    user = request.user
    page_number = request.GET.get("page")
    if not page_number:
        page_number = 1

    if user:
        books_data = load_books(user, page_number)
        pages = books_data["pages"]
        books = books_data["books"]
        books = json.loads(books)

        context = {
            "books": books,
            "pages": pages,
        }
        serialized_data = json.dumps(context)

    else:
        context = {}

    return render(request, "frontend/index.html", {"serialized_data": serialized_data})


def update_books(request):
    get_books()
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


@csrf_exempt
def handle_user_books(request):
    if request.method == "POST":
        data = json.loads(request.body.decode("utf-8"))
        print("data!", data)
        read_this = data["readThis"]
        read_maybe = data["readMaybe"]
        read_not = data["readNot"]
        print(read_this, read_maybe)
        test = {
            "status": 200,
        }
        return JsonResponse(test)
