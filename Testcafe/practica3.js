import page from './pageModel';

fixture('Práctica 3 con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Probar que muestra input y botón', async t => {
    await t
        .click(page.link3)

    await t
        .expect(page.input31.exists).ok()
        .expect(page.button32.exists).ok()
})

test('Probar que puede capturarse un email', async t => {
    await t
        .click(page.link3)

    await t
        .typeText(page.input31, 'tania@nada.com')
        .expect(page.input31.value).eql('tania@nada.com')
})

test('Probar que envio el email correctamente', async t => {
    await t
        .click(page.link3)

    await t
        .typeText(page.input31, 'tania@nada.com')
        .expect(page.input31.value).eql('tania@nada.com')
        .click(page.button32)

    await t
        .expect(page.text33.innerText).contains('sent', 'Prueba exitosa')
})

test('Probar sin capturarse un email', async t => {
    await t
        .click(page.link3)

    await t
        .expect(page.input31.value).eql('')
        .click(page.button32)

    await t
        .expect(page.output34.innerText).contains('Internal Server Error', 'Prueba exitosa')
})