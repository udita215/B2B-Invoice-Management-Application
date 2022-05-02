import React from "react";

export default function Footer() {
  return (
    <footer>
      <div
        style={{
          display: "flex",
          color: "white",
          alignItems: "center",
          justifyContent: "center",
          height:"1rem"
        }}
      >
        <a
          href="https://www.highradius.com/privacy-policy/"
          style={{ color: "blue" }}
        >
         PRIVACY POLICY
        </a>
        <p>| © 2022 Highradius.All Rights Reserved</p>
      </div>
    </footer>
  );
}
