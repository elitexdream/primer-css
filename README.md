# Primer CSS

[![NPM version](http://img.shields.io/npm/v/primer-css.svg)](https://www.npmjs.org/package/primer-css)
[![Build Status](https://travis-ci.org/primer/primer-css.svg?branch=master)](https://travis-ci.org/primer/primer-css)

> Primer is the CSS framework that powers GitHub's front-end design. It's purposefully limited to common components to provide our developers with the most flexibility, and to keep GitHub uniquely *GitHubby*. It's built with SCSS and available via NPM, so it's easy to include all or part of it within your own project.

## Packages

The Primer repo is managed as a monorepo that is composed of many npm packages.

### Core Packages

| Package | Version | Status |
|---|---|---|
| [primer-core](/packages/primer-core) | [![npm](http://img.shields.io/npm/v/primer-core.svg)](https://www.npmjs.com/package/primer-core) |  [![Build Status](https://travis-ci.org/primer/primer-core.svg?branch=master)](https://travis-ci.org/primer/primer-core) |
| [primer-product](/packages/primer-product) |  [![npm](http://img.shields.io/npm/v/primer-product.svg)](https://www.npmjs.com/package/primer-product) | [![Build Status](https://travis-ci.org/primer/primer-product.svg?branch=master)](https://travis-ci.org/primer/primer-product) |
| [primer-marketing](/packages/primer-marketing) | [![npm](http://img.shields.io/npm/v/primer-marketing.svg)](https://www.npmjs.com/package/primer-marketing) | [![Build Status](https://travis-ci.org/primer/primer-marketing.svg?branch=master)](https://travis-ci.org/primer/primer-marketing) |

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `primer-css` with this command.

```
$ npm install --save primer-css
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```scss
@import "primer-css/index.scss";
```

You can also import specific portions of the module by importing those partials from the `/lib/` folder. _Make sure you import any requirements along with the modules._

## Build

For a compiled **css** version of this module, a npm script is included that will output a css version to `build/build.css` The built css file is also included in the npm package.

```
$ npm run build
```

## Documentation

You can read more about primer in the [docs][docs].

## License

[MIT](./LICENSE) &copy; [GitHub](https://github.com/)

[primer]: https://github.com/primer/primer
[docs]: http://primercss.io/
[npm]: https://www.npmjs.com/
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[sass]: http://sass-lang.com/
