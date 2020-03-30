# @cfware/nav-menu

![Tests][tests-status]
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


[npm-image]: https://img.shields.io/npm/v/@cfware/nav-menu.svg
[npm-url]: https://npmjs.org/package/@cfware/nav-menu
[tests-status]: https://github.com/cfware/nav-menu/workflows/Tests/badge.svg
[gk-image]: https://badges.greenkeeper.io/cfware/nav-menu.svg
[downloads-image]: https://img.shields.io/npm/dm/@cfware/nav-menu.svg
[downloads-url]: https://npmjs.org/package/@cfware/nav-menu
[license-image]: https://img.shields.io/npm/l/@cfware/nav-menu.svg
