"use strict";
/**
 * Описывает кнопку (ссылку для вызова диалога) на виджете
 * Ожидается, что будет отображаться в UL
 */
var MyJetLinks = (function () {
    function MyJetLinks(b) {
        var anchor = document.createElement('A');
        anchor.id = "myjet_" + b.name;
        if (b.icon) {
            var icon = document.createElement('I');
            icon.classList.add(b.icon);
            anchor.appendChild(icon);
        }
        var nodeText = document.createTextNode(b.text);
        anchor.appendChild(nodeText);
        anchor.href = b.href;
        this.anchor = anchor;
    }
    MyJetLinks.prototype.getLink = function () {
        var li = document.createElement('LI');
        li.appendChild(this.anchor);
        return li;
    };
    return MyJetLinks;
}());
exports.MyJetLinks = MyJetLinks;
//# sourceMappingURL=MyJetLinks.js.map