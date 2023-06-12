from frontend.models import Book, Genre, Publisher


def save_books(books):
    if books[0]["service"] == "bookbeat":
        bookbeat_save(books)


def bookbeat_save(books):
    for book in books[0]["books"]:
        print("pub", book["publisher"])
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
                this_genre = Genre.objects.filter(name=genre).first()
                if not this_genre:
                    this_genre = Genre.objects.create(name=genre)
                new_book.genres.add(this_genre)

            this_publisher = Publisher.objects.filter(name=book["publisher"])
            if not this_publisher:
                new_publisher = Publisher(name=book["publisher"])
                new_publisher.save()
                this_publisher = new_publisher

            new_book.publisher = this_publisher
            new_book.save()
