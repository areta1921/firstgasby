import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";

function BlogPost(data) {
  console.log(data);
  return (
    <Layout pageTitle={data.m}>
      <h1>first blog from ab</h1>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date
        title
      }
      body
    }
  }
`;

export default BlogPost;
