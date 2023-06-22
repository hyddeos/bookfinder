import React, { useState, useEffect } from "react";
import WelcomeHero from "./WelcomeHero";
import WelcomeUsps from "./WelcomeUsps";

export default function WelcomePage() {
  return (
    <div className="block m-auto my-12">
      <WelcomeHero />
      <WelcomeUsps />
    </div>
  );
}
