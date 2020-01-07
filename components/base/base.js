import { css } from 'lit-element';
export const baseStyles = css `
    :host {
        --color-primary: #50a2f4;
        --color-primary-dark: #107ce8;
        --color-secondary: #f6f6f6;
        --color-secondary-dark: #efefef;
        --color-error: #c12316;
        --color-error-background: #f9e8e8;
        --color-placeholder: #737373;
        --color-label: #909090;
        --color-black: #2c2c2c;
        --color-header-black: #252525;
        --color-header-tag: #747373;
        --color-white: #ffffff;
        --color-border: #edebeb;
        --border-radius: 0.5rem;
        --border-width: 1px;
        --border-width-hover: 3px;
        --label-spacing: 0.2rem;
        --label-case: uppercase;
        --label-font-size: 0.8rem;

        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol";
        box-sizing: border-box;
        font-feature-settings: "kern";
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }
    .label {
        display: block;
        font-size: var(--label-font-size);
        padding: 0.6rem;
        text-transform: var(--label-case);
        letter-spacing: var(--label-spacing);
        color: var(--color-label);
    }
`;
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
//# sourceMappingURL=base.js.map