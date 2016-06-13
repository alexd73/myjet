// TODO Сделать локализацию
"use strict";
var widget_1 = require("./widget/widget");
var OrderDialog_1 = require("./plugins/OrderDialog/OrderDialog");
var App = (function () {
    function App() {
    }
    App.prototype.run = function () {
        var myjet = new widget_1.MyJet([new OrderDialog_1.OrderDialog()]);
        myjet.showWidjet();
        // let mainModal = new MainModal();
        // document.body.appendChild(mainModal.divModal);
        // window.ondblclick = function () {
        //     mainModal.show();
        // };
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map