const path = require('path')
const {createFilePath} = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({node, getNode, basePath: `pages`})

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}


exports.createPages = async({
  actions,
  graphql,
}) => {

  actions.createPage({
    path: '/dsg',
    component: path.resolve('src/templates/dsg.tsx'),
    defer: true,
  })
}
