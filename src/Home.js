import React from "react";
import "./Home.css"
import LoginRegister from "./LoginRegister";


function Home() {
  return (
    <div id="hero" className="hero">

      <div className="hero_text" id="hero_text">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons & up to 70% off!</p>
        <button className="hero_button">Shop Now</button>
      </div>
        <LoginRegister/>
    </div>
  );
}

export default Home;
