import { LitElement, customElement, html, css, property } from 'lit-element';
import { baseStyles } from '@jsdesign/jsd-base';

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
            css`
            .jsd-checkbox-wrapper {
                padding: 0.5rem 0;
            }
    
            .jsd-checkbox-wrapper .jsd-checkbox {
                display: block;
                padding: 0.5rem 1.5rem 0.5rem 0;
            }
    
            .jsd-checkbox-wrapper.inline .jsd-checkbox {
                display: inline-block;
            }
    
            .jsd-checkbox-wrapper .checkbox-input {
                position: absolute;
                margin: 0;
                opacity: 0;
            }
    
            .jsd-checkbox-wrapper label {
                display: flex;
                color: var(--color-placeholder);
                cursor: pointer;
                z-index: 1;
            }
    
            .jsd-checkbox-wrapper .checkbox-input:checked+label,
            .jsd-checkbox-wrapper .jsd-checkbox:hover label {
                color: var(--color-black);
            }
    
            .jsd-checkbox-wrapper label .checkbox {
                position: relative;
                height: calc(1rem + 2px);
                width: calc(1rem + 2px);
                margin-right: 0.5rem;
                border-radius: 4px;
                border: 1px solid var(--color-border);
                background-color: var(--color-secondary);
            }
    
            .jsd-checkbox-wrapper label:hover .checkbox {
                background-color: var(--color-white);
            }
    
            .jsd-checkbox-wrapper .checkbox-input:active+label .checkbox,
            .jsd-checkbox-wrapper .checkbox-input:focus+label .checkbox {
                background-color: var(--color-white);
                border-color: var(--color-primary);
            }
    
            .jsd-checkbox-wrapper .checkbox-input:checked+label .checkbox {
                background-color: var(--color-primary);
                border-color: var(--color-primary);
            }
    
            .jsd-checkbox-wrapper .checkbox-input:checked+label .checkbox:after {
                content: '';
                border: solid var(--color-white);
                border-width: 0 2px 2px 0;
                display: inline-block;
                padding: 4px 2px;
                left: 5px;
                top: 2px;
                position: absolute;
                transform: rotate(45deg);
            }
    
            .jsd-checkbox-wrapper .checkbox-input:checked:focus+label .checkbox,
            .jsd-checkbox-wrapper .checkbox-input:checked+label:hover .checkbox {
                background-color: var(--color-primary-dark);
            }
            `
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