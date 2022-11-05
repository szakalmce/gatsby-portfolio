const path = require(`path`)
var slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectPath = path.resolve("src/templates/project-template.js")

  const result = await graphql(`
    query {
      allContentfulPortfolioProjects {
        nodes {
          title
          description {
            description
          }
          featured
          github
          image {
            gatsbyImageData
          }
          demo
        }
      }
    }
  `)

  result.data.allContentfulPortfolioProjects.nodes.forEach(item => {
    const slug = slugify(item.title).toLowerCase()
    createPage({
      path: `projects/${slug}`,
      component: projectPath,
      context: {
        title: item.title,
      },
    })
  })
}
