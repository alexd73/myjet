// TODO Сделать отображение набора кнопок
"use strict";
(function (ButtonFlags) {
    ButtonFlags[ButtonFlags["none"] = 0] = "none";
    ButtonFlags[ButtonFlags["close"] = 1] = "close";
    ButtonFlags[ButtonFlags["ok"] = 2] = "ok";
    ButtonFlags[ButtonFlags["cancel"] = 4] = "cancel";
})(exports.ButtonFlags || (exports.ButtonFlags = {}));
var ButtonFlags = exports.ButtonFlags;
var ButtonsSet = (function () {
    function ButtonsSet(b) {
        if (b === void 0) { b = { flags: ButtonFlags.close }; }
        this.btns = b.flags;
        if (this.btns & ButtonFlags.ok) {
            console.log('Ok');
        }
        if (this.btns & ButtonFlags.cancel) {
            console.log('Cancel');
        }
        if (this.btns & ButtonFlags.close) {
            console.log('Close');
        }
        if (this.btns = ButtonFlags.none) {
            console.log('no buttons');
        }
    }
    ButtonsSet.prototype.render = function () {
    };
    return ButtonsSet;
}());
exports.ButtonsSet = ButtonsSet;
//# sourceMappingURL=modal-buttons.js.map