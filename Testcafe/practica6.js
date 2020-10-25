import page from './pageModel';

fixture('Práctica 6 con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Probar agregar y quitar botones', async t => {
    await t
        .click(page.link6)

    await t
        .expect(page.removeBtn62.visible).notOk()
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)

    .expect(page.removeBtn62.visible).ok()
        .wait(3000)

    .click(page.removeBtn62)
        .click(page.removeBtn63)
        .click(page.removeBtn61)
        .expect(page.removeBtn62.visible).notOk()
});

test('Quitar todos los botones delete', async t => {
    await t
        .click(page.link6)
        .expect(page.addBtn61.exists).ok()

    .expect(page.removeBtn62.visible).notOk()
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)

    .expect(page.removeBtn612.exists).ok()

    .click(page.removeBtn612)
        .click(page.removeBtn611)
        .click(page.removeBtn610)
        .click(page.removeBtn69)
        .click(page.removeBtn68)
        .click(page.removeBtn67)
        .click(page.removeBtn66)
        .click(page.removeBtn65)
        .click(page.removeBtn64)
        .click(page.removeBtn63)
        .click(page.removeBtn62)
        .click(page.removeBtn61)
        .expect(page.removeBtn61.exists).notOk()
});