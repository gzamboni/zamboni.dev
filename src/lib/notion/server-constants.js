// use commonjs so it can be required without transpiling
const path = require('path')

const normalizeId = id => {
  if (!id) return id
  if (id.length === 36) return id
  if (id.length !== 32) {
    throw new Error(
      `Invalid blog-index-id: ${id} should be 32 characters long. Info here https://github.com/ijjk/notion-blog#getting-blog-index-and-token`
    )
  }
  return `${id.substr(0, 8)}-${id.substr(8, 4)}-${id.substr(12, 4)}-${id.substr(
    16,
    4
  )}-${id.substr(20)}`
}

// const NOTION_TOKEN = process.env.NOTION_TOKEN
const NOTION_TOKEN =
  'df82cc2e5df3d6ed3d233dfcbed3c7d77e4f56f8300452720517bebdacd32c4a77b45c1393b6d889e6e8b4ac98a486f3c75cd44b1f953ace46c6190e77b0a585ecd4122077b324395307a603fadf'
const BLOG_INDEX_ID = normalizeId(process.env.BLOG_INDEX_ID)
const API_ENDPOINT = 'https://www.notion.so/api/v3'
const BLOG_INDEX_CACHE = path.resolve('.blog_index_data')

module.exports = {
  NOTION_TOKEN,
  BLOG_INDEX_ID,
  API_ENDPOINT,
  BLOG_INDEX_CACHE,
}
