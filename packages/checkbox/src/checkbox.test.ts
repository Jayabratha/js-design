import { Checkbox } from './checkbox';

suite('jsd-checkbox', () => {
    let element: Checkbox;

    setup(() => {
        element = <Checkbox>document.createElement('jsd-checkbox');
        document.body.appendChild(element);
    });

    teardown(() => {
        document.body.removeChild(element);
    });

    test('initializes as jsd-checkbox', () => {
        assert.instanceOf(element, Checkbox);
    });

    test('generates same number of checkbox inputs as the length of the `list` attribute array', async () => {
        element.setAttribute('list', '["Male", "Female", "Other"]');
        await element.updateComplete;
        const checkboxs = element.shadowRoot!.querySelectorAll('.checkbox');
        assert.equal(checkboxs.length, 3);
    });

    test('makes the checkbox inputs align inline if `inline` attribute is set to `true`', async () => {
        element.setAttribute('inline', 'true');
        await element.updateComplete;
        const checkboxWrapper = element.shadowRoot!.querySelector('.jsd-checkbox-wrapper');
        assert.equal(checkboxWrapper!.classList.contains('inline'), true);
    });

    test('makes the checkbox error themed and shows error message when `error-msg` attribute is set with an error message', async () => {
        element.setAttribute('error-msg', 'Error');
        await element.updateComplete;
        const checkboxWrapper = element.shadowRoot!.querySelector('.jsd-checkbox-wrapper');
        const errorMessage = <HTMLElement>element.shadowRoot!.querySelector('.error-message');
        assert.equal(checkboxWrapper!.classList.contains('error'), true);
        assert.isNotNull(errorMessage);
        assert.equal(errorMessage!.innerText.toLowerCase(), 'error');
    });

    test('makes the items preselected if `values` attribute is passed a valid array', async () => {
        element.setAttribute('id', 'gender');
        element.setAttribute('list', '["Male", "Female", "Other"]');
        element.setAttribute('value', '["Male"]');
        await element.updateComplete;
        const selectedItem = <HTMLInputElement>element.shadowRoot!.querySelector('#gender-Male');
        assert.equal(selectedItem!.checked, true);
    });

    test('makes the checkbox disabled if `disabled` attribute is set `true`', async () => {
        element.setAttribute('disabled', 'true');
        element.setAttribute('list', '["Male", "Female", "Other"]');
        await element.updateComplete;
        const label = element.shadowRoot!.querySelector('label');
        assert.equal(label!.classList.contains('disabled'), true);
    });
});