import { LitElement, customElement, html, property } from 'lit-element';
import { baseStyles, handleFormSubmit, ThemeType } from '@jsdesign/jsd-base';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { style } from './radio-css';

@customElement('jsd-radio')
export class Radio extends LitElement {
    @property({ type: String }) id = '';
    @property({ type: String }) name = '';
    @property({ type: String }) formId = '';
    @property({ type: String, attribute: 'error-msg' }) errorMsg = '';
    @property({ type: String }) label = '';
    @property({ type: String, attribute: 'value', reflect: true }) selectedValue = '';
    @property({ type: Array }) list: Array<string | { value: string | number, label: string }> = [];
    @property({ type: Boolean }) disabled = false;
    @property({ type: Boolean }) required = false;
    @property({ type: Boolean }) inline = false;
    @property({ type: String }) theme: ThemeType = 'light';

    static get styles() {
        return [
            baseStyles,
            style
        ]
    }
    handleSelect(event) {
        this.selectedValue = event.target.value;
        setTimeout(() => {
            let inputEvent = new Event('input', {
                bubbles: true,
                composed: true
            });
            let changeEvent = new Event('change', {
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(inputEvent);
            this.dispatchEvent(changeEvent);
        }, 0);
    }
    render() {
        return html`
            ${this.label ? html`<div class='label'>${this.label}</div>` : ''}
            <div id='${this.id}' class='jsd-radio-wrapper ${this.inline ? 'inline' : ''} ${this.theme} ${this.errorMsg ? 'error' : ''}'>
            ${this.list.map((item: any) => html`
                <div class='jsd-radio'>
                    <input 
                        id='${this.id}-${item.value !== undefined ? item.value : item}'
                        class='radio-input' 
                        name='${this.name}' 
                        type="radio" 
                        value='${item.value !== undefined ? item.value : item}' 
                        ?checked='${item === this.selectedValue}' 
                        ?disabled='${this.disabled}'
                        ?required='${this.required}'
                        @change='${this.handleSelect}'
                        @keydown="${(e) => handleFormSubmit(e, this)}"/>
                    <label for='${this.id}-${item.value !== undefined ? item.value : item}' class='${this.disabled ? 'disabled' : ''}'>
                        <span class='radio'></span>
                        <span>${unsafeHTML(item.label !== undefined ? item.label : item)}</span>
                    </label>
                </div>
                `)}
                ${this.errorMsg ? html`<div class="error-message">${this.errorMsg}</div>` : ''}
            </div>
        `
    }
}