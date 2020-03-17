import { Button } from "./button";

suite('jsd-button', () => {
    let element: Button;

    setup(() => {
        element = <Button>document.createElement('jsd-button');
        document.body.appendChild(element);
    });

    teardown(() => {
        document.body.removeChild(element);
    });

    test('initializes as jsd-button', () => {
        assert.instanceOf(element, Button);
    });

    test('by default initialize the button as primary button', async () => {
        await element.updateComplete;
        const button = element.shadowRoot!.querySelector('button');
        assert.equal(button!.classList.contains('primary'), true);
    });

    test('initializes the button as secondary button if `btn-style` attribute is set to `secondary`', async () => {
        element.setAttribute('btn-style', 'secondary');
        await element.updateComplete;
        const button = element.shadowRoot!.querySelector('button');
        assert.equal(button!.classList.contains('secondary'), true);
    });

    test('initializes the button as tertiary button if `btn-style` attribute is set to `tertiary`', async () => {
        element.setAttribute('btn-style', 'tertiary');
        await element.updateComplete;
        const button = element.shadowRoot!.querySelector('button');
        assert.equal(button!.classList.contains('tertiary'), true);
    });

    test('makes the button disabled if `disabled` attribute is set `true`', async () => {
        element.setAttribute('disabled', 'true');
        await element.updateComplete;
        const button = element.shadowRoot!.querySelector('button')!;
        assert.equal(button.hasAttribute('disabled'), true);

        element.setAttribute('disabled', 'false');
        await element.updateComplete;
        assert.equal(button.hasAttribute('disabled'), false);
    });

    test('sets `aria-label` of the button when `label` is set', async () => {
        element.setAttribute('label', 'Unit Test Button');
        await element.updateComplete;
        const button = element.shadowRoot!.querySelector('button');
        assert.equal(button!.getAttribute('aria-label'), 'Unit Test Button');
    });

    test('makes the button full width when `full-width` attribute is set to `true`', async () => {
        element.setAttribute('full-width', 'true');
        await element.updateComplete;
        const button = element.shadowRoot!.querySelector('button');
        assert.equal(button!.classList.contains('full-width'), true);
    });

    test('makes the button dark themed when `theme` property is set to `true`', async () => {
        element.setAttribute('theme', 'dark');
        await element.updateComplete;
        const button = element.shadowRoot!.querySelector('button');
        assert.equal(button!.classList.contains('dark'), true);
    });

    test('makes the button an icon button when `icon` property is set to `true`', async () => {
        const iconElem = document.createElement('span');
        iconElem.setAttribute('slot', 'icon');
        iconElem.innerHTML = '&hearts;';
        element.setAttribute('icon', 'true');
        element.appendChild(iconElem);
        await element.updateComplete;
        const icon = element.querySelector('span[slot="icon"]');
        assert.isNotNull(icon);
    });

    test('makes the button an icon button with trailing icon when `trailing-icon` property is set to `true`', async () => {
        const iconElem = document.createElement('span');
        iconElem.setAttribute('slot', 'trailingIcon');
        iconElem.innerHTML = '&hearts;';
        element.setAttribute('trailing-icon', 'true');
        element.appendChild(iconElem);
        await element.updateComplete;
        const icon = element.querySelector('span[slot="trailingIcon"]');
        assert.isNotNull(icon);
    });
});