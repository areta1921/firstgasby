import React, { Children } from "react";
import { Link } from "gatsby";
import {container,heading,navLinks,navLinkItem,navLinkText} from './layout.module.css'
console.log('container:', container);

function Layout({ pageTitle, pageHeading,children }) {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about">About</Link className ={navLinkText}>
          </li>
        </ul>
      </nav>
      <h1 className={heading}>{pageHeading}</h1>
      {children}
    </main>
  );
}

export default Layout;
