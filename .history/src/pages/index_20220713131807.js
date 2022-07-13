import React from "react";
import { Link } from "gatsby";


function HomePage() {
  return (
    <main>
      <Link to="/about">about</Link>
      <title>Home Page</title>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  );
}

export default HomePage;
