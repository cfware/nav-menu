import ShadowElement, {html, template, css, adoptedStyleSheets, define, reflectBooleanProperties, reflectStringProperties} from '@cfware/shadow-element';

class NavItem extends ShadowElement {
    constructor() {
        super();

        const observer = new MutationObserver(() => this.dispatchEvent(new Event('hiddenchange')));
        observer.observe(this, {
            attributes: true,
            attributeFilter: ['hidden']
        });
    }

    get pathname() {
        return new URL(this.href, document.baseURI).pathname;
    }

    static [adoptedStyleSheets] = [
        css`
            a {
                display: block;
                position: relative;
                margin-left: .85rem;
                padding: .83rem .95rem .83rem .85rem;
                color: #000a;
                text-decoration: none;
                line-height: 1;
                border-left: .2rem solid transparent;
            }

            a:hover {
                color: #005d90;
            }

            a:focus {
                background-color: #8881;
            }

            a:active {
                background-color: #0001;
            }

            :host(:not(:first-child)) a {
                border-top: 1px solid #8882;
            }

            :host([active]) a {
                border-left-color: unset;
            }
        `
    ];

    get [template]() {
        return html`<a href=${this.href}>${this.title}</a>`;
    }
}

reflectBooleanProperties(NavItem, ['active']);
reflectStringProperties(NavItem, {title: '', href: '.'});
NavItem[define]('nav-item');
