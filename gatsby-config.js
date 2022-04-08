/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const siteUrl = process.env.URL || `https://www.sayyedabrarakhtar.com.np`
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Sayyed Abrar Akhtar - Software developer`,
    description: `I am Sayyed Abrar Akhtar a software developer. I specialize in Web and Android application development. I have 4 years experience of Shopify development.`,
    author: `Sayyed Abrar Akhtar`,
    twitterUsername: `@SayyedAbrarAkh1`,
    image: `/sayyed-img.png`,
    keywords: [
      "sayyed abrar akhtar",
      "software engineer",
      "sayyed-portfolio",
      "portfolio",
      "freelance",
      "shopify developer",
      "web developer",
      "full stack developer",
      "mern developer",
      "android developer",
      "software developer",
      "web designer",
      "ui/ux designer",
      "portfolio website",
      "www.sayyedabrarakhtar.com.np",
      "sayyed",
      "abrar",
      "sayyed akhtar",
    ],
    siteUrl: `https://www.sayyedabrarakhtar.com.np`,
  },
  flags: {
    FAST_DEV: true,
    DEV_SSR: true,
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PARALLEL_SOURCING: true,
    FUNCTIONS: true,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://myportfolio-strapi-headless.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`experiences`, `projects`, `blogs`, `awards`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Reggae One",
              variants: ["400", "500", "700"],
            },
            {
              family: "Roboto",
              variants: ["400", "500", "700"],
            },
            {
              family: "Open Sans",
              variants: ["400", "500", "700"],
            },
          ],
        },
      },
    },
  ],
}
