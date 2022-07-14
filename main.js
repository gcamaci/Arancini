/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.png */ "./src/images/background.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/menu-background.png */ "./src/images/menu-background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    \n    background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    /*might need to switch to background-attachment: scroll;*/\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    backdrop-filter: 8px;\n    height: 100vh;\n    \n    \n}\n\nheader{\n    width: 100vw;\n    height: 10vh;\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    align-items: center;\n    z-index: 1;\n    overflow: hidden;\n    background-color: rgb(250, 141, 32);\n\n    \n}\n\nimg{\n   width: 100%;\n   height: auto;\n   \n}\nmain{\n    height:85vh;\n    background-color: rgba(8, 8, 8, 0.679);\n}\n.home-page{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    justify-items: center;\n    padding: 20px;\n    z-index: -1; \n    \n}\n.menu-page{\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    background-color: #fffaf0db;\n}\n\n.slider{\n    position: relative;\n    width: 100%;\n    height: 80%;\n    overflow: hidden;\n    box-shadow: 0 0 15px;\n    border-radius: 15px;\n\n}\n.slider-container{\n    display:flex;\n    height: 100%;\n    transform: translate(0);\n    transition: transform .8s ease-in-out;\n}\n.btn-container{\n    position:absolute;\n    top: 50%;\n    border: 1px solid black;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n}\n.banner-container{\n    min-width: 400px;\n    width: 80%;\n    height: 300px;\n    box-shadow: 0 0 15px;\n    background-color: rgba(255, 255, 255, .6);\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n}\n\n.banner-title{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    text-align: center;\n}\n\n.banner-btn-container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n.banner-btn{\n    width: 100px;\n    height: 50px;\n}\n.pizza-Menu{\n    display: grid;\n    grid-template-rows: 1fr 2fr 3fr;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: cover;\n    background-position: center;\n    text-align: center;\n    background-color: rgba(8, 8, 8, 0.4);\n    padding: 20px;\n    gap: 20px;\n    height: 85vh;\n    \n\n}\n\n.build-your-own{\n    box-shadow: 0 0 15px;\n    width: 100%;\n    padding: 10px;\n    border-radius: 25px;\n    background-color: #fffaf0db;\n    border: 5px solid orange;\n    justify-self: center;\n    \n}\n.toppings ul{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2px;\n\n}\n.top{\n    text-align: center;\n    list-style: none;\n}\n\n.specials{\n    box-shadow: 0 0 15px;\n    width: 100%;\n    padding: 10px;\n    border-radius: 25px;\n    background-color: #fffaf0db;\n    border: 5px solid orange;\n    \n    \n    \n}\n.card-container{\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-template-rows: repeat(4,1fr);\n    padding: 20px;\n    gap: 20px;\n    height: 85vh;\n}\n\n.menu-card{\n    display: grid;\n    grid-template-columns: 2fr 3fr;\n    grid-template-rows: repeat(2,1fr);\n    box-shadow: 0 0 10px rgb(78, 77, 77);\n    border-radius: 5px;\n    border: 3px solid orange;\n    height: 100%;\n    \n    \n}\n.img{\n    grid-row: 1/3;\n    align-self: center;\n    width: 100%;\n    max-height: 100px;\n    \n}\n.name-price{\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n    align-items: flex-end;\n    padding-bottom: 0px;\n}\n.card-desc{\n    padding: 10px;\n}\n\n\nfooter{\n    width: 100vw;\n    background-color: rgb(250, 141, 32);\n    height: 5vh;\n    z-index: 2;\n    \n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;;IAEI,kDAAyC;IACzC,yDAAyD;IACzD,4BAA4B;IAC5B,2BAA2B;IAC3B,4BAA4B;IAC5B,oBAAoB;IACpB,aAAa;;;AAGjB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,kCAAkC;IAClC,mBAAmB;IACnB,UAAU;IACV,gBAAgB;IAChB,mCAAmC;;;AAGvC;;AAEA;GACG,WAAW;GACX,YAAY;;AAEf;AACA;IACI,WAAW;IACX,sCAAsC;AAC1C;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,qBAAqB;IACrB,aAAa;IACb,WAAW;;AAEf;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,gBAAgB;IAChB,oBAAoB;IACpB,mBAAmB;;AAEvB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,uBAAuB;IACvB,qCAAqC;AACzC;AACA;IACI,iBAAiB;IACjB,QAAQ;IACR,uBAAuB;IACvB,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,UAAU;IACV,aAAa;IACb,oBAAoB;IACpB,yCAAyC;IACzC,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,YAAY;IACZ,YAAY;AAChB;AACA;IACI,aAAa;IACb,+BAA+B;IAC/B,yDAAqD;IACrD,sBAAsB;IACtB,2BAA2B;IAC3B,kBAAkB;IAClB,oCAAoC;IACpC,aAAa;IACb,SAAS;IACT,YAAY;;;AAGhB;;AAEA;IACI,oBAAoB;IACpB,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,wBAAwB;IACxB,oBAAoB;;AAExB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,QAAQ;;AAEZ;AACA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;IACpB,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,wBAAwB;;;;AAI5B;AACA;IACI,aAAa;IACb,oCAAoC;IACpC,iCAAiC;IACjC,aAAa;IACb,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,iCAAiC;IACjC,oCAAoC;IACpC,kBAAkB;IAClB,wBAAwB;IACxB,YAAY;;;AAGhB;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,iBAAiB;;AAErB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,aAAa;AACjB;;;AAGA;IACI,YAAY;IACZ,mCAAmC;IACnC,WAAW;IACX,UAAU;;AAEd","sourcesContent":["*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    \n    background:url('./images/background.png');\n    /*might need to switch to background-attachment: scroll;*/\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    backdrop-filter: 8px;\n    height: 100vh;\n    \n    \n}\n\nheader{\n    width: 100vw;\n    height: 10vh;\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    align-items: center;\n    z-index: 1;\n    overflow: hidden;\n    background-color: rgb(250, 141, 32);\n\n    \n}\n\nimg{\n   width: 100%;\n   height: auto;\n   \n}\nmain{\n    height:85vh;\n    background-color: rgba(8, 8, 8, 0.679);\n}\n.home-page{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    justify-items: center;\n    padding: 20px;\n    z-index: -1; \n    \n}\n.menu-page{\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    background-color: #fffaf0db;\n}\n\n.slider{\n    position: relative;\n    width: 100%;\n    height: 80%;\n    overflow: hidden;\n    box-shadow: 0 0 15px;\n    border-radius: 15px;\n\n}\n.slider-container{\n    display:flex;\n    height: 100%;\n    transform: translate(0);\n    transition: transform .8s ease-in-out;\n}\n.btn-container{\n    position:absolute;\n    top: 50%;\n    border: 1px solid black;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n}\n.banner-container{\n    min-width: 400px;\n    width: 80%;\n    height: 300px;\n    box-shadow: 0 0 15px;\n    background-color: rgba(255, 255, 255, .6);\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n}\n\n.banner-title{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    text-align: center;\n}\n\n.banner-btn-container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n.banner-btn{\n    width: 100px;\n    height: 50px;\n}\n.pizza-Menu{\n    display: grid;\n    grid-template-rows: 1fr 2fr 3fr;\n    background-image: url('./images/menu-background.png');\n    background-size: cover;\n    background-position: center;\n    text-align: center;\n    background-color: rgba(8, 8, 8, 0.4);\n    padding: 20px;\n    gap: 20px;\n    height: 85vh;\n    \n\n}\n\n.build-your-own{\n    box-shadow: 0 0 15px;\n    width: 100%;\n    padding: 10px;\n    border-radius: 25px;\n    background-color: #fffaf0db;\n    border: 5px solid orange;\n    justify-self: center;\n    \n}\n.toppings ul{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2px;\n\n}\n.top{\n    text-align: center;\n    list-style: none;\n}\n\n.specials{\n    box-shadow: 0 0 15px;\n    width: 100%;\n    padding: 10px;\n    border-radius: 25px;\n    background-color: #fffaf0db;\n    border: 5px solid orange;\n    \n    \n    \n}\n.card-container{\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-template-rows: repeat(4,1fr);\n    padding: 20px;\n    gap: 20px;\n    height: 85vh;\n}\n\n.menu-card{\n    display: grid;\n    grid-template-columns: 2fr 3fr;\n    grid-template-rows: repeat(2,1fr);\n    box-shadow: 0 0 10px rgb(78, 77, 77);\n    border-radius: 5px;\n    border: 3px solid orange;\n    height: 100%;\n    \n    \n}\n.img{\n    grid-row: 1/3;\n    align-self: center;\n    width: 100%;\n    max-height: 100px;\n    \n}\n.name-price{\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n    align-items: flex-end;\n    padding-bottom: 0px;\n}\n.card-desc{\n    padding: 10px;\n}\n\n\nfooter{\n    width: 100vw;\n    background-color: rgb(250, 141, 32);\n    height: 5vh;\n    z-index: 2;\n    \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHome": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _images_car1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/car1.png */ "./src/images/car1.png");
/* harmony import */ var _images_car2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/car2.png */ "./src/images/car2.png");
/* harmony import */ var _images_car3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/car3.png */ "./src/images/car3.png");
/* harmony import */ var _images_car4_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/car4.png */ "./src/images/car4.png");
/* harmony import */ var _images_car5_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/car5.png */ "./src/images/car5.png");






