import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

function HomePage() {
  return (
    <Layout pageHeading="home" pageTitle="home">
      <p>This is children test</p>
      <StaticImage src="retriever-1210559__480.jpg"
      alt="oops" />
    </Layout>
  );
}
 
export default HomePage;
