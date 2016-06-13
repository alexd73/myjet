// TODO Сделать локализацию

import {MyJet} from "./widget/widget";
import {MainModal} from "./classes/mainModal";
import {plugin} from "./classes/plugins";
import {OrderDialog} from "./plugins/OrderDialog/OrderDialog";

export interface MainOptions {
    plugins: plugin[];
}

export class App {
    public run() {
        let myjet = new MyJet([new OrderDialog()]);
        myjet.showWidjet();

        // let mainModal = new MainModal();
        // document.body.appendChild(mainModal.divModal);
        // window.ondblclick = function () {
        //     mainModal.show();
        // };

    }
}
