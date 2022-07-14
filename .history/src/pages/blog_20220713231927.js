import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

function Blog({data}) {
    console.log(data);
  return (
    <div>
      <Layout pageTitle="Blog">
       ul
      </Layout>
    </div>
  );
}

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }    
    }
  }
`;

export default Blog;
