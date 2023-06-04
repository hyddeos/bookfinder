from django.shortcuts import render
from frontend.assets.bookbeat_scraper import get_books
from frontend.assets.save_to_db import save_books
from django.shortcuts import redirect

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
    response = redirect("/")
    return response
