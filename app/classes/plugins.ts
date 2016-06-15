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

    public getDialog(): HTMLElement {
        if (this.dialog) {
            return this.dialog.divModal;
        }
    }

    constructor(LinkOption: WidgetLink) {
        this.link = new MyJetLinks(LinkOption);
        this.dialog = new MainModal;
        this.link.anchor.addEventListener('click', () => { this.dialog.show() })
    }
}