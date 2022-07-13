import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

function HomePage() {
  return (
    <Layout pageHeading="home" pageTitle="home">
      <p>This is children test</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="	https://images.unsplash.com/photo-1517849845537-4d…lfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
      />
    </Layout>
  );
}

export default HomePage;
