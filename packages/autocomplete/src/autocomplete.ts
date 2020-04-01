import { LitElement, customElement, html, property } from 'lit-element';
import { baseStyles, handleFormSubmit, ThemeType, keyCode } from '@jsdesign/jsd-base';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { style } from './autocomplete-css';

@customElement('jsd-autocomplete')
export class Select extends LitElement {

    @property({ type: String }) id = '';
    @property({ type: String }) name = '';
    @property({ type: String }) formId = '';
    @property({ type: String }) label = '';
    @property({ type: String }) placeholder = 'Enter value';
    @property({ type: String }) disabled = 'false';
    @property({
        type: String, converter: {
            fromAttribute: (value) => {
                return value === 'true' ? true : false;
            }
        }
    }) autofocus = false;
    @property({
        type: String, converter: {
            fromAttribute: (value) => {
                return value === 'true' ? true : false;
            }
        }
    }) loading = false;
    @property({ type: String, attribute: 'error-msg' }) errorMsg = '';
    @property({ type: String, attribute: 'help-msg' }) helpMsg = '';
    @property({ type: String, attribute: 'full-width' }) fullWidth = 'false';
    @property({ type: String, attribute: 'value', reflect: true }) value = '';
    @property({
        type: String, converter: {
            fromAttribute: (value) => {
                return Number(value);
            }
        },
        attribute: 'throttle-time'
    }) throttleTime = 0;
    @property({ type: String }) theme: ThemeType = 'light';
    @property({ type: String }) pattern = '';
    @property({ type: Number, attribute: 'maxlength' }) maxLength = -1;

    @property({ type: Boolean, attribute: false }) inFocus = false;
    @property({ type: Boolean, attribute: false }) isExpanded = false;
    @property({ type: Boolean, attribute: false }) labelValue = '';
    @property({
        type: Array, converter: {
            fromAttribute: (value) => {
                if (value) {
                    let list = JSON.parse(value).map((item) => {
                        return {
                            value: item.value !== undefined ? item.value : item,
                            label: item.label !== undefined ? item.label : item,
                            selected: false,
                            current: false
                        }
                    });
                    return list;
                }
            }
        }
    }) list: Array<any> = [];

    listWrapper: HTMLElement | null;
    listElement: HTMLElement | null;
    inputElement: HTMLElement | null;
    throttledFunction: any;

    constructor() {
        super();
        this.listWrapper = null;
        this.listElement = null;
        this.inputElement = null;
    }

    firstUpdated() {
        if (this.shadowRoot) {
            this.listWrapper = this.shadowRoot.getElementById(this.id);
            this.listElement = this.shadowRoot.getElementById(`${this.id}-list`);
            this.inputElement = this.shadowRoot.getElementById(`${this.id}-input`);
        } else {
            this.listWrapper = document.getElementById(this.id);
            this.listElement = document.getElementById(`${this.id}-list`);
            this.inputElement = document.getElementById(`${this.id}-input`);
        }

        this.throttledFunction = this.throttle(() => {
            this.fireEvent();
        }, this.throttleTime);
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
        if (this.inFocus) {
            this.isExpanded = true;
        } else {
            this.isExpanded = false;
        }
    }

    toggleClick(close = false) {
        if (close) {
            this.isExpanded = false;
        } else {
            this.isExpanded = !this.isExpanded;
        }
        // Reset current item
        if (this.listWrapper && this.listElement) {
            this.list.forEach((item) => {
                if (!item.selected) {
                    item.current = false;
                }
            });
            this.list = [...this.list];
        }
    }

    hoverList(event) {
        const target = event.target;
        let hoverElemValue = '';
        if (target.tagName === 'LI') {
            hoverElemValue = target.getAttribute('value');
        }
        if (this.list.length && hoverElemValue) {
            const currentIndex = this.list.findIndex((item) => item.current === true);
            const newIndex = this.list.findIndex((item) => item.value === hoverElemValue);

            if (currentIndex !== -1) {
                this.list[currentIndex].current = false;
            }
            this.list[newIndex].current = true;
            this.list = [...this.list];
        }
    }

    handleBlur(event: any) {
        if (!event.relatedTarget || (event.relatedTarget && event.relatedTarget.id !== `${this.id}-button` && event.relatedTarget.id !== `${this.id}-list`)) {
            this.toggleClick(true);
            this.toggleFocus(true);
        }
    }

    throttle(func, time) {
        var wait = false;
        return function executedFunction(this: any) {
            var context = this;
            var args = arguments;

            function later() {
                func.apply(context, args);
                wait = false;
            }

            if (!wait) {
                func.apply(context, args);
                wait = true;
                setTimeout(later, time);
            }
        };
    };

    handleSelect(item) {
        this.value = '';
        this.list.forEach(i => {
            if (i.value === item.value) {
                this.value = item.value;
                this.labelValue = item.label;
                i.selected = true;
                i.current = true;
            } else {
                i.selected = false;
                i.current = false;
            }
        });

        this.inputElement?.focus();

        setTimeout(() => {
            let inputEvent = new Event('input', {
                bubbles: true,
                composed: true
            });
            let changeEvent = new Event('change', {
                bubbles: true,
                composed: true
            });
            this.toggleClick(true);
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

    navigateUp(currentIndex, currentElem) {
        if (currentIndex > 0 ) {
            let prevIndex = currentIndex - 1;
            this.list[currentIndex].current = false;
            this.list[prevIndex].current = true;
            this.list = [...this.list];
            if (currentElem) {
                currentElem = currentElem.previousElementSibling;
            }
        }
        this.handleListScroll(currentElem);
    }

    navigateDown(currentIndex, currentElem) {
        if (currentIndex < (this.list.length - 1)) {
            let nextIndex = currentIndex + 1;
            if (currentIndex !== -1) {
                this.list[currentIndex].current = false;
            }
            this.list[nextIndex].current = true;
            this.list = [...this.list];
            if (currentElem) {
                currentElem = currentElem.nextElementSibling;
            }
        }
        this.handleListScroll(currentElem);
    }

    handleKeyPress(event) {
        if (this.isExpanded) {
            let key = event.which || event.code;
            let currentIndex: any = this.list.findIndex((item) => item.current === true);
            let currentElem: any = null;
            if (this.listElement) {
                currentElem = this.listElement.querySelector('li.current');
            }

            switch (key) {
                case keyCode.UP: {
                    event.preventDefault();
                    this.navigateUp(currentIndex, currentElem);
                    break;
                }
                case keyCode.DOWN: {
                    event.preventDefault();
                    this.navigateDown(currentIndex, currentElem);
                    break;
                }
                case keyCode.SPACE: {
                    event.preventDefault();
                    this.list[currentIndex].current = false;
                    this.handleSelect(this.list[currentIndex]);
                    break;
                }
                case keyCode.RETURN: {
                    event.preventDefault();
                    this.list[currentIndex].current = false;
                    this.handleSelect(this.list[currentIndex]);
                    break;
                }
            }
        }
    }

    handleButtonPress(event, element) {
        let key = event.which || event.code;
        if (key === keyCode.RETURN) {
            event.preventDefault();
            handleFormSubmit(event, element);
        } else if (key === keyCode.UP || key === keyCode.DOWN) {
            event.preventDefault();
            let e: any = new Event('keydown');
            e.which = key;
            this.listElement?.focus();
            this.listElement?.dispatchEvent(e);
        } else if (this.list.length) {
            this.isExpanded = true;
        }
    }

    fireEvent() {
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
    }

    render() {
        if (this.list.length) {
            if (this.value) {
                const selectedItem = this.list.find(item => item.value === this.value);
                if (selectedItem) {
                    selectedItem.selected = true;
                    this.labelValue = selectedItem.label;
                } else {
                    const selectedIndex = this.list.findIndex((item) => item.selected);
                    if (selectedIndex !== -1) {
                        this.list[selectedIndex].selected = false;
                    }
                    this.labelValue = '';
                }
            } else {
                const selectedIndex = this.list.findIndex((item) => item.selected);
                if (selectedIndex !== -1) {
                    this.list[selectedIndex].selected = false;
                }
                this.labelValue = '';
            }
        }

        return html`
            <div class='jsd-autocomplete-wrapper ${this.theme}'>
                ${this.label ? html`<div class='label'>${this.label}</div>` : html`<div class='empty-label'></div>`}
                <div id='${this.id}' class='wrapper-box autocomplete-wrapper 
                    ${this.value ? 'selected' : ''} 
                    ${this.isExpanded && this.list.length ? 'expanded' : ''}
                    ${this.inFocus ? 'focus' : ''}
                    ${this.disabled === 'true' ? 'disabled' : ''}
                    ${this.fullWidth === 'true' ? 'full-width' : ''}
                    ${this.errorMsg ? 'error' : ''}'>
                    <div class='input-wrapper ${this.loading ? 'loading' : ''}'
                         aria-haspopup='listbox'
                         @blur='${this.toggleFocus}'
                         aria-expanded='${this.isExpanded}'>
                         <input id='${this.id}-input' 
                            @focus='${() => this.toggleFocus(false)}'
                            @blur='${this.handleBlur}' 
                            @keydown='${(e) => this.handleButtonPress(e, this)}'
                            @input='${(e) => { this.value = e.target.value; this.throttledFunction(e) }}'
                            .value='${this.value}'
                            ?autofocus='${this.autofocus}'
                            maxlength="${ifDefined(this.maxLength === -1 ? undefined : this.maxLength)}"
                            pattern="${ifDefined(this.pattern ? this.pattern : undefined)}"
                            placeholder='${this.placeholder}'
                            aria-labelledby='state state-button' />
                    </div>
                    <ul id='${this.id}-list' tabindex='-1' class='custom-select' role='listbox'
                        aria-labelledby="state"
                        @blur='${this.handleBlur}'
                        @mouseover='${this.hoverList}'
                        @keydown='${this.handleKeyPress}'>
                        ${this.list.map((item: any) => html`
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