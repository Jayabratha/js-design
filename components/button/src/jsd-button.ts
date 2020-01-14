import { LitElement, customElement, property, html } from 'lit-element';
import { baseStyles } from '@jsdesign/jsd-base';
import { style } from './jsd-button-css.js';

@customElement('jsd-button')
export class Button extends LitElement {

    @property({ type: String }) label = 'Button';
    @property({ type: Boolean }) primary = false;
    @property({ type: Boolean }) secondary = false;
    @property({ type: Boolean }) tertiary = false;
    @property({ type: Boolean }) iconPrefix = false;
    @property({ type: Boolean }) iconSuffix = false;
    @property({ type: Boolean, attribute: 'full-width' }) fullWidth = false;
    @property({ type: Boolean, reflect: true }) disabled = false;
    @property({ type: String }) type = 'button';
    @property({ type: String }) formId = '';
    @property({ type: Boolean}) dark = false;

    static get styles() {
        return [
            baseStyles,
            style
        ]
    }

    handleEvent() {
        if (this.formId && (this.type === 'submit' || this.type === 'reset')) {
            const form: any = document.getElementById(this.formId);
            if (form) {
                form.dispatchEvent(new Event(this.type));
                if (this.type === 'reset') {
                    form.reset();
                }
            }
        }
    }

    render() {
        let style = 'primary';

        if (this.secondary) {
            style = 'secondary';
        } else if (this.tertiary) {
            style = 'tertiary';
        }

        return html`
                <button role='button' aria-labelledby='${this.label}' type='${this.type}' class='${style} ${this.dark ? 'dark' : ''} ${this.fullWidth ? 'full-width' : ''}'
                    ?disabled="${this.disabled}"
                    @click="${this.handleEvent}">
                    ${ this.iconPrefix ? html`<slot name='iconPrefix'></slot>&nbsp;` : ''}
                    <span>${this.label}</span>
                    ${ this.iconSuffix ? html`&nbsp;<slot name='iconSuffix'></slot> ` : ''}
                </button>
                `
    }
}