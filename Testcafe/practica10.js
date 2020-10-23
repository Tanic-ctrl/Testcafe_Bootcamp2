import page from './pageModel';

fixture('Práctica 10 con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Probar un click derecho', async t => {
    await t
        .click(page.link10)

    await t

        .setNativeDialogHandler('')
        .rightClick(page.hotspot101)



})