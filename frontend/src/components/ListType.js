import React, { useState, useEffect } from "react";

export default function ListType() {
  const currentUrl = window.location.href;
  const [typeHeader, setTypeHeader] = React.useState("");
  const [typeInfo, setTypeInfo] = React.useState("");

  React.useEffect(() => {
    getListName();
  }, []);

  function getListName() {
    if (currentUrl.includes("readlist")) {
      setTypeHeader("READ-LIST");
    } else if (currentUrl.includes("maybelist")) {
      setTypeHeader("MAYBE-LIST");
    } else if (currentUrl.includes("notlist")) {
      setTypeHeader("NOT-LIST");
      setTypeInfo(
        "Books on your Not-list won´t show up in other filtering such as publishers search"
      );
      return "NOT LIST";
    } else {
      return "UNDECIDED LIST";
    }
  }

  return (
    <div className="my-8 text-center">
      <h2 className="font-header text-dark text-3xl">{typeHeader}</h2>
      <p className="text-dark font-ingress">{typeInfo}</p>
    </div>
  );
}
