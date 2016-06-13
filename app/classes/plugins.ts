import {MyJetLinks, WidgetLink} from "./MyJetLinks";
import {MainModal} from "./mainModal";

export class plugin {
    link: MyJetLinks;
    dialog: MainModal;

    /**
     * Выдает кнопку для отображения в виджете
     * @returns {HTMLElement}
     */
    public getWedjetLink(): HTMLElement {
        if (this.link) {
            return this.link.getLink();
        }
    }

    constructor(LinkOption: WidgetLink) {
        this.link = new MyJetLinks(LinkOption);
    }
}