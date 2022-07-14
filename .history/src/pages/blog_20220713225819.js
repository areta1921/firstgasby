import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

function Blog() {
  return (
    <div>
      <Layout>
        <p>hi</p>
      </Layout>
    </div>
  );
}
export const data = graphql`
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;
export default Blog;
