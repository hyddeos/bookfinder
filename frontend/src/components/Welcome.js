import React, { useState, useEffect } from "react";

export default function Welcome() {
  return (
    <div className="block m-auto my-12">
      <div className="m-auto"></div>
      <div className="flex justify-center">
        <div className="w-1/3 ">50%</div>
        <div className="w-2/3  bg-prim py-4">
          <h2 className="font-header text-left text-dark text-3xl px-4  ">
            WELCOME <span className="text-succes italic">YOU</span>
          </h2>
          <h3 className="font-header text-dark text-8xl text-left px-4">
            <span className="">LOVER </span>
            <span className="font-ingress italic text-4xl">of</span>
          </h3>
          <h3 className="font-header text-dark text-8xl text-center px-4">
            <span className="text-acc">KNOWLEDGE</span>
          </h3>
          <h3 className="font-header text-dark text-8xl text-right px-4">
            <span className="font-ingress italic text-4xl">and </span>
            <span> CURIOSITY </span>
          </h3>
          <div className="flex">
            <div className="text-dark w-1/2">
              <h5 className="text-2xl font-header mt-4 mx-4  px-3 border-acc border-l-4">
                This is for you who...
              </h5>
              <p className="text-2xl font-igress mx-4 px-4">
                Have a passion for listening to{" "}
                <span className="font-semibold">audiobooks</span> with a
                <span className="font-semibold"> philosophical</span> and{" "}
                <span className="font-semibold">scientific</span> inclination.
                <p className="font-body text-base mt-4">
                  Bookfinder is here to assist you by filtering out all the
                  <span className="italic"> get-rich-quick</span> books,{" "}
                  <span className="italic">self-help</span> books, and other
                  nonsensical books.<br></br>
                  <br></br> Here we try to help you find books that go beyond
                  surface-level content and provide depth and substance. The
                  audio services that are inundated with books focused solely on
                  instrumental value, we believe in the power of knowledge for
                  its intrinsic worth.
                </p>
              </p>
            </div>
            <div className="text-dark w-1/2">
              <p class="font-body text-base mt-14 mx-4 px-4">
                Our mission is to help you uncover these hidden gems, the books
                that offer knowledge as something with intrinsic value.<br></br>{" "}
                For instance, out of approximately{" "}
                <span className="font-semibold">10,000</span> books scanned in
                the factual category, only{" "}
                <span className="font-semibold">1,000</span> make it through our
                selection process.<br></br>
                <br></br> Let´s be clear our algorithm might not be perfect, and
                it's possible that some truly great books may slip through the
                cracks but if you are like us you wont think twice about going
                back and scrolling through hundres of miss categoriesed book
                about <span className="italic">diets</span> or{" "}
                <span className="italic">songs to sing to your dog</span>.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
