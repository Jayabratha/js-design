import { style } from './base-css';

export const baseStyles = style;

export const keyCode = {
   BACKSPACE: 8,
   TAB: 9,
   RETURN: 13,
   ESC: 27,
   SPACE: 32,
   PAGE_UP: 33,
   PAGE_DOWN: 34,
   END: 35,
   HOME: 36,
   LEFT: 37,
   UP: 38,
   RIGHT: 39,
   DOWN: 40,
   DELETE: 46
};

export type ThemeType = 'light' | 'dark';

export function findParentForm(node) {
   var parent = node.parentNode;

   while (parent !== null) {
      if (parent.nodeName === 'FORM') {
         return parent;
      }
      parent = parent.parentNode;
   }

   return null;
}

export function handleFormSubmit(event, elem) {
   let key = event.which || event.keyCode
   if (key === 13) {
      const form = findParentForm(elem);
      if (form) {
         form.dispatchEvent(new Event('submit', {
            cancelable: true
         }));
      }
   }
}