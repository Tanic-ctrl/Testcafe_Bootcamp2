import page from './pageModel';

fixture('Práctica 5 con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Escribir numeros', async t => {
    await t
        .click(page.link5)

    await t

        .typeText(page.input51, "letras", { speed: 0.1 })
        .expect(page.input51.value).eql("")

    .typeText(page.input51, "032656565", { speed: 0.1 })
        .expect(page.input51.value).notEql("7687", { speed: 0.1 })
        .expect(page.input51.value).eql("8798989", { speed: 0.1 })
})