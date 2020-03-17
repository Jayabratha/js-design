# `<jsd-select>` 

Simple select dropdown web-component to be use accross web irrespective of frameworks.

## Installation

```sh
npm install @jsdesign/jsd-select
```

## Attributes

| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| `id` | `string` | `''` | Sets the id attribute for the select. Preferred when used inside forms.
| `name` | `string` | `''` | Sets the name attribute for the select. Preferred when used inside forms.
| `label` | `string` | `''` | Label to display for the select.
| `placeholder` | `string` | `'Select an option'` | Sets the select placeholder.
| `disabled` | `string` | `'false'` | When `'true'` select is disabled cannot be interacted with.
| `autofocus` | `boolean` | `false` | Autofocus the select element.
| `list` | `Array` | `[]` | Creates the radio list based on this attribute. Should be a array of value string of object with `value` and `label`.
| `value` | `string` | `''` | Sets the default checked value of the radio.
| `theme` | `string` | `'light` | When `'dark'`, the input will adapt to dark theme.
| `full-width` | `string` | `'false'` | When `'true'`, the  radio chip will take full width of the container.
| `error-msg` | `string` | `''` | When error message string is provided, the input will be error themed and error message is displayed.
| `help-msg` | `string` | `''` | When help message string is provided, help message is displayed.
| `filter-on-type` | `string` | `false` | Enables filter in to filter select list


## Examples

### Default Radio chip

![](images/select.png)
![](images/select-expanded.png)

```html 
<jsd-select id='state' value='West Bengal' list='["West Bengal", "Karnataka", "Uttar Pradesh", "Kerala", "Tamil Nadu", "Madhya Pradesh"]'>
</jsd-select>
```

### Radio chip with error

![](images/select-error.png)

```html 
<jsd-select id='state' error-msg='Select an option please' list='["West Bengal", "Karnataka", "Uttar Pradesh", "Kerala", "Tamil Nadu", "Madhya Pradesh"]'>
</jsd-select>
```

### Disabled Radio chip

![](images/select-disabled.png)

```html 
<jsd-select id='state' disabled='true' list='["West Bengal", "Karnataka", "Uttar Pradesh", "Kerala", "Tamil Nadu", "Madhya Pradesh"]'>
</jsd-select>
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
