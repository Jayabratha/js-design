import { LitElement, customElement, property, html, query } from 'lit-element';
import { baseStyles, handleFormSubmit, ThemeType } from '@jsdesign/jsd-base';
import { style } from './pin-input-css';

export type TextFieldType = 'text' | 'password' | 'number';

@customElement('jsd-pin-input')
export class PinInput extends LitElement {

    @query('input') protected inputElement!: HTMLInputElement;

    @property({ type: String }) id = '';
    @property({ type: String }) name = '';
    @property({ type: String }) label = '';
    @property({ type: String }) type: TextFieldType = 'text';
    @property({ type: String }) length = 4;
    @property({ type: String, reflect: true }) value = '';
    @property({ type: Boolean }) required = false;
    @property({ type: Boolean }) disabled = false;
    @property({ type: Boolean }) autofocus = false;
    @property({ type: String }) theme: ThemeType = 'light';
    @property({ type: String }) placeholder = 'Enter value';
    @property({ type: String, attribute: 'error-msg' }) errorMsg = '';
    @property({ type: String, attribute: 'help-msg' }) helpMsg = '';
    @property({ type: Boolean, attribute: 'full-width' }) fullWidth = false;


    static get styles() {
        return [
            baseStyles,
            style
        ]
    }

    handleInputChange(i) {
        const pinElem: HTMLInputElement = <HTMLInputElement>this.shadowRoot?.getElementById(this.id + '-' + i);
        const value = pinElem.value;
        this.value = this.value.substr(0, i) + value + this.value.substr(i + 1);
        const nextIndex = i + 1;
        if (nextIndex < this.length && this.value) {
            const nextElem: HTMLInputElement = <HTMLInputElement>this.shadowRoot?.getElementById(this.id + '-' + nextIndex);
            nextElem?.focus();
            nextElem?.select();
        }
    }

    handleKeyDown(event, i) {
        let key = event.which || event.keyCode
        setTimeout(() => {
            if (key === 13) {
                handleFormSubmit(event, this);
            } else if (key === 8 || key === 46) {
                const prevIndex = i - 1;
                if (prevIndex >= 0) {
                    const prevElem: HTMLInputElement = <HTMLInputElement>this.shadowRoot?.getElementById(this.id + '-' + prevIndex);
                    prevElem?.focus();
                    prevElem?.select();
                }
            }
        }, 0);
    }

    handleValueChange() {
        let newEvent = new Event('change', {
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(newEvent);
    }

    firstUpdated() {
        if (this.autofocus) {
            const firstElem: HTMLInputElement = <HTMLInputElement>this.shadowRoot?.getElementById(this.id + '-' + 0);
            firstElem.select();
        }
    }

    render() {
        return html`
            <div class='text-input ${this.theme}' >
                ${this.label ? html`<label class='label' for='${this.id}'>${this.label}</label>` : ''}
                <div class='input-wrapper ${this.fullWidth ? 'full-width' : ''}'>
                ${(() => {
                let inputList: number[] = [];
                for (let i = 0; i < this.length; i++) {
                    inputList.push(i);
                }
                return inputList.map((i: number) =>
                    html`<input id='${this.id}-${i}'      
                                name='${this.name}-${i}' 
                                type='${this.type}' 
                                .value='${this.value[i] ? this.value[i] : ''}'
                                ?required='${this.required}'
                                ?disabled='${this.disabled}'
                                maxlength='1'
                                ?autofocus='${this.autofocus && i === 0}'
                                class='wrapper-box ${this.errorMsg ? 'error' : ''}' 
                                placeholder='-' 
                                @input='${() => this.handleInputChange(i)}'
                                @keydown='${(e) => this.handleKeyDown(e, i)}'
                                autocomplete='off' />`);
            })()
            }   
                </div>
                ${this.errorMsg ? html`<div class='error-message'>${this.errorMsg}</div>` : ''}
                ${this.helpMsg && !this.errorMsg ? html`<div class='help-message'>${this.helpMsg}</div>` : ''}
            </div>
        `;
    }
}