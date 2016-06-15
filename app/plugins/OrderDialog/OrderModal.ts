import {MainModal} from "../../classes/mainModal";

export class OrderModal extends MainModal{
    formModal: HTMLFormElement;

    getModalForm(): HTMLFormElement {
        this.formModal = document.createElement('form');
        this.formModal.className = 'myjet__modal__form';

        let inputEmail = <HTMLInputElement>document.createElement('input');
        inputEmail.placeholder = 'Введите емейл';
        this.formModal.appendChild(inputEmail);

        this.formModal.addEventListener('submit', () => { console.log('test ' + inputEmail.value) });
        return this.formModal;
    }

    getModalContent(): HTMLElement {
        return this.getModalForm();
    }

    // Создание набора кнопок
    getModalButtons(): HTMLElement {
        let divModalButtons = document.createElement('div');
        divModalButtons.className = 'myjet__modal__buttons';

        let btnSubmit = document.createElement('button');
        btnSubmit.textContent = 'Отправить';
        btnSubmit.addEventListener('click', () => { this.formModal.submit() }, false);
        divModalButtons.appendChild(btnSubmit);

        let btnClose = document.createElement('button');
        btnClose.textContent = 'Отменить';
        btnClose.addEventListener('click', () => { this.hide() }, false);
        divModalButtons.appendChild(btnClose);

        return divModalButtons;
    }
}

