
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
                <a class="myjet_${this.button.name}" href="${this.button.link}">
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
        this.opt.buttons.forEach(function (ibtn, index) {
            let but = new MyJetButton(ibtn);
            divMyJet.appendChild(but.render());
        });
        return divMyJet;
    }
}

let myjet = new MyJet();
document.body.appendChild(myjet.render());