

export interface WidgetLink {
    name: string;
    text: string;
    href: string;
    icon: string;
}


/**
 * Описывает кнопку (ссылку для вызова диалога) на виджете
 * Ожидается, что будет отображаться в UL
 */
export class MyJetLinks {
    private anchor: HTMLAnchorElement;

    constructor (b: WidgetLink) {
        let anchor = <HTMLAnchorElement>document.createElement('A');
        anchor.id = "myjet_" + b.name;
        if (b.icon) {
            let icon = document.createElement('I');
            icon.classList.add(b.icon);
            anchor.appendChild(icon);
        }
        let nodeText = document.createTextNode(b.text);
        anchor.appendChild(nodeText);
        anchor.href = b.href;
        this.anchor = anchor;
    }

    getLink(): HTMLElement{
        let li = <HTMLLIElement>document.createElement('LI');
        li.appendChild(this.anchor);
        return li;
    }
}