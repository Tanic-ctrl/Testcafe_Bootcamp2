import { Selector } from 'testcafe';

class Page {
    constructor() {
        //Practica 2, no es conveniente tener nombre de selectores muy largo
        // this.link2 = Selector('#content > ul > li:nth-child(1) > a');

        //Practica 2, mejor práctica
        this.link2 = Selector('a').withText('A/B Testing')
            //this.text21 = Selector('h3').with('A/B Test Control')
        this.text21 = Selector('#content > div > h3')

        //Practica 3, Forgot password
        this.link3 = Selector('a').withText('Forgot Password')
        this.input31 = Selector('#email')
        this.button32 = Selector('#form_submit')
        this.text33 = Selector('#content')

        //Práctica 4, checkboxes
        this.link4 = Selector('a').withText('Checkboxes')

        //Checkbox Padre
        this.baseCheckbox = Selector('#checkboxes > input[type=checkbox]')

        //Checkboxs Hijos
        //this.checkbox41 = Selector('#checkboxes > input[type=checkbox]:nth-child(1)');
        this.checkbox42 = Selector('#checkboxes > input[type=checkbox]:nth-child(3)')

        //Practica 5
        this.link5 = Selector('a').withText('Inputs')
        this.input51 = Selector('#content #content > div > div > div > input[type=number]')

        //Practica 6
        this.link6 = Selector('a').withText('Add/Remove Elements');
        this.addBtn61 = Selector('#content > div > button')
        this.removeBtn62 = Selector('#elements > button:nth-child(2)')
        this.removeBtn63 = Selector('#elements > button:nth-child(3)')
        this.removeBtn64 = Selector('#elements > button:nth-child(4)')
    }
}
export default new Page();