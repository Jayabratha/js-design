# `<jsd-checkbox>` 

Simple checkbox input web-component to be use accross web irrespective of frameworks.

## Installation

```sh
npm install @jsdesign/jsd-checkbox
```

## Attributes

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| `id` | `string` | `''` | Sets the id attribute for the checkbox input. Preferred when used inside forms.
| `name` | `string` | `''` | Sets the name attribute for the input. Preferred when used inside forms.
| `label` | `string` | `''` | Label to display for the checkbox input.
| `disabled` | `boolean` | -- | When attribute is present, checkbox input is disabled cannot be interacted with.
| `required` | `boolean` | -- | When attribute is present, the input field is marked mandatory.
| `list` | `Array` | `[]` | Creates the checkbox list based on this attribute. Should be a array of value string.
| `value` | `Array` | `[]` | Sets the default checked values. Must be list of valid values.
| `theme` | `string` | `'light` | When `'dark'`, the input will adapt to dark theme.
| `inline` | `boolean` | -- | When attribute is present, the checkbox inputs will be aligned inline.
| `error-msg` | `string` | `''` | When error message string is provided, the checkbox input will be error themed and error message is displayed.


## Examples

### Default Radio

![](images/checkbox.png)

```html 
<jsd-checkbox id='snacks' label='snacks' value='["Samosa"]' list='["Samosa", "Kachori", "Jalebi"]' onchange="test(event)"></jsd-checkbox>
```

### Inline Radio

![](images/checkbox-inline.png)

```html 
<jsd-checkbox id='snacks' inline label='snacks' value='["Samosa"]' list='["Samosa", "Kachori", "Jalebi"]'></jsd-checkbox>
```

### Radio with error

![](images/checkbox-error.png)

```html 
<jsd-checkbox id='snacks-disabled' label='snacks' error-msg='Please select your choices' list='["Samosa", "Kachori", "Jalebi"]'>
</jsd-checkbox>
```

### Disabled Radio

![](images/checkbox-disabled.png)

```html 
<jsd-checkbox id='snacks-disabled' disabled label='snacks' value='["Samosa"]' list='["Samosa", "Kachori", "Jalebi"]'>
</jsd-checkbox>
```

### Cutomizable property list

| Name | Default
| ---- | ---- 
|--color-primary | #1eba68;
|--color-primary-dark | #1ba75e;
|--color-secondary | #f6f6f6;
|--color-secondary-dark | #efefef;
|--color-secondary-darktheme | rgba(255, 255, 255, 0.3);
|--color-secondary-dark-darktheme | rgba(255, 255, 255, 0.6);
|--color-error | #dd4421;
|--color-error-background | #ffebe6;
|--color-placeholder | #737373;
|--color-placeholder-disabled | #e0e0e0;
|--color-placeholder-darktheme | #e0e0e0;
|--color-label | #909090;
|--color-black | #2c2c2c;
|--color-header-black | #252525;
|--color-header-tag | #747373;
|--color-white | #ffffff;
|--color-border | #edebeb;
|--border-radius | 0.5rem;
|--border-width | 1px;
|--border-width-hover | 3px;
|--label-spacing | 0.2rem;
|--label-case | uppercase;
|--label-font-size | 0.8rem;
|--button-font-weight | 500;
