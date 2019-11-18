import { LitElement, customElement, property, html, css } from 'lit-element';
import { baseStyles } from 'jsd-base';

@customElement('jsd-button')
export class Button extends LitElement {

    @property({ type: String }) label = 'Button';
    @property({ type: Boolean }) primary = false;
    @property({ type: Boolean }) secondary = false;
    @property({ type: Boolean }) tertiary = false;
    @property({ type: Boolean }) iconPrefix = false;
    @property({ type: Boolean }) iconSuffix = false;

    static get styles() {
        return [
            baseStyles,
            css`
            button {
                position: relative;
                border: none;
                width: auto;
                border-radius: var(--border-radius);
                padding: 0 3em;
                margin: 1.2rem 0rem;
                font-size: 1em;
                transition: all 0.4s;
                height: 3.3rem;
                color: var(--color-white);
                box-shadow: inset 0px 0px 0px 0px var(--color-primary);
                background-color: var(--color-primary);
                cursor: pointer;
                outline-style: solid;
                outline-width: 1px;
                outline-color: transparent;
            }
            button:hover {
                background-color: var(--color-primary-dark);
                box-shadow: inset 0px 0px 0px 4px var(--color-primary);
            }
            
            button:active {
                box-shadow: inset 0px 0px 20px 10px var(--color-primary);
            }
            button.full-width {
                width: 100%;
                padding: 0;
            }
            button.half-width {
                width: 49%;
                padding: 0;
            }
            button.secondary {
                color: var(--color-label);
                background-color: var(--color-secondary);
                box-shadow: inset 0px 0px 0px 0px var(--color-secondary-dark);
            }
            button.secondary:hover {
                color: var(--color-primary);
                box-shadow: inset 0px 0px 0px 4px var(--color-secondary-dark);
            }
            button.secondary:active {
                box-shadow: inset 0px 0px 20px 10px var(--color-secondary-dark);
            }
        
            button.tertiary {
                padding: 0;
                background: transparent;
                color: var(--color-primary);
                border: none;
                box-shadow: none;
                border-bottom: 1px solid transparent;
                border-radius: 0;
                height: 3.3rem;
            }
            button.tertiary::after {
                content: '';
                background: var(--color-primary);
                position: absolute;
                left: 0;
                height: 1px;
                bottom: 0;
                width: 0%;
                transition: width 0.3s;
            }
            button.tertiary:hover::after {
                width: 100%;
            }
            
            button.btn-icon {
                display: inline-block;
                vertical-align: middle;
                height: 1.8rem;
                padding-right: 0.5rem;
            }
            
            ::slotted(.prefix) {
                margin: 0 5px;
            }
        `]
    }

    render() {
        let type = 'primary';

        if (this.secondary) {
            type = 'secondary';
        } else if (this.tertiary) {
            type = 'tertiary';
        }

        return html`
                <button class='${type}'>
                    ${ this.iconPrefix ? html`<slot name='iconPrefix'></slot>&nbsp;` : ''}
                    <span class='label'>${this.label}</span>
                    ${ this.iconSuffix ? html`&nbsp;<slot name='iconSuffix'></slot> ` : ''}
                </button>
                `
    }
}