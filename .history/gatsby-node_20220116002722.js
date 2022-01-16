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

exports.createPages = ({
  actions,
}) => {

  actions.createPage({
    path: '/dsg',
    component: path.resolve('src/templates/dsg.tsx'),
    defer: true,
  })
}
