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
rm -rf docs
mv build docs
# edits paths in docs/index.html and docs/static/js/main.{HASH}.js to prevent 404 errors
git add
git commit
git push
```
