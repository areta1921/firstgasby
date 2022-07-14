import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

function Blog({ data }) {
  console.log(data);
  return (
    <div>
      <Layout pageTitle="Blog">
        {data.allMdx.nodes.map((node) => {
          return (
            <article key={node.id}>
              <h2>{node.frontmatter.title}</h2>
              <p>{node.frontmatter.date}</p>
              <MCDRE{node.body}
            </article>
          );
        })}
      </Layout>
    </div>
  );
}

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          date(formatString: "dddd, MMMM Do YYYY")
          title
        }
        id
        body
      }
    }
  }
`;

export default Blog;
