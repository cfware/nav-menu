# @cfware/nav-menu

[![Travis CI][travis-image]][travis-url]
[![Greenkeeper badge][gk-image]](https://greenkeeper.io/)
[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![MIT][license-image]](LICENSE)

Navigation menu element


### Install @cfware/nav-menu

```sh
npm i @cfware/nav-menu
```


## Usage

Import to your application:
```js
import '@cfware/nav-menu';
```

Use to create a navigation element:
```html
<style>
	nav-section {
		--expander-font-family: 'Font Family to use when rendering  and ';
	}
</style>
<nav-menu>
	<nav-section title="General">
		<nav-item title="Welcome"></nav-item>
		<nav-item href=software title="Software"></nav-item>
	</nav-section>
</nav-menu>
```


## Running tests

Testing is provided by ava and xo.

```sh
npm install
npm test
```

[npm-image]: https://img.shields.io/npm/v/@cfware/nav-menu.svg
[npm-url]: https://npmjs.org/package/@cfware/nav-menu
[travis-image]: https://travis-ci.org/cfware/nav-menu.svg?branch=master
[travis-url]: https://travis-ci.org/cfware/nav-menu
[gk-image]: https://badges.greenkeeper.io/cfware/nav-menu.svg
[downloads-image]: https://img.shields.io/npm/dm/@cfware/nav-menu.svg
[downloads-url]: https://npmjs.org/package/@cfware/nav-menu
[license-image]: https://img.shields.io/npm/l/@cfware/nav-menu.svg
