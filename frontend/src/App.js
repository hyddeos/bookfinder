import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ListBooks from "./components/ListBooks";

const App = () => {
  const user = document.getElementById("app").getAttribute("user");
  const error = document.getElementById("app").getAttribute("error");
  const rawBookData = document.getElementById("app").getAttribute("data");
  const bookData = JSON.parse(rawBookData);
  console.log("user App", user);

  return (
    <div className="h-screen bg-light">
      <div className="max-w-6xl m-auto">
        <Header user={user} error={error} />
        {user ? <ListBooks bookData={bookData} user={user} /> : ""}
      </div>
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
