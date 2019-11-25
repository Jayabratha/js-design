import { LitElement, customElement, property, html, css, query } from 'lit-element';
import { baseStyles } from '@jsdesign/jsd-base';

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
    @property({ type: Boolean }) fullWidth = false;
    @property({ type: Boolean, reflect: true }) required = false;
    @property({ type: Boolean, reflect: true }) disabled = false;


    static get styles() {
        return [
            baseStyles,
            css`
            .text-input {
                margin: 20px 0px;
            }
            .text-input label {
                display: block;
                font-size: 0.8rem;
                padding: 0.6rem;
                text-transform: uppercase;
                letter-spacing: 0.2rem;
                color: var(--color-label);
            }
            .text-input input {
                outline: none;
                border: none;
                width: 100%;
                height: 3.3rem;
                border-radius: 0.5rem;
                font-size: 1rem;
                padding: 1rem;
                border: 1px solid var(--color-input);
                background-color: var(--color-secondary);
                color: var(--color-black);
                transition: all 0.4s;
                box-sizing: border-box;
            }
            .text-input input:hover {
                border: 1px solid var(--color-input);
                background-color: var(--color-white);
            }
            .text-input input:focus,
            .text-input input:active {
                border: 1px solid var(--color-primary);
                background-color: var(--color-white);
            }
            .text-input input.error{
                color: var(--color-error, true);
                border: 1px solid var(--color-error);
                background-color: var(--color-error-background);
            }
            .text-input input::placeholder {
                color: var(--color-label);
            }
            .text-input .error-message{
                display: block;
                font-size: 0.8rem;
                padding: 0.6rem 1rem;
                color: var(--color-error);
            }
            `
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
                <label for="${this.id}">${this.label}</label>
                <input id="${this.id}"      
                       name="${this.name}" 
                       type="${this.type}" 
                       .value="${this.value}"
                       ?required="${this.required}"
                       ?disabled="${this.disabled}"
                       class="${this.errorMsg ? 'error' : ''}" 
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