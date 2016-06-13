"use strict";
/**
 * Класс виджета
 */
var MyJet = (function () {
    function MyJet(plugins) {
        var _this = this;
        // TODO Сделат родительский элемент для привязки
        this.divWedjetLinks = document.createElement('div');
        this.divWedjetLinks.id = 'myjet';
        this.divWedjetLinks.className = 'left bottom roundcorner';
        this.ulWedjetButtons = document.createElement('ul');
        this.divWedjetLinks.appendChild(this.ulWedjetButtons);
        plugins.forEach(function (plug) {
            _this.ulWedjetButtons.appendChild(plug.link.getLink());
        });
    }
    return MyJet;
}());
exports.MyJet = MyJet;
//# sourceMappingURL=widget.js.map