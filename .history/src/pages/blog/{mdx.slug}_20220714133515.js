import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";

function BlogPost(data) {
  console.log(data);
  return (
    <Layout pageTitle="Da Blogs">
      <h1>first blog from ab</h1>
    </Layout>
  );
}

export const query = graphql`
query MyQuer($id: String) {
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
