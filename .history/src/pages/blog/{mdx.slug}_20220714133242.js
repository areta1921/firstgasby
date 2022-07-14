import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";

function BlogPost(props) {
  console.log(props);
  return (
    <Layout pageTitle="Da Blogs">
      <h1>first blog from ab</h1>
    </Layout>
  );
}

const  query = graphql`
query ($slug: String) {
  mdx(slug: {eq: $slug}) {
    frontmatter {
      date
      title
    }
    body
  }
}
`

export default BlogPost;
