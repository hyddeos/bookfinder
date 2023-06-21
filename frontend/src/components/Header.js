import React, { useState, useEffect } from "react";

export default function Header(props) {
  const [showLogin, setShowlogin] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  // If there is a log-in error, show the login screen.
  useEffect(() => {
    if (props.error) {
      console.log("in", errorMsg);
      setShowlogin("open");
      setErrorMsg("Invalid username or password.");
    }
  }, []);

  function clickShowLogin() {
    if (!showLogin) {
      setShowlogin("open");
    } else {
      setShowlogin(false);
    }
  }

  return (
    <nav className="p-6">
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded ">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full max-w-6xl m-auto flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="flex items-center flex-shrink-0 mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-header text-xl tracking-tight text-dark">
            BOOKFINDER
          </span>
        </div>
        <div className="text-center flex justify-evenly mx-10 lg:flex-grow">
          <div>
            <a
              href="/"
              className="block font-header mt-4 lg:inline-block lg:mt-0 hover:text-prim mr-4 text-dark"
            >
              HOME
            </a>
          </div>
          <div>
            <a
              href="/readlist"
              className="block font-header mt-4 lg:inline-block lg:mt-0  hover:text-prim text-dark"
            >
              READ LIST
            </a>
          </div>
          <div>
            <a
              href="/maybelist"
              className="block font-header mt-4 lg:inline-block lg:mt-0  hover:text-prim text-dark"
            >
              MAYBE LIST
            </a>
          </div>
          <div>
            <a
              href="/notlist"
              className="block font-header mt-4 lg:inline-block lg:mt-0  hover:text-prim text-dark"
            >
              NOT LIST
            </a>
          </div>
          <div>
            <a
              href="/updatebooks"
              className="block font-header mt-4 lg:inline-block lg:mt-0  hover:text-prim mr-4 text-dark"
            >
              UPDATE SERVICES
            </a>
          </div>
        </div>
        {props.user ? (
          <div>
            <a href="/logout">
              <button
                className="inline-block text-sm px-4 py-2 leading-none
                    border-2 border-acc
                   hover:bg-acc hover:text-white
                    rounded text-acc 
                    font-header mt-4 lg:mt-0"
              >
                LOGOUT
              </button>
            </a>
          </div>
        ) : (
          <div>
            <button
              onClick={clickShowLogin}
              className="inline-block text-sm px-4 py-2 leading-none
            bg-acc hover:bg-prim
            rounded text-white 
            font-header mt-4 lg:mt-0 "
            >
              LOGIN
            </button>
          </div>
        )}
      </div>
      <dialog
        open={showLogin ? "open" : false}
        className="z-50 fixed top-1/4 bg-prim rounded-md shadow-lg"
      >
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ">
          <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold text-dark font-header sm:text-3xl">
              LOG IN TO FIND YOUR NEXT BOOK
            </h1>

            <p className="mx-auto mt-4 text-dark font-body max-w-md text-center">
              By logging in you will be see whats new and start to choose what
              makes it into your very own{" "}
              <span className="italic">to-read-list.</span>
              <br></br> <span className="font-bold">Happy book hunting!</span>
            </p>

            <form
              method="post"
              action="/login"
              className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white"
            >
              <p className="text-center text-lg font-medium">
                Sign in to your account
              </p>

              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>

                <div className="relative">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter username"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>

                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter password"
                  />
                </div>
                <p className="text-error font-bold ml-2 mt-1">{errorMsg}</p>
              </div>
              <div className="flex justify-center">
                {" "}
                <button
                  type="submit"
                  className="inline-block text-sm px-8 py-2 leading-none
                bg-dark hover:bg-prim
                rounded text-prim hover:text-white
                font-header mt-4 lg:mt-0"
                >
                  Sign in
                </button>
              </div>
            </form>
            <p className="text-center text-sm text-dark mt-2 font-bold mx-2">
              No account?{"  "}
              <a className="underline" href="">
                Sign up
              </a>
              {"   "}(not enabled atm)
            </p>
          </div>
        </div>
      </dialog>
    </nav>
  );
}
