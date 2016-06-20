import {MainModal} from "../../classes/mainModal";

export class OrderModal extends MainModal{
    formModal: HTMLFormElement;
    inputEmail: HTMLInputElement;

    actionSubmit() {
        let url = 'http://localhost:8888/send';
        let xmlhttp = new XMLHttpRequest();
        let params = 'email=' + encodeURIComponent(this.inputEmail.value);

        xmlhttp.open('POST', url);
        xmlhttp.send(params);
    }

    getModalForm(): HTMLFormElement {
        this.formModal = document.createElement('form');
        this.formModal.className = 'myjet__modal__form';
        this.formModal.action = 'http://localhost:8888/send';
        this.formModal.method = 'post';

        this.inputEmail = document.createElement('input');
        this.inputEmail.placeholder = 'Введите емейл';
        this.inputEmail.name = 'email';
        this.formModal.appendChild(this.inputEmail);
        return this.formModal;
    }

    getModalContent(): HTMLElement {
        return this.getModalForm();
    }

    // Создание набора кнопок
    getModalButtons(): HTMLElement {
        let divModalButtons = document.createElement('div');
        divModalButtons.className = 'myjet__modal__buttons';

        let btnSubmit = document.createElement('input');
        btnSubmit.textContent = 'Отправить';
        btnSubmit.type = 'submit';
        btnSubmit.addEventListener('click', () => { this.actionSubmit() }, false);
        divModalButtons.appendChild(btnSubmit);

        let btnClose = document.createElement('button');
        btnClose.textContent = 'Отменить';
        btnClose.addEventListener('click', () => { this.hide() }, false);
        divModalButtons.appendChild(btnClose);

        return divModalButtons;
    }
}

