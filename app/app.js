// TODO Сделать локализацию
"use strict";
var widget_1 = require("./widget/widget");
var mainModal_1 = require("./classes/mainModal");
var OrderDialog_1 = require("./plugins/OrderDialog/OrderDialog");
var App = (function () {
    function App() {
    }
    App.prototype.run = function () {
        var myjet = new widget_1.MyJet([new OrderDialog_1.OrderDialog()]);
        document.body.appendChild(myjet.divWedjetLinks);
        var mainModal = new mainModal_1.MainModal();
        document.body.appendChild(mainModal.divModal);
        window.ondblclick = function () {
            mainModal.show();
        };
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map