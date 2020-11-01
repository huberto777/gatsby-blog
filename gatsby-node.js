const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/templates/blog-post.js")
  const imagesTemplate = path.resolve("src/pages/images.js")

  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
        totalCount
      }
    }
  `)

  const posts = result.data.allMdx.nodes
  posts.forEach(post => {
    createPage({
      path: `blog/${post.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })

  const { totalCount } = result.data.allFile
  const imagesPerPage = 6
  const numPages = Math.ceil(totalCount / imagesPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: `/images/${i + 1}`,
      component: imagesTemplate,
      context: {
        limit: imagesPerPage,
        skip: i * imagesPerPage,
        numPages,
        currentPage: i + 1,
        totalCount,
      },
    })
  })
}
