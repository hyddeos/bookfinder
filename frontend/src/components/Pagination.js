import React, { useState, useEffect } from "react";

export default function Pagination(props) {
  console.log("pa", props);

  return (
    <div className="flex">
      {props.pages.has_previous_page && (
        <a href={`?page=${props.pages.previous_page_number}`}>
          <button
            className="inline-block h-8 w-24 text-sm leading-none
            bg-acc hover:bg-prim
            rounded text-white 
            font-header mt-4 lg:mt-0"
          >
            PREVIOUS
          </button>
        </a>
      )}
      <p className="mx-5 mt-1 ">
        Page <span className="font-bold">{props.pages.current_page}</span> of{" "}
        <span className="font-bold">{props.pages.total_pages}</span> (
        <span className="font-bold">{props.total} </span>books)
      </p>
      {props.pages.has_next_page && (
        <a href={`?page=${props.pages.next_page_number}`}>
          <button
            className="inline-block h-8 w-24 text-sm leading-none
            bg-acc hover:bg-prim
            rounded text-white  align
            font-header mt-4 lg:mt-0"
          >
            NEXT
          </button>
        </a>
      )}
    </div>
  );
}
