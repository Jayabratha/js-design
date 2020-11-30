import { LitElement, customElement, html, property } from 'lit-element';
import { baseStyles, handleFormSubmit, ThemeType, keyCode } from '@jsdesign/jsd-base';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { style } from './select-css';

@customElement('jsd-select')
export class Select extends LitElement {

    @property({ type: String }) id = '';
    @property({ type: String }) name = '';
    @property({ type: String }) formId = '';
    @property({ type: String }) label = '';
    @property({ type: String }) placeholder = 'Select an option';
    @property({ type: Boolean }) disabled = false;
    @property({ type: Boolean }) autofocus = false;
    @property({ type: String, attribute: 'error-msg' }) errorMsg = '';
    @property({ type: String, attribute: 'help-msg' }) helpMsg = '';
    @property({ type: Boolean, attribute: 'full-width' }) fullWidth = false;
    @property({ type: String, attribute: 'value', reflect: true }) selectedValue = '';
    @property({ type: Boolean, attribute: 'filter-on-type' }) filterOnType = false;
    @property({ type: String }) theme: ThemeType = 'light';

    @property({ type: Boolean, attribute: false }) inFocus = false;
    @property({ type: Boolean, attribute: false }) isExpanded = false;
    @property({ type: Boolean, attribute: false }) selectedLabel = '';
    @property({ type: Array, attribute: false }) filteredList: any[] = [];
    @property({
        type: Array, converter: {
            fromAttribute: (value) => {
                if (value) {
                    return JSON.parse(value).map((item) => {
                        return {
                            value: item.value !== undefined ? item.value : item,
                            label: item.label !== undefined ? item.label : item,
                            selected: false,
                            current: false
                        }
                    });
                }
            }
        }
    }) list: Array<any> = [];

    selectWrapper: HTMLElement | null;
    listElement: HTMLElement | null;
    selectButton: HTMLElement | null;
    filterInput: HTMLInputElement | null;

    constructor() {
        super();
        this.selectWrapper = null;
        this.listElement = null;
        this.selectButton = null;
        this.filterInput = null;
    }

    firstUpdated() {
        if (this.shadowRoot) {
            this.selectWrapper = this.shadowRoot.getElementById(this.id);
            this.listElement = this.shadowRoot.getElementById(`${this.id}-list`);
            this.selectButton = this.shadowRoot.getElementById(`${this.id}-button`);
            this.filterInput = <HTMLInputElement>this.shadowRoot.getElementById(`${this.id}-input`);
        } else {
            this.selectWrapper = document.getElementById(this.id);
            this.listElement = document.getElementById(`${this.id}-list`);
            this.selectButton = document.getElementById(`${this.id}-button`);
            this.filterInput = <HTMLInputElement>document.getElementById(`${this.id}-input`);
        }

        if (this.selectedValue) {
            let selectedItem = this.list.find(item => item.value === this.selectedValue);
            selectedItem.selected = true;
            selectedItem.current = true;
        } else {
            this.list[0].current = true;
        }

        if (this.autofocus) {
            this.selectButton?.focus();
            this.filterInput?.focus();
        }
    }


    static get styles() {
        return [
            baseStyles,
            style
        ]
    }

    setFocus(inFocus = false) {
        this.inFocus = inFocus;
    }

    toggleClick(isExpanded) {
        this.isExpanded = isExpanded;
        if (this.selectWrapper && this.listElement && (this.selectButton || this.filterInput)) {
            if (this.isExpanded) {
                if (!this.filterInput) {
                    this.listElement.focus();
                }
                if (!this.selectedValue) {
                    this.list[0].current = true;
                }
            } else {
                this.list.forEach((item) => {
                    if (!item.selected) {
                        item.current = false;
                    }
                });
                this.list = [...this.list];
            }
        }
    }

    hoverList(event) {
        const target = event.target;
        let hoverElemValue = '';
        if (target.tagName === 'LI') {
            hoverElemValue = target.getAttribute('value');
        }
        const currentIndex = this.list.findIndex((item) => item.current === true);
        const newIndex = this.list.findIndex((item) => item.value === hoverElemValue);

        if (currentIndex !== -1) {
            this.list[currentIndex].current = false;
        }
        this.list[newIndex].current = true;
        this.list = [...this.list];
    }

