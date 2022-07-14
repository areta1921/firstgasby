import React, { children } from "react";
import { Link,useStaticQuery,graphql} from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  sitetitle,
} from "./layout.module.css";

function Layout({ pageTitle, pageHeading, children }) {
const data = useStaticQuery(graphql`
query MyQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`)
console.log(data);
  return (
    <main className={container}>
      <title>{pageTitle} || {data.site.siteMetadata.title}</title>
      <p className={siteTitle}>{data.site.siteMetadata.title}</p>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/contact" className={navLinkText}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={heading}>{pageHeading}</h1>
      {children}
    </main>
  );
}

export default Layout;
