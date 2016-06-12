// TODO Сделать локализацию

import {OrderModal} from "./popup/orderModal";
import {ButtonFlags, ButtonsSet} from "./popup/modal-buttons";

interface MainElement {
    render(): HTMLElement;
}

/**
 * Просто описывает поля кнопки
 */
interface ButtonInterface {
    name: string;
    label: string;
    link: string;
    icon: string;
}

interface MainOptions {
    buttons: ButtonInterface[];
}

class MyJetButton implements MainElement {
    button: ButtonInterface;
    constructor (b: ButtonInterface) {
        this.button = b;
    }

    render(){
        let ulButtons = document.createElement('ul');
        // TODO сделать создание елементов через DOM
        ulButtons.innerHTML =
            `<li>
                <a id="myjet_${this.button.name}" href="${this.button.link}">
                    <i class="fa fa-2x fa-pull-left  ${this.button.icon}"></i>
                    <span>${this.button.label}</span>
                </a>
             </li>`;
        return ulButtons;
    }
}

class MyJet implements MainElement {
    opt: MainOptions;

    constructor () {
        // TODO Сделат родительский элемент для привязки
        // TODO Вынести опции в файл
        this.opt = {
            buttons: [
                {
                    name: 'calc',
                    label: 'Рассчитать доставку',
                    link: '#myjet_calc',
                    icon: 'fa-truck'
                },
                {
                    name: 'order',
                    label: 'Сделать заказ',
                    link: '#myjet_order',
                    icon: 'fa-phone'
                }

            ]
        };
    }

    render(){
        let divMyJet = document.createElement('div');
        divMyJet.id = 'myjet';
        divMyJet.className = 'left bottom roundcorner';
        this.opt.buttons.forEach(function (ibtn) {
            let but = new MyJetButton(ibtn);
            divMyJet.appendChild(but.render());
        });
        return divMyJet;
    }
}

export class App {
    public run(){
        let btns = { flags: ButtonFlags.none };
        btns.flags |= ButtonFlags.cancel | ButtonFlags.ok;
        let modalMutons = new ButtonsSet(btns);


        // let myjet = new MyJet();
        // document.body.appendChild(myjet.render());
        //
        // let mainModal = new OrderModal();
        // document.body.appendChild(mainModal.render());
        //
        // let modal = document.getElementById('myModal');
        // let btn = document.getElementById('myjet_calc');
        // let span = document.getElementById("close");
        //
        // btn.onclick = function () {
        //     modal.style.display = "block";
        // };
        // span.onclick = function() {
        //     modal.style.display = "none";
        // };
        // window.onclick = function(event) {
        //     if (event.target == modal) {
        //         modal.style.display = "none";
        //     }
        // }
    }
}
