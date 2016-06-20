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
    OrderModal.prototype.actionSubmit = function () {
        var url = 'http://localhost:8888/send';
        var xmlhttp = new XMLHttpRequest();
        var params = 'email=' + encodeURIComponent(this.inputEmail.value);
        xmlhttp.open('POST', url);
        xmlhttp.send(params);
    };
    OrderModal.prototype.getModalForm = function () {
        this.formModal = document.createElement('form');
        this.formModal.className = 'myjet__modal__form';
        this.formModal.action = 'http://localhost:8888/send';
        this.formModal.method = 'post';
        this.inputEmail = document.createElement('input');
        this.inputEmail.placeholder = 'Введите емейл';
        this.inputEmail.name = 'email';
        this.formModal.appendChild(this.inputEmail);
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
        var btnSubmit = document.createElement('input');
        btnSubmit.textContent = 'Отправить';
        btnSubmit.type = 'submit';
        btnSubmit.addEventListener('click', function () { _this.actionSubmit(); }, false);
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