var MainModal = (function () {
    function MainModal() {
        this.divModalWrapper = document.createElement('div');
        this.divModalWrapper.className = 'modal';
        this.divModalWrapper.id = 'myModal';
    }
    // в дочерних будет меняться эта функция
    MainModal.prototype.getModalContent = function () {
        var divModalContent = document.createElement('div');
        divModalContent.className = 'modal-content';
        divModalContent.innerHTML = "<span class=\"close\">x</span>\n            <p>Some text in the Modal..</p>";
        return divModalContent;
    };
    MainModal.prototype.render = function () {
        this.divModalWrapper.appendChild(this.getModalContent());
        return this.divModalWrapper;
    };
    return MainModal;
}());
//# sourceMappingURL=mainModal.js.map