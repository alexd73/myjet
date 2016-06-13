import {MainOptions} from "../app";
import {plugin} from "../classes/plugins";

/**
 * Класс виджета
 */

export class MyJet {
    opt: MainOptions;
    divWedjetLinks: HTMLElement;
    ulWedjetButtons: HTMLElement;

    constructor (plugins: plugin[]) {
        // TODO Сделат родительский элемент для привязки
        this.divWedjetLinks = document.createElement('div');
        this.divWedjetLinks.id = 'myjet';
        this.divWedjetLinks.className = 'left bottom roundcorner';
        this.ulWedjetButtons = document.createElement('ul');
        this.divWedjetLinks.appendChild(this.ulWedjetButtons);
        plugins.forEach((plug) => {
            this.ulWedjetButtons.appendChild(plug.link.getLink());
            document.body.appendChild(plug.getDialog());
        });
    }

    showWidjet() {
        document.body.appendChild(this.divWedjetLinks);
    }
}
