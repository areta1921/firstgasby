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
export const query = graphql`
  {
    query
    MyQuery {
      allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;
export default Blog;