const makeSlider = () => {
    const slideContainer = document.createElement('div');
    slideContainer.classList.add('slider');

    const carouselSlide = document.createElement('div');
    carouselSlide.classList.add('slider-container');
    slideContainer.appendChild(carouselSlide);

    const carOne = document.createElement('img');
    carOne.src = _images_car1_png__WEBPACK_IMPORTED_MODULE_0__;
    carouselSlide.appendChild(carOne);


    const carTwo = document.createElement('img');
    carTwo.src = _images_car2_png__WEBPACK_IMPORTED_MODULE_1__;
    carTwo.alt = "";
    carouselSlide.appendChild(carTwo);


    const carThree = document.createElement('img');
    carThree.src = _images_car3_png__WEBPACK_IMPORTED_MODULE_2__;
    carThree.alt = "";
    carouselSlide.appendChild(carThree);
    
    const carFour = document.createElement('img');
    carFour.src = _images_car4_png__WEBPACK_IMPORTED_MODULE_3__;
    carFour.alt = "";
    carouselSlide.appendChild(carFour);

    const carFive = document.createElement('img');
    carFive.src = _images_car5_png__WEBPACK_IMPORTED_MODULE_4__;
    carFive.alt = "";
    carouselSlide.appendChild(carFive);

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    //change this all to divs with background URL. Will fit better. 
    
    //buttons
    const prevBtn = document.createElement('button');
    prevBtn.id = 'prevBtn';
    prevBtn.innerText = 'prev';

    const nextBtn  = document.createElement('button');
    nextBtn.id = 'next';
    nextBtn.innerText = 'next';

    btnContainer.appendChild(prevBtn)
    btnContainer.appendChild(nextBtn)

    slideContainer.appendChild(btnContainer)

   return slideContainer;
}


class Slider{
    constructor({
        sliderSelector = '.slider',
        sliderContainerSelector = '.slider-container',
        previousSelector = '#prevBtn',
        nextSelector = '#next',

    } = {} ){
        this.slider = document.querySelector(sliderSelector);
        this.slides = document.querySelectorAll(`${sliderContainerSelector} img`).length;
        this.sliderContainer = document.querySelector(sliderContainerSelector);
        this.previousBtn = document.querySelector(previousSelector);
        this.nextBtn = document.querySelector(nextSelector);
        this.slideSize = this.slider.clientWidth;
        this.currentSlide = 0;

        this.setEventListeners();
    }
    moveSlides(){
        this.sliderContainer.style.transform = `translateX(-${this.currentSlide * this.slideSize}px)`
    }
    nextSlide(){
        this.currentSlide = this.currentSlide >= this.slides -1 ? 0 : this.currentSlide + 1;
        this.moveSlides();
    }
    previousSlide(){
        this.currentSlide = this.currentSlide <= 0 ? this.slides -1 : this.currentSlide -1;
        this.moveSlides();

    }
    setEventListeners(){
        this.nextBtn.addEventListener('click',this.nextSlide.bind(this))
        this.previousBtn.addEventListener('click',this.previousSlide.bind(this))
    }
};

const buildBanner = () => {
    const banner = document.createElement('div');
    banner.classList.add('banner-container');

   

    const bannerTitle = document.createElement('div');
    bannerTitle.classList.add('banner-title');

    const bannerHeader = document.createElement('h2')
    bannerHeader.textContent = "Benvenuti a Tutti";

    const bannerPara = document.createElement('p');
    bannerPara.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequatur voluptatum commodi exercitationem. Perspiciatis cupiditate placeat laudantium iure tempore aliquid nostrum voluptate";
    
    
    bannerTitle.appendChild(bannerHeader);
    bannerTitle.appendChild(bannerPara);

    banner.appendChild(bannerTitle);
    


    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('banner-btn-container');

    const menuBtn = document.createElement('button');
    menuBtn.type = 'button';
    menuBtn.innerText = "Menu"
    menuBtn.classList.add('banner-menu', 'banner-btn');
    //menuBtn.classList.add('banner-btn','');


    const contactBtn = document.createElement('button');
    contactBtn.type = 'button';
    contactBtn.innerText = 'Contact';
    contactBtn.classList.add('banner-contact','banner-btn');
    //contactBtn.classList.add('banner-btn')

    buttonContainer.appendChild(menuBtn);
    buttonContainer.appendChild(contactBtn);

    banner.appendChild(buttonContainer);
    

    


    return banner
};




