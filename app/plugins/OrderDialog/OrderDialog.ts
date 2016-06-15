import {MyJetLinks, WidgetLink} from "../../classes/MyJetLinks";
import {OrderModal} from "./OrderModal";
import {plugin} from "../../classes/plugins";
import {MainModal} from "../../classes/mainModal";

export class OrderDialog extends plugin {

    dialog: OrderModal;
    
    constructor() {
        let b: WidgetLink = {
            href: '#',
            icon: '',
            name: 'order',
            text: 'Сделать заказ'
        };

        super(b);
        this.dialog = new OrderModal;

    }
}