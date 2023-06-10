from frontend.models import Book, Genre, Publisher


def save_books(books):
    if books[0]["service"] == "bookbeat":
        bookbeat_save(books)


def bookbeat_save(books):
    for book in books[0]["books"]:
        this_book = Book.objects.filter(title=book["title"])
        if not this_book.exists():  # Then Save the book
            new_book = Book(
                source=books[0]["service"],
                title=book["title"],
                author=book["author"],
                url=book["url"],
                cover=book["cover"],
                published=book["published"],
                source_published=book["source_published"],
                summary=book["summary"][:1500],  # Just take the first 1500chars
            )
            new_book.save()

            # Add genres
            for genre in book["genres"]:
                this_genre = Genre.objects.filter(name=genre)
                if not this_genre.exists():
                    new_genre = Genre(name=genre)
                    new_genre.save()
                new_book.genres.set(this_genre)

            # Add Publisher
            this_publisher = Publisher.objects.filter(name=book["publisher"])
            if not this_publisher.exists():
                new_publisher = Publisher(name=book["publisher"])
                new_publisher.save()
                new_book.publisher.set(this_publisher)
