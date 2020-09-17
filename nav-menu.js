import ShadowElement, {html, template, define} from '@cfware/shadow-element';
import './nav-section.js';
import './nav-item.js';

class NavMenu extends ShadowElement {
	update() {
		const {pathname} = window.location;
		const items = [...this.querySelectorAll('nav-item')];
		const matches = items
			.filter(item => pathname.startsWith(item.pathname))
			.sort((a, b) => b.pathname.length - a.pathname.length);

		for (const item of items) {
			item.active = item === matches[0];
		}

		const sections = [...this.querySelectorAll('nav-section:not([hidden])')];
		if (sections.length === 0) {
			return;
		}

		const activeSections = sections.filter(section => {
			if (!section.active) {
				section.active = section.querySelectorAll('nav-item[active]:not([hidden])').length !== 0;
			}

			return section.active;
		});

		if (matches.length === 0 || activeSections.length === 0) {
			sections[0].active = true;
		}
	}

	get [template]() {
		return html`
			<style>
				:host {
					width: 15rem;
					font-weight: 400;
					user-select: none;
				}
			</style>
			<slot />
		`;
	}
}

NavMenu[define]('nav-menu');
