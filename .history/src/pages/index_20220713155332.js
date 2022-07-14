import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

function HomePage() {
  return (
    <Layout pageHeading="home" pageTitle="home">
      <p>This is children test</p>
      <StaticImage
        src="https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg"
        alt="oops"
        loading="eager"
        placeholder="b"
        layout="fixed"
      />
      <StaticImage src="../images/icon.png" alt="oops"  placeholder="tracedSVG"     layout="fullWidth"/>
    </Layout>
  );
}

export default HomePage;
