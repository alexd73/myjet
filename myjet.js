"use strict";
var btn = (function () {
    function btn(iBtn) {
        this.button = iBtn;
    }
    btn.prototype.render = function () {
        var ulButtons = document.createElement('ul');
        ulButtons.innerHTML =
            "<li>\n                <a class=\"myjet_" + this.button.name + "\" href=\"" + this.button.link + "\">\n                    <i class=\"fa fa-2x fa-pull-left  " + this.button.icon + "\"></i>\n                    <span>" + this.button.label + "</span>\n                </a>\n             </li>";
        return ulButtons;
    };
    return btn;
}());
var myJet = (function () {
    function myJet() {
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
    myJet.prototype.render = function () {
        var divMyjet = document.createElement('div');
        divMyjet.id = 'myjet';
        divMyjet.className = 'left bottom roundcorner';
        this.opt.buttons.forEach(function (ibtn, index) {
            var but = new btn(ibtn);
            divMyjet.appendChild(but.render());
        });
        return divMyjet;
    };
    return myJet;
}());
var myjet = new myJet();
document.body.appendChild(myjet.render());
//# sourceMappingURL=myjet.js.map