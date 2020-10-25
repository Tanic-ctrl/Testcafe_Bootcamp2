import { Selector } from 'testcafe';
import page from './pageModel';

fixture('Práctica 2 con testcafe')
    .page('https://the-internet.herokuapp.com/');

const abText = Selector('h3')
test('Probar dar clic en un enlace', async t => {
    await t
        .click(page.link2)
        // await t

    const abTextElement = await abText()
    console.log(abTextElement.innerText)

    if (abTextElement.innerText == "A/B Test" || abTextElement.innerText == "A/B Test Variation 1" || abTextElement.innerText == "A/B Test Variation") {
        await t.expect(true).ok("Si pasa")
    } else {
        await t.expect(false).ok("No pasa")
    }
    // if (page.text21.innerText == "A/B Test Control" || "A/B Test Variation 1" || "A/B Test Variation") {
    //     console.log("Pasa prueba")
    // } else {
    //     console.log("No pasa")
    // }
});