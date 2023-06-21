import { func } from "prop-types";
import React, { useState, useEffect } from "react";

export default function ListType(props) {
  const currentUrl = window.location.href;

  return (
    <div className="flex justify-center">
      {currentUrl.includes("readlist") ? (
        <h2 className="font-header text-dark text-3xl">WANT TO READ</h2>
      ) : (
        <h2 className="font-header text-dark text-3xl">UNDESIDED BOOKS</h2>
      )}
    </div>
  );
}
