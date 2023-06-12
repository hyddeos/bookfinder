from frontend.models import Book, Genre, User, UserBook
from django.core import serializers


def load_books(user):
    books = Book.objects.all().prefetch_related("publisher")

    serialized_books = serializers.serialize(
        "json", books, use_natural_foreign_keys=True
    )
    return serialized_books
