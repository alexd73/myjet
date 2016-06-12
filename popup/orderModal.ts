import {MainModal} from "./mainModal";

export class OrderModal extends MainModal{

    getModalContent() {
        let divModalContent = document.createElement('div');
        divModalContent.className = 'modal-content';
        divModalContent.innerHTML = `<span class="close">x</span>
            <p>Ura..</p>`;
        return divModalContent;

    }

}