const loadHome = () => {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.classList.remove('menu-page','about-page','contact-page');
    main.classList.add('home-page');
    main.appendChild(makeSlider());
    main.appendChild(buildBanner());
    new Slider();
    

}



/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _images_panelle_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/panelle.png */ "./src/images/panelle.png");
/* harmony import */ var _images_arancini_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/arancini.png */ "./src/images/arancini.png");
/* harmony import */ var _images_panzerotti_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/panzerotti.png */ "./src/images/panzerotti.png");
/* harmony import */ var _images_italian_beef_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/italian-beef.png */ "./src/images/italian-beef.png");
/* harmony import */ var _images_sfincione_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/sfincione.png */ "./src/images/sfincione.png");






const createToppings = () => {
    const toppingsContainer = document.createElement('div');
    toppingsContainer.classList.add('toppings');
    const toppingList = document.createElement('ul');
    
    const toppings = [
        'Pepperoni',
        'Sausage',
        'Prosciuto',
        'Artichoke',
        'Mushroom',
        'Onions',
        'Green Pepper',
        'Black Olives',
        'Hot Giardenera',
        'Basil'
    ]
    
    toppings.forEach((topping)=>{
        const item = document.createElement('li');
        item.innerText = topping;
        item.classList.add('top');
        toppingList.appendChild(item)

    });

    toppingsContainer.appendChild(toppingList);


    return toppingsContainer
};


const newCard = (name,desc,price,item) => {
    const card = document.createElement('div');
    card.classList.add('menu-card');

    const namePrice = document.createElement('div');
    namePrice.classList.add('name-price');

    const header = document.createElement('h2');
    header.classList.add('card-header');
    header.innerText = name;

    const cardPrice = document.createElement('p');
    cardPrice.classList.add('card-price');
    cardPrice.innerText = price;

    
    const description = document.createElement('p');
    description.classList.add('card-desc');
    description.innerText = desc;

    const image = document.createElement('img');
    image.classList.add('img')
    image.src = item;

    namePrice.append(header,cardPrice)

    card.append(image,namePrice,description);



    



    return card
}

const menuCardContainer = () => {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('card-container');

    const menuArray = [
        {
            name:"Arancini",
            desc:"Balls of rice stuffed with peas, meat sauce, and cheese. 4CT ",
            price: "$7.99",
            picture: _images_arancini_png__WEBPACK_IMPORTED_MODULE_1__

        },
        {
            name:"Arancini",
            desc:"Balls of rice stuffed with peas, meat sauce, and cheese. 4CT ",
            price: "$7.99",
            picture: _images_panelle_png__WEBPACK_IMPORTED_MODULE_0__

        },
        {
            name:"Arancini",
            desc:"Balls of rice stuffed with peas, meat sauce, and cheese. 4CT ",
            price: "$7.99",
            picture: _images_panzerotti_png__WEBPACK_IMPORTED_MODULE_2__
        },
        {
            name:"Arancini",
            desc:"Balls of rice stuffed with peas, meat sauce, and cheese. 4CT ",
            price: "$7.99",
            picture: _images_italian_beef_png__WEBPACK_IMPORTED_MODULE_3__
        },
        {
            name:"Arancini",
            desc:"Balls of rice stuffed with peas, meat sauce, and cheese. 4CT ",
            price: "$7.99",
            picture: _images_sfincione_png__WEBPACK_IMPORTED_MODULE_4__
        },
        {
            name:"Arancini",
            desc:"Balls of rice stuffed with peas, meat sauce, and cheese. 4CT ",
            price: "$7.99",
            picture: _images_arancini_png__WEBPACK_IMPORTED_MODULE_1__
        },
        {
            name:"Arancini",
            desc:"Balls of rice stuffed with peas, meat sauce, and cheese. 4CT ",
            price: "$7.99",
            picture: _images_arancini_png__WEBPACK_IMPORTED_MODULE_1__
        },
        {
            name:"Arancini",
            desc:"Balls of rice stuffed with peas, meat sauce, and cheese. 4CT ",
            price: "$7.99",
            picture: _images_arancini_png__WEBPACK_IMPORTED_MODULE_1__
        },

    ]


    menuArray.forEach((item)=>{
        menuContainer.appendChild(newCard(item.name,item.desc,item.price,item.picture))
    })
    

    return menuContainer;

};









class Menu{

    constructor(){
        this.page = document.createElement('div');
        this.header = document.createElement('h2');
    };

    pizzaMenu(){

        this.page.classList.add('pizza-Menu')
        this.header.innerText = "Pizza";
        this.header.style.fontSize = '4rem'
        this.page.appendChild(this.header);

        const buildYourOwn = document.createElement('div');
        buildYourOwn.classList.add('build-your-own');
        //build your own markup
        const ownTitle = document.createElement('h2');
        ownTitle.innerText = 'Build your own';

        const buildDisc = document.createElement('p')
        buildDisc.classList.add('build-disc');
        buildDisc.innerText = 'Choose 3 of any toppings, adittional toppings $1.50';
        
        buildYourOwn.appendChild(ownTitle);
        buildYourOwn.appendChild(buildDisc);
        buildYourOwn.appendChild(createToppings());


        const specials = document.createElement('div');
        specials.classList.add('specials');

        const specialTitle = document.createElement('h2');
        specialTitle.innerText = 'Specials'


        specials.appendChild(specialTitle);
        
        this.page.appendChild(buildYourOwn);
        this.page.appendChild(specials);
        
        return this.page
    }

};

 const loadMenu = () => {
    
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.classList.remove('home-page','about-page','contact-page');
    main.classList.add('menu-page');

    const pizza = new Menu();
    const appetizers = new Menu();

    main.appendChild(pizza.pizzaMenu())
    main.appendChild(menuCardContainer())


 };
 

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/modules/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/modules/menu.js");



function createHeader(){
    const header = document.createElement('header');
    header.appendChild(getTitle())
    header.appendChild(createNav())
    return header

};
function getTitle (){
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = "Camaci's Pizzeria";
    return title
}
function createNav(){
    const nav = document.createElement('nav');


    let btnArray = [];
    
    const home = document.createElement('button');
    home.classList.add('nav-btn');
    home.type = 'button';
    home.innerText = 'Home';
    home.name = 'home'
    btnArray.push(home);

    const menu = document.createElement('button');
    menu.classList.add('nav-btn');
    menu.type = 'button';
    menu.name = 'menu';
    menu.innerText = 'Menu';
    btnArray.push(menu);
    
    const about = document.createElement('button');
    about.classList.add('nav-btn');
    about.type = 'button';
    about.name = 'about';
    about.innerText = 'About';
    btnArray.push(about);

    const contact = document.createElement('button');
    contact.classList.add('nav-btn');
    contact.type = 'button';
    contact.name = 'contact';
    contact.innerText = 'Contact';
    btnArray.push(contact);

    btnArray.forEach((btn) => {
        btn.dataset.page = btn.name;
        nav.appendChild(btn);
        btn.addEventListener('click',()=>{
           mainFinder(btn.dataset.page)
        });
    });

    return nav;
}






function mainFinder(data){
    const main = document.querySelector('main')
    main.innerHTML = '';
    if(data === 'home'){
        (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)()
        
    }
    else{
        main.innerHTML = '';
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();
        


    }

}
function render(){
    const main = document.createElement('main');
    const footer = document.createElement('footer');
    document.body.appendChild(createHeader());
    document.body.appendChild(main);
    document.body.appendChild(footer);
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)();

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./src/images/arancini.png":
/*!*********************************!*\
  !*** ./src/images/arancini.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b69e7698d643b7a4796d.png";

/***/ }),

/***/ "./src/images/background.png":
/*!***********************************!*\
  !*** ./src/images/background.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "23dd1b284e0ed1c6c379.png";

/***/ }),

/***/ "./src/images/car1.png":
/*!*****************************!*\
  !*** ./src/images/car1.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b86516ac37804f6bf6a4.png";

/***/ }),

/***/ "./src/images/car2.png":
/*!*****************************!*\
  !*** ./src/images/car2.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ca7527d03dca64b42ca.png";

/***/ }),

/***/ "./src/images/car3.png":
/*!*****************************!*\
  !*** ./src/images/car3.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d497a4da330b78d148a.png";

/***/ }),

/***/ "./src/images/car4.png":
/*!*****************************!*\
  !*** ./src/images/car4.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1de6188f548316862e4b.png";

/***/ }),

/***/ "./src/images/car5.png":
/*!*****************************!*\
  !*** ./src/images/car5.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f2f56a302a3e375619b3.png";

/***/ }),

/***/ "./src/images/italian-beef.png":
/*!*************************************!*\
  !*** ./src/images/italian-beef.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fcb0f5eae2cafc85a1b9.png";

/***/ }),

/***/ "./src/images/menu-background.png":
/*!****************************************!*\
  !*** ./src/images/menu-background.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a917c762006dd92070b7.png";

/***/ }),

/***/ "./src/images/panelle.png":
/*!********************************!*\
  !*** ./src/images/panelle.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dcb42c47878171636001.png";

/***/ }),

/***/ "./src/images/panzerotti.png":
/*!***********************************!*\
  !*** ./src/images/panzerotti.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "491b5f09458889e2b2bf.png";

/***/ }),

/***/ "./src/images/sfincione.png":
/*!**********************************!*\
  !*** ./src/images/sfincione.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "99ae250d146aae56d71b.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/background.png */ "./src/images/background.png");
/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/render */ "./src/modules/render.js");





(0,_modules_render__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzRnJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDNEI7O0FBRVg7O0FBRXRDLDJEQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2FyYW5jaW5pLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FyYW5jaW5pLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9zcmMvbW9kdWxlcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FyYW5jaW5pL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hcmFuY2luaS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FyYW5jaW5pL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2FyYW5jaW5pL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2FyYW5jaW5pL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmFja2dyb3VuZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9tZW51LWJhY2tncm91bmQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG4gICAgXFxuICAgIGJhY2tncm91bmQ6dXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgLyptaWdodCBuZWVkIHRvIHN3aXRjaCB0byBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDsqL1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogOHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBcXG4gICAgXFxufVxcblxcbmhlYWRlcntcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDE0MSwgMzIpO1xcblxcbiAgICBcXG59XFxuXFxuaW1ne1xcbiAgIHdpZHRoOiAxMDAlO1xcbiAgIGhlaWdodDogYXV0bztcXG4gICBcXG59XFxubWFpbntcXG4gICAgaGVpZ2h0Ojg1dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOCwgOCwgOCwgMC42NzkpO1xcbn1cXG4uaG9tZS1wYWdle1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgei1pbmRleDogLTE7IFxcbiAgICBcXG59XFxuLm1lbnUtcGFnZXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYWYwZGI7XFxufVxcblxcbi5zbGlkZXJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG5cXG59XFxuLnNsaWRlci1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC44cyBlYXNlLWluLW91dDtcXG59XFxuLmJ0bi1jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5iYW5uZXItY29udGFpbmVye1xcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuLmJhbm5lci10aXRsZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJhbm5lci1idG4tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG4uYmFubmVyLWJ0bntcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcbi5waXp6YS1NZW51e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgM2ZyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCA4LCA4LCAwLjQpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGhlaWdodDogODV2aDtcXG4gICAgXFxuXFxufVxcblxcbi5idWlsZC15b3VyLW93bntcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYWYwZGI7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIG9yYW5nZTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIFxcbn1cXG4udG9wcGluZ3MgdWx7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAycHg7XFxuXFxufVxcbi50b3B7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnNwZWNpYWxze1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZhZjBkYjtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgb3JhbmdlO1xcbiAgICBcXG4gICAgXFxuICAgIFxcbn1cXG4uY2FyZC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwxZnIpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGhlaWdodDogODV2aDtcXG59XFxuXFxuLm1lbnUtY2FyZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDFmcik7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYig3OCwgNzcsIDc3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBvcmFuZ2U7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgXFxuICAgIFxcbn1cXG4uaW1ne1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gICAgXFxufVxcbi5uYW1lLXByaWNle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcXG59XFxuLmNhcmQtZGVzY3tcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuXFxuZm9vdGVye1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDE0MSwgMzIpO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxrREFBeUM7SUFDekMseURBQXlEO0lBQ3pELDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixhQUFhOzs7QUFHakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsbUNBQW1DOzs7QUFHdkM7O0FBRUE7R0FDRyxXQUFXO0dBQ1gsWUFBWTs7QUFFZjtBQUNBO0lBQ0ksV0FBVztJQUNYLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixXQUFXOztBQUVmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsUUFBUTtJQUNSLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQix5REFBcUQ7SUFDckQsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixTQUFTO0lBQ1QsWUFBWTs7O0FBR2hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsb0JBQW9COztBQUV4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixRQUFROztBQUVaO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix3QkFBd0I7Ozs7QUFJNUI7QUFDQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixTQUFTO0lBQ1QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLFlBQVk7OztBQUdoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxVQUFVOztBQUVkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG4gICAgXFxuICAgIGJhY2tncm91bmQ6dXJsKCcuL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZycpO1xcbiAgICAvKm1pZ2h0IG5lZWQgdG8gc3dpdGNoIHRvIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsOyovXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiA4cHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuaGVhZGVye1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMTQxLCAzMik7XFxuXFxuICAgIFxcbn1cXG5cXG5pbWd7XFxuICAgd2lkdGg6IDEwMCU7XFxuICAgaGVpZ2h0OiBhdXRvO1xcbiAgIFxcbn1cXG5tYWlue1xcbiAgICBoZWlnaHQ6ODV2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCA4LCA4LCAwLjY3OSk7XFxufVxcbi5ob21lLXBhZ2V7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB6LWluZGV4OiAtMTsgXFxuICAgIFxcbn1cXG4ubWVudS1wYWdle1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZhZjBkYjtcXG59XFxuXFxuLnNsaWRlcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcblxcbn1cXG4uc2xpZGVyLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjhzIGVhc2UtaW4tb3V0O1xcbn1cXG4uYnRuLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuLmJhbm5lci1jb250YWluZXJ7XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4uYmFubmVyLXRpdGxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYmFubmVyLWJ0bi1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbi5iYW5uZXItYnRue1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuLnBpenphLU1lbnV7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAzZnI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvbWVudS1iYWNrZ3JvdW5kLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCA4LCA4LCAwLjQpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGhlaWdodDogODV2aDtcXG4gICAgXFxuXFxufVxcblxcbi5idWlsZC15b3VyLW93bntcXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYWYwZGI7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIG9yYW5nZTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIFxcbn1cXG4udG9wcGluZ3MgdWx7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAycHg7XFxuXFxufVxcbi50b3B7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnNwZWNpYWxze1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZhZjBkYjtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgb3JhbmdlO1xcbiAgICBcXG4gICAgXFxuICAgIFxcbn1cXG4uY2FyZC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwxZnIpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGhlaWdodDogODV2aDtcXG59XFxuXFxuLm1lbnUtY2FyZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDFmcik7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYig3OCwgNzcsIDc3KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBvcmFuZ2U7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgXFxuICAgIFxcbn1cXG4uaW1ne1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcXG4gICAgXFxufVxcbi5uYW1lLXByaWNle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcXG59XFxuLmNhcmQtZGVzY3tcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuXFxuZm9vdGVye1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDE0MSwgMzIpO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY2FyMSBmcm9tICcuLi9pbWFnZXMvY2FyMS5wbmcnO1xuaW1wb3J0IGNhcjIgZnJvbSAnLi4vaW1hZ2VzL2NhcjIucG5nJztcbmltcG9ydCBjYXIzIGZyb20gJy4uL2ltYWdlcy9jYXIzLnBuZyc7XG5pbXBvcnQgY2FyNCBmcm9tICcuLi9pbWFnZXMvY2FyNC5wbmcnO1xuaW1wb3J0IGNhcjUgZnJvbSAnLi4vaW1hZ2VzL2NhcjUucG5nJztcblxuY29uc3QgbWFrZVNsaWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBzbGlkZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNsaWRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlcicpO1xuXG4gICAgY29uc3QgY2Fyb3VzZWxTbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcm91c2VsU2xpZGUuY2xhc3NMaXN0LmFkZCgnc2xpZGVyLWNvbnRhaW5lcicpO1xuICAgIHNsaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcm91c2VsU2xpZGUpO1xuXG4gICAgY29uc3QgY2FyT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2FyT25lLnNyYyA9IGNhcjE7XG4gICAgY2Fyb3VzZWxTbGlkZS5hcHBlbmRDaGlsZChjYXJPbmUpO1xuXG5cbiAgICBjb25zdCBjYXJUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjYXJUd28uc3JjID0gY2FyMjtcbiAgICBjYXJUd28uYWx0ID0gXCJcIjtcbiAgICBjYXJvdXNlbFNsaWRlLmFwcGVuZENoaWxkKGNhclR3byk7XG5cblxuICAgIGNvbnN0IGNhclRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2FyVGhyZWUuc3JjID0gY2FyMztcbiAgICBjYXJUaHJlZS5hbHQgPSBcIlwiO1xuICAgIGNhcm91c2VsU2xpZGUuYXBwZW5kQ2hpbGQoY2FyVGhyZWUpO1xuICAgIFxuICAgIGNvbnN0IGNhckZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjYXJGb3VyLnNyYyA9IGNhcjQ7XG4gICAgY2FyRm91ci5hbHQgPSBcIlwiO1xuICAgIGNhcm91c2VsU2xpZGUuYXBwZW5kQ2hpbGQoY2FyRm91cik7XG5cbiAgICBjb25zdCBjYXJGaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2FyRml2ZS5zcmMgPSBjYXI1O1xuICAgIGNhckZpdmUuYWx0ID0gXCJcIjtcbiAgICBjYXJvdXNlbFNsaWRlLmFwcGVuZENoaWxkKGNhckZpdmUpO1xuXG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J0bi1jb250YWluZXInKTtcblxuICAgIC8vY2hhbmdlIHRoaXMgYWxsIHRvIGRpdnMgd2l0aCBiYWNrZ3JvdW5kIFVSTC4gV2lsbCBmaXQgYmV0dGVyLiBcbiAgICBcbiAgICAvL2J1dHRvbnNcbiAgICBjb25zdCBwcmV2QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJldkJ0bi5pZCA9ICdwcmV2QnRuJztcbiAgICBwcmV2QnRuLmlubmVyVGV4dCA9ICdwcmV2JztcblxuICAgIGNvbnN0IG5leHRCdG4gID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmV4dEJ0bi5pZCA9ICduZXh0JztcbiAgICBuZXh0QnRuLmlubmVyVGV4dCA9ICduZXh0JztcblxuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmV2QnRuKVxuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXh0QnRuKVxuXG4gICAgc2xpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKVxuXG4gICByZXR1cm4gc2xpZGVDb250YWluZXI7XG59XG5cblxuY2xhc3MgU2xpZGVye1xuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgc2xpZGVyU2VsZWN0b3IgPSAnLnNsaWRlcicsXG4gICAgICAgIHNsaWRlckNvbnRhaW5lclNlbGVjdG9yID0gJy5zbGlkZXItY29udGFpbmVyJyxcbiAgICAgICAgcHJldmlvdXNTZWxlY3RvciA9ICcjcHJldkJ0bicsXG4gICAgICAgIG5leHRTZWxlY3RvciA9ICcjbmV4dCcsXG5cbiAgICB9ID0ge30gKXtcbiAgICAgICAgdGhpcy5zbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNsaWRlclNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5zbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke3NsaWRlckNvbnRhaW5lclNlbGVjdG9yfSBpbWdgKS5sZW5ndGg7XG4gICAgICAgIHRoaXMuc2xpZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzbGlkZXJDb250YWluZXJTZWxlY3Rvcik7XG4gICAgICAgIHRoaXMucHJldmlvdXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByZXZpb3VzU2VsZWN0b3IpO1xuICAgICAgICB0aGlzLm5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5leHRTZWxlY3Rvcik7XG4gICAgICAgIHRoaXMuc2xpZGVTaXplID0gdGhpcy5zbGlkZXIuY2xpZW50V2lkdGg7XG4gICAgICAgIHRoaXMuY3VycmVudFNsaWRlID0gMDtcblxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIG1vdmVTbGlkZXMoKXtcbiAgICAgICAgdGhpcy5zbGlkZXJDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7dGhpcy5jdXJyZW50U2xpZGUgKiB0aGlzLnNsaWRlU2l6ZX1weClgXG4gICAgfVxuICAgIG5leHRTbGlkZSgpe1xuICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlID49IHRoaXMuc2xpZGVzIC0xID8gMCA6IHRoaXMuY3VycmVudFNsaWRlICsgMTtcbiAgICAgICAgdGhpcy5tb3ZlU2xpZGVzKCk7XG4gICAgfVxuICAgIHByZXZpb3VzU2xpZGUoKXtcbiAgICAgICAgdGhpcy5jdXJyZW50U2xpZGUgPSB0aGlzLmN1cnJlbnRTbGlkZSA8PSAwID8gdGhpcy5zbGlkZXMgLTEgOiB0aGlzLmN1cnJlbnRTbGlkZSAtMTtcbiAgICAgICAgdGhpcy5tb3ZlU2xpZGVzKCk7XG5cbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKXtcbiAgICAgICAgdGhpcy5uZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0aGlzLm5leHRTbGlkZS5iaW5kKHRoaXMpKVxuICAgICAgICB0aGlzLnByZXZpb3VzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0aGlzLnByZXZpb3VzU2xpZGUuYmluZCh0aGlzKSlcbiAgICB9XG59O1xuXG5jb25zdCBidWlsZEJhbm5lciA9ICgpID0+IHtcbiAgICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyLWNvbnRhaW5lcicpO1xuXG4gICBcblxuICAgIGNvbnN0IGJhbm5lclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmFubmVyVGl0bGUuY2xhc3NMaXN0LmFkZCgnYmFubmVyLXRpdGxlJyk7XG5cbiAgICBjb25zdCBiYW5uZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgYmFubmVySGVhZGVyLnRleHRDb250ZW50ID0gXCJCZW52ZW51dGkgYSBUdXR0aVwiO1xuXG4gICAgY29uc3QgYmFubmVyUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBiYW5uZXJQYXJhLmlubmVyVGV4dCA9IFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFByYWVzZW50aXVtIGNvbnNlcXVhdHVyIHZvbHVwdGF0dW0gY29tbW9kaSBleGVyY2l0YXRpb25lbS4gUGVyc3BpY2lhdGlzIGN1cGlkaXRhdGUgcGxhY2VhdCBsYXVkYW50aXVtIGl1cmUgdGVtcG9yZSBhbGlxdWlkIG5vc3RydW0gdm9sdXB0YXRlXCI7XG4gICAgXG4gICAgXG4gICAgYmFubmVyVGl0bGUuYXBwZW5kQ2hpbGQoYmFubmVySGVhZGVyKTtcbiAgICBiYW5uZXJUaXRsZS5hcHBlbmRDaGlsZChiYW5uZXJQYXJhKTtcblxuICAgIGJhbm5lci5hcHBlbmRDaGlsZChiYW5uZXJUaXRsZSk7XG4gICAgXG5cblxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdiYW5uZXItYnRuLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnVCdG4udHlwZSA9ICdidXR0b24nO1xuICAgIG1lbnVCdG4uaW5uZXJUZXh0ID0gXCJNZW51XCJcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lci1tZW51JywgJ2Jhbm5lci1idG4nKTtcbiAgICAvL21lbnVCdG4uY2xhc3NMaXN0LmFkZCgnYmFubmVyLWJ0bicsJycpO1xuXG5cbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ0bi50eXBlID0gJ2J1dHRvbic7XG4gICAgY29udGFjdEJ0bi5pbm5lclRleHQgPSAnQ29udGFjdCc7XG4gICAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKCdiYW5uZXItY29udGFjdCcsJ2Jhbm5lci1idG4nKTtcbiAgICAvL2NvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZCgnYmFubmVyLWJ0bicpXG5cbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuXG4gICAgYmFubmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgXG5cbiAgICBcblxuXG4gICAgcmV0dXJuIGJhbm5lclxufTtcblxuXG5cblxuY29uc3QgbG9hZEhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1wYWdlJywnYWJvdXQtcGFnZScsJ2NvbnRhY3QtcGFnZScpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWtlU2xpZGVyKCkpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYnVpbGRCYW5uZXIoKSk7XG4gICAgbmV3IFNsaWRlcigpO1xuICAgIFxuXG59XG5cbmV4cG9ydHtcbiAgICBsb2FkSG9tZSxcbn0iLCJpbXBvcnQgcGFuZWxsZSBmcm9tICcuLi9pbWFnZXMvcGFuZWxsZS5wbmcnO1xuaW1wb3J0IGFyYW5jaW5pIGZyb20gJy4uL2ltYWdlcy9hcmFuY2luaS5wbmcnO1xuaW1wb3J0IHBhbnplcm90aSBmcm9tICcuLi9pbWFnZXMvcGFuemVyb3R0aS5wbmcnO1xuaW1wb3J0IGJlZWYgZnJvbSAnLi4vaW1hZ2VzL2l0YWxpYW4tYmVlZi5wbmcnO1xuaW1wb3J0IHNmaW5jb25lIGZyb20gJy4uL2ltYWdlcy9zZmluY2lvbmUucG5nJztcblxuY29uc3QgY3JlYXRlVG9wcGluZ3MgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9wcGluZ3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b3BwaW5nc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b3BwaW5ncycpO1xuICAgIGNvbnN0IHRvcHBpbmdMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBcbiAgICBjb25zdCB0b3BwaW5ncyA9IFtcbiAgICAgICAgJ1BlcHBlcm9uaScsXG4gICAgICAgICdTYXVzYWdlJyxcbiAgICAgICAgJ1Byb3NjaXV0bycsXG4gICAgICAgICdBcnRpY2hva2UnLFxuICAgICAgICAnTXVzaHJvb20nLFxuICAgICAgICAnT25pb25zJyxcbiAgICAgICAgJ0dyZWVuIFBlcHBlcicsXG4gICAgICAgICdCbGFjayBPbGl2ZXMnLFxuICAgICAgICAnSG90IEdpYXJkZW5lcmEnLFxuICAgICAgICAnQmFzaWwnXG4gICAgXVxuICAgIFxuICAgIHRvcHBpbmdzLmZvckVhY2goKHRvcHBpbmcpPT57XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpdGVtLmlubmVyVGV4dCA9IHRvcHBpbmc7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgndG9wJyk7XG4gICAgICAgIHRvcHBpbmdMaXN0LmFwcGVuZENoaWxkKGl0ZW0pXG5cbiAgICB9KTtcblxuICAgIHRvcHBpbmdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvcHBpbmdMaXN0KTtcblxuXG4gICAgcmV0dXJuIHRvcHBpbmdzQ29udGFpbmVyXG59O1xuXG5cbmNvbnN0IG5ld0NhcmQgPSAobmFtZSxkZXNjLHByaWNlLGl0ZW0pID0+IHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdtZW51LWNhcmQnKTtcblxuICAgIGNvbnN0IG5hbWVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVQcmljZS5jbGFzc0xpc3QuYWRkKCduYW1lLXByaWNlJyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpO1xuICAgIGhlYWRlci5pbm5lclRleHQgPSBuYW1lO1xuXG4gICAgY29uc3QgY2FyZFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNhcmRQcmljZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXByaWNlJyk7XG4gICAgY2FyZFByaWNlLmlubmVyVGV4dCA9IHByaWNlO1xuXG4gICAgXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnY2FyZC1kZXNjJyk7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGVzYztcblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnaW1nJylcbiAgICBpbWFnZS5zcmMgPSBpdGVtO1xuXG4gICAgbmFtZVByaWNlLmFwcGVuZChoZWFkZXIsY2FyZFByaWNlKVxuXG4gICAgY2FyZC5hcHBlbmQoaW1hZ2UsbmFtZVByaWNlLGRlc2NyaXB0aW9uKTtcblxuXG5cbiAgICBcblxuXG5cbiAgICByZXR1cm4gY2FyZFxufVxuXG5jb25zdCBtZW51Q2FyZENvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgbWVudUFycmF5ID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOlwiQXJhbmNpbmlcIixcbiAgICAgICAgICAgIGRlc2M6XCJCYWxscyBvZiByaWNlIHN0dWZmZWQgd2l0aCBwZWFzLCBtZWF0IHNhdWNlLCBhbmQgY2hlZXNlLiA0Q1QgXCIsXG4gICAgICAgICAgICBwcmljZTogXCIkNy45OVwiLFxuICAgICAgICAgICAgcGljdHVyZTogYXJhbmNpbmlcblxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOlwiQXJhbmNpbmlcIixcbiAgICAgICAgICAgIGRlc2M6XCJCYWxscyBvZiByaWNlIHN0dWZmZWQgd2l0aCBwZWFzLCBtZWF0IHNhdWNlLCBhbmQgY2hlZXNlLiA0Q1QgXCIsXG4gICAgICAgICAgICBwcmljZTogXCIkNy45OVwiLFxuICAgICAgICAgICAgcGljdHVyZTogcGFuZWxsZVxuXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6XCJBcmFuY2luaVwiLFxuICAgICAgICAgICAgZGVzYzpcIkJhbGxzIG9mIHJpY2Ugc3R1ZmZlZCB3aXRoIHBlYXMsIG1lYXQgc2F1Y2UsIGFuZCBjaGVlc2UuIDRDVCBcIixcbiAgICAgICAgICAgIHByaWNlOiBcIiQ3Ljk5XCIsXG4gICAgICAgICAgICBwaWN0dXJlOiBwYW56ZXJvdGlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTpcIkFyYW5jaW5pXCIsXG4gICAgICAgICAgICBkZXNjOlwiQmFsbHMgb2YgcmljZSBzdHVmZmVkIHdpdGggcGVhcywgbWVhdCBzYXVjZSwgYW5kIGNoZWVzZS4gNENUIFwiLFxuICAgICAgICAgICAgcHJpY2U6IFwiJDcuOTlcIixcbiAgICAgICAgICAgIHBpY3R1cmU6IGJlZWZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTpcIkFyYW5jaW5pXCIsXG4gICAgICAgICAgICBkZXNjOlwiQmFsbHMgb2YgcmljZSBzdHVmZmVkIHdpdGggcGVhcywgbWVhdCBzYXVjZSwgYW5kIGNoZWVzZS4gNENUIFwiLFxuICAgICAgICAgICAgcHJpY2U6IFwiJDcuOTlcIixcbiAgICAgICAgICAgIHBpY3R1cmU6IHNmaW5jb25lXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6XCJBcmFuY2luaVwiLFxuICAgICAgICAgICAgZGVzYzpcIkJhbGxzIG9mIHJpY2Ugc3R1ZmZlZCB3aXRoIHBlYXMsIG1lYXQgc2F1Y2UsIGFuZCBjaGVlc2UuIDRDVCBcIixcbiAgICAgICAgICAgIHByaWNlOiBcIiQ3Ljk5XCIsXG4gICAgICAgICAgICBwaWN0dXJlOiBhcmFuY2luaVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOlwiQXJhbmNpbmlcIixcbiAgICAgICAgICAgIGRlc2M6XCJCYWxscyBvZiByaWNlIHN0dWZmZWQgd2l0aCBwZWFzLCBtZWF0IHNhdWNlLCBhbmQgY2hlZXNlLiA0Q1QgXCIsXG4gICAgICAgICAgICBwcmljZTogXCIkNy45OVwiLFxuICAgICAgICAgICAgcGljdHVyZTogYXJhbmNpbmlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTpcIkFyYW5jaW5pXCIsXG4gICAgICAgICAgICBkZXNjOlwiQmFsbHMgb2YgcmljZSBzdHVmZmVkIHdpdGggcGVhcywgbWVhdCBzYXVjZSwgYW5kIGNoZWVzZS4gNENUIFwiLFxuICAgICAgICAgICAgcHJpY2U6IFwiJDcuOTlcIixcbiAgICAgICAgICAgIHBpY3R1cmU6IGFyYW5jaW5pXG4gICAgICAgIH0sXG5cbiAgICBdXG5cblxuICAgIG1lbnVBcnJheS5mb3JFYWNoKChpdGVtKT0+e1xuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NhcmQoaXRlbS5uYW1lLGl0ZW0uZGVzYyxpdGVtLnByaWNlLGl0ZW0ucGljdHVyZSkpXG4gICAgfSlcbiAgICBcblxuICAgIHJldHVybiBtZW51Q29udGFpbmVyO1xuXG59O1xuXG5cblxuXG5cblxuXG5cblxuY2xhc3MgTWVudXtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgfTtcblxuICAgIHBpenphTWVudSgpe1xuXG4gICAgICAgIHRoaXMucGFnZS5jbGFzc0xpc3QuYWRkKCdwaXp6YS1NZW51JylcbiAgICAgICAgdGhpcy5oZWFkZXIuaW5uZXJUZXh0ID0gXCJQaXp6YVwiO1xuICAgICAgICB0aGlzLmhlYWRlci5zdHlsZS5mb250U2l6ZSA9ICc0cmVtJ1xuICAgICAgICB0aGlzLnBhZ2UuYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IGJ1aWxkWW91ck93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidWlsZFlvdXJPd24uY2xhc3NMaXN0LmFkZCgnYnVpbGQteW91ci1vd24nKTtcbiAgICAgICAgLy9idWlsZCB5b3VyIG93biBtYXJrdXBcbiAgICAgICAgY29uc3Qgb3duVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBvd25UaXRsZS5pbm5lclRleHQgPSAnQnVpbGQgeW91ciBvd24nO1xuXG4gICAgICAgIGNvbnN0IGJ1aWxkRGlzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBidWlsZERpc2MuY2xhc3NMaXN0LmFkZCgnYnVpbGQtZGlzYycpO1xuICAgICAgICBidWlsZERpc2MuaW5uZXJUZXh0ID0gJ0Nob29zZSAzIG9mIGFueSB0b3BwaW5ncywgYWRpdHRpb25hbCB0b3BwaW5ncyAkMS41MCc7XG4gICAgICAgIFxuICAgICAgICBidWlsZFlvdXJPd24uYXBwZW5kQ2hpbGQob3duVGl0bGUpO1xuICAgICAgICBidWlsZFlvdXJPd24uYXBwZW5kQ2hpbGQoYnVpbGREaXNjKTtcbiAgICAgICAgYnVpbGRZb3VyT3duLmFwcGVuZENoaWxkKGNyZWF0ZVRvcHBpbmdzKCkpO1xuXG5cbiAgICAgICAgY29uc3Qgc3BlY2lhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3BlY2lhbHMuY2xhc3NMaXN0LmFkZCgnc3BlY2lhbHMnKTtcblxuICAgICAgICBjb25zdCBzcGVjaWFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBzcGVjaWFsVGl0bGUuaW5uZXJUZXh0ID0gJ1NwZWNpYWxzJ1xuXG5cbiAgICAgICAgc3BlY2lhbHMuYXBwZW5kQ2hpbGQoc3BlY2lhbFRpdGxlKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGFnZS5hcHBlbmRDaGlsZChidWlsZFlvdXJPd24pO1xuICAgICAgICB0aGlzLnBhZ2UuYXBwZW5kQ2hpbGQoc3BlY2lhbHMpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZVxuICAgIH1cblxufTtcblxuIGNvbnN0IGxvYWRNZW51ID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2hvbWUtcGFnZScsJ2Fib3V0LXBhZ2UnLCdjb250YWN0LXBhZ2UnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21lbnUtcGFnZScpO1xuXG4gICAgY29uc3QgcGl6emEgPSBuZXcgTWVudSgpO1xuICAgIGNvbnN0IGFwcGV0aXplcnMgPSBuZXcgTWVudSgpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChwaXp6YS5waXp6YU1lbnUoKSlcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVDYXJkQ29udGFpbmVyKCkpXG5cblxuIH07XG4gZXhwb3J0e1xuICAgIGxvYWRNZW51LFxuXG4gfSIsImltcG9ydCB7bG9hZEhvbWUsU2xpZGVyfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQge2xvYWRNZW51fSBmcm9tIFwiLi9tZW51XCJcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGdldFRpdGxlKCkpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKVxuICAgIHJldHVybiBoZWFkZXJcblxufTtcbmZ1bmN0aW9uIGdldFRpdGxlICgpe1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJDYW1hY2kncyBQaXp6ZXJpYVwiO1xuICAgIHJldHVybiB0aXRsZVxufVxuZnVuY3Rpb24gY3JlYXRlTmF2KCl7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cblxuICAgIGxldCBidG5BcnJheSA9IFtdO1xuICAgIFxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKTtcbiAgICBob21lLnR5cGUgPSAnYnV0dG9uJztcbiAgICBob21lLmlubmVyVGV4dCA9ICdIb21lJztcbiAgICBob21lLm5hbWUgPSAnaG9tZSdcbiAgICBidG5BcnJheS5wdXNoKGhvbWUpO1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIG1lbnUudHlwZSA9ICdidXR0b24nO1xuICAgIG1lbnUubmFtZSA9ICdtZW51JztcbiAgICBtZW51LmlubmVyVGV4dCA9ICdNZW51JztcbiAgICBidG5BcnJheS5wdXNoKG1lbnUpO1xuICAgIFxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIGFib3V0LnR5cGUgPSAnYnV0dG9uJztcbiAgICBhYm91dC5uYW1lID0gJ2Fib3V0JztcbiAgICBhYm91dC5pbm5lclRleHQgPSAnQWJvdXQnO1xuICAgIGJ0bkFycmF5LnB1c2goYWJvdXQpO1xuXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIGNvbnRhY3QudHlwZSA9ICdidXR0b24nO1xuICAgIGNvbnRhY3QubmFtZSA9ICdjb250YWN0JztcbiAgICBjb250YWN0LmlubmVyVGV4dCA9ICdDb250YWN0JztcbiAgICBidG5BcnJheS5wdXNoKGNvbnRhY3QpO1xuXG4gICAgYnRuQXJyYXkuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgIGJ0bi5kYXRhc2V0LnBhZ2UgPSBidG4ubmFtZTtcbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgbWFpbkZpbmRlcihidG4uZGF0YXNldC5wYWdlKVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuYXY7XG59XG5cblxuXG5cblxuXG5mdW5jdGlvbiBtYWluRmluZGVyKGRhdGEpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuICAgIGlmKGRhdGEgPT09ICdob21lJyl7XG4gICAgICAgIGxvYWRIb21lKClcbiAgICAgICAgXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGxvYWRNZW51KCk7XG4gICAgICAgIFxuXG5cbiAgICB9XG5cbn1cbmZ1bmN0aW9uIHJlbmRlcigpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgbG9hZEhvbWUoKTtcblxufVxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vaW1hZ2VzL2JhY2tncm91bmQucG5nJztcblxuaW1wb3J0IHJlbmRlciBmcm9tICcuL21vZHVsZXMvcmVuZGVyJztcblxucmVuZGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=