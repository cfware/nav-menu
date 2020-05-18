# @cfware/nav-menu [![NPM Version][npm-image]][npm-url]

Navigation menu element

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
