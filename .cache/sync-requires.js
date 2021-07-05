
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/mani/Desktop/l/demo/.cache/dev-404-page.js")),
  "component---src-pages-aboutus-js": preferDefault(require("/home/mani/Desktop/l/demo/src/pages/aboutus.js")),
  "component---src-pages-blog-list-js": preferDefault(require("/home/mani/Desktop/l/demo/src/pages/blog-list.js")),
  "component---src-pages-index-js": preferDefault(require("/home/mani/Desktop/l/demo/src/pages/index.js")),
  "component---src-pages-news-js": preferDefault(require("/home/mani/Desktop/l/demo/src/pages/news.js")),
  "component---src-template-blog-post-js": preferDefault(require("/home/mani/Desktop/l/demo/src/template/blog-post.js"))
}

