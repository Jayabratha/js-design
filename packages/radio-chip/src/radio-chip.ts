import { LitElement, customElement, html, property } from 'lit-element';
import { baseStyles, handleFormSubmit, ThemeType } from '@jsdesign/jsd-base';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { style } from './radio-chip-css';

@customElement('jsd-radio-chip')
export class RadioChip extends LitElement {
    @property({ type: String }) id = '';
    @property({ type: String }) name = '';
    @property({ type: String }) formId = '';
    @property({ type: String, attribute: 'error-msg' }) errorMsg = '';
    @property({ type: String }) label = '';
    @property({ type: String }) inline = 'false';
    @property({ type: String, attribute: 'value', reflect: true }) selectedValue = '';
    @property({ type: Array }) list: Array<string | { value: string | number, label: string }> = [];
    @property({ type: String }) disabled = 'false';
    @property({ type: String }) required = 'false';
    @property({ type: String, attribute: 'full-width' }) fullWidth = 'false';
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
            <div id='${this.id}' class='jsd-radio-chip-wrapper ${this.inline === 'true' ? 'inline' : ''} ${this.theme} ${this.errorMsg ? 'error' : ''}'>
                <div class='chip-wrapper'>
                    ${this.list.map((item: any) => html`
                        <div class='jsd-radio-chip ${this.fullWidth === 'true' ? 'full-width' : ''}'>
                            <input 
                                id='${this.id}-${item.value !== undefined ? item.value : item}'
                                class='radio-chip-input' 
                                name='${this.name}' 
                                type="radio" 
                                value='${item.value !== undefined ? item.value : item}'  
                                ?checked='${item === this.selectedValue}' 
                                ?required='${this.required === 'true'}'
                                ?disabled='${this.disabled === 'true'}'
                                @change='${this.handleSelect}'
                                @keypress="${(e) => handleFormSubmit(e, this)}"/>
                            <label for='${this.id}-${item.value !== undefined ? item.value : item}' 
                                   class='${this.disabled === 'true' ? 'disabled' : ''}'>${unsafeHTML(item.label !== undefined ? item.label : item)}</label>
                        </div>
                    `)}
                </div>
                ${this.errorMsg ? html`<div class="error-message">${this.errorMsg}</div>` : ''}
            </div>
        `
    }
}