import { LitElement, customElement, property, html } from 'lit-element';
import { baseStyles, findParentForm, ThemeType } from '@jsdesign/jsd-base';
import { style } from './button-css';

export type ButtonStyle = 'primary' | 'secondary' | 'tertiary';
export type ButtonType = 'button' | 'submit' | 'reset';

@customElement('jsd-button')
export class Button extends LitElement {

    @property({ type: String }) label = 'Button';
    @property({ type: String, attribute: 'btn-style' }) btnStyle: ButtonStyle = 'primary';
    @property({ type: String, attribute: 'icon' }) icon = 'false';
    @property({ type: String, attribute: 'trailing-icon' }) trailingIcon = 'false';
    @property({ type: String, attribute: 'full-width' }) fullWidth = 'false';
    @property({ type: String }) disabled = 'false';
    @property({ type: String }) type: ButtonType = 'button';
    @property({ type: String}) theme: ThemeType = 'light';

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
                <button role='button' aria-label='${this.label}' type='${this.type}' class='${this.btnStyle} ${this.theme} ${this.fullWidth == 'true' ? 'full-width' : ''}'
                    ?disabled="${this.disabled === 'true'}"
                    @click="${this.handleEvent}">
                    ${ this.icon === 'true' ? html`<slot name='icon'></slot>&nbsp;` : ''}
                    <span>${this.label}</span>
                    ${ this.trailingIcon === 'true' ? html`&nbsp;<slot name='trailingIcon'></slot> ` : ''}
                </button>
                `
    }
}