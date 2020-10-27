import page from './pageModel';

fixture('Práctica 12 con testcafe')
    .page('https://devexpress.github.io/testcafe/example/');

test('Probar mover un slider', async t => {
    await t

        .click(page.checkbox12)
        .expect(page.checkbox12.checked).ok()

    .dragToElement(page.slider.handle, page.slider.value.withText('5'), { speed: 0.1 })
        .dragToElement(page.slider.handle, page.slider.value.withText('1'), { speed: 0.1 })

})