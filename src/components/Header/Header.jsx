import React from "react";
import Image from "../Image";
import About from "../About/About";
import "./Header.css";


function Header() {
  return (
    <div className="Header">
      <Image />
<About />
{/* <Navigation/> */}
    </div>
  );
}

export default Header;