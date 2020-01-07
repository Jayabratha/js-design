import { LitElement, customElement, html, property } from 'lit-element';
import { baseStyles } from '@jsdesign/jsd-base';
import { style } from './jsd-checkbox-css';

@customElement('jsd-checkbox')
export class Checkbox extends LitElement {
    @property({ type: String }) id = '';
    @property({ type: String }) name = '';
    @property({ type: String }) formId = '';
    @property({ type: String }) label = '';
    @property({ type: Boolean }) inline = false;
    @property({ type: Array, attribute: 'values', reflect: true }) selectedValues: Array<string> = [];
    @property({ type: Array }) list: Array<string> = [];

    static get styles() {
        return [
            baseStyles,
            style
        ]
    }
    handleSelect(event) {
        let changeEvent = new Event('change',
            {
                bubbles: true,
                composed: true
            });
        let selectedValue = event.target.value;
        let index = this.selectedValues.indexOf(selectedValue);
        if (index !== -1) {
            this.selectedValues.splice(index, 1);
        } else {
            this.selectedValues.push(selectedValue);
        }
        this.selectedValues = [...this.selectedValues];
        setTimeout(() => {
            this.dispatchEvent(changeEvent);
        }, 0);
    }
    render() {
        return html`
        <div class='label'>${this.label}</div>
            <div id='${this.id}' class='jsd-checkbox-wrapper ${this.inline ? 'inline' : ''}'>
            ${this.list.map((item: any) => html`
                <div class='jsd-checkbox'>
                    <input 
                        id='${this.id}-${item}'
                        class='checkbox-input' 
                        name='${this.name}' 
                        type="checkbox" 
                        value='${item}' 
                        ?checked='${this.selectedValues.indexOf(item) !== -1}' 
                        @change='${this.handleSelect}'/>
                    <label for='${this.id}-${item}'>
                        <span class='checkbox'></span>
                        <span>${item}</span>
                    </label>
                </div>
                `)}
            </div>
        `
    }
}