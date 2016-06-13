// TODO Сделать локализацию

import {OrderModal} from "./popup/orderModal";
import {MyJet} from "./widget/widget";
import {MainModal} from "./classes/mainModal";

export interface WidgetLinks {
    name: string;
    text: string;
    href: string;
    icon: string;
}

export interface MainOptions {
    WidjetLinks: WidgetLinks[];
}

export class App {
    public run() {
        let myjet = new MyJet();
        document.body.appendChild(myjet.render());

        let mainModal = new MainModal();
        document.body.appendChild(mainModal.divModal);
        window.ondblclick = function () {
            mainModal.show();
        };

    }
}
