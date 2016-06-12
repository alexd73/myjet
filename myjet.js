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
	var modal_buttons_1 = __webpack_require__(3);
	var MyJetButton = (function () {
	    function MyJetButton(b) {
	        this.button = b;
	    }
	    MyJetButton.prototype.render = function () {
	        var ulButtons = document.createElement('ul');
	        // TODO сделать создание елементов через DOM
	        ulButtons.innerHTML =
	            "<li>\n                <a id=\"myjet_" + this.button.name + "\" href=\"" + this.button.link + "\">\n                    <i class=\"fa fa-2x fa-pull-left  " + this.button.icon + "\"></i>\n                    <span>" + this.button.label + "</span>\n                </a>\n             </li>";
	        return ulButtons;
	    };
	    return MyJetButton;
	}());
	var MyJet = (function () {
	    function MyJet() {
	        // TODO Сделат родительский элемент для привязки
	        // TODO Вынести опции в файл
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
	    MyJet.prototype.render = function () {
	        var divMyJet = document.createElement('div');
	        divMyJet.id = 'myjet';
	        divMyJet.className = 'left bottom roundcorner';
	        this.opt.buttons.forEach(function (ibtn) {
	            var but = new MyJetButton(ibtn);
	            divMyJet.appendChild(but.render());
	        });
	        return divMyJet;
	    };
	    return MyJet;
	}());
	var App = (function () {
	    function App() {
	    }
	    App.prototype.run = function () {
	        var btns = { flags: modal_buttons_1.ButtonFlags.none };
	        btns.flags |= modal_buttons_1.ButtonFlags.cancel | modal_buttons_1.ButtonFlags.ok;
	        var modalMutons = new modal_buttons_1.ButtonsSet(btns);
	        // let myjet = new MyJet();
	        // document.body.appendChild(myjet.render());
	        //
	        // let mainModal = new OrderModal();
	        // document.body.appendChild(mainModal.render());
	        //
	        // let modal = document.getElementById('myModal');
	        // let btn = document.getElementById('myjet_calc');
	        // let span = document.getElementById("close");
	        //
	        // btn.onclick = function () {
	        //     modal.style.display = "block";
	        // };
	        // span.onclick = function() {
	        //     modal.style.display = "none";
	        // };
	        // window.onclick = function(event) {
	        //     if (event.target == modal) {
	        //         modal.style.display = "none";
	        //     }
	        // }
	    };
	    return App;
	}());
	exports.App = App;


/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);