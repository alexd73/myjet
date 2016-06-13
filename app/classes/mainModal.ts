export class MainModal {
    divModal: HTMLElement;
    private divWrapper: HTMLElement;
    private divContent: HTMLElement;
    private divButtons: HTMLElement;

    buttons: HTMLButtonElement[];

    hide() {
        this.divModal.style.display = 'none';
    }

    show() {
        this.divModal.style.display = 'block';
    }

    // в дочерних будет меняться эта функция для отрисовки контента
    getModalContent(): HTMLElement {
        let divModalContent = document.createElement('div');
        divModalContent.className = 'myjet__modal__content';
        divModalContent.innerHTML = `<span id="close">x</span>
            <p>Some text in the Modal..</p>`;
        return divModalContent;
    }

    // Создание набора кнопок
    getModalButtons(): HTMLElement {
        let divModalButtons = document.createElement('div');
        divModalButtons.className = 'myjet__modal__buttons';
        let btnClose = document.createElement('button');
        btnClose.textContent = 'Закрыть';
        btnClose.addEventListener('click', () => this.hide(), false);
        divModalButtons.appendChild(btnClose);
        return divModalButtons;
    }

    constructor() {
        this.divModal = document.createElement('div');
        this.divModal.className = 'myjet__modal';
        this.divModal.id = 'myjet__modal';
        this.divModal.addEventListener('click', () => this.hide(), false);
        this.divWrapper = document.createElement('div');
        this.divWrapper.className = 'myjet__modal__wrapper';
        this.divContent = this.getModalContent();
        this.divWrapper.appendChild(this.divContent);
        this.divButtons = this.getModalButtons();
        this.divWrapper.appendChild(this.divButtons);
        this.divModal.appendChild(this.divWrapper);
    }
}

