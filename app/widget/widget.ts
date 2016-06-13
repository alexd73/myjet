import {MainHTMLElement} from "../classes/HTMLElements.class";
import {MainOptions, WidgetLinks} from "../app";
import {MyJetButton} from "../classes/MyJetButton";


/**
 * Класс виджета
 */

export class MyJet implements MainHTMLElement {
    opt: MainOptions;

    constructor () {
        // TODO Сделат родительский элемент для привязки
        // TODO Вынести опции в файл
        this.opt = {
            WidjetLinks: [
                {
                    name: 'calc',
                    text: 'Рассчитать доставку',
                    href: '#myjet_calc',
                    icon: 'fa-truck'
                },
                {
                    name: 'order',
                    text: 'Сделать заказ',
                    href: '#myjet_order',
                    icon: 'fa-phone'
                }

            ]
        };
    }

    render(){
        let divMyJet = document.createElement('div');
        divMyJet.id = 'myjet';
        divMyJet.className = 'left bottom roundcorner';
        let ulButtons = document.createElement('ul');
        divMyJet.appendChild(ulButtons);
        this.opt.WidjetLinks.forEach(function (ibtn) {
            let but = new MyJetButton(ibtn);
            ulButtons.appendChild(but.render());
        });
        return divMyJet;
    }
}
