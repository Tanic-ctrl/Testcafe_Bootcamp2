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
        this.link4 = selector('a').withText('Checkboxes')
            //Checkbox Padre
            // this.baseCheckbox = selector('#checkboxes > input [type=checkbox]')
            //this.checkbox41 = Selector('#checkboxes > input[type=checkbox]:nth-child(1)');    
            //this.checkbox41 = Selector('#checkboxes > input[type=checkbox]:nth-child(3)');

        // Practica 4 Seida
        this.link4 = Selector('a').withText('Checkboxes')
            //Checkbox Padre
        this.baseCheckbox = Selector('#checkboxes > input[type=checkbox]')
            //Checkboxs Hijos
            //this.checkbox41 = Selector('#checkboxes > input[type=checkbox]:nth-child(1)');
        this.checkbox42 = Selector('#checkboxes > input[type=checkbox]:nth-child(3)');
    }
}
export default new Page();