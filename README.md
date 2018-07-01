# react-film-app

[https://aaron-wilson.github.io/react-film-app/index.html](https://aaron-wilson.github.io/react-film-app/index.html)

List and save favorite movies with a cool UI.

## Uses

- React
- Node.js
- TMDB API

## Development

```bash
npm run start
```

## Build

```bash
npm run build
# edit paths in docs/index.html and docs/static/js/main.{HASH}.js to prevent 404 errors
# src=, href=, logo.svg, service-worker.js
# test build
open build/index.html

rm -rf docs
mv build docs
git add
git commit
git push
```

```js
// module.exports = __webpack_require__.p + "static/media/logo.5d5d9eef.svg";
module.exports = "static/media/logo.5d5d9eef.svg";
```
