"use strict";
var MainModal = (function () {
    function MainModal() {
        var _this = this;
        this.divModal = document.createElement('div');
        this.divModal.className = 'myjet__modal';
        this.divModal.id = 'myjet__modal';
        this.divModal.addEventListener('click', function () { return _this.hide(); }, false);
        this.divWrapper = document.createElement('div');
        this.divWrapper.className = 'myjet__modal__wrapper';
        this.divContent = this.getModalContent();
        this.divWrapper.appendChild(this.divContent);
        this.divButtons = this.getModalButtons();
        this.divWrapper.appendChild(this.divButtons);
        this.divModal.appendChild(this.divWrapper);
    }
    MainModal.prototype.hide = function () {
        this.divModal.style.display = 'none';
    };
    MainModal.prototype.show = function () {
        this.divModal.style.display = 'block';
    };
    // в дочерних будет меняться эта функция для отрисовки контента
    MainModal.prototype.getModalContent = function () {
        var divModalContent = document.createElement('div');
        divModalContent.className = 'myjet__modal__content';
        divModalContent.innerHTML = "<span id=\"close\">x</span>\n            <p>Some text in the Modal..</p>";
        return divModalContent;
    };
    // Создание набора кнопок
    MainModal.prototype.getModalButtons = function () {
        var _this = this;
        var divModalButtons = document.createElement('div');
        divModalButtons.className = 'myjet__modal__buttons';
        var btnClose = document.createElement('button');
        btnClose.textContent = 'Закрыть';
        btnClose.addEventListener('click', function () { return _this.hide(); }, false);
        divModalButtons.appendChild(btnClose);
        return divModalButtons;
    };
    return MainModal;
}());
exports.MainModal = MainModal;
//# sourceMappingURL=mainModal.js.map