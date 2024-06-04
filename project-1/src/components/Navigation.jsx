import React from "react";

function Navigation() {
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <img src="./images/brand_logo.png" alt="" />
        </div>
        <ul>
          <li href="#">Home</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
          <li href="#">Services</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
}

export default Navigation;
