import React from "react";
import Layout from "../../components/layout";
import { graphql, Link } from "gatsby";

function Blog({ data }) {
  console.log(data);
  return (
    <div>
      <Layout pageTitle="Blog">
        {data.allMdx.nodes.map((node) => {
          return (
            <article key={node.id}>
              <Link to>
                <h2>{node.frontmatter.title}</h2>
              </Link>
              <p>{node.frontmatter.date}</p>
            </article>
          );
        })}
      </Layout>
    </div>
  );
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___title, order: ASC }) {
      nodes {
        frontmatter {
          date(formatString: "dddd, MMMM Do YYYY")
          title
        }
        id
      }
    }
  }
`;

export default Blog;
