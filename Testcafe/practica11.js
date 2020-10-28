import page from './pageModel';

fixture('Práctica 11 con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Probar slider horizontal', async t => {
    await t
        .click(page.link11)

    await t
        .click(page.slider111)
        .typeText(page.slider111, "3.5", { speed: 0.1 })
        .expect(page.slider111.value).eql('3.5')

})

test('Probar slider horizontal con flechas', async t => {
    await t
        .click(page.link11)

    await t
        .click(page.slider111)
        .pressKey('RIGHT', { speed: 0.1 })
        .pressKey('RIGHT')
        .pressKey('RIGHT')
        .pressKey('RIGHT')
        .wait(500)
        .expect(page.slider111.value).eql('2')

    await t
        .pressKey('LEFT')
        .pressKey('LEFT')
        .wait(500)
        .expect(page.slider111.value).eql('1')
});