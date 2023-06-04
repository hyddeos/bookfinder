import React from "react";
import Header from "./components/Header";
import { createRoot } from "react-dom/client";

const App = () => {
  const books = document.getElementById("app").getAttribute("books");
  console.log("books", books);

  return (
    <div className="h-screen bg-prim">
      <Header />
      <p className="font-bold text-error">Det här är din sida</p>
      <h1 className="text-2xl font-header ">FOWDWO dwkoad</h1>
      <h1 className="text-2xl font-ingress">FOWDWO dwkoad</h1>
      <h1 className="text-2xl font-body font-black">TESTdwad</h1>
      <p>dddws {books} </p>
      <a href="/updatebooks">
        <button className="bg-acc h-6 w-10">UPDATE BOOKS</button>
      </a>
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
