import { Radio } from './radio';

suite('jsd-radio', () => {
    let element: Radio;

    setup(() => {
        element = <Radio>document.createElement('jsd-radio');
        document.body.appendChild(element);
    });

    teardown(() => {
        document.body.removeChild(element);
    });

    test('initializes as jsd-radio', () => {
        assert.instanceOf(element, Radio);
    });

    test('generates same number of radio inputs as the length of the `list` attribute array', async () => {
        element.setAttribute('list', '["Male", "Female", "Other"]');
        await element.updateComplete;
        const radios = element.shadowRoot!.querySelectorAll('.radio');
        assert.equal(radios.length, 3);
    });

    test('makes the radio inputs align inline if `inline` attribute is set to `true`', async () => {
        element.setAttribute('inline', 'true');
        await element.updateComplete;
        const radioWrapper = element.shadowRoot!.querySelector('.jsd-radio-wrapper');
        assert.equal(radioWrapper!.classList.contains('inline'), true);
    });

    test('makes the radio error themed and shows error message when `error-msg` attribute is set with an error message', async () => {
        element.setAttribute('error-msg', 'Error');
        await element.updateComplete;
        const radioWrapper = element.shadowRoot!.querySelector('.jsd-radio-wrapper');
        const errorMessage = <HTMLElement>element.shadowRoot!.querySelector('.error-message');
        assert.equal(radioWrapper!.classList.contains('error'), true);
        assert.isNotNull(errorMessage);
        assert.equal(errorMessage!.innerText.toLowerCase(), 'error');
    });

    test('makes the item preselected if `value` attribute is passed', async () => {
        element.setAttribute('id', 'gender');
        element.setAttribute('list', '["Male", "Female", "Other"]');
        element.setAttribute('value', 'Male');
        await element.updateComplete;
        const selectedItem = <HTMLInputElement>element.shadowRoot!.querySelector('#gender-Male');
        assert.equal(selectedItem!.checked, true);
    });

    test('makes the radio disabled if `disabled` attribute is set `true`', async () => {
        element.setAttribute('disabled', 'true');
        element.setAttribute('list', '["Male", "Female", "Other"]');
        await element.updateComplete;
        const label = element.shadowRoot!.querySelector('label');
        assert.equal(label!.classList.contains('disabled'), true);
    });
});