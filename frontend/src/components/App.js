import React from "react";
import Header from "./Header";
import { createRoot } from "react-dom/client";

const App = () => {
  const test = document.getElementById("app").getAttribute("data-test");

  return (
    <div className="h-screen bg-prim">
      <Header />
      <p className="font-bold text-error">Det här är din sida</p>
      <h1 className="text-2xl font-header ">FOWDWO dwkoad</h1>
      <h1 className="text-2xl font-ingress">FOWDWO dwkoad</h1>
      <h1 className="text-2xl font-body font-black">TESTdwad</h1>
      <p>dw {test} </p>
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
