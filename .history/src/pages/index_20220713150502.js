import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

function HomePage() {
  return (
    <Layout pageHeading="home" pageTitle="home">
      <p>This is children test</p>
    </Layout>
  );
}

export default HomePage;
