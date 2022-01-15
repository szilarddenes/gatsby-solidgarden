const path = require('path')

exports.createPages = ({
  actions,
}) => {

  actions.createPage({
    path: '/dsg',
    component: path.resolve('src/templates/dsg.tsx'),
    defer: true,
  })
}
