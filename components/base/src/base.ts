import { css } from 'lit-element';

export const baseStyles = css`
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
        --color-input: #edebeb;
        --color-white: #ffffff;
        --border-radius: 0.5rem;

        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol";
        box-sizing: border-box;
        font-feature-settings: "kern";
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }
`;
