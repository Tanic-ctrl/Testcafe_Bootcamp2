import page from './pageModel';

let rndNumber = Math.random().toString(36).substr(1, 4);
const email = 'dummy' + rndNumber + '@mailinator.com'
const firstName = 'Tania'
const lastName = 'Radilla'
const password = '99999'

fixture('Pruebas de módulo Mi cuenta')
    .page('http://automationpractice.com/');

test('Crear una cuenta', async t => {
    await t
        .click(page.signIn_link)
    console.log("Correo:", email)

    await t
        .typeText(page.email_input, email)
        .click(page.createAccount_btn)

    await t
        .expect(page.email_form.innerText).contains(email)
        .expect(page.email_form.hasAttribute('readonly')).notOk()

    .typeText(page.firstName_input, firstName)
        .typeText(page.lastName_input, lastName)

    .expect(page.firstName_Address.value).contains(firstName)
        .expect(page.lastName_Address.value).contains(lastName)

    .typeText(page.pwd_input, password)
        .typeText(page.adress, "P.O Address")


});
test('Iniciar sesión', async t => {});
test('Cerrar sesión', async t => {});
test('Crear una cuenta con un correo ya existente', async t => {});
test('Validar recuperar el password con un correo válido', async t => {});
test('Validar recuperar el password con un correo no válido', async t => {});
test('Cambiar información de mi cuenta', async t => {});