# `<jsd-radio-chip>` 

Simple radio chip input web-component to be use accross web irrespective of frameworks.

## Installation

```sh
npm install @jsdesign/jsd-radio-chip
```

## Attributes

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| `id` | `string` | `''` | Sets the id attribute for the radio input. Preferred when used inside forms.
| `name` | `string` | `''` | Sets the name attribute for the radio input. Preferred when used inside forms.
| `label` | `string` | `''` | Label to display for the radio input.
| `disabled` | `string` | `'false'` | When `'true'` radio input is disabled cannot be interacted with.
| `required` | `string` | `'false'` | When `'true'` the input field is marked mandatory.
| `list` | `Array` | `[]` | Creates the radio list based on this attribute. Should be a array of value string.
| `value` | `string` | `''` | Sets the default checked value of the radio.
| `theme` | `string` | `'light` | When `'dark'`, the input will adapt to dark theme.
| `full-width` | `string` | `'false'` | When `'true'`, the  radio chip will take full width of the container.
| `error-msg` | `string` | `''` | When error message string is provided, the input will be error themed and error message is displayed.


## Examples

### Default Radio chip

![](images/radio-chip.png)

```html 
<jsd-radio-chip id='test' name='test' value='Male' label="gender" list='["Male", "Female", "Other"]' onchange='test(event)'></jsd-radio-chip>
```

### Inline Radio chip

![](images/radio-chip-inline.png)

```html 
<jsd-radio-chip id='gender' inline='true' name='gender' label="gender" value='Male' list='["Male", "Female", "Other"]'></jsd-radio-chip>
```

### Full width Radio chip

![](images/radio-chip-full-width.png)

```html 
<jsd-radio-chip id='gender' full-width='true' name='gender' label="gender" value='Male' list='["Male", "Female", "Other"]'></jsd-radio-chip>
```

### Radio chip with error

![](images/radio-chip-error.png)

```html 
<jsd-radio-chip id='error' name='error' value='' error-msg="Please select your gender" label="gender" list='["Male", "Female", "Other"]'></jsd-radio-chip>
```

### Disabled Radio chip

![](images/radio-chip-disabled.png)

```html 
<jsd-radio-chip id='disabled' name='disabled' disabled='true' value='Male' label="gender" list='["Male", "Female", "Other"]'>
</jsd-radio-chip>
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
