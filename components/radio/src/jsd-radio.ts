import { LitElement, customElement, html, property } from 'lit-element';
import { baseStyles } from '@jsdesign/jsd-base';
import { style } from './jsd-radio-css';

@customElement('jsd-radio')
export class Radio extends LitElement {
    @property({ type: String }) id = '';
    @property({ type: String }) name = '';
    @property({ type: String }) formId = '';
    @property({ type: String }) label = '';
    @property({ type: Boolean }) inline = false;
    @property({ type: String, attribute: 'value', reflect: true }) selectedValue = '';
    @property({ type: Array }) list = [];

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
        this.selectedValue = event.target.value;
        setTimeout(() => {
            this.dispatchEvent(changeEvent);
        }, 0);
    }
    render() {
        return html`
        <div class='label'>${this.label}</div>
            <div id='${this.id}' class='jsd-radio-wrapper ${this.inline ? 'inline' : ''}'>
            ${this.list.map((item: any) => html`
                <div class='jsd-radio'>
                    <input 
                        id='${this.id}-${item}'
                        class='radio-input' 
                        name='${this.name}' 
                        type="radio" 
                        value='${item}' 
                        ?checked='${item === this.selectedValue}' 
                        @change='${this.handleSelect}'/>
                    <label for='${this.id}-${item}'>
                        <span class='radio'></span>
                        <span>${item}</span>
                    </label>
                </div>
                `)}
            </div>
        `
    }
}