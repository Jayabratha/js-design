import {css} from 'lit-element';

export const style = css`.jsd-datepicker{margin-bottom:3.3rem}.datepicker-wrapper{position:absolute;width:300px;overflow:hidden;box-sizing:border-box;transition:min-width .2s}.datepicker-wrapper.full-width{width:100%}.datepicker-wrapper.focus,.datepicker-wrapper:focus{background-color:var(--color-white);border:1px solid var(--color-primary)}.datepicker-wrapper:not(.disabled):hover,.datepicker-wrapper:not(.disabled).hover{background:#fff}.datepicker-wrapper .datepicker-button{position:absolute;width:100%;height:calc(3.3rem - 2px);padding:1rem;background:transparent;border:none;cursor:pointer;text-align:left;font-size:1rem;box-sizing:border-box;outline:solid 1px transparent;line-height:calc(1.3rem - 2px);color:var(--color-placeholder)}.datepicker-wrapper .datepicker-button.disabled{opacity:.8;cursor:not-allowed}.datepicker-wrapper .datepicker-button .calender-icon{position:absolute;right:1rem;top:1rem;height:12px;width:12px;border:1px solid var(--color-icon);border-radius:4px}.datepicker-wrapper .datepicker-button .calender-icon::after{content:"";position:absolute;top:2px;left:2px;width:4px;height:4px;background-color:var(--color-icon);border-radius:50%}.datepicker-wrapper.selected:not(.expanded) .datepicker-button{color:var(--color-black)}.datepicker-wrapper .datepicker{position:relative;top:0;padding:0;margin:0;outline:none;overflow:hidden;max-height:0;margin-top:calc(3.3rem - 2px);transition:max-height .8s}.datepicker-wrapper .datepicker .date-nav{position:relative;background-color:var(--color-secondary);height:3.3rem;display:flex;align-items:center;justify-content:space-between;padding:0 1rem}.datepicker-wrapper .datepicker .date-nav .date-link{height:3.3rem;line-height:3.3rem;cursor:pointer;box-sizing:border-box}.datepicker-wrapper .datepicker .date-nav .date-link.selected,.datepicker-wrapper .datepicker .date-nav .date-link:hover{border-bottom:2px solid var(--color-primary)}.datepicker-wrapper .datepicker .date-nav .arrow-button{position:relative;padding:5px;cursor:pointer;height:10px}.datepicker-wrapper .datepicker .date-nav .arrow-button .arrow{border:solid var(--color-placeholder);border-width:0 1px 1px 0;padding:3px}.datepicker-wrapper .datepicker .date-nav .arrow-button .arrow.prev{transform:rotate(135deg)}.datepicker-wrapper .datepicker .date-nav .arrow-button .arrow.next{transform:rotate(-45deg)}.datepicker-wrapper .datepicker .date-nav .preview{display:flex;align-items:center;font-size:1.2rem;height:100%;color:var(--color-primary)}.datepicker-wrapper .datepicker .date-nav .preview .separator{background-color:var(--color-label);width:3px;height:3px;border-radius:50%;margin:0 4px}.datepicker-wrapper .datepicker .calender{position:relative;height:auto;padding:.5rem 1rem 1rem;font-size:1rem}.datepicker-wrapper .datepicker .calender .row{display:flex;justify-content:space-between;align-items:center;text-align:center;margin:1rem 0}.datepicker-wrapper .datepicker .calender .row>*{width:25px;height:25px;line-height:25px;border:1px solid transparent;border-radius:50%;cursor:pointer}.datepicker-wrapper .datepicker .calender .row>*.selected{background-color:var(--color-primary);color:var(--color-white);box-shadow:0 0 0 5px var(--color-secondary)}.datepicker-wrapper .datepicker .calender .row>.date:hover,.datepicker-wrapper .datepicker .calender .row>.month:hover{border-color:var(--color-primary)}.datepicker-wrapper .datepicker .calender .row>.date:not(.current){color:var(--color-label)}.datepicker-wrapper .datepicker .calender .row:last-child{margin-bottom:0}.datepicker-wrapper .datepicker .calender .row.header{font-size:.8rem;margin:0;color:var(--color-label)}.datepicker-wrapper .datepicker .calender .item-wrapper{display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 .5rem -0.5rem}.datepicker-wrapper .datepicker .calender .item-wrapper .item{width:30%;height:25px;line-height:25px;border:1px solid transparent;cursor:pointer;font-size:1rem;border-radius:5px;margin:1rem 0;text-align:center}.datepicker-wrapper .datepicker .calender .item-wrapper .item:hover{border-color:var(--color-primary)}.datepicker-wrapper .datepicker .calender .item-wrapper .item.selected{background-color:var(--color-primary);color:var(--color-white);box-shadow:0 0 0 5px var(--color-secondary)}.datepicker-wrapper.expanded{height:auto;min-width:330px;max-height:500px;background:#fff;border:1px solid var(--color-primary);z-index:1}.datepicker-wrapper.expanded .datepicker{max-height:500px;border-top:1px solid var(--color-border)}`;