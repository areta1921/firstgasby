import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import gatsby

function BlogPost({ data }) {
  console.log(data);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date
        title
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

export default BlogPost;