    handleBlur(event: any) {
        if (!event.relatedTarget || (event.relatedTarget && event.relatedTarget.id !== `${this.id}-button` && event.relatedTarget.id !== `${this.id}-list`)) {
            this.setFocus(false);
            this.toggleClick(false);
        }
    }

    handleSelect(item) {
        this.selectedValue = '';
        if (this.filterInput) {
            this.filterInput.value = '';
        }
        this.list.forEach(i => {
            if (i.value === item.value) {
                this.selectedValue = item.value;
                this.selectedLabel = item.label;
                i.selected = true;
                i.current = true;
            } else {
                i.selected = false;
                i.current = false;
            }
        });
        this.filteredList = [...this.list];

        this.selectButton?.focus();
        if (this.filterInput) {
            this.filterInput?.focus();
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
            this.toggleClick(false);
            this.dispatchEvent(inputEvent);
            this.dispatchEvent(changeEvent);
        }, 200);
    }

    handleListScroll(currentItem) {
        if (this.listElement && this.listElement.scrollHeight > this.listElement.clientHeight) {
            if (currentItem) {
                var currentItemBottom = currentItem.offsetTop + currentItem.offsetHeight;
                if (currentItemBottom > (this.listElement.clientHeight + this.listElement.scrollTop)) {
                    this.listElement.scrollTop = currentItem.offsetTop;
                } else if (currentItem.offsetTop < this.listElement.scrollTop) {
                    const lastScrollPosition = this.listElement.scrollTop - 199;
                    this.listElement.scrollTop = lastScrollPosition > 0 ? (lastScrollPosition + 22) : 0;
                }
            }
        }
    }

    handleButtonPress(event) {
        let key = event.which || event.code;
        if (key === keyCode.SPACE || key === keyCode.UP || key === keyCode.DOWN) {
            event.preventDefault();
            this.toggleClick(!this.isExpanded);
        } else if (key === keyCode.RETURN) {
            event.preventDefault();
            handleFormSubmit(event, this);
        }
    }

    handleKeyPress(event) {
        let list = this.filterInput ? this.filteredList : this.list;
        let key = event.which || event.code;
        let currentIndex: any = list.findIndex((item) => item.current === true);
        let currentItem: any = null;
        if (this.listElement) {
            currentItem = this.listElement.querySelector('li.current');
        }
        if (currentIndex === -1) {
            currentIndex = 0;
        }

        switch (key) {
            case keyCode.UP: {
                event.preventDefault();
                if (this.filterInput) {
                    this.listElement?.focus();
                }
                if (currentIndex !== 0) {
                    let prevIndex = currentIndex - 1;
                    list[currentIndex].current = false;
                    list[prevIndex].current = true;
                    if (this.filterInput) {
                        this.filteredList = [...list];
                    } else {
                        this.list = [...list];
                    }
                    if (currentItem) {
                        currentItem = currentItem.previousElementSibling;
                    }
                }
                this.handleListScroll(currentItem);
                break;
            }
            case keyCode.DOWN: {
                event.preventDefault();
                if (this.filterInput) {
                    this.listElement?.focus();
                }
                if (currentIndex < ((this.filterInput ? this.filteredList.length : this.list.length) - 1)) {
                    let nextIndex = currentIndex + 1;
                    list[currentIndex].current = false;
                    list[nextIndex].current = true;
                    if (this.filterInput) {
                        this.filteredList = [...list];
                    } else {
                        this.list = [...list];
                    }
                    if (currentItem) {
                        currentItem = currentItem.nextElementSibling;
                    }
                }
                this.handleListScroll(currentItem);
                break;
            }
            case keyCode.SPACE: {
                if (!this.filterInput) {
                    event.preventDefault();
                    if (this.filterInput) {
                        this.listElement?.focus();
                    }
                    list[currentIndex].current = false;
                    this.handleSelect(list[currentIndex]);
                }
                break;
            }
            case keyCode.RETURN: {
                event.preventDefault();
                list[currentIndex].current = false;
                this.handleSelect(list[currentIndex]);
                handleFormSubmit(event, this);
                break;
            }
            case keyCode.ESC: {
                event.preventDefault();
                this.toggleClick(false);
                this.selectButton?.focus();
                break;
            }
            case keyCode.TAB: {
                // Hack for Chrome
                this.selectButton?.setAttribute('tabindex', '-1');
                setTimeout(() => {
                    this.selectButton?.removeAttribute('tabindex');
                }, 0);
            }
        }

    }

    handleFilter() {
        const filterValue = this.filterInput ? this.filterInput.value.toLowerCase() : '';
        this.isExpanded = true;
        if (filterValue) {
            this.filteredList = this.list.filter((item) => item.label.toLowerCase().includes(filterValue));
        } else {
            this.filteredList = [...this.list];
        }
        if (this.filteredList.length) {
            this.filteredList[0] = { ...this.filteredList[0], current: true };
        } else {
            this.filteredList.push({ value: 'No matches found', label: 'No matches found', selected: false, current: false });
        }
        this.filteredList = [...this.filteredList];
    }

    render() {
        let list;
        if (this.selectedValue) {
            let selectedItem = this.list.find(item => item.value === this.selectedValue);
            selectedItem.selected = true;
            this.selectedLabel = selectedItem.label;
        } else {
            this.selectedLabel = '';
        }
        if (this.filterInput) {
            if (!this.filteredList.length) {
                this.filteredList = [...this.list];
            }
            list = this.filteredList;
        } else {
            list = this.list;
        }

        return html`
            <div class='jsd-select-wrapper ${this.theme}'>
                ${this.label ? html`<div class='label'>${this.label}</div>` : html`<div class='empty-label'></div>`}
                <div id='${this.id}' 
                    class='wrapper-box select-wrapper 
                    ${this.selectedValue ? 'selected' : ''} 
                    ${this.isExpanded ? 'expanded' : ''}
                    ${this.inFocus ? 'focus' : ''}
                    ${this.disabled ? 'disabled' : ''}
                    ${this.fullWidth ? 'full-width' : ''}
                    ${this.errorMsg ? 'error' : ''}'>
                    ${this.disabled ?
                html`<div id='${this.id}-button' class='button disabled'>${this.selectedLabel ? this.selectedLabel : this.placeholder}</div>` :
                this.filterOnType ?
                    html`<input id='${this.id}-input' 
                            role="combobox"
                            @click='${() => this.toggleClick(!this.isExpanded)}' 
                            @focus='${() => this.setFocus(true)}'
                            @blur='${this.handleBlur}'
                            @keydown='${this.handleKeyPress}'
                            aria-haspopup="listbox"
                            @input='${this.handleFilter}'
                            aria-expanded='${this.isExpanded}'
                            placeholder='${this.selectedLabel ? this.selectedLabel : this.placeholder}'/>`
                    :
                    html`<button id='${this.id}-button' 
                            class='button'
                            @click='${() => this.toggleClick(!this.isExpanded)}' 
                            @focus='${() => this.setFocus(true)}'
                            @blur='${() => this.setFocus(false)}'
                            @keydown='${this.handleButtonPress}'
                            aria-haspopup='listbox'
                            aria-labelledby='${this.id} ${this.id}-button'
                            aria-expanded='${this.isExpanded}'>
                            ${this.selectedLabel ? this.selectedLabel : this.placeholder}
                        </button>`
            }
                    <ul id='${this.id}-list' class='custom-select' role='listbox'
                        tabindex='-1'
                        @blur='${this.handleBlur}'
                        @mouseover='${this.hoverList}'
                        @keydown='${this.handleKeyPress}'
                        aria-labelledby='${this.id}'>
                        ${list.map((item: any) => html`
                        <li role='option'
                            id='${this.id}-${item.value}'
                            value='${item.value}'
                            aria-selected='${item.selected}' 
                            class='${item.selected ? 'selected' : ''} ${item.current ? 'current' : ''}'
                            @click='${() => { this.handleSelect(item) }}'>${unsafeHTML(item.label)}</li>`)}                      
                    </ul>                   
                </div>
                ${this.errorMsg ? html`<div class="error-message">${this.errorMsg}</div>` : ''}
                ${this.helpMsg && !this.errorMsg ? html`<div class="help-message">${this.helpMsg}</div>` : ''}
            </div>
            `
    }
}