import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

function Blog({ data }) {
  console.log(data);
  return (
    <div>
      <Layout pageTitle="Blog">
        <ul>
          {data.allMdx.nodes.map((node) => {
            return <li key={node.id}>{node.frontmatter.title}
           {node.frontmatter.date} </li>;
          })}
        </ul>
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
