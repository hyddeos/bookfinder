import json
import requests
import re
from frontend.assets.url_regex import bookbeat_url_regex


def get_books():
    urls = urls_to_scape()
    books = []
    for url in urls:
        books.append(scape_books(url))

    return 0


def urls_to_scape():
    urls = [
        # psykologi-46061
        "https://www.bookbeat.se/api/discovery/search/categories?category=61&format=audiobook&id=psykologi-46061&language=Swedish&language=English&offset=0&sortBy=publishdate&sortOrder=desc",
    ]
    return urls


def scape_books(url):
    print("Updating books running")
    books_links = []
    total_books = 0
    offset_counter = 0

    # Gets links to all books in the category
    response = requests.get(url)
    if response.status_code == 200:
        json_data = response.json()
        total_books = json_data["count"]
        for book in json_data["_embedded"]["books"]:
            books_links.append(book["_links"]["self"]["href"])
        offset_counter = +50
    else:
        print("Request failed with status code:", response.status_code)

    while offset_counter < 10:  # change later to total_books
        updated_url = bookbeat_url_regex(url, offset_counter)
        response = requests.get(updated_url)
        if response.status_code == 200:
            json_data = response.json()
            for book in json_data["_embedded"]["books"]:
                books_links.append(book["_links"]["self"]["href"])
            offset_counter = offset_counter + 50
        else:
            print("Request failed with status code:", response.status_code)

    # Fetch data about every book from the book-link
    books = []
    min_length = 13000
    unwanted_categories = ["Personlig utveckling", "Familjeliv & Relationer", "Hälsa"]
    for book_url in books_links:
        response = requests.get(book_url)
        if response.status_code == 200:
            json_data = response.json()
            # check if book is long enough
            if int(json_data["audiobooklength"]) > min_length:
                # Filter away unwanted genres
                for genre in json_data["genres"]:
                    if genre["name"] in unwanted_categories:
                        break
                # Add book
                books.append(
                    {
                        "source_id": json_data["id"],
                        "title": json_data["title"],
                        "author": json_data["author"],
                        "url": json_data["shareurl"],
                        "cover": json_data["cover"],
                        "language": json_data["language"],
                        "published": json_data["published"],
                        "source_published": json_data["editions"][0][
                            "bookBeatPublishDate"
                        ],
                        "genres": json_data["genres"],
                        "publisher": json_data["editions"][0]["publisher"],
                    }
                )
        else:
            print("Request failed with status code:", response.status_code)

    return books
