import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

function Blog({data}) {
    console.log(data);
  return (
    <div>
      <Layout>
        <p>hi</p>
      </Layout>
    </div>
  );
}
export const q = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }    
    }
  }
`;

export default Blog;
