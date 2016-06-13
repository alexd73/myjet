"use strict";
var MyJetLinks_1 = require("./MyJetLinks");
var plugin = (function () {
    function plugin(LinkOption) {
        this.link = new MyJetLinks_1.MyJetLinks(LinkOption);
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
    return plugin;
}());
exports.plugin = plugin;
//# sourceMappingURL=plugins.js.map