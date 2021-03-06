import React, { Children } from "react";
import { Link } from "gatsby";
import {container} from

function Layout({ pageTitle, pageHeading,children }) {
  return (
    <main>
      <title>{pageTitle}</title>
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
      <h1>{pageHeading}</h1>
      {children}
    </main>
  );
}

export default Layout;
