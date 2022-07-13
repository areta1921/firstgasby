import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

function HomePage() {
  return (
    <Layout pageHeading="home" pageTitle="home">
      <p>This is children test</p>
      <StaticImage src="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg" />
    </Layout>
  );
}
 
export default HomePage;
