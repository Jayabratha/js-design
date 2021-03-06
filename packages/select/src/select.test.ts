import { Select } from './select';

suite('jsd-select', () => {
    let element: Select;

    setup(() => {
        element = <Select>document.createElement('jsd-select');
        document.body.appendChild(element);
    });

    teardown(() => {
        document.body.removeChild(element);
    });

    test('initializes as jsd-select', () => {
        assert.instanceOf(element, Select);
    });

    test('generates same number of options as the length of the `list` attribute array', async () => {
        element.setAttribute('list', '["Male", "Female", "Other"]');
        await element.updateComplete;
        const options = element.shadowRoot!.querySelectorAll('li');
        assert.equal(options.length, 3);
    });

    test('makes the rselect take full avialable width if `full-width` attribute is set to `true`', async () => {
        element.setAttribute('full-width', 'true');
        element.setAttribute('list', '["Male", "Female", "Other"]');
        await element.updateComplete;
        const radioWrapper = element.shadowRoot!.querySelector('.select-wrapper');
        assert.equal(radioWrapper!.classList.contains('full-width'), true);
    });

    test('makes the select error themed and shows error message when `error-msg` attribute is set with an error message', async () => {
        element.setAttribute('id', 'gender');
        element.setAttribute('list', '["Male", "Female", "Other"]');
        element.setAttribute('error-msg', 'Error');
        await element.updateComplete;
        const selectWrapper = element.shadowRoot!.querySelector('.select-wrapper');
        const errorMessage = <HTMLElement>element.shadowRoot!.querySelector('.error-message');
        assert.equal(selectWrapper!.classList.contains('error'), true);
        assert.isNotNull(errorMessage);
        assert.equal(errorMessage!.innerText.toLowerCase(), 'error');
    });

    test('makes the select preselected if `value` attribute is passed', async () => {
        element.setAttribute('id', 'gender');
        element.setAttribute('list', '["Male", "Female", "Other"]');
        element.setAttribute('value', 'Male');
        await element.updateComplete;
        const selectedItem = <HTMLInputElement>element.shadowRoot!.querySelector('#gender-Male');
        assert.equal(selectedItem!.classList.contains('selected'), true);
    });

    test('makes the select disabled if `disabled` attribute is set `true`', async () => {
        element.setAttribute('disabled', 'true');
        element.setAttribute('list', '["Male", "Female", "Other"]');
        await element.updateComplete;
        const selectWrapper = element.shadowRoot!.querySelector('.select-wrapper');
        assert.equal(selectWrapper!.classList.contains('disabled'), true);
    });
});