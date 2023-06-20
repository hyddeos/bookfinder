from frontend.models import Book, Genre, User, UserBook
from django.core import serializers
from django.core.paginator import Paginator


def load_books(user, page_number):
    books_per_page = 50
    paginator = Paginator(
        Book.objects.all().prefetch_related("publisher"), books_per_page
    )
    page = paginator.get_page(page_number)
    books = page.object_list  # List of books for the current page

    # You can also access pagination information

    total_pages = paginator.num_pages

    previous_page_number = 0
    if page.has_previous():
        previous_page_number = page.previous_page_number()
    next_page_number = 0
    if page.has_next():
        next_page_number = page.next_page_number()
    pages = {
        "total_pages": total_pages,
        "previous_page_number": previous_page_number,
        "next_page_number": next_page_number,
        "has_next_page": page.has_next(),
        "has_previous_page": page.has_previous(),
        "current_page": page_number,
    }

    serialized_books = serializers.serialize(
        "json", books, use_natural_foreign_keys=True
    )

    return {"books": serialized_books, "pages": pages}
