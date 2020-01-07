import { LitElement, customElement, property, html, query } from 'lit-element';
import { baseStyles } from '@jsdesign/jsd-base';
import { style } from './jsd-input-css';

export type TextFieldType = 'text' | 'search' | 'tel' | 'url' | 'email' | 'password' |
    'date' | 'month' | 'week' | 'time' | 'datetime-local' | 'number' | 'color';

@customElement('jsd-input')
export class Input extends LitElement {

    @query('input') protected inputElement!: HTMLInputElement;

    @property({ type: String }) id = '';
    @property({ type: String }) name = '';
    @property({ type: String }) formId = '';
    @property({ type: String }) type: TextFieldType = 'text';
    @property({ type: String, reflect: true }) value = '';
    @property({ type: String }) label = 'Input';
    @property({ type: String }) placeholder = 'Enter value';
    @property({ type: String }) errorMsg = '';
    @property({ type: Boolean }) iconPrefix = false;
    @property({ type: Boolean }) iconSuffix = false;
    @property({ type: Boolean, attribute: 'full-width' }) fullWidth = false;
    @property({ type: Boolean, reflect: true }) required = false;
    @property({ type: Boolean, reflect: true }) disabled = false;


    static get styles() {
        return [
            baseStyles,
            style
        ]
    }

    handleInputChange(event) {
        console.log(event);
        this.value = this.inputElement.value;
    }

    handleValueChange(event) {
        console.log(event);
        let newEvent = new Event('change', {
            bubbles: true,
            composed: true
        });
        console.log(newEvent);
        this.dispatchEvent(newEvent);
    }

    handleFormSubmit(event) {
        let key = event.which || event.keyCode;
        if (this.formId && key === 13) {
            const form: any = document.getElementById(this.formId);
            if (form) {
                form.dispatchEvent(new Event('submit'));
            }
        }
    }

    render() {
        return html`
            <div class='text-input' >
                <label class='label' for="${this.id}">${this.label}</label>
                <input id="${this.id}"      
                       name="${this.name}" 
                       type="${this.type}" 
                       .value="${this.value}"
                       ?required="${this.required}"
                       ?disabled="${this.disabled}"
                       class="${this.errorMsg ? 'error' : ''} ${this.fullWidth ? 'full-width' : ''}" 
                       placeholder="${this.placeholder}" 
                       @input="${this.handleInputChange}"
                       @change="${this.handleValueChange}"
                       @keypress="${this.handleFormSubmit}"
                       autocomplete="off" />
                ${this.errorMsg ? html`<div class="error-message">${this.errorMsg}</div>` : ''}
            </div>
        `;
    }
}