"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OrderModal_1 = require("./OrderModal");
var plugins_1 = require("../../classes/plugins");
var OrderDialog = (function (_super) {
    __extends(OrderDialog, _super);
    function OrderDialog() {
        var b = {
            href: '#',
            icon: '',
            name: 'order',
            text: 'Сделать заказ'
        };
        _super.call(this, b);
        this.dialog = new OrderModal_1.OrderModal;
    }
    return OrderDialog;
}(plugins_1.plugin));
exports.OrderDialog = OrderDialog;
//# sourceMappingURL=OrderDialog.js.map