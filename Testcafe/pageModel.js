import { Selector } from 'testcafe';

class Page {
    constructor() {
        //Practica 2, no es conveniente tener nombre de selectores muy largo
        // this.link2 = Selector('#content > ul > li:nth-child(1) > a');

        //Practica 2, mejor práctica
        this.link2 = Selector('a').withText('A/B Testing');
        //this.text21 = Selector('h3').with('A/B Test Control')
        //this.text21 = Selector('#content > div > h3');
        this.text21 = Selector('h3').innerText;
        //const abText = Selector('h3')

        //Practica 3, Forgot password
        this.link3 = Selector('a').withText('Forgot Password');
        this.input31 = Selector('#email');
        this.button32 = Selector('#form_submit');
        this.text33 = Selector('#content');
        this.output34 = Selector('body > h1');

        //Práctica 4, checkboxes
        this.link4 = Selector('a').withText('Checkboxes');

        //Checkbox Padre
        this.baseCheckbox = Selector('#checkboxes > input[type=checkbox]');

        //Checkboxs Hijos
        //this.checkbox41 = Selector('#checkboxes > input[type=checkbox]:nth-child(1)'); 
        this.checkbox42 = Selector('#checkboxes > input[type=checkbox]:nth-child(3)');

        //Practica 5
        this.link5 = Selector('a').withText('Inputs');
        this.input51 = Selector('#content > div > div > div > input[type=number]');

        //Practica 6
        this.link6 = Selector('a').withText('Add/Remove Elements');
        this.addBtn61 = Selector('#content > div > button');
        this.removeBtn61 = Selector('#elements > button:nth-child(1)');
        this.removeBtn62 = Selector('#elements > button:nth-child(2)');
        this.removeBtn63 = Selector('#elements > button:nth-child(3)');
        this.removeBtn64 = Selector('#elements > button:nth-child(4)');
        this.removeBtn65 = Selector('#elements > button:nth-child(5)');
        this.removeBtn66 = Selector('#elements > button:nth-child(6)');
        this.removeBtn67 = Selector('#elements > button:nth-child(7)');
        this.removeBtn68 = Selector('#elements > button:nth-child(8)');
        this.removeBtn69 = Selector('#elements > button:nth-child(9)');
        this.removeBtn610 = Selector('#elements > button:nth-child(10)');
        this.removeBtn611 = Selector('#elements > button:nth-child(11)');
        this.removeBtn612 = Selector('#elements > button:nth-child(12)');

        //Practica 7
        this.input71 = Selector('#first-name');
        this.input72 = Selector('#last-name');
        this.input73 = Selector('#job-title');
        this.rBtn74 = Selector('#radio-button-1');
        this.rBtn75 = Selector('#radio-button-2');
        this.rBtn76 = Selector('#radio-button-3');
        this.checkbox77 = Selector('#checkbox-1');
        this.checkbox78 = Selector('#checkbox-2');
        this.checkbox79 = Selector('#checkbox-3');
        this.smenu701 = Selector('#select-menu');
        this.opt702 = Selector('#select-menu > option:nth-child(1)');
        this.date703 = Selector('#datepicker');
        this.subBtn704 = Selector('body > div > form > div > div:nth-child(15) > a');
        this.text705 = Selector('h1').withText('Thanks for submitting your form');
        this.text706 = Selector('body > div > div');

        //Practica 8
        this.link8 = Selector('a').withText('Form Authentication');
        this.input81 = Selector('#username');
        this.input82 = Selector('#password');
        this.logBtn83 = Selector('#login > button');
        this.msgAler84 = Selector('#flash')
        this.msgAler85 = Selector('#flash')
        this.text86 = Selector('#content > div > h4')
        this.logoutBtn861 = Selector('#content > div > a')
        this.msguserAlert87 = Selector('#flash')
        this.msgpwdAlert88 = Selector('#flash')

        //Practica 9
        this.link9 = Selector('a').withText('Key Presses');
        this.text91 = Selector('#result');

        //Practica 10
        this.link10 = Selector('a').withText('Context Menu');
        this.hotspot101 = Selector('#hot-spot');

        //Practica 11
        this.link11 = Selector('a').withText('Horizontal Slider');
        this.slider111 = Selector('#content > div > div > input[type=range]');

        //Practica 12 Slider 1 to 10
        this.checkbox12 = Selector('#tried-test-cafe');
        this.slider = {
            handle: Selector('.ui-slider-handle'),
            value: Selector('.slider-value')
        };
    }
}
export default new Page();