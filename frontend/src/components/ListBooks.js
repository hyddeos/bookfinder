import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

export default function ListBooks(props) {
  const [readThis, setReadThis] = React.useState([]);
  const [readMaybe, setReadMaybe] = React.useState([]);
  const [readNot, setReadNot] = React.useState([]);
  console.log("List, props", props);
  console.log("2", props.bookData);

  function updateBook(key, list) {
    console.log("in updatebook");
    const data = {
      readList: list,
      key: key,
    };
    fetch("http://127.0.0.1:8000/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("OK");
        } else {
          console.log("not Ok");
        }
      })
      .catch((error) => {
        console.log("some error", error);
      });
  }

  function handleClick(key, list) {
    // Check if key already added
    if (readThis.includes(key)) {
      setReadThis((prevReadThis) =>
        prevReadThis.filter((item) => item !== key)
      );
    } else if (readMaybe.includes(key)) {
      setReadMaybe((prevReadMaybe) =>
        prevReadMaybe.filter((item) => item !== key)
      );
    } else if (readNot.includes(key)) {
      setReadNot((prevReadNot) => prevReadNot.filter((item) => item !== key));
    } else {
      // Add key to right Read-type
      if (list === "read") {
        setReadThis((prevReadMaybe) => [...prevReadMaybe, key]);
      } else if (list === "maybe") {
        setReadMaybe((prevReadMaybe) => [...prevReadMaybe, key]);
      } else if (list === "not") {
        setReadNot((prevReadNot) => [...prevReadNot, key]);
      }
    }
    updateBook(key, list);
  }
  console.log("red", readThis);
  console.log("man", readMaybe);
  console.log("not", readNot);

  return (
    <div className="h-screen bg-light">
      <div className="max-w-6xl">
        <div className="flex justify-center">
          <Pagination pages={props.bookData.pages} />
        </div>
        {props.bookData.books.map((book) => (
          <div key={book.pk} className="my-4 ">
            <div className="flex max-h-60 border-t-4 border-l-4 border-r-4 border-acc rounded-t-xl bg-white overflow-hidden">
              <div className="max-w-6xl object-scale-down bg-prim w-1/5">
                <a
                  href={book.fields.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={book.fields.cover}
                    alt="cover image for the book"
                    className="object-scale-down h-56 p-2 "
                  />
                </a>
              </div>
              <div className="w-1/5 p-3 bg-prim">
                <div className="pt-1">
                  <h2 className="font-header  text-dark">
                    {book.fields.title}
                  </h2>
                </div>
                <div>
                  <h2 className="font-ingress text-dark py-4">
                    {book.fields.author}
                  </h2>
                </div>
                <div>
                  <h2 className="font-ingress text-dark">
                    {book.fields.publisher}
                  </h2>
                </div>
                <div>
                  <h2 className="font-ingress text-dark">
                    {book.fields.published}
                  </h2>
                </div>
              </div>
              <div className="w-7/12 p-3 text-clip overflow-y-auto">
                <p className="text-body">{book.fields.summary}</p>
              </div>
              <div className="flex flex-wrap w-1/12">
                <div
                  onClick={() => handleClick(book.pk, "read")}
                  className={`bg-succes h-1/3 w-full text-center grid place-items-center hover:bg-prim cursor-pointer ${
                    readNot.includes(book.pk) || readMaybe.includes(book.pk)
                      ? "hidden"
                      : readThis.includes(book.pk) && "h-full"
                  }`}
                >
                  <span className="material-symbols-outlined text-white text-4xl">
                    thumb_up
                  </span>
                </div>
                <div
                  onClick={() => handleClick(book.pk, "maybe")}
                  className={`bg-light_blue h-1/3 w-full text-center grid place-items-center hover:bg-prim cursor-pointer ${
                    readThis.includes(book.pk) || readNot.includes(book.pk)
                      ? "hidden"
                      : readMaybe.includes(book.pk) && "h-full"
                  }`}
                >
                  <span className="material-symbols-outlined text-white text-4xl">
                    thumbs_up_down
                  </span>
                </div>
                <div
                  onClick={() => handleClick(book.pk, "not")}
                  className={`bg-error h-1/3 w-full text-center grid place-items-center hover:bg-prim cursor-pointer ${
                    readThis.includes(book.pk) || readMaybe.includes(book.pk)
                      ? "hidden"
                      : readNot.includes(book.pk) && "h-full"
                  }`}
                >
                  <span className="material-symbols-outlined text-white text-4xl ">
                    thumb_down
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-acc rounded-b-xl p-1 px-3">
              <p className="text-white ">
                Genres:{" "}
                <span className="font-ingress font-medium">
                  {book.fields.genres}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
