import React, { useState, useEffect } from "react";
import WelcomeHero from "./WelcomeHero";
import WelcomeUsps from "./WelcomeUsps";
import ListBooksSample from "./ListBooksSample";

export default function WelcomePage(props) {
  return (
    <div className=" block m-auto my-12">
      <WelcomeHero />
      <WelcomeUsps />
      <ListBooksSample bookData={props.bookData} />
    </div>
  );
}
