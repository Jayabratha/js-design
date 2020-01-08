import { LitElement, customElement, html, property } from 'lit-element';
import { baseStyles } from '@jsdesign/jsd-base';
import { style } from './jsd-select-css';
import { keyCode } from '@jsdesign/jsd-base';

@customElement('jsd-select')
export class Select extends LitElement {

    @property({ type: String }) id = '';
    @property({ type: String }) name = '';
    @property({ type: String }) formId = '';
    @property({ type: String }) label = 'select';
    @property({ type: Boolean }) disabled = false;
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
            style
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
            <div class='jsd-select-wrapper'>
                <div class='label' role='label'>State</div>
                <div id='${this.id}' class='select-wrapper 
                    ${this.selectedValue ? 'selected' : ''} 
                    ${this.isExpanded ? 'expanded' : ''}
                    ${this.inFocus ? 'focus' : ''}
                    ${this.disabled ? 'disabled' : ''}'>
                    ${this.disabled ?
                html`<div id='${this.id}-button' class='button disabled'>${this.selectedValue ? this.selectedValue : 'Select your state'}</div>` :
                html`<div id='${this.id}-button' 
                                class='button'
                                aria-haspopup='listbox'
                                tabindex='0'
                                @focus='${() => this.toggleFocus(false)}'
                                @blur='${() => this.toggleFocus(true)}'
                                @click='${() => this.toggleClick(false)}' 
                                @keydown='${this.handleButtonPress}'
                                aria-expanded='${this.isExpanded}'
                                aria-labelledby='state state-button'>${this.selectedValue ? this.selectedValue : 'Select your state'}</div>`}
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