const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  const result = await graphql(`
    query queryArticles {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  //   console.log(result.data.allMdx.nodes)
  result.data.allMdx.nodes.forEach(post => {
    createPage({
      path: `blog/${post.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}
