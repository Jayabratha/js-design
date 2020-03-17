import { LitElement, customElement, property, html, query } from 'lit-element';
import { baseStyles, handleFormSubmit, ThemeType } from '@jsdesign/jsd-base';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { style } from './input-css';

export type TextFieldType = 'text' | 'search' | 'tel' | 'url' | 'email' | 'password' |
    'date' | 'month' | 'week' | 'time' | 'datetime-local' | 'number' | 'color';

@customElement('jsd-input')
export class Input extends LitElement {

    @query('input') protected inputElement!: HTMLInputElement;

    @property({ type: String }) id = '';
    @property({ type: String }) name = '';
    @property({ type: String }) label = '';
    @property({ type: String }) type: TextFieldType = 'text';
    @property({ type: String, reflect: true }) value = '';
    @property({ type: String, reflect: true }) required = 'false';
    @property({ type: String, reflect: true }) disabled = 'false';
    @property({ type: String }) theme: ThemeType = 'light';
    @property({ type: String }) placeholder = 'Enter value';
    @property({ type: Boolean }) autofocus = false;
    @property({ type: String }) pattern = '';
    @property({ type: Number }) min: number | string = '';
    @property({ type: Number }) max: number | string = '';
    @property({ type: Number, attribute: 'maxlength' }) maxLength = -1;
    @property({ type: String, attribute: 'error-msg' }) errorMsg = '';
    @property({ type: String, attribute: 'help-msg' }) helpMsg = '';
    @property({ type: String, attribute: 'full-width' }) fullWidth = 'false';
    @property({ type: String, attribute: 'icon' }) icon = 'false';


    static get styles() {
        return [
            baseStyles,
            style
        ]
    }

    handleInputChange() {
        // Moving the property read on another task as we might have a text mask, which might update the value on change.
        setTimeout(() => {
            this.value = this.inputElement.value;
        }, 0); 
    }

    handleValueChange() {
        let newEvent = new Event('change', {
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(newEvent);
    }

    render() {
        return html`
            <div class='text-input ${this.theme}' >
                ${this.label ? html`<label class='label' for="${this.id}">${this.label}</label>` : ''}
                ${ this.icon === 'true' ? html`<slot name='icon' class='icon'></slot>` : ''}
                <input id="${this.id}"      
                        name="${this.name}" 
                        type="${this.type}" 
                        .value="${this.value}"
                        ?required="${this.required === 'true'}"
                        ?disabled="${this.disabled === 'true'}"
                        ?autofocus="${this.autofocus}"
                        maxlength="${ifDefined(this.maxLength === -1 ? undefined : this.maxLength)}"
                        pattern="${ifDefined(this.pattern ? this.pattern : undefined)}"
                        min="${ifDefined(this.min === '' ? undefined : this.min as number)}"
                        max="${ifDefined(this.max === '' ? undefined : this.max as number)}"
                        class="wrapper-box ${this.errorMsg ? 'error' : ''} ${this.fullWidth === 'true' ? 'full-width' : ''} ${this.icon === 'true' ? 'with-icon' : ''}" 
                        placeholder="${this.placeholder}" 
                        @input="${this.handleInputChange}"
                        @change="${this.handleValueChange}"
                        @keypress="${(e) => handleFormSubmit(e, this)}"
                        autocomplete="off" />
                ${this.errorMsg ? html`<div class="error-message">${this.errorMsg}</div>` : ''}
                ${this.helpMsg && !this.errorMsg ? html`<div class="help-message">${this.helpMsg}</div>` : ''}
            </div>
        `;
    }
}