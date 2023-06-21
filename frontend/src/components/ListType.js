import { func } from "prop-types";
import React, { useState, useEffect } from "react";

export default function ListType() {
  const currentUrl = window.location.href;

  function getListName() {
    if (currentUrl.includes("readlist")) {
      return "READ LIST";
    } else if (currentUrl.includes("maybelist")) {
      return "MAYBE LIST";
    } else if (currentUrl.includes("notlist")) {
      return "NOT LIST";
    } else {
      return "UNDESIDED LIST";
    }
  }

  return (
    <div className="flex justify-center">
      <h2 className="font-header text-dark text-3xl">{getListName()}</h2>
    </div>
  );
}
