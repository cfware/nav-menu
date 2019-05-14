import {ShadowElement, html} from '@cfware/shadow-element';

class NavSection extends ShadowElement {
	constructor() {
		super();

		this.addEventListener('hiddenchange', () => this._updateHidden(), true);
	}

	_updateHidden() {
		this.hidden = !this.querySelector('*:not([hidden])');
	}

	get template() {
		return html`
			<style>
				:host {
					background: #00000005;
					white-space: nowrap;
				}

				.title {
					background-color: #ddd;
					color: #000;
					cursor: pointer;
					margin: 0;
					padding: .75rem 1rem;
				}

				:host(:not(:first-child)) .title {
					border-top: 1px solid #0001;
				}

				.title::before {
					display: inline-block;
					font-family: var(--expander-font-family);
					content: '';
					width: 1.25rem;
					text-align: center;
					margin-right: 0.5rem;
				}

				:host([active]) .title::before {
					content: '';
				}

				:host(:not([active])) ::slotted(nav-item) {
					display: none;
				}
			</style>
			<div class="title" onclick=${() => this.toggleAttribute('active')}>${this.title}</div>
			<slot onslotchange=${() => this._updateHidden()} />
		`;
	}
}

NavSection.define('nav-section', {
	stringProps: {
		title: ''
	},
	booleanProps: ['active']
});
