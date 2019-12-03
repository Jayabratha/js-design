import { LitElement, customElement, html, css, property } from 'lit-element';
import { baseStyles } from '@jsdesign/jsd-base';

@customElement('jsd-radio')
export class Radio extends LitElement {
    @property({ type: String }) id = '';
    @property({ type: String }) name = '';
    @property({ type: String }) formId = '';
    @property({ type: String }) label = 'gender';
    @property({ type: Boolean }) inline = false;
    @property({ type: String, attribute: 'value', reflect: true }) selectedValue = '';
    @property({ type: Array }) list = [];

    static get styles() {
        return [
            baseStyles,
            css`
            .jsd-radio-wrapper {
                padding: 0.5rem 0;
            }
    
            .jsd-radio-wrapper .jsd-radio {
                display: block;
                padding: 0.5rem 1.5rem 0.5rem 0;
            }
    
            .jsd-radio-wrapper.inline .jsd-radio {
                display: inline-block;
            }
    
            .jsd-radio-wrapper .radio-input {
                position: absolute;
                margin: 0;
                opacity: 0;
            }
    
            .jsd-radio-wrapper label {
                display: flex;
                align-items: center;
                color: var(--color-placeholder);
                cursor: pointer;
                z-index: 1;
            }
    
            .jsd-radio-wrapper .radio-input:checked+label,
            .jsd-radio-wrapper .jsd-radio:hover label {
                color: var(--color-black);
            }
    
            .jsd-radio-wrapper label .radio {
                position: relative;
                height: calc(1rem + 2px);
                width: calc(1rem + 2px);
                margin-right: 0.5rem;
                border-radius: 50%;
                border: 1px solid var(--color-border);
                background-color: var(--color-secondary);
            }

            .jsd-radio-wrapper label:hover .radio {
                background-color: var(--color-white);
            }
            .jsd-radio-wrapper .radio-input:active+label .radio,
            .jsd-radio-wrapper .radio-input:focus+label .radio {
                background-color: var(--color-white);
                border-color: var(--color-primary);
            }
            .jsd-radio-wrapper .radio-input+label .radio:after {
                content: '';
                position: absolute;
                height: 10px;
                width: 10px;
                border-radius: 50%;
                top: calc(50% - 5px);
                left: calc(50% - 5px);
                border: thin solid var(--color-primary);
                box-sizing: border-box;
                background-color: var(--color-primary);
                transform: scale(0);
                transition: transform 0.2s;
            }
    
            .jsd-radio-wrapper .radio-input:checked+label .radio:after {
                transform: scale(1);
            }
            .jsd-radio-wrapper .radio-input:checked+label:hover .radio:after {
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