import React from "react";
import { Link } from "gatsby";

function Layout({pageTitle, pageHeading}) {
  return (
    <main>
      <title>{pa}</title>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <h1>welcome to layout</h1>
    </main>
  );
}

export default Layout;