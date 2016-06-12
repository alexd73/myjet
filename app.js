// TODO Сделать локализацию
"use strict";
var modal_buttons_1 = require("./popup/modal-buttons");
var MyJetButton = (function () {
    function MyJetButton(b) {
        this.button = b;
    }
    MyJetButton.prototype.render = function () {
        var ulButtons = document.createElement('ul');
        // TODO сделать создание елементов через DOM
        ulButtons.innerHTML =
            "<li>\n                <a id=\"myjet_" + this.button.name + "\" href=\"" + this.button.link + "\">\n                    <i class=\"fa fa-2x fa-pull-left  " + this.button.icon + "\"></i>\n                    <span>" + this.button.label + "</span>\n                </a>\n             </li>";
        return ulButtons;
    };
    return MyJetButton;
}());
var MyJet = (function () {
    function MyJet() {
        // TODO Сделат родительский элемент для привязки
        // TODO Вынести опции в файл
        this.opt = {
            buttons: [
                {
                    name: 'calc',
                    label: 'Рассчитать доставку',
                    link: '#myjet_calc',
                    icon: 'fa-truck'
                },
                {
                    name: 'order',
                    label: 'Сделать заказ',
                    link: '#myjet_order',
                    icon: 'fa-phone'
                }
            ]
        };
    }
    MyJet.prototype.render = function () {
        var divMyJet = document.createElement('div');
        divMyJet.id = 'myjet';
        divMyJet.className = 'left bottom roundcorner';
        this.opt.buttons.forEach(function (ibtn) {
            var but = new MyJetButton(ibtn);
            divMyJet.appendChild(but.render());
        });
        return divMyJet;
    };
    return MyJet;
}());
var App = (function () {
    function App() {
    }
    App.prototype.run = function () {
        var btns = { flags: modal_buttons_1.ButtonFlags.none };
        btns.flags |= modal_buttons_1.ButtonFlags.cancel | modal_buttons_1.ButtonFlags.ok;
        var modalMutons = new modal_buttons_1.ButtonsSet(btns);
        // let myjet = new MyJet();
        // document.body.appendChild(myjet.render());
        //
        // let mainModal = new OrderModal();
        // document.body.appendChild(mainModal.render());
        //
        // let modal = document.getElementById('myModal');
        // let btn = document.getElementById('myjet_calc');
        // let span = document.getElementById("close");
        //
        // btn.onclick = function () {
        //     modal.style.display = "block";
        // };
        // span.onclick = function() {
        //     modal.style.display = "none";
        // };
        // window.onclick = function(event) {
        //     if (event.target == modal) {
        //         modal.style.display = "none";
        //     }
        // }
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map