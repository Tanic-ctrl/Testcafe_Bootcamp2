import page from './pageModel';

fixture('Práctica 5 con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Escribir letras', async t => {
    await t
        .click(page.link5)

    await t
        .typeText(page.input51, "letras", { speed: 0.1 })
        .expect(page.input51.value).eql("")
})

test('Escribir números', async t => {
    await t
        .click(page.link5)

    await t
        .typeText(page.input51, "032656565", { speed: 0.1 })
        .expect(page.input51.value).notEql("7687")
        .expect(page.input51.value).eql("032656565")
})

test('Escribir cadena de carácteres', async t => {
    await t
        .click(page.link5)

    await t
        .typeText(page.input51, "666", { speed: 0.1 }, { replace: true })
        .typeText(page.input51, "·%·$%·$$%&8$%-**+^*[]{}¡‚´‚´‚!´", { replace: true })
    console.log(page.input51.value)
    await t.expect(page.input51.value).eql("8")
})