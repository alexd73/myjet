"use strict";
var MyJetLinks_1 = require("./MyJetLinks");
var mainModal_1 = require("./mainModal");
var plugin = (function () {
    function plugin(LinkOption) {
        var _this = this;
        this.link = new MyJetLinks_1.MyJetLinks(LinkOption);
        this.dialog = new mainModal_1.MainModal;
        this.link.anchor.addEventListener('click', function () { _this.dialog.show(); });
    }
    /**
     * Выдает кнопку для отображения в виджете
     * @returns {HTMLElement}
     */
    plugin.prototype.getWedjetLink = function () {
        if (this.link) {
            return this.link.getLink();
        }
    };
    plugin.prototype.getDialog = function () {
        if (this.dialog) {
            return this.dialog.divModal;
        }
    };
    return plugin;
}());
exports.plugin = plugin;
//# sourceMappingURL=plugins.js.map