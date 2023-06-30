import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ListBooks from "./components/ListBooks";
import WelcomePage from "./components/WelcomePage";
import Footer from "./components/Footer";

const App = () => {
  const user = document.getElementById("app").getAttribute("user");
  const error = document.getElementById("app").getAttribute("error");
  const rawBookData = document.getElementById("app").getAttribute("data");
  const bookData = JSON.parse(rawBookData);
  const listView = document.getElementById("app").getAttribute("list");
  const currentUrl = window.location.href;

  return (
    <div className="container bg-light">
      <div className="w-full md:max-w-6xl m-auto shadow-2xl">
        <Header user={user} error={error} />
        <div className="content">
          {" "}
          {user || currentUrl.includes("browse") ? ( // Check for user or browse URL
            <ListBooks bookData={bookData} user={user} listView={listView} />
          ) : (
            <WelcomePage bookData={bookData} />
          )}
        </div>
        <footer className="bg-gray-200 text-center">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
