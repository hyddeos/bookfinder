import React, { useState, useEffect } from "react";

export default function ListBooks(props) {
  return (
    <div className="h-screen bg-light">
      <div className="max-w-6xl">
        {props.books.map((book) => (
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
                  <h2 className="font-header text-dark">{book.fields.title}</h2>
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
                <div className="bg-succes w-full h-1/3 text-white text-center grid place-items-center hover:bg-prim cursor-pointer">
                  <span class="material-symbols-outlined text-4xl">
                    thumb_up
                  </span>
                </div>
                <div className="bg-light_blue w-full h-1/3 text-center grid place-items-center hover:bg-prim cursor-pointer">
                  <span class=" material-symbols-outlined text-white text-4xl">
                    thumbs_up_down
                  </span>
                </div>
                <div className="bg-error w-full h-1/3 text-center grid place-items-center hover:bg-prim hover:cursor-pointer">
                  <span class="material-symbols-outlined text-white text-4xl ">
                    thumb_down
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-acc rounded-b-xl p-1 px-3">
              <p className="text-white ">Genres: {book.fields.genres}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
