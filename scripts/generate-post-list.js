const path = require('path')
const fs = require('fs-extra')

const list = fs.readdirSync(path.resolve(__dirname, '../posts'))

const posts = list
  .filter(item => item.endsWith('.md'))
  .map(item => item.replace('.md', ''))

fs.writeJson('./posts/posts.json', posts, {
  spaces: 2,
})
