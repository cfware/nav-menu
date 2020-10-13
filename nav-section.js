import ShadowElement, {html, template, define, stringProperties, booleanProperties} from '@cfware/shadow-element';

import '@cfware-app/icon';

class NavSection extends ShadowElement {
	constructor() {
		super();

		this.addEventListener('hiddenchange', () => this._updateHidden(), true);
	}

	_updateHidden() {
		this.hidden = !this.querySelector('*:not([hidden])');
	}

	get [template]() {
		const icon = this.active ? '\uF0D7' : '\uF0DA';
		return html`
			<style>
				:host {
					background: #00000005;
					white-space: nowrap;
				}

				[t] {
					display: grid;
					grid-template-columns: auto 1fr;
					background-color: #ddd;
					color: #000;
					cursor: pointer;
					margin: 0;
					padding: .75rem 1rem;
				}

				:host(:not(:first-child)) [t] {
					border-top: 1px solid #0001;
				}

				cfware-icon {
					display: inline-block;
					width: 1.25rem;
					text-align: center;
					margin-right: 0.5rem;
					cursor: unset;
				}

				:host(:not([active])) ::slotted(nav-item) {
					display: none;
				}
			</style>
			<div t onclick=${() => this.toggleAttribute('active')}><cfware-icon icon=${icon} />${this.title}</div>
			<slot onslotchange=${() => this._updateHidden()} />
		`;
	}
}

NavSection[define]('nav-section', {
	[stringProperties]: {
		title: ''
	},
	[booleanProperties]: ['active']
});
