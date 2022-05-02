import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import Logo from "../Group 20399.png";
import { Box } from "@material-ui/core";
import Logo1 from "../logohighradius.png";

import "./Header.css";

export default function Header() {
  return (
    <div className="header-box">
      <div>
        <img className="img_product" src={Logo} height="30vh"></img>
      </div>

      <img className="img_hrc" src={Logo1} height="30vh" width={"200vw"}></img>
    </div>
  );
}
