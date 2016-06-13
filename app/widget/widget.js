"use strict";
var MyJetButton_1 = require("../classes/MyJetButton");
/**
 * Класс виджета
 */
var MyJet = (function () {
    function MyJet() {
        // TODO Сделат родительский элемент для привязки
        // TODO Вынести опции в файл
        this.opt = {
            WidjetLinks: [
                {
                    name: 'calc',
                    text: 'Рассчитать доставку',
                    href: '#myjet_calc',
                    icon: 'fa-truck'
                },
                {
                    name: 'order',
                    text: 'Сделать заказ',
                    href: '#myjet_order',
                    icon: 'fa-phone'
                }
            ]
        };
    }
    MyJet.prototype.render = function () {
        var divMyJet = document.createElement('div');
        divMyJet.id = 'myjet';
        divMyJet.className = 'left bottom roundcorner';
        var ulButtons = document.createElement('ul');
        divMyJet.appendChild(ulButtons);
        this.opt.WidjetLinks.forEach(function (ibtn) {
            var but = new MyJetButton_1.MyJetButton(ibtn);
            ulButtons.appendChild(but.render());
        });
        return divMyJet;
    };
    return MyJet;
}());
exports.MyJet = MyJet;
//# sourceMappingURL=widget.js.map