import { Input } from './input';

suite('jsd-input', () => {
    let element: Input;

    setup(() => {
        element = <Input>document.createElement('jsd-input');
        document.body.appendChild(element);
    });

    teardown(() => {
        document.body.removeChild(element);
    });

    test('initializes as jsd-input', () => {
        assert.instanceOf(element, Input);
    });

    test('initializes the button of provided type if `type` attribute is set', async () => {
        element.setAttribute('type', 'text');
        await element.updateComplete;
        const input = element.shadowRoot!.querySelector('input');
        assert.equal(input!.type, 'text');
    })

    test('adds a label element to the button if `label` attribute with the label name is passed', async () => {
        element.setAttribute('label','Input Label');
        await element.updateComplete;
        const label = element.shadowRoot!.querySelector('label');
        assert.isNotNull(label);
        assert.equal(label!.innerText.toLowerCase(), 'input label');
    });

    test('adds id attribute to the input and sets for on the label if `id` attribute is set', async () => {
        element.setAttribute('id','test');
        element.setAttribute('label','Test label');
        await element.updateComplete;
        const input = element.shadowRoot!.querySelector('input');
        const label = element.shadowRoot!.querySelector('label');
        assert.equal(input!.id, 'test');
        assert.equal(label!.getAttribute('for'), 'test');
    });

    test('makes the input full width when `full-width` property is set to `true`', async () => {
        element.setAttribute('full-width', 'true');
        await element.updateComplete;
        const input = element.shadowRoot!.querySelector('input');
        assert.equal(input!.classList.contains('full-width'), true);
    });

    test('makes the input disabled when `disabled` attribute is set to `true`', async () => {
        element.setAttribute('disabled', 'true');
        await element.updateComplete;
        const input = element.shadowRoot!.querySelector('input');
        assert.equal(input!.disabled, true);
    });

    test('makes the input dark themed when `theme` property is set to `dark`', async () => {
        element.setAttribute('theme', 'dark');
        await element.updateComplete;
        const inputWrapper = element.shadowRoot!.querySelector('.text-input');
        assert.equal(inputWrapper!.classList.contains('dark'), true);
    });

    test('makes the input error themed and shows error message when `error-msg` attribute is set with an error message', async () => {
        element.setAttribute('error-msg', 'Error');
        await element.updateComplete;
        const input = element.shadowRoot!.querySelector('input');
        const errorMessage = <HTMLElement>element.shadowRoot!.querySelector('.error-message');
        assert.equal(input!.classList.contains('error'), true);
        assert.isNotNull(errorMessage);
        assert.equal(errorMessage!.innerText.toLowerCase(), 'error');
    });

    test('must set the input value property if `value` attribute is set', async () => {
        element.setAttribute('value', 'Input value');
        await element.updateComplete;
        const input = element.shadowRoot!.querySelector('input');
        assert.equal(input!.value, 'Input value');
    });

    test('makes the input an icon input when `icon` property is set to `true`', async () => {
        const iconElem = document.createElement('span');
        iconElem.setAttribute('slot', 'icon');
        iconElem.innerHTML = '&hearts;';
        element.setAttribute('icon', 'true');
        element.appendChild(iconElem);
        await element.updateComplete;
        const icon = element.querySelector('span[slot="icon"]');
        assert.isNotNull(icon);
    });
});