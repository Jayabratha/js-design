import { LitElement, customElement, property, html } from 'lit-element';
import { baseStyles, findParentForm, ThemeType } from '@jsdesign/jsd-base';
import { style } from './button-css';

export type ButtonStyle = 'primary' | 'secondary' | 'tertiary';
export type ButtonType = 'button' | 'submit' | 'reset';

@customElement('jsd-button')
export class Button extends LitElement {

    @property({ type: String }) label = '';
    @property({ type: String, attribute: 'btn-style' }) btnStyle: ButtonStyle = 'primary';
    @property({ type: String }) type: ButtonType = 'button';
    @property({ type: Boolean }) disabled = false;
    @property({ type: Boolean }) icon = false;
    @property({ type: Boolean, attribute: 'trailing-icon' }) trailingIcon = false;
    @property({ type: Boolean, attribute: 'full-width' }) fullWidth = false;
    @property({ type: Boolean, attribute: 'icon-width' }) iconWidth = false;
    @property({ type: String }) theme: ThemeType = 'light';

    static get styles() {
        return [
            baseStyles,
            style
        ]
    }

    handleEvent() {
        if (this.type === 'submit' || this.type === 'reset') {
            const form: any = findParentForm(this);
            if (form) {
                form.dispatchEvent(new Event(this.type));
                if (this.type === 'reset') {
                    form.reset();
                }
            }
        }
    }

    render() {
        return html`
                <button role='button' aria-label='${this.label}' type='${this.type}' class='${this.btnStyle} ${this.theme} ${this.fullWidth ? 'full-width' : ''} ${this.iconWidth ? 'icon-width' : ''}'
                    ?disabled="${this.disabled}"
                    @click="${this.handleEvent}">
                    ${ this.icon ? html`<slot name='icon'></slot>` : ''}
                    <span class='text'>${this.label}</span>
                    ${ this.trailingIcon ? html`<slot name='trailingIcon'></slot> ` : ''}
                </button>
                `
    }
}