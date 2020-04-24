import { LitElement, customElement, html, property } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { baseStyles, handleFormSubmit, ThemeType } from '@jsdesign/jsd-base';
import { style } from './checkbox-css';

@customElement('jsd-checkbox')
export class Checkbox extends LitElement {
    @property({ type: String }) id = '';
    @property({ type: String }) name = '';
    @property({ type: String }) label = '';
    @property({ type: Array }) list: Array<string | { value: string | number, label: string }> = [];
    @property({ type: Array, attribute: 'value', reflect: true }) selectedValues: Array<string> = [];
    @property({ type: String, attribute: 'error-msg' }) errorMsg = '';
    @property({ type: String }) theme: ThemeType = 'light';
    @property({ type: Boolean }) inline = false;
    @property({ type: Boolean }) disabled = false;
    @property({ type: Boolean }) checked = false;

    static get styles() {
        return [
            baseStyles,
            style
        ]
    }

    handleSelect(event) {
        if (this.list.length !== 0) {
            let selectedValue = event.target.value;
            let index = this.selectedValues.indexOf(selectedValue);
            if (index !== -1) {
                this.selectedValues.splice(index, 1);
            } else {
                this.selectedValues.push(selectedValue);
            }
            this.selectedValues = [...this.selectedValues];
        }
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
        }, 10);
    }

    render() {
        return html`
            ${this.label ? html`<div class='label'>${this.label}</div>` : ''}
            <div id='${this.id}' class='jsd-checkbox-wrapper ${this.inline ? 'inline' : ''} ${this.theme} ${this.errorMsg ? 'error' : ''}'>
            ${this.list.length ? this.list.map((item: any) =>
            html`
                <div class='jsd-checkbox'>
                    <input 
                        id='${this.id}-${item.value !== undefined ? item.value : item}'
                        class='checkbox-input' 
                        name='${this.name}' 
                        type="checkbox" 
                        value='${item.value !== undefined ? item.value : item}' 
                        ?checked='${this.selectedValues.indexOf(item.value !== undefined ? item.value : item) !== -1}' 
                        ?disabled='${this.disabled}'
                        @change='${this.handleSelect}'
                        @keydown="${(e) => handleFormSubmit(e, this)}"/>
                    <label for='${this.id}-${item.value !== undefined ? item.value : item}' class='${this.disabled ? 'disabled' : ''}'>
                        <div class='checkbox'></div>
                        <div class='checkbox-label'>${unsafeHTML(item.label !== undefined ? item.label : item)}</div>
                    </label>
                </div>
                `) :
                html`
                <div class='jsd-checkbox'>
                    <input 
                        id='${this.id}-input'
                        class='checkbox-input' 
                        name='${this.name}' 
                        type="checkbox" 
                        ?disabled='${this.disabled}'
                        ?checked='${this.checked}'
                        @change='${this.handleSelect}'
                        @keydown="${(e) => handleFormSubmit(e, this)}"/>
                    <label for='${this.id}-input' class='${this.disabled ? 'disabled' : ''}'>
                        <div class='checkbox'></div>
                        <div class='checkbox-label'><slot name='label'></slot></div>
                    </label>
                </div>`
            }
                ${this.errorMsg ? html`<div class="error-message">${this.errorMsg}</div>` : ''}
            </div>
        `
    }
}