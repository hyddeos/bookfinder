from frontend.models import Book, Genre, User, UserBook, UserList
from django.core import serializers
from django.core.paginator import Paginator
from django.db.models import Q


def load_books(user, page_number, list_type):
    books_per_page = 50
    book_ids = []
    if list_type == "undesided":
        user_lists = UserList.objects.filter(user=user)
        for user_list in user_lists:
            book_ids.extend(user_list.books_on_all_lists())
        queryset = Book.objects.all().prefetch_related("publisher")
        queryset = queryset.exclude(id__in=book_ids)
        paginator = Paginator(queryset, books_per_page)

    elif list_type == "want_to_read":
        user_lists = UserList.objects.filter(user=user)
        for user_list in user_lists:
            book_ids.extend(user_list.want_to_read_ids())
        queryset = Book.objects.filter(id__in=book_ids).prefetch_related("publisher")
        paginator = Paginator(queryset, books_per_page)

    elif list_type == "maybe_to_read":
        user_lists = UserList.objects.filter(user=user)
        for user_list in user_lists:
            book_ids.extend(user_list.maybe_to_read_ids())
        queryset = Book.objects.filter(id__in=book_ids).prefetch_related("publisher")
        paginator = Paginator(queryset, books_per_page)

    elif list_type == "not_to_read":
        user_lists = UserList.objects.filter(user=user)
        for user_list in user_lists:
            book_ids.extend(user_list.wont_read_ids())
        queryset = Book.objects.filter(id__in=book_ids).prefetch_related("publisher")
        paginator = Paginator(queryset, books_per_page)

    page = paginator.get_page(page_number)
    books = page.object_list

    previous_page_number = 0
    if page.has_previous():
        previous_page_number = page.previous_page_number()
    next_page_number = 0
    if page.has_next():
        next_page_number = page.next_page_number()
    pages = {
        "total_pages": paginator.num_pages,
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
