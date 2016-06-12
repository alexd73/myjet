"use strict";
var MainModal = (function () {
    function MainModal() {
        this.divModalWrapper = document.createElement('div');
        this.divModalWrapper.className = 'modal';
        this.divModalWrapper.id = 'myModal';
        this.btnClose = document.createElement('button');
        this.btnClose.textContent = "Close";
    }
    // в дочерних будет меняться эта функция для отрисовки контента
    MainModal.prototype.getModalContent = function () {
        var divModalContent = document.createElement('div');
        divModalContent.className = 'modal-content';
        divModalContent.innerHTML = "<span id=\"close\">x</span>\n            <p>Some text in the Modal..</p>";
        return divModalContent;
    };
    MainModal.prototype.render = function () {
        var MC = this.getModalContent();
        MC.appendChild(this.btnClose);
        console.log(this.btnClose);
        this.divModalWrapper.appendChild(MC);
        return this.divModalWrapper;
    };
    return MainModal;
}());
exports.MainModal = MainModal;
//# sourceMappingURL=mainModal.js.map