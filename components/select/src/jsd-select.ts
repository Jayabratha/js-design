import { LitElement, customElement, html, css, property } from 'lit-element';
import { baseStyles } from '@jsdesign/jsd-base';
import { keyCode } from '@jsdesign/jsd-base';

@customElement('jsd-select')
export class Select extends LitElement {

    @property({ type: String }) id = '';
    @property({ type: String }) name = '';
    @property({ type: String }) formId = '';
    @property({ type: String }) label = 'select';
    @property({ type: Boolean, attribute: 'is-expanded', reflect: true }) isExpanded = false;
    @property({ type: Boolean, attribute: false }) inFocus = false;
    @property({ type: String, attribute: 'value', reflect: true }) selectedValue = '';
    @property({
        type: Array, converter: {
            fromAttribute: (value) => {
                if (value) {
                    return JSON.parse(value).map((item) => {
                        return {
                            value: item,
                            selected: false,
                            current: false
                        }
                    });
                }
            }
        }
    }) list: any[] = [];

    listWrapper: HTMLElement | null;
    listElement: HTMLElement | null;
    selectButton: HTMLElement | null;

    constructor() {
        super();
        this.listWrapper = null;
        this.listElement = null;
        this.selectButton = null;
    }

    firstUpdated() {
        if (this.shadowRoot) {
            this.listWrapper = this.shadowRoot.getElementById(this.id);
            this.listElement = this.shadowRoot.getElementById(`${this.id}-list`);
            this.selectButton = this.shadowRoot.getElementById(`${this.id}-button`);
        } else {
            this.listWrapper = document.getElementById(this.id);
            this.listElement = document.getElementById(`${this.id}-list`);
            this.selectButton = document.getElementById(`${this.id}-button`);
        }

        if (this.selectedValue) {
            let selectedItem = this.list.find(item => item.value === this.selectedValue);
            selectedItem.selected = true;
            selectedItem.current = true;
        } else {
            this.list[0].current = true;
        }
    }


    static get styles() {
        return [
            baseStyles,
            css`
            .label {
                display: block;
                font-size: 0.8rem;
                padding: 0.6rem;
                text-transform: uppercase;
                letter-spacing: 0.2rem;
                color: var(--color-label);
            }

            .custom-select-wrapper {
                position: relative;
                height: 6rem;
            }
    
            .select-wrapper {
                position: absolute;
                width: 100%;
                border: 1px solid var(--color-border);
                background-color: var(--color-secondary);
                border-radius: 0.5rem;
                height: 3.3rem;
                overflow: hidden;
                box-sizing: border-box;
                outline: solid 1px transparent;
            }
    
            .select-wrapper.expanded {
                height: auto;
                background: var(--color-white);
                border: 1px solid var(--color-primary);
                z-index: 10;
            }
    
            .select-wrapper:hover {
                background: var(--color-white);
            }
            .select-wrapper.focus {
                background: var(--color-white);
                border: 1px solid var(--color-primary);
            }
    
            .select-wrapper:focus {
                background-color: var(--color-white);
                border: 1px solid var(--color-primary);
            }
    
            .select-wrapper>.button {
                position: absolute;
                width: 100%;
                height: calc(3.3rem - 2px);
                padding: 1rem;
                background: transparent;
                border: none;
                z-index: 1;
                cursor: pointer;
                text-align: left;
                font-size: 1rem;
                outline: solid 1px transparent;
                line-height: calc(1.3rem - 2px);
                color: var(--color-placeholder);
                box-sizing: border-box;
            }

            .select-wrapper>button::-moz-focus-inner {
                border: 0;
            }
    
            .select-wrapper.selected:not(.expanded)>.button {
                color: var(--color-black);
            }
    
            .select-wrapper>.button::after {
                content: '';
                border: solid var(--color-placeholder);
                border-width: 0 1px 1px 0;
                display: inline-block;
                padding: 3px;
                position: absolute;
                top: 1.3rem;
                right: 1rem;
                transform: rotate(45deg);
                transition: transform 0.3s;
            }

            .select-wrapper.expanded .button::after {
                transform: rotate(-135deg);
            }
    
            ul.custom-select {
                position: relative;
                top: 0;
                list-style: none;
                padding: 0;
                margin: 0;
                margin-top: calc(3.3rem - 2px);
                outline: none;
                border: none;
                width: 100%;
                height: auto;
                max-height: 0;
                font-size: 1rem;
                color: var(--color-black);
                transition: all 0.4s;
                box-sizing: border-box;
                overflow: hidden;
                transition: max-height 0.3s;
                overflow-y: auto;
            }
    
            .select-wrapper.expanded ul.custom-select {
                height: auto;
                max-height: 200px;
                border-top: 1px solid var(--color-border);
            }
    
            ul.custom-select>li {
                position: relative;
                height: calc(3.3rem - 2px);
                line-height: calc(1.3rem - 2px);
                padding: 1rem;
                padding-left: 2.1rem;
                box-sizing: border-box;
                cursor: pointer;
            }
    
            ul.custom-select>li.selected::before {
                content: '';
                border: solid var(--color-primary);
                border-width: 0 2px 2px 0;
                display: inline-block;
                padding: 5px 2px;
                position: absolute;
                top: 1.1rem;
                left: 1rem;
                transform: rotate(45deg);
            }

            ul.custom-select>li.current,
            ul.custom-select>li:hover {
                background-color: var(--color-secondary);
            }

            ul.custom-select>li.selected {
                background-color: var(--color-secondary);
            }
    
            ul.custom-select::before {
                content: ' ';
                position: relative;
                height: 3.3rem;
                background: #ffffff;
            }
            `
        ]
    }

    toggleFocus(defocus = false) {
        if (defocus) {
            this.inFocus = false;
        } else {
            this.inFocus = !this.inFocus;
        }
    }

    toggleClick(close = false) {
        if (close) {
            this.isExpanded = false;
        } else {
            this.isExpanded = !this.isExpanded;
        }
        if (this.listWrapper && this.listElement && this.selectButton) {
            if (this.isExpanded) {
                this.listElement.focus();
                if (!this.selectedValue) {
                    this.list[0].current = true;
                }
            } else {
                this.selectButton.focus();
                this.list.forEach((item) => {
                    if (!item.selected) {
                        item.current = false;
                    }
                });
                this.list = [...this.list];
            }
        }
    }

    hoverList() {
        if (this.list[0].current) {
            this.list[0].current = false;
            this.list = [...this.list];
        }
    }

    handleBlur(event: any) {
        if (!event.relatedTarget || (event.relatedTarget && event.relatedTarget.id !== `${this.id}-button`)) {
            this.toggleClick(true);
            this.toggleFocus(true);
        }
    }

    handleSelect(item) {
        this.selectedValue = '';
        this.list.forEach(i => {
            if (i === item) {
                this.selectedValue = item.value;
                i.selected = true;
                i.current = true;
            } else {
                i.selected = false;
                i.current = false;
            }
        });

        setTimeout(() => {
            let changeEvent = new Event('change', {
                bubbles: true,
                composed: true
            });
            this.toggleClick(true);
            this.dispatchEvent(changeEvent);
        }, 200);
    }

    handleButtonPress(event) {
        let key = event.which || event.code;
        event.preventDefault();

        if (key === keyCode.SPACE || key === keyCode.RETURN) {
            this.toggleClick();
        }
    }

    handleKeyPress(event) {
        if (this.isExpanded) {
            let key = event.which || event.code;
            let currentIndex: any = this.list.findIndex((item) => item.current === true);
            let currentItem: any = null;
            if (this.listElement) {
                currentItem = this.listElement.querySelector('li.current');
            }
            if (currentIndex === -1) {
                currentIndex = 0;
            }
            event.preventDefault();

            switch (key) {
                case keyCode.UP: {
                    if (currentIndex !== 0) {
                        let prevIndex = currentIndex - 1;
                        this.list[currentIndex].current = false;
                        this.list[prevIndex].current = true;
                        this.list = [...this.list];
                        if (currentItem) {
                            currentItem = currentItem.previousElementSibling;
                        }
                    }
                    break;
                }
                case keyCode.DOWN: {
                    if (currentIndex < (this.list.length - 1)) {
                        let nextIndex = currentIndex + 1;
                        this.list[currentIndex].current = false;
                        this.list[nextIndex].current = true;
                        this.list = [...this.list];
                        if (currentItem) {
                            currentItem = currentItem.nextElementSibling;
                        }
                    }
                    break;
                }
                case keyCode.SPACE:
                case keyCode.RETURN: {
                    this.list[currentIndex].current = false;
                    this.handleSelect(this.list[currentIndex]);
                }
            }

            if (this.listElement && this.listElement.scrollHeight > this.listElement.clientHeight) {
                if (currentItem) {
                    var currentItemBottom = currentItem.offsetTop + currentItem.offsetHeight;
                    if (currentItemBottom > (this.listElement.clientHeight + this.listElement.scrollTop)) {
                        this.listElement.scrollTop = currentItem.offsetTop;
                    } else if (currentItem.offsetTop < this.listElement.scrollTop) {
                        this.listElement.scrollTop = 0;
                    }
                }
            }
        }

    }

    render() {
        if (this.selectedValue) {
            let selectedItem = this.list.find(item => item.value === this.selectedValue);
            selectedItem.selected = true;
        }
        return html`
            <div class='custom-select-wrapper'>
                <div class='label' role='label'>State</div>
                <div id='${this.id}' class='select-wrapper 
                    ${this.selectedValue ? 'selected' : ''} 
                    ${this.isExpanded ? 'expanded' : ''}
                    ${this.inFocus ? 'focus' : ''}'> 
                    <div id='${this.id}-button' 
                        class='button'
                        aria-haspopup='listbox'
                        tabindex='0'
                        @focus='${() => this.toggleFocus(false)}'
                        @blur='${() => this.toggleFocus(true)}'
                        @click='${() => this.toggleClick(false)}' 
                        @keydown='${this.handleButtonPress}'
                        aria-expanded='${this.isExpanded}'
                        aria-labelledby='state state-button'>${this.selectedValue ? this.selectedValue : 'Select your state'}</div>   
                    <ul id='${this.id}-list' tabindex='-1' class='custom-select' role='listbox'
                        aria-labelledby="state"
                        @blur='${this.handleBlur}'
                        @mouseover='${this.hoverList}'
                        @keydown='${this.handleKeyPress}'>
                        ${this.list.map((item: any) => html`
                        <li role='option' 
                            value='${item.value}' 
                            aria-selected='${item.selected}' 
                            class='${item.selected ? 'selected' : ''} ${item.current ? 'current' : ''}'
                            @click='${() => { this.handleSelect(item) }}'>${item.value}</li>`)}                      
                    </ul>
                </div>
            </div>
            `
    }
}