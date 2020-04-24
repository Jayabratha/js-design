import { LitElement, customElement, html, property } from 'lit-element';
import { baseStyles } from '@jsdesign/jsd-base';
import { style } from './datepicker-css';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

@customElement('jsd-datepicker')
export class Datepicker extends LitElement {

    @property({ type: String }) id = 'test';
    @property({ type: String }) name = '';
    @property({ type: String }) formId = '';
    @property({ type: String }) label = 'select';
    @property({ type: String }) placeholder = 'Select date';
    @property({ type: Boolean }) disabled = false;
    @property({ type: Boolean, attribute: 'is-expanded', reflect: true }) isExpanded = false;
    @property({ type: Boolean, attribute: 'full-width' }) fullWidth = false;
    @property({ type: String, attribute: 'value', reflect: true }) selectedValue;
    @property({ type: Boolean, attribute: false }) inFocus = false;
    @property({ type: String, attribute: false }) currentTab = 'day';
    @property({ type: Number, attribute: false }) day;
    @property({ type: Number, attribute: false }) month;
    @property({ type: Number, attribute: false }) year;
    @property({ type: Number, attribute: false }) years;

    datepickerElement: HTMLElement | null;
    dates: any[] = [];
    date: Date;
    selectedDate: Date | null;

    constructor() {
        super();
        this.datepickerElement = null;
        this.selectedDate = null;
        this.date = new Date();
        this.day = this.date.getDate();
        this.month = this.date.getMonth();
        this.year = this.date.getFullYear();
        this.createYears(this.year);
        this.createDates(this.year, this.month);
    }

    firstUpdated() {
        if (this.shadowRoot) {
            this.datepickerElement = this.shadowRoot.getElementById(`${this.id}-datepicker`);
        } else {
            this.datepickerElement = document.getElementById(`${this.id}-datepicker`);
        }
        if (this.selectedValue) {
            this.selectedDate = new Date(this.selectedValue);
            this.day = this.selectedDate.getDate();
            this.month = this.selectedDate.getMonth();
            this.year = this.selectedDate.getFullYear();
            this.createYears(this.year);
            this.createDates(this.year, this.month);
        }
    }

    static get styles() {
        return [
            baseStyles,
            style
        ]
    }

    createYears(year: number) {
        const firstYear = year - (year % 10);
        this.years = [];
        for (let i = 0; i < 12; i++) {
            this.years.push(firstYear + i);
        }
    }

    createDates(year: number, month: number) {
        let startDate = new Date(year, month, 1);
        let lastDate = new Date(year, month + 1, 0);
        let dayCount = 1;
        let startDay = startDate.getDay();
        let lastDay = lastDate.getDate();

        this.dates = [];
        for (let weekCount = 0; (weekCount <= 4 || dayCount <= lastDay); weekCount++) {
            let week: any[] = [];
            for (let day = 0; day < 7; day++) {
                if (dayCount > lastDay) {
                    week.push(new Date(year, month + 1, dayCount - lastDay));
                    dayCount++;
                } else if (weekCount === 0 && day < startDay) {
                    week.push(new Date(year, month, (day - startDay) + 1));
                } else {
                    week.push(new Date(year, month, dayCount));
                    dayCount++;
                }

            }
            this.dates.push(week);
        }
    }

    toggleDatePicker(close) {
        if (close) {
            this.isExpanded = false;
        } else {
            this.isExpanded = !this.isExpanded;
            if (this.isExpanded) {
                this.datepickerElement?.focus();
            }
        }
    }

    toggleFocus(defocus = false) {
        if (defocus) {
            this.inFocus = false;
        } else {
            this.inFocus = !this.inFocus;
        }
    }

    handleBlur(event) {
        if (!event.relatedTarget || (event.relatedTarget && event.relatedTarget.id !== `${this.id}-button`)) {
            this.toggleDatePicker(true);
        }
    }

    selectTab(tab) {
        this.currentTab = tab;
    }

    next() {
        switch (this.currentTab) {
            case 'day': {
                if (this.month === 11) {
                    this.month = 0;
                    this.year = this.year + 1;
                } else {
                    this.month = this.month + 1;
                }
                this.createDates(this.year, this.month);
                break;
            }
            case 'month': {
                this.year = this.year + 1;
                break;
            }
            case 'year': {
                this.year = this.year + 10;
                this.createYears(this.year);
                break;
            }
        }
    }

    prev() {
        switch (this.currentTab) {
            case 'day': {
                if (this.month === 0) {
                    this.month = 11;
                    this.year = this.year - 1;
                } else {
                    this.month = this.month - 1;
                }
                this.createDates(this.year, this.month);
                break;
            }
            case 'month': {
                this.year = this.year - 1;
                break;
            }
            case 'year': {
                this.year = this.year - 10;
                this.createYears(this.year);
                break;
            }
        }
    }

    selectDate(day) {
        this.day = day.getDate();
        this.isExpanded = false;
        this.selectedDate = new Date(this.year, this.month, this.day);
        let ISOyear = this.year;
        let ISOmonth = (this.month + 1) < 10 ? `0${this.month + 1}` : this.month + 1;
        let ISOday = this.day < 10 ? `0${this.day}` : this.day;
        this.selectedValue = `${ISOyear}-${ISOmonth}-${ISOday}`;
    }

    selectMonth(month) {
        this.month = month;
        this.createDates(this.year, this.month);
        this.currentTab = 'day';
    }

    selectYear(year) {
        this.year = year;
        this.createDates(this.year, this.month);
        this.currentTab = 'month';
    }

    render() {
        return html`
                <div class='jsd-datepicker'>
                    <div class='label'>${this.label}</div>
                    <div id='${this.id}' class='wrapper-box datepicker-wrapper 
                        ${this.selectedValue ? 'selected' : ''}  
                        ${this.isExpanded ? 'expanded' : ''} 
                        ${this.inFocus ? 'focus' : ''}
                        ${this.fullWidth ? 'full-width' : ''}
                        ${this.disabled ? 'disabled' : ''}'>
                        ${this.disabled ? 
                            html`<div id='${this.id}-button' class='datepicker-button disabled'>
                                    <span>${this.selectedDate ? this.selectedDate.toLocaleDateString() : 'Select your date'}</span>
                                    <span class='calender-icon'></span>
                                </div>` :
                            html`<div id='${this.id}-button' class='datepicker-button' 
                                    tabindex='0'
                                    @click='${() => this.toggleDatePicker(false)}'
                                    @focus='${() => this.toggleFocus(false)}'
                                    @blur='${() => this.toggleFocus(true)}' 
                                    >
                                    <span>${this.selectedDate ? this.selectedDate.toLocaleDateString() : 'Select your date'}</span>
                                    <span class='calender-icon'></span>
                            </div>`}    
                        <div id='${this.id}-datepicker' class='datepicker'
                            tabindex='-1' 
                            @blur='${this.handleBlur}'>
                            <div class='date-nav'>
                                <div class='arrow-button' @click='${this.prev}'>
                                    <div class='arrow prev'></div>
                                </div>
                                <div class='preview'>
                                    <div class='date-link day ${this.currentTab === 'day' ? 'selected' : ''}' @click='${() => this.selectTab('day')}'>${this.day}</div>
                                    <div class='separator'></div>
                                    <div class='date-link month ${this.currentTab === 'month' ? 'selected' : ''}' @click='${() => this.selectTab('month')}'>${months[this.month]}</div>
                                    <div class='separator'></div>
                                    <div class='date-link year ${this.currentTab === 'year' ? 'selected' : ''}' @click='${() => this.selectTab('year')}'>${this.year}</div>
                                </div>
                                <div class='arrow-button' @click='${this.next}'>
                                    <div class='arrow next'></div>
                                </div>
                            </div>
                            <div class='calender'>
                                <div class='date-wrapper' ?hidden='${this.currentTab !== 'day'}'>
                                    <div class='header row'>
                                        <div>S</div>
                                        <div>M</div>
                                        <div>T</div>
                                        <div>W</div>
                                        <div>T</div>
                                        <div>F</div>
                                        <div>S</div>
                                    </div>
                                    <div class='animate-wrapper'>
                                        ${this.dates.map((week: []) => html`
                                            <div class='row'>
                                                ${week.map((day: Date) => html`
                                                ${day ?
                                                    html`<div class='${day ? 'date' : ''} 
                                                    ${day.getDate() === this.day && day.getMonth() === this.month ? 'selected' : ''} 
                                                    ${day.getMonth() === this.month ? 'current' : ''}'
                                                    @click='${() => this.selectDate(day)}'>${day.getDate()}</div>` :
                                                    html`<div></div>`}                                  
                                                `)}
                                            </div>`
                                        )}
                                    </div>  
                                </div>
                                <div ?hidden='${this.currentTab !== 'month'}'>
                                    <div class='item-wrapper'>${months.map((month, index) =>
                                        html`<div class='item month ${this.month === index ? 'selected' : ''}' @click='${() => this.selectMonth(index)}'>${month}</div>`)}
                                    </div>  
                                </div>
                                <div ?hidden='${this.currentTab !== 'year'}'>
                                    <div class='item-wrapper'>${this.years.map((year) =>
                                        html`<div class='item year ${this.year === year ? 'selected' : ''}' @click='${() => this.selectYear(year)}'>${year}</div>`)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }
}