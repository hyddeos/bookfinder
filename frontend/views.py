from django.shortcuts import render
from django.shortcuts import redirect, render
from django.contrib.auth import authenticate, login, logout, get_user_model
from django.views.decorators.csrf import csrf_exempt
from django.contrib import messages
from django.http import JsonResponse
import json
from django.contrib.auth.decorators import login_required


# Own functions
from frontend.assets.bookbeat_scraper import get_books
from frontend.assets.load_from_db import load_books
from frontend.assets.load_from_db import load_sample_books
from frontend.assets.load_from_db import load_filterd_books

# Models
from frontend.models import *


# Create your views here.


def index(request):
    user = request.user
    page_number = request.GET.get("page")
    if not page_number:
        page_number = 1

    if user.is_authenticated:
        list_type = "undesided"
        books_data = load_books(user, page_number, list_type)
        pages = books_data["pages"]
        books = books_data["books"]
        total_books = books_data["total_nr"]
        books = json.loads(books)
        context = {
            "books": books,
            "total_books": total_books,
            "pages": pages,
        }
        serialized_data = json.dumps(context)

        return render(
            request, "frontend/index.html", {"serialized_data": serialized_data}
        )
    else:  # I.E User NOT logged in, welcome screen
        sample_books = load_sample_books()
        sample_books = json.loads(sample_books["books"])
        context = {"books": sample_books}
        serialized_data = json.dumps(context)
        return render(
            request, "frontend/index.html", {"serialized_data": serialized_data}
        )


# Update the books from the book services
@login_required
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
@login_required
def handle_user_book(request):
    if request.method == "POST":
        user = request.user
        if user.is_authenticated:
            data = json.loads(request.body.decode("utf-8"))
            book = Book.objects.get(pk=data["key"])

            user_list, created = UserList.objects.get_or_create(user=user)
            want_to_read = user_list.want_to_read.all()
            maybe_to_read = user_list.maybe_to_read.all()
            wont_read = user_list.wont_read.all()

            if data["readList"] == "read":
                if book in want_to_read:
                    user_list.want_to_read.remove(book)
                else:
                    user_list.want_to_read.add(book)
                user_list.maybe_to_read.remove(book)
                user_list.wont_read.remove(book)
            elif data["readList"] == "maybe":
                if book in maybe_to_read:
                    user_list.maybe_to_read.remove(book)
                else:
                    user_list.maybe_to_read.add(book)
                user_list.want_to_read.remove(book)
                user_list.wont_read.remove(book)
            elif data["readList"] == "not":
                if book in wont_read:
                    user_list.wont_read.remove(book)
                else:
                    user_list.wont_read.add(book)
                user_list.maybe_to_read.remove(book)
                user_list.want_to_read.remove(book)

            status = {
                "status": 200,
            }
            return JsonResponse(status)


@login_required
def readlist(request):
    user = request.user
    page_number = request.GET.get("page")
    if not page_number:
        page_number = 1

    list_type = "want_to_read"

    books_data = load_books(user, page_number, list_type)
    pages = books_data["pages"]
    books = books_data["books"]
    total_books = books_data["total_nr"]
    books = json.loads(books)

    context = {
        "books": books,
        "total_books": total_books,
        "pages": pages,
    }
    serialized_data = json.dumps(context)

    return render(
        request,
        "frontend/index.html",
        {"serialized_data": serialized_data, "list": "read"},
    )


@login_required
def maybelist(request):
    user = request.user
    page_number = request.GET.get("page")
    if not page_number:
        page_number = 1

    list_type = "maybe_to_read"

    books_data = load_books(user, page_number, list_type)
    pages = books_data["pages"]
    books = books_data["books"]
    total_books = books_data["total_nr"]
    books = json.loads(books)

    context = {
        "books": books,
        "total_books": total_books,
        "pages": pages,
    }
    serialized_data = json.dumps(context)

    return render(
        request,
        "frontend/index.html",
        {"serialized_data": serialized_data, "list": "maybe"},
    )


@login_required
def notlist(request):
    user = request.user
    page_number = request.GET.get("page")
    if not page_number:
        page_number = 1

    list_type = "not_to_read"

    books_data = load_books(user, page_number, list_type)
    pages = books_data["pages"]
    books = books_data["books"]
    total_books = books_data["total_nr"]
    books = json.loads(books)

    context = {
        "books": books,
        "total_books": total_books,
        "pages": pages,
    }
    serialized_data = json.dumps(context)

    return render(
        request,
        "frontend/index.html",
        {"serialized_data": serialized_data, "list": "not"},
    )


def browselist(request):
    user = request.user
    search_terms = dict()

    page_number = request.GET.get("page")
    if not page_number:
        page_number = 1

    publisher = request.GET.get("publisher")
    if publisher:
        include_publisher = []
        include_publisher.append(publisher)
        search_terms.update({"include_publisher": include_publisher})

    if user.is_authenticated:
        books_data = load_filterd_books(user, page_number, search_terms)
        pages = books_data["pages"]
        books = books_data["books"]
        total_books = books_data["total_nr"]
        books = json.loads(books)
        context = {
            "books": books,
            "total_books": total_books,
            "pages": pages,
        }
        serialized_data = json.dumps(context)

        return render(
            request, "frontend/index.html", {"serialized_data": serialized_data}
        )
    else:  # I.E User NOT logged in, welcome screen
        user = None
        search_terms = dict()

        page_number = request.GET.get("page")
        if not page_number:
            page_number = 1

        publisher = request.GET.get("publisher")
        if publisher:
            include_publisher = []
            include_publisher.append(publisher)
            search_terms.update({"include_publisher": include_publisher})

        books_data = load_filterd_books(user, page_number, search_terms)
        pages = books_data["pages"]
        books = books_data["books"]
        total_books = books_data["total_nr"]
        books = json.loads(books)
        context = {
            "books": books,
            "total_books": total_books,
            "pages": pages,
        }
        serialized_data = json.dumps(context)

        return render(
            request, "frontend/index.html", {"serialized_data": serialized_data}
        )


def handler404(request, exception):
    return render(request, "404.html", status=404)
