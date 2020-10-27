import page from './pageModel';

fixture('Práctica 7 con testcafe')
    .page('https://formy-project.herokuapp.com/form');

test('Completar el formulario', async t => {
    await t
        .typeText(page.input71, "Tania", { speed: 0.1 })
        .expect(page.input71.value).eql("Tania")
        .typeText(page.input72, "Radilla")
        .expect(page.input72.value).eql("Radilla")
        .typeText(page.input73, "QA")
        .expect(page.input73.value).eql("QA")
        .click(page.rBtn74)
        .expect(page.rBtn74.checked).ok()
        .click(page.rBtn75)
        .expect(page.rBtn75.checked).ok()
        .click(page.rBtn76)
        .expect(page.rBtn76.checked).ok()
        .click(page.checkbox77)
        .expect(page.checkbox77.checked).ok()
        .click(page.checkbox78)
        .expect(page.checkbox78.checked).ok()
        .click(page.checkbox79)
        .expect(page.checkbox79.checked).ok()
        .click(page.smenu701)
        .click(page.opt702)
        .typeText(page.date703, "10222020")
        .click(page.subBtn704)

    await t
        .expect(page.text705.visible).ok("")

})