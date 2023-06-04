from django.shortcuts import render
from frontend.assets.bookbeat_scraper import get_books

# Create your views here.


def index(request):
    get_books()
    return render(
        request,
        "frontend/index.html",
        {
            "test": "hesjsan",
        },
    )
