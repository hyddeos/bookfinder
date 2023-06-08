import React, { useState } from "react";

export default function Header(props) {
  const [showLogin, setShowlogin] = React.useState(false);

  function clickShowLogin() {
    console.log(showLogin);
    if (!showLogin) {
      setShowlogin("open");
    } else {
      setShowlogin(false);
    }
  }

  return (
    <nav className="p-6">
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded">
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
          <span className="font-header text-xl tracking-tight">BOOKFINDER</span>
        </div>
        <div className="text-center flex justify-evenly mx-10 lg:flex-grow">
          <div>
            <a
              href="/"
              className="block font-header mt-4 lg:inline-block lg:mt-0 hover:text-prim mr-4"
            >
              HOME
            </a>
          </div>
          <div>
            <a
              href="#responsive-header"
              className="block font-header mt-4 lg:inline-block lg:mt-0  hover:text-prim"
            >
              MY LISTS
            </a>
          </div>
          <div>
            <a
              href="/updatebooks"
              className="block font-header mt-4 lg:inline-block lg:mt-0  hover:text-prim mr-4"
            >
              UPDATE BOOKS
            </a>
          </div>
        </div>
        <div>
          <button
            onClick={clickShowLogin}
            className="inline-block text-sm px-4 py-2 leading-none
            bg-acc hover:bg-prim
            rounded text-white hover:bg-acc_light
            font-header mt-4 lg:mt-0"
          >
            LOGIN
          </button>
        </div>
      </div>
      <dialog open={showLogin ? "open" : false} className="z-50 fixed top-1/4">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
              Log in to find your next book
            </h1>

            <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
              By logging in you will be see whats new and start to choose what
              makes it into your to-read-list. Happy hunting!
            </p>

            <form
              method="post"
              action="/login"
              className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
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

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
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

                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              >
                Sign in
              </button>

              <p className="text-center text-sm text-gray-500">
                No account?
                <a className="underline" href="">
                  Sign up
                </a>
                not enabled atm
              </p>
            </form>
          </div>
        </div>
      </dialog>
    </nav>
  );
}
