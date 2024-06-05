import React from "react";
import Logo from "./Logo"
import UnorderedList from "./UnorderedList"
function Navigation() {
  return (
    <div className="container">
      <nav>
        <Logo />
        <UnorderedList />
        <button>Login</button>
      </nav>
    </div>
  );
}

export default Navigation;
