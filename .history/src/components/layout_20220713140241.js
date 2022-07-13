import React, { Children } from "react";
import { Link } from "gatsby";
import {container} from './layout.module.css'
console.log('container:', container);

function Layout({ pageTitle, pageHeading,children }) {
  return (
    <main className={container}>
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
      <h1 className="">{pageHeading}</h1>
      {children}
    </main>
  );
}

export default Layout;
