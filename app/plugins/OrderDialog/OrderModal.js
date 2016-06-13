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
    OrderModal.prototype.getModalContent = function () {
        var divModalContent = document.createElement('div');
        divModalContent.className = 'modal-content';
        divModalContent.innerHTML = "<span class=\"close\">x</span>\n                <p>Ura..</p>";
        return divModalContent;
    };
    return OrderModal;
}(mainModal_1.MainModal));
exports.OrderModal = OrderModal;
//# sourceMappingURL=OrderModal.js.map