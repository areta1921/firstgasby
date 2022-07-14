import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

function BlogPost({data}) {
  console.log(data);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
     <p>{data.mdx.frontmatter.date}</p>
 <
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
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
