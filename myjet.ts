
interface iElement {
    render(): HTMLElement;
}

/**
 * Просто описывает поля кнопки
 */
interface iButton {
    name: string;
    label: string;
    link: string;
    icon: string;
}

interface iOptions {
    buttons: iButton[];
}

class btn implements iElement {
    button: iButton;

    constructor (iBtn: iButton) {
        this.button = iBtn;
    }

    render(){
        let ulButtons = document.createElement('ul');
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



class myJet implements iElement {
    element: iElement[];
    opt: iOptions;

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
        let divMyjet = document.createElement('div');
        divMyjet.id = 'myjet';
        divMyjet.className = 'left bottom roundcorner';
        this.opt.buttons.forEach(function (ibtn, index) {
            let but = new btn(ibtn);
            divMyjet.appendChild(but.render());
        });
        return divMyjet;
    }
}

let myjet = new myJet();
document.body.appendChild(myjet.render());
