"use strict";
/**
 * Описывает кнопку (ссылку для вызова диалога) на виджете
 * Ожидается, что будет отображаться в UL
 */
var MyJetButton = (function () {
    function MyJetButton(b) {
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
    MyJetButton.prototype.render = function () {
        var li = document.createElement('LI');
        li.appendChild(this.anchor);
        return li;
    };
    return MyJetButton;
}());
exports.MyJetButton = MyJetButton;
//# sourceMappingURL=MyJetButton.js.map