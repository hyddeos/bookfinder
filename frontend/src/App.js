import React from "react";
import Header from "./components/Header";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  const books = document.getElementById("app").getAttribute("books");
  const csrf = document.getElementById("app").getAttribute("csrf");
  console.log("books", books);

  return (
    <BrowserRouter>
      <div className="h-screen bg-light">
        <div className="max-w-6xl m-auto">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <p className="font-bold text-error">Det här är din sida</p>
          <h1 className="text-2xl font-header ">FOWDWO dwkoad</h1>
          <h1 className="text-2xl font-ingress">FOWDWO dwkoad</h1>
          <h1 className="text-2xl font-body font-black">TESTdwad</h1>
          <p>dddws {books} </p>
          <a href="/updatebooks">
            <button className="bg-acc h-6 w-10">UPDATE BOOKS</button>
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
};

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
