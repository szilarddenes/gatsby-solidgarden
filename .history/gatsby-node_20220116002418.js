const path = require('path')
const {createFilePath} = require(`gatsby-source-filesystem`)

exports.createPages = ({
  actions,
}) => {

  actions.createPage({
    path: '/dsg',
    component: path.resolve('src/templates/dsg.tsx'),
    defer: true,
  })
}
