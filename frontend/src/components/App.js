import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="flex h-screen text-3xl md:text-2xl">
      <div className="m-auto text-center">
      Made with ❤️ dwda
    <a href="https://docs.djangoproject.com/en/3.2/" className="font-bold text-error font-sans" target="_blank"> Django</a>,
        <a href="https://reactjs.org/docs/getting-started.html" className="font-bold text-prim" target="_blank"> React</a> and 
        <a href="https://tailwindcss.com/docs" className="font-handwrite text-prim" target="_blank"> Tailwisssdnddwada CSS</a>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
