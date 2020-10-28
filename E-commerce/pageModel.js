import { Selector } from 'testcafe';

class Page {
    constructor() {
        //this.signIn_link = Selector('#header > div.nav > div > div > nav > div:nth-child(2) > a')
        this.signIn_link = Selector('a').withText('Sign in');
        this.email_input = Selector('#email_create');
        this.createAccount_btn = Selector('#SubmitCreate');
        this.firstName_input = Selector('#customer_firstname');
        this.lastName_input = Selector('#customer_lastname');
        this.email_form = Selector('#email');
        this.pwd_input = Selector('#passwd');
        this.firstName_Address = Selector('#firstname');
        this.lastName_Address = Selector('#lastname');
        this.address = Selector('#address1');
        this.city = Selector('#city');
        this.state = Selector('#id_state');
        this.postcode = Selector('#postcode');

    }
}
export default new Page();