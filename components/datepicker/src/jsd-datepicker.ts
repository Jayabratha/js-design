import { LitElement, customElement, html, css, property } from 'lit-element';
import { baseStyles } from '@jsdesign/jsd-base';
// import { keyCode } from '@jsdesign/jsd-base';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

@customElement('jsd-datepicker')
export class Datepicker extends LitElement {

    @property({ type: String }) id = 'test';
    @property({ type: String }) name = '';
    @property({ type: String }) formId = '';
    @property({ type: String }) label = 'select';
    @property({ type: String }) placeholder = 'Select date'
    @property({ type: Boolean, attribute: 'is-expanded', reflect: true }) isExpanded = false;
    @property({ type: Boolean, attribute: false }) inFocus = false;
    @property({ type: String, attribute: 'value', reflect: true }) selectedValue = '';

    datepickerElement: HTMLElement | null;
    dates: any[] = [];
    today: number;
    day: number;
    month: number;
    year: number;

    constructor() {
        super();
        let date = new Date();
        this.today = date.getDate();
        this.datepickerElement = null;
        this.day = this.today;
        this.month = date.getMonth();
        this.year = 2021;
        this.createDates(this.year, this.month);
    }

    firstUpdated() {
        if (this.shadowRoot) {
            this.datepickerElement = this.shadowRoot.getElementById(`${this.id}-datepicker`);
        } else {
            this.datepickerElement = document.getElementById(`${this.id}-datepicker`);
        }
    }

    static get styles() {
        return [
            baseStyles,
            css`
            .datepicker-wrapper {
                position: absolute;
                width: 100%;
                min-width: 100%;
                border: 1px solid var(--color-border);
                background-color: var(--color-secondary);
                border-radius: 0.5rem;
                height: 3.3rem;
                overflow: hidden;
                box-sizing: border-box;
                transition: min-width 0.2s;
            }
    
            .datepicker-wrapper:hover,
            .datepicker-wrapper.hover {
                background: #ffffff;
            }
            
            .datepicker-wrapper.focus,
            .datepicker-wrapper:focus {
                background-color: var(--color-white);
                border: 1px solid var(--color-primary);
            }
    
            .datepicker-wrapper.expanded {
                height: auto;
                min-width: 330px;
                max-height: 500px;
                background: #ffffff;
                border: 1px solid var(--color-primary);
            }
    
            .datepicker-button {
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
                box-sizing: border-box;
                outline: solid 1px transparent;
                line-height: calc(1.3rem - 2px);
                color: var(--color-placeholder);
            }
    
            .calender-icon {
                position: absolute;
                right: 1rem;
                top: 1rem;
                height: 12px;
                width: 12px;
                border: 1px solid var(--color-placeholder);
                border-radius: 4px;
            }
    
            .calender-icon::after {
                content: '';
                position: absolute;
                top: 2px;
                left: 2px;
                width: 4px;
                height: 4px;
                background-color: var(--color-placeholder);
                border-radius: 50%;
            }
    
            .datepicker {
                position: relative;
                top: 0;
                padding: 0;
                margin: 0;
                outline: none;
                overflow: hidden;
                max-height: 0;
                margin-top: calc(3.3rem - 2px);
                transition: max-height 0.8s;
            }
    
            .datepicker-wrapper.expanded .datepicker {
                max-height: 500px;
                border-top: 1px solid var(--color-border);
            }
    
            .date-nav {
                position: relative;
                background-color: var(--color-secondary);
                height: 3.3rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 1rem;
            }
    
            .date-link {
                height: 3.3rem;
                line-height: 3.3rem;
                cursor: pointer;
                box-sizing: border-box;
            }
    
            .date-link.selected,
            .date-link:hover {
                border-bottom: 2px solid var(--color-primary);
            }
    
            .arrow {
                border: solid var(--color-placeholder);
                border-width: 0 1px 1px 0;
                display: inline-block;
                padding: 3px;
                top: 1.3rem;
                cursor: pointer;
            }
    
            .arrow.prev {
                transform: rotate(135deg);
            }
    
            .arrow.next {
                transform: rotate(-45deg);
            }
    
            .preview {
                display: flex;
                align-items: center;
                font-size: 1.2rem;
                height: 100%;
                color: var(--color-primary);
            }
    
            .separator {
                background-color: var(--color-label);
                width: 3px;
                height: 3px;
                border-radius: 50%;
                margin: 0 4px;
            }
    
            .calender {
                position: relative;
                height: auto;
                padding: 0.5rem 1rem 1rem;
                font-size: 1rem;
            }
    
            .row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                text-align: center;
                margin: 1rem 0;
            }
    
            .row>* {
                width: 25px;
                height: 25px;
                line-height: 25px;
                border: 1px solid transparent;
                border-radius: 50%;
                cursor: pointer;
            }
    
            .row>.month {
                font-size: 1rem;
                width: 62px;
                border-radius: 5px;
            }
    
            .row>*.selected {
                background-color: var(--color-primary);
                color: var(--color-white);
                box-shadow: 0 0 0 5px var(--color-secondary);
            }
    
            .row>.date:hover,
            .row>.month:hover  {
                border-color: var(--color-primary);
            }

            .row>.date:not(.current) {
                color: var(--color-label);
            }
    
            .row:last-child {
                margin-bottom: 0;
            }
    
            .header {
                font-size: 0.8rem;
                margin: 0;
                color: var(--color-label);
            }
            `
        ]
    }

    createDates(year: number, month: number) {
        let startDate = new Date(year, month, 1);
        let lastDate = new Date(year, month + 1, 0);
        let dayCount = 1;
        let startDay = startDate.getDay();
        let lastDay = lastDate.getDate();

        console.log(startDate, lastDate, startDay, lastDay);

        for (let weekCount = 0; weekCount < 5; weekCount++) {
            let week: any[] = [];
            for (let day = 0; day < 7; day++) {
                if (dayCount > lastDay) {
                    week.push(new Date(year, month + 1, dayCount - lastDay));
                    dayCount++;
                } else if (weekCount === 0 && day < startDay) {
                    week.push(new Date(year, month, (day - startDay) + 1));
                    //week.push('');
                } else {
                    week.push(new Date(year, month, dayCount));
                    dayCount++;
                }

            }
            this.dates.push(week);
        }
        console.log(this.dates);
    }

    toggleDatePicker(close) {
        console.log('click');
        if (close) {
            this.isExpanded = false;
        } else {
            this.isExpanded = !this.isExpanded;
            if (this.isExpanded) {
                console.log('focus datepicker');
                this.datepickerElement?.focus();
            }
        }
    }

    toggleFocus(defocus = false) {
        console.log('focus');
        if (defocus) {
            this.inFocus = false;
        } else {
            this.inFocus = !this.inFocus;
        }
    }

    handleBlur(event) {
        console.log('blur');
        if (!event.relatedTarget || (event.relatedTarget && event.relatedTarget.id !== `${this.id}-button`)) {
            this.toggleDatePicker(true);
        }
    }

    render() {
        return html`
                <div class='jsd-datepicker'>
                    <div class='label'>${this.label}</div>
                    <div id='${this.id}' class='datepicker-wrapper  
                        ${this.isExpanded ? 'expanded' : ''} 
                        ${this.inFocus ? 'focus' : ''}'>
                        <div id='${this.id}-button' class='datepicker-button' 
                            tabindex='0'
                            @click='${() => this.toggleDatePicker(false)}'
                            @focus='${() => this.toggleFocus(false)}'
                            @blur='${() => this.toggleFocus(true)}'
                            >
                            <span>Select your date</span>
                            <span class='calender-icon'></span>
                        </div>
                        <div id='${this.id}-datepicker' class='datepicker'
                            tabindex='-1' 
                            @blur='${this.handleBlur}'>
                            <div class='date-nav'>
                                <div class='arrow prev'></div>
                                <div class='preview'>
                                    <div class='date-link day selected'>${this.day}</div>
                                    <div class='separator'></div>
                                    <div class='date-link month'>${months[this.month]}</div>
                                    <div class='separator'></div>
                                    <div class='date-link year'>${this.year}</div>
                                </div>
                                <div class='arrow next'></div>
                            </div>
                            <div class='calender'>
                                <div class='date-wrapper'>
                                    <div class='header row'>
                                        <div>S</div>
                                        <div>M</div>
                                        <div>T</div>
                                        <div>W</div>
                                        <div>T</div>
                                        <div>F</div>
                                        <div>S</div>
                                    </div>
                                    ${this.dates.map((week: []) => html`
                                    <div class='row'>
                                        ${week.map((day: Date) => html`
                                        ${day ?
                html`<div class='${day ? 'date' : ''} 
                                            ${day.getDate() === this.today ? 'selected' : ''} 
                                            ${day.getMonth() === this.month ? 'current' : ''}
                                            '>${day.getDate()}</div>` :
                html`<div></div>`}                                  
                                        `)}
                                    </div>`)}   
                                </div>
                                <div class='month-wrapper' hidden>
                                    <div class='row test'>
                                        <div class='month'>Jan</div>
                                        <div class='month'>Feb</div>
                                        <div class='month'>Mar</div>
                                    </div>
                                    <div class='row'>
                                        <div class='month'>Apr</div>
                                        <div class='month'>May</div>
                                        <div class='month'>Jun</div>
                                    </div>
                                    <div class='row'>
                                        <div class='month'>Jul</div>
                                        <div class='month'>Aug</div>
                                        <div class='month'>Sep</div>
                                    </div>
                                    <div class='row'>
                                        <div class='month'>Oct</div>
                                        <div class='month'>Nov</div>
                                        <div class='month selected'>Dec</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }
}