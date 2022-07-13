import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from 'gatsby-plugin-image'


function HomePage() {
  return (
    <Layout pageHeading="home" pageTitle="home" >
    <p>This is children test</p>
    <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/clifford.jpg"
      />
  </Layout>
  );
}

export default HomePage;
