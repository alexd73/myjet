export interface MainHTMLElement {
    // TODO добавить общие элементы и прописать их в конструкторе.
    // elementClasses: string;
    // elementID: string;
    render(): HTMLElement;
}

/**
 * Класс кнопки диалога
 */

export class ModalButton implements MainHTMLElement{

    button: HTMLButtonElement;

    render(): HTMLButtonElement {
        this.button = <HTMLButtonElement>document.createElement('BUTTON');
        
        return this.button;
    };

}