/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var app_1 = __webpack_require__(1);
	window.onload = function () {
	    var app = new app_1.App();
	    app.run();
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// TODO Сделать локализацию
	"use strict";
	var widget_1 = __webpack_require__(2);
	var mainModal_1 = __webpack_require__(7);
	var App = (function () {
	    function App() {
	    }
	    App.prototype.run = function () {
	        var myjet = new widget_1.MyJet();
	        document.body.appendChild(myjet.render());
	        var mainModal = new mainModal_1.MainModal();
	        document.body.appendChild(mainModal.divModal);
	        window.ondblclick = function () {
	            mainModal.show();
	        };
	    };
	    return App;
	}());
	exports.App = App;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var MyJetButton_1 = __webpack_require__(8);
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


/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	"use strict";
	var MainModal = (function () {
	    function MainModal() {
	        var _this = this;
	        this.divModal = document.createElement('div');
	        this.divModal.className = 'myjet__modal';
	        this.divModal.id = 'myjet__modal';
	        this.divModal.addEventListener('click', function () { return _this.hide(); }, false);
	        this.divWrapper = document.createElement('div');
	        this.divWrapper.className = 'myjet__modal__wrapper';
	        this.divContent = this.getModalContent();
	        this.divWrapper.appendChild(this.divContent);
	        this.divButtons = this.getModalButtons();
	        this.divWrapper.appendChild(this.divButtons);
	        this.divModal.appendChild(this.divWrapper);
	    }
	    MainModal.prototype.hide = function () {
	        this.divModal.style.display = 'none';
	    };
	    MainModal.prototype.show = function () {
	        this.divModal.style.display = 'block';
	    };
	    // в дочерних будет меняться эта функция для отрисовки контента
	    MainModal.prototype.getModalContent = function () {
	        var divModalContent = document.createElement('div');
	        divModalContent.className = 'myjet__modal__content';
	        divModalContent.innerHTML = "<span id=\"close\">x</span>\n            <p>Some text in the Modal..</p>";
	        return divModalContent;
	    };
	    // Создание набора кнопок
	    MainModal.prototype.getModalButtons = function () {
	        var _this = this;
	        var divModalButtons = document.createElement('div');
	        divModalButtons.className = 'myjet__modal__buttons';
	        var btnClose = document.createElement('button');
	        btnClose.textContent = 'Закрыть';
	        btnClose.addEventListener('click', function () { return _this.hide(); }, false);
	        divModalButtons.appendChild(btnClose);
	        return divModalButtons;
	    };
	    return MainModal;
	}());
	exports.MainModal = MainModal;


/***/ },
/* 8 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);