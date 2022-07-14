module.exports = {
  siteMetadata: {
    title: `Abshosite`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog` ,
      },
    },
    "gatsby-plugin-mdx",
  ],
};
