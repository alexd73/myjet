"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var mainModal_1 = require("../../classes/mainModal");
var OrderModal = (function (_super) {
    __extends(OrderModal, _super);
    function OrderModal() {
        _super.apply(this, arguments);
    }
    OrderModal.prototype.getModalForm = function () {
        this.formModal = document.createElement('form');
        this.formModal.className = 'myjet__modal__form';
        var inputEmail = document.createElement('input');
        inputEmail.placeholder = 'Введите емейл';
        this.formModal.appendChild(inputEmail);
        this.formModal.addEventListener('submit', function () { console.log('test ' + inputEmail.value); });
        return this.formModal;
    };
    OrderModal.prototype.getModalContent = function () {
        return this.getModalForm();
    };
    // Создание набора кнопок
    OrderModal.prototype.getModalButtons = function () {
        var _this = this;
        var divModalButtons = document.createElement('div');
        divModalButtons.className = 'myjet__modal__buttons';
        var btnSubmit = document.createElement('button');
        btnSubmit.textContent = 'Отправить';
        btnSubmit.addEventListener('click', function () { _this.formModal.submit(); }, false);
        divModalButtons.appendChild(btnSubmit);
        var btnClose = document.createElement('button');
        btnClose.textContent = 'Отменить';
        btnClose.addEventListener('click', function () { _this.hide(); }, false);
        divModalButtons.appendChild(btnClose);
        return divModalButtons;
    };
    return OrderModal;
}(mainModal_1.MainModal));
exports.OrderModal = OrderModal;
//# sourceMappingURL=OrderModal.js.map