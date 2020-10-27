import page from './pageModel';

fixture('Práctica 8 con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Formulario sin capturar datos', async t => {
    await t
        .click(page.link8)

    await t
        .expect(page.input81.visible).ok()
        .expect(page.input82.visible).ok()
        .expect(page.logBtn83.visible).ok()

    .click(page.logBtn83)
        .expect(page.msgAler84.visible).ok()
        .expect(page.msgAler84.innerText).contains('Your username is invalid!', 'Prueba exitosa')
});

test('Formulario capturando datos válidos', async t => {
    await t
        .click(page.link8)

    await t
        .expect(page.input81.visible).ok()
        .expect(page.input82.visible).ok()
        .expect(page.logBtn83.visible).ok()

    .typeText(page.input81, "tomsmith", { speed: 0.1 })
        .expect(page.input81.value).notEql("omsmith")
        .expect(page.input81.value).eql("tomsmith")


    .typeText(page.input82, "SuperSecretPassword!", { speed: 0.1 })
        .expect(page.input82.value).notEql("Supers")
        .expect(page.input82.value).eql("SuperSecretPassword!")

    .click(page.logBtn83)
        .expect(page.msgAler85.visible).ok()
        .expect(page.msgAler85.innerText).contains('You logged into a secure area!', 'Prueba exitosa')
        .expect(page.text86.visible).ok()
        .expect(page.logoutBtn861.visible).ok()

});

test('Formulario capturando usuario erróneo', async t => {
    await t
        .click(page.link8)

    await t
        .expect(page.input81.visible).ok()
        .expect(page.input82.visible).ok()
        .expect(page.logBtn83.visible).ok()

    .typeText(page.input81, "omsmith", { speed: 0.1 })
        .expect(page.input81.value).eql("omsmith")

    .typeText(page.input82, "SuperSecretPassword!", { speed: 0.1 })
        .expect(page.input82.value).notEql("Supers")
        .expect(page.input82.value).eql("SuperSecretPassword!")

    .click(page.logBtn83)
        .expect(page.msguserAlert87.visible).ok()
        .expect(page.msguserAlert87.innerText).contains('Your username is invalid!', 'Prueba exitosa')
});

test('Formulario capturando contraseña errónea', async t => {
    await t
        .click(page.link8)

    await t
        .expect(page.input81.visible).ok()
        .expect(page.input82.visible).ok()
        .expect(page.logBtn83.visible).ok()

    .typeText(page.input81, "tomsmith", { speed: 0.1 })
        .expect(page.input81.value).notEql("omsmith")
        .expect(page.input81.value).eql("tomsmith")

    .typeText(page.input82, "Password!", { speed: 0.1 })
        .expect(page.input82.value).eql("Password!")

    .click(page.logBtn83)
        .expect(page.msgpwdAlert88.visible).ok()
        .expect(page.msgpwdAlert88.innerText).contains('Your password is invalid!', 'Prueba exitosa')
});