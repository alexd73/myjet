
class MainModal {
    divModalWrapper: HTMLElement;

    constructor() {
        this.divModalWrapper = document.createElement('div');
        this.divModalWrapper.className = 'modal';
        this.divModalWrapper.id = 'myModal';
    }
    // в дочерних будет меняться эта функция
    getModalContent(): HTMLElement{
        let divModalContent = document.createElement('div');
        divModalContent.className = 'modal-content';
        divModalContent.innerHTML = `<span class="close">x</span>
            <p>Some text in the Modal..</p>`;
        return divModalContent;
    }


    render(): HTMLElement{
        this.divModalWrapper.appendChild(this.getModalContent());
        return this.divModalWrapper;
    }
}

