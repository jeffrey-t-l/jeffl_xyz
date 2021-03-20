const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jeffl/GatsbyJS/websites/jeffl_xyz/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jeffl/GatsbyJS/websites/jeffl_xyz/src/pages/404.js"))),
  "component---src-pages-books-js": hot(preferDefault(require("/Users/jeffl/GatsbyJS/websites/jeffl_xyz/src/pages/books.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jeffl/GatsbyJS/websites/jeffl_xyz/src/pages/index.js"))),
  "component---src-pages-invites-js": hot(preferDefault(require("/Users/jeffl/GatsbyJS/websites/jeffl_xyz/src/pages/invites.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("/Users/jeffl/GatsbyJS/websites/jeffl_xyz/src/pages/resume.js"))),
  "component---src-pages-zzcontact-js": hot(preferDefault(require("/Users/jeffl/GatsbyJS/websites/jeffl_xyz/src/pages/zzcontact.js"))),
  "component---src-pages-zzzabout-js": hot(preferDefault(require("/Users/jeffl/GatsbyJS/websites/jeffl_xyz/src/pages/zzzabout.js")))
}

