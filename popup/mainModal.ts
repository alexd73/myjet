
export class MainModal {
    divModalWrapper: HTMLElement;
    btnClose: HTMLElement;

    constructor() {
        this.divModalWrapper = document.createElement('div');
        this.divModalWrapper.className = 'modal';
        this.divModalWrapper.id = 'myModal';

        this.btnClose = document.createElement('button');
        this.btnClose.textContent = "Close";
    }
    
    // в дочерних будет меняться эта функция для отрисовки контента
    getModalContent(): HTMLElement{
        let divModalContent = document.createElement('div');
        divModalContent.className = 'modal-content';
        divModalContent.innerHTML = `<span id="close">x</span>
            <p>Some text in the Modal..</p>`;
        return divModalContent;
    }



    render(): HTMLElement{
        let MC = this.getModalContent();
        MC.appendChild(this.btnClose);
        console.log(this.btnClose);
        this.divModalWrapper.appendChild(MC);
        return this.divModalWrapper;
    }
}

