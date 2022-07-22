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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/car4.png */ "./src/images/car4.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/menu-background.png */ "./src/images/menu-background.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/background.png */ "./src/images/background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    min-height: 100vh;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: center;\n    background-size: cover;  \n}\n\nheader{\n    position: sticky;\n    top: 0;\n    height: 10vh;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    z-index: 1;\n    overflow: hidden;\n    background-color: rgba(13, 12, 12, 0.9);\n    color: rgb(236, 134, 18); \n    padding: 20px;\n    \n}\nnav{\n    width: 30vw;\n    display: flex;\n    justify-content:space-between;\n    \n}\n\nnav button{\n    width: 100px;\n    background-color: transparent;\n    border: none;\n    color: white;\n    font-size: 1.5rem;\n}\nimg{\n   width: 100%;\n   height: auto;\n   \n}\nmain{\n    min-height:85vh;\n   \n\n}\n.home-page{\n    height: 85vh;\n    z-index: -1; \n    \n\n    background-color: rgba(13, 12, 12, 0.75);\n    \n    \n}\n.menu-page{\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n}\n\n\n\n\n\n.slider{\n    position: relative;\n    width: 500px;\n    height: 500px;\n    overflow: hidden;\n    box-shadow: 0 0 15px;\n    border-radius: 15px;\n\n}\n.slider-container{\n    display:flex;\n    \n    height: 100%;\n    transform: translate(0);\n    transition: transform .8s ease-in-out;\n}\n.btn-container{\n    position:absolute;\n    top: 50%;\n    border: 1px solid black;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n\n}\n.banner-container{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    \n    text-align: center;\n    gap: 5px;\n    \n}\n.banner-container h1{\n    font-size: 6em;\n    color: orange;\n    text-decoration: underline 5px white;\n}\n.banner-container p{\n    width: 500px;\n    color: white;\n    margin-bottom: 10px;\n}\n.banner-btn-container{\n    display: flex;\n    gap: 25px;\n}\n.banner-btn-container button{\n    width: 10vw;\n    font-size: 1.5rem;\n    max-width: 150px;\n    padding: 10px;\n    border-radius: 10px;\n    border: none;\n    background-color: orange;\n    color: white;\n}\n\n.pizza-Menu{\n\n    text-align: center;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    \n    \n    \n    align-items: center;\n    width: 100%;\n    min-height: 600px;\n\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    \n    \n   \n\n}\n\n.menu-banner{\n    height: 90vh;\n    \n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-color: white;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    width: 100%;\n    \n}\n.menu-banner h1{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(13, 12, 12, 0.8);\n    font-size: 18rem;\n    color:white;\n}\n\n.pizza-Menu h1{\n    grid-column: 2/3;\n    font-size: 8rem;\n    color: black;\n    \n    margin-bottom: 5px;\n}\n\n.pizza-Menu h2{\n    font-size: 2rem;\n    \n    border-radius: 25px;\n    color: black;\n    width: 100%;\n    \n}\n.pizza-img1{\n    grid-column: 1/2;\n    grid-row: 2/3;\n\n}\n.pizza-img2{\n    grid-row: 2/3;\n    grid-column: 3/4;\n}\n\n.build-your-own{\n    \n    background-color: white;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    width: 75vw;\n    gap: 5px;\n    align-items: center;\n    height: 300px;\n    \n    \n}\n\n.toppings ul{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    height: 100%;\n    font-size: 1.2rem;\n    gap: 10px;\n\n    \n\n\n}\n.toppings li{\n    border-bottom: 5px solid rgb(236, 149, 18);\n}\n\n.top{\n    text-align: center;\n    list-style: none;\n}\n\n.specials{\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    width: 75vw;\n    gap:5px;\n    height: 300px;\n    padding:20px;\n    \n}\n\n\n.special-container{\n    display: grid;\n    grid-template-rows: repeat(5,1fr);\n    justify-content: space-around;\n    height: 100%;\n    width: 100%;\n    \n    \n    \n    \n    \n}\n.flex-list{\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    justify-content: flex-start;\n    width: 100%;\n    height: 100%;\n    align-items: center;\n    border-bottom: 1px solid orange;\n    \n}\n.flex-list li{\n    list-style: none;\n    text-align: left;\n    font-size: 1.2rem;\n    \n\n\n\n}\n.toppings{\n    height: 100%;\n}\n.card-container{\n    width: 75vw;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-template-rows: repeat(4,1fr);\n    padding: 50px 0px;\n    gap: 50px;\n    justify-self: center;\n    \n    \n    \n    \n    \n}\n\n.menu-card{\n    display: grid;\n    grid-template-columns: 2fr 3fr;\n    grid-template-rows: repeat(2,1fr);\n    border-bottom: 5px solid orange;\n    \n    padding: 5px;\n    width: 100%;\n    justify-self: center;\n}\n.img{\n    grid-row: 1/3;\n    align-self: center;\n    width: 250px;\n    height: 150px;\n    \n    justify-self: center;\n    \n    \n    \n}\n\n.name-price{\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n    align-items: flex-end;\n    padding-bottom: 0px;\n}\n.card-desc{\n    padding: 10px;\n}\n\n\nfooter{\n    \n    background-color: rgb(244, 130, 53);\n    height: 5vh;\n    z-index: 2;\n    \n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    min-height: 100vh;\n    background-image: url('./images/car4.png');\n    background-position: center;\n    background-size: cover;  \n}\n\nheader{\n    position: sticky;\n    top: 0;\n    height: 10vh;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    z-index: 1;\n    overflow: hidden;\n    background-color: rgba(13, 12, 12, 0.9);\n    color: rgb(236, 134, 18); \n    padding: 20px;\n    \n}\nnav{\n    width: 30vw;\n    display: flex;\n    justify-content:space-between;\n    \n}\n\nnav button{\n    width: 100px;\n    background-color: transparent;\n    border: none;\n    color: white;\n    font-size: 1.5rem;\n}\nimg{\n   width: 100%;\n   height: auto;\n   \n}\nmain{\n    min-height:85vh;\n   \n\n}\n.home-page{\n    height: 85vh;\n    z-index: -1; \n    \n\n    background-color: rgba(13, 12, 12, 0.75);\n    \n    \n}\n.menu-page{\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n}\n\n\n\n\n\n.slider{\n    position: relative;\n    width: 500px;\n    height: 500px;\n    overflow: hidden;\n    box-shadow: 0 0 15px;\n    border-radius: 15px;\n\n}\n.slider-container{\n    display:flex;\n    \n    height: 100%;\n    transform: translate(0);\n    transition: transform .8s ease-in-out;\n}\n.btn-container{\n    position:absolute;\n    top: 50%;\n    border: 1px solid black;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n\n}\n.banner-container{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    \n    text-align: center;\n    gap: 5px;\n    \n}\n.banner-container h1{\n    font-size: 6em;\n    color: orange;\n    text-decoration: underline 5px white;\n}\n.banner-container p{\n    width: 500px;\n    color: white;\n    margin-bottom: 10px;\n}\n.banner-btn-container{\n    display: flex;\n    gap: 25px;\n}\n.banner-btn-container button{\n    width: 10vw;\n    font-size: 1.5rem;\n    max-width: 150px;\n    padding: 10px;\n    border-radius: 10px;\n    border: none;\n    background-color: orange;\n    color: white;\n}\n\n.pizza-Menu{\n\n    text-align: center;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    \n    \n    \n    align-items: center;\n    width: 100%;\n    min-height: 600px;\n\n    background-image: url('./images/menu-background.png');\n    \n    \n   \n\n}\n\n.menu-banner{\n    height: 90vh;\n    \n    background-image: url('../src/images/background.png');\n    background-color: white;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    width: 100%;\n    \n}\n.menu-banner h1{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(13, 12, 12, 0.8);\n    font-size: 18rem;\n    color:white;\n}\n\n.pizza-Menu h1{\n    grid-column: 2/3;\n    font-size: 8rem;\n    color: black;\n    \n    margin-bottom: 5px;\n}\n\n.pizza-Menu h2{\n    font-size: 2rem;\n    \n    border-radius: 25px;\n    color: black;\n    width: 100%;\n    \n}\n.pizza-img1{\n    grid-column: 1/2;\n    grid-row: 2/3;\n\n}\n.pizza-img2{\n    grid-row: 2/3;\n    grid-column: 3/4;\n}\n\n.build-your-own{\n    \n    background-color: white;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    width: 75vw;\n    gap: 5px;\n    align-items: center;\n    height: 300px;\n    \n    \n}\n\n.toppings ul{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    height: 100%;\n    font-size: 1.2rem;\n    gap: 10px;\n\n    \n\n\n}\n.toppings li{\n    border-bottom: 5px solid rgb(236, 149, 18);\n}\n\n.top{\n    text-align: center;\n    list-style: none;\n}\n\n.specials{\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    width: 75vw;\n    gap:5px;\n    height: 300px;\n    padding:20px;\n    \n}\n\n\n.special-container{\n    display: grid;\n    grid-template-rows: repeat(5,1fr);\n    justify-content: space-around;\n    height: 100%;\n    width: 100%;\n    \n    \n    \n    \n    \n}\n.flex-list{\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    justify-content: flex-start;\n    width: 100%;\n    height: 100%;\n    align-items: center;\n    border-bottom: 1px solid orange;\n    \n}\n.flex-list li{\n    list-style: none;\n    text-align: left;\n    font-size: 1.2rem;\n    \n\n\n\n}\n.toppings{\n    height: 100%;\n}\n.card-container{\n    width: 75vw;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-template-rows: repeat(4,1fr);\n    padding: 50px 0px;\n    gap: 50px;\n    justify-self: center;\n    \n    \n    \n    \n    \n}\n\n.menu-card{\n    display: grid;\n    grid-template-columns: 2fr 3fr;\n    grid-template-rows: repeat(2,1fr);\n    border-bottom: 5px solid orange;\n    \n    padding: 5px;\n    width: 100%;\n    justify-self: center;\n}\n.img{\n    grid-row: 1/3;\n    align-self: center;\n    width: 250px;\n    height: 150px;\n    \n    justify-self: center;\n    \n    \n    \n}\n\n.name-price{\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n    align-items: flex-end;\n    padding-bottom: 0px;\n}\n.card-desc{\n    padding: 10px;\n}\n\n\nfooter{\n    \n    background-color: rgb(244, 130, 53);\n    height: 5vh;\n    z-index: 2;\n    \n}"],"sourceRoot":""}]);
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

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadAbout": () => (/* binding */ loadAbout)
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

const loadAbout = () => {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.classList.remove('menu-page','home-page','contact-page');
    main.classList.add('about-page');
    main.appendChild(makeSlider());
    new Slider();


}



/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContact": () => (/* binding */ loadContact)
/* harmony export */ });










const loadContact = () => {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.classList.remove('menu-page','home-page','about-page');
    main.classList.add('contact-page');
    
    
};



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
/* harmony import */ var _images_arancini_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/arancini.png */ "./src/images/arancini.png");



const buildBanner = () => {
    const banner = document.createElement('div');
    banner.classList.add('banner-container');


    const bannerHeader = document.createElement('h1')
    bannerHeader.textContent = "Camaci's Pizzeria";

    const bannerPara = document.createElement('p');
    bannerPara.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium consequatur voluptatum commodi exercitationem. Perspiciatis cupiditate placeat laudantium iure tempore aliquid nostrum voluptate";
    
  
    banner.append(bannerHeader,bannerPara);
    


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
    //main.appendChild(makeSlider());
    
    main.appendChild(buildBanner());
    
    //main.appendChild(homeImage())
    //new Slider();
    

}



/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBanner": () => (/* binding */ createBanner),
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _images_panelle_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/panelle.png */ "./src/images/panelle.png");
/* harmony import */ var _images_arancini_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/arancini.png */ "./src/images/arancini.png");
/* harmony import */ var _images_panzerotti_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/panzerotti.png */ "./src/images/panzerotti.png");
/* harmony import */ var _images_italian_beef_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/italian-beef.png */ "./src/images/italian-beef.png");
/* harmony import */ var _images_sfincione_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/sfincione.png */ "./src/images/sfincione.png");
/* harmony import */ var _images_eggplant_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/eggplant.png */ "./src/images/eggplant.png");
/* harmony import */ var _images_nutella_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/nutella.png */ "./src/images/nutella.png");
/* harmony import */ var _images_cornetto_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/cornetto.png */ "./src/images/cornetto.png");









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
            name:"Panelle",
            desc:"Sicilian fritters made from chickpea flour, with lemon and pepper",
            price: "$4.99",
            picture: _images_panelle_png__WEBPACK_IMPORTED_MODULE_0__

        },
        {
            name:"Panzeroti",
            desc:"Deep fried dough pocket filled with fresh tomato sauce, cheese, and basil",
            price: "$3.99",
            picture: _images_panzerotti_png__WEBPACK_IMPORTED_MODULE_2__
        },
        {
            name:"Italian Beef",
            desc:"Classic Chicago beef with your choice of peppers",
            price: "$7.99",
            picture: _images_italian_beef_png__WEBPACK_IMPORTED_MODULE_3__
        },
        {
            name:"Sfincione",
            desc:"Sicilian style thick cut pizza, by the slice",
            price: "$2.99",
            picture: _images_sfincione_png__WEBPACK_IMPORTED_MODULE_4__
        },
        {
            name:"Eggplant Parmesean",
            desc:"Eggplant Parmesean Sandwhich",
            price: "$5.99",
            picture: _images_eggplant_png__WEBPACK_IMPORTED_MODULE_5__
        },
        {
            name:"Nutella Crepes",
            desc:"Nutella Crepes with strawberries",
            price: "$7.99",
            picture: _images_nutella_png__WEBPACK_IMPORTED_MODULE_6__
        },
        {
            name:"Cornetti",
            desc:"Fresh Cornetti (nutella, peach, cream) and a Espresso",
            price: "$9.99",
            picture: _images_cornetto_png__WEBPACK_IMPORTED_MODULE_7__
        },

    ]


    menuArray.forEach((item)=>{
        menuContainer.appendChild(newCard(item.name,item.desc,item.price,item.picture))
    })
    

    return menuContainer;

};

const createSpecial = () => {
    const specialContainer = document.createElement('div');
    specialContainer.classList.add('special-container')
    const specials = [
        {
            name: 'The Giuseppe',
            desc: 'Pepperoni, Sausage, Red Pepper, Roasted Garlic, Pesto'
        },
        {
            name: 'The Giuseppe',
            desc: 'Pepperoni, Sausage, Red Pepper, Roasted Garlic'

        },
        {
            name: 'Vegetarian',
            desc: 'Ricotta and Spinach'

        },
        {
            name: 'Maragita',
            desc: 'Classic sweet tomato sauce with fresh Mozzarella Cheese and Basil'
        },
        {
            name: 'Faccia di Vechia',
            desc: 'Bread with a coating of Olive Oil, Salt, Pepper, Oregeno and Crushed red pepper'

        }
    ]

    specials.forEach((special) => {
        const list = document.createElement('ul');
        list.classList.add('flex-list')
        const listName = document.createElement('li');
        listName.innerText = special.name;
        const listDesc = document.createElement('li');
        listDesc.innerText = special.desc;

        list.append(listName,listDesc);
        specialContainer.appendChild(list);


    });

    return specialContainer;
};

class Menu{

    constructor(){
        this.page = document.createElement('div');
        //this.header = document.createElement('h1');
    };

    pizzaMenu(){

        this.page.classList.add('pizza-Menu')
        //this.header.innerText = "Pizza";
        //this.header.style.fontSize = '4rem'
        

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
        specialTitle.innerText = 'Specials';
        

        


       


        




        specials.appendChild(specialTitle);
        specials.appendChild(createSpecial())

        /*
        this.page.appendChild(this.header);
        this.page.appendChild(pizzaImg1);
        this.page.appendChild(buildYourOwn);
        this.page.appendChild(specials); */

        this.page.append(buildYourOwn,specials)
        
        return this.page
    }

};


const createBanner = (name,caption) => {
    const banner = document.createElement('div');
    banner.classList.add(`${name}-banner`);

    const title = document.createElement('h1');
    title.innerText = `${caption}`;

    banner.append(title)

    return banner

};
const loadMenu = () => {
    
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.classList.remove('home-page','about-page','contact-page');
    main.classList.add('menu-page');

    const pizza = new Menu();
    const appetizers = new Menu();
    main.append(createBanner('menu','Menu'),pizza.pizzaMenu(),menuCardContainer())
    


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
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/modules/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/modules/contact.js");





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
    else if(data === 'menu'){
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();
    }
    else if(data === 'about'){
        (0,_about__WEBPACK_IMPORTED_MODULE_2__.loadAbout)();
    }
    else if(data =='contact'){
        (0,_contact__WEBPACK_IMPORTED_MODULE_3__.loadContact)();
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

/***/ "./src/images/cornetto.png":
/*!*********************************!*\
  !*** ./src/images/cornetto.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96cd5edd089c84022cf1.png";

/***/ }),

/***/ "./src/images/eggplant.png":
/*!*********************************!*\
  !*** ./src/images/eggplant.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b4d45d709374dda8b4e.png";

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

/***/ "./src/images/nutella.png":
/*!********************************!*\
  !*** ./src/images/nutella.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6af0bdbe5f4592dbdb7a.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7O0FBRzlDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RDRDO0FBQ0U7QUFDRztBQUNIO0FBQ0M7QUFDRDtBQUNGO0FBQ0U7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaURBQVE7O0FBRTdCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnREFBTzs7QUFFNUIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1EQUFTO0FBQzlCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxREFBSTtBQUN6QixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsa0RBQVE7QUFDN0IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFRO0FBQzdCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnREFBTztBQUM1QixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaURBQVE7QUFDN0IsU0FBUzs7QUFFVDs7O0FBR0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7OztBQUdBOzs7OztBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsNEJBQTRCLEtBQUs7O0FBRWpDO0FBQ0EseUJBQXlCLFFBQVE7O0FBRWpDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0UmdDO0FBQ0E7QUFDQTtBQUNJOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQVE7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBUTtBQUNoQjtBQUNBO0FBQ0EsUUFBUSxpREFBUztBQUNqQjtBQUNBO0FBQ0EsUUFBUSxxREFBVztBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQVE7O0FBRVo7QUFDQSxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvRnJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDNEI7O0FBRVg7O0FBRXRDLDJEQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2FyYW5jaW5pLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FyYW5jaW5pLy4vc3JjL21vZHVsZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL2FyYW5jaW5pLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9zcmMvbW9kdWxlcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FyYW5jaW5pL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hcmFuY2luaS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FyYW5jaW5pL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2FyYW5jaW5pL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2FyYW5jaW5pL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvY2FyNC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9tZW51LWJhY2tncm91bmQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5e1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgXFxufVxcblxcbmhlYWRlcntcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMTIsIDEyLCAwLjkpO1xcbiAgICBjb2xvcjogcmdiKDIzNiwgMTM0LCAxOCk7IFxcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBcXG59XFxubmF2e1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIFxcbn1cXG5cXG5uYXYgYnV0dG9ue1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbmltZ3tcXG4gICB3aWR0aDogMTAwJTtcXG4gICBoZWlnaHQ6IGF1dG87XFxuICAgXFxufVxcbm1haW57XFxuICAgIG1pbi1oZWlnaHQ6ODV2aDtcXG4gICBcXG5cXG59XFxuLmhvbWUtcGFnZXtcXG4gICAgaGVpZ2h0OiA4NXZoO1xcbiAgICB6LWluZGV4OiAtMTsgXFxuICAgIFxcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAxMiwgMTIsIDAuNzUpO1xcbiAgICBcXG4gICAgXFxufVxcbi5tZW51LXBhZ2V7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuXFxuXFxuLnNsaWRlcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcblxcbn1cXG4uc2xpZGVyLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC44cyBlYXNlLWluLW91dDtcXG59XFxuLmJ0bi1jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxufVxcbi5iYW5uZXItY29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIFxcbn1cXG4uYmFubmVyLWNvbnRhaW5lciBoMXtcXG4gICAgZm9udC1zaXplOiA2ZW07XFxuICAgIGNvbG9yOiBvcmFuZ2U7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDVweCB3aGl0ZTtcXG59XFxuLmJhbm5lci1jb250YWluZXIgcHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5iYW5uZXItYnRuLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG4uYmFubmVyLWJ0bi1jb250YWluZXIgYnV0dG9ue1xcbiAgICB3aWR0aDogMTB2dztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5waXp6YS1NZW51e1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG4gICAgXFxuICAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNjAwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIFxcbiAgICBcXG4gICBcXG5cXG59XFxuXFxuLm1lbnUtYmFubmVye1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxufVxcbi5tZW51LWJhbm5lciBoMXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAxMiwgMTIsIDAuOCk7XFxuICAgIGZvbnQtc2l6ZTogMThyZW07XFxuICAgIGNvbG9yOndoaXRlO1xcbn1cXG5cXG4ucGl6emEtTWVudSBoMXtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZm9udC1zaXplOiA4cmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIFxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5waXp6YS1NZW51IGgye1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG59XFxuLnBpenphLWltZzF7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuXFxufVxcbi5waXp6YS1pbWcye1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbn1cXG5cXG4uYnVpbGQteW91ci1vd257XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDc1dnc7XFxuICAgIGdhcDogNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBcXG4gICAgXFxufVxcblxcbi50b3BwaW5ncyB1bHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgIFxcblxcblxcbn1cXG4udG9wcGluZ3MgbGl7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZ2IoMjM2LCAxNDksIDE4KTtcXG59XFxuXFxuLnRvcHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uc3BlY2lhbHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNzV2dztcXG4gICAgZ2FwOjVweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgcGFkZGluZzoyMHB4O1xcbiAgICBcXG59XFxuXFxuXFxuLnNwZWNpYWwtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LDFmcik7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG4gICAgXFxuICAgIFxcbiAgICBcXG4gICAgXFxufVxcbi5mbGV4LWxpc3R7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBvcmFuZ2U7XFxuICAgIFxcbn1cXG4uZmxleC1saXN0IGxpe1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgXFxuXFxuXFxuXFxufVxcbi50b3BwaW5nc3tcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uY2FyZC1jb250YWluZXJ7XFxuICAgIHdpZHRoOiA3NXZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsMWZyKTtcXG4gICAgcGFkZGluZzogNTBweCAwcHg7XFxuICAgIGdhcDogNTBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIFxcbiAgICBcXG4gICAgXFxuICAgIFxcbiAgICBcXG59XFxuXFxuLm1lbnUtY2FyZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDFmcik7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCBvcmFuZ2U7XFxuICAgIFxcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLmltZ3tcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIFxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgXFxuICAgIFxcbiAgICBcXG59XFxuXFxuLm5hbWUtcHJpY2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcbn1cXG4uY2FyZC1kZXNje1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5cXG5mb290ZXJ7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAxMzAsIDUzKTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseURBQTBDO0lBQzFDLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLFlBQVk7SUFDWixh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Q0FBaUM7SUFDakMsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixXQUFXOzs7Ozs7QUFNZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsK0JBQStCOztBQUVuQztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7Ozs7O0FBS3JCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxvQkFBb0I7Ozs7OztBQU14Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLCtCQUErQjs7SUFFL0IsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7O0lBRWIsb0JBQW9COzs7O0FBSXhCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7O0lBRUksbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxVQUFVOztBQUVkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvY2FyNC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgXFxufVxcblxcbmhlYWRlcntcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMTIsIDEyLCAwLjkpO1xcbiAgICBjb2xvcjogcmdiKDIzNiwgMTM0LCAxOCk7IFxcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBcXG59XFxubmF2e1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxuICAgIFxcbn1cXG5cXG5uYXYgYnV0dG9ue1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbmltZ3tcXG4gICB3aWR0aDogMTAwJTtcXG4gICBoZWlnaHQ6IGF1dG87XFxuICAgXFxufVxcbm1haW57XFxuICAgIG1pbi1oZWlnaHQ6ODV2aDtcXG4gICBcXG5cXG59XFxuLmhvbWUtcGFnZXtcXG4gICAgaGVpZ2h0OiA4NXZoO1xcbiAgICB6LWluZGV4OiAtMTsgXFxuICAgIFxcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAxMiwgMTIsIDAuNzUpO1xcbiAgICBcXG4gICAgXFxufVxcbi5tZW51LXBhZ2V7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuXFxuXFxuLnNsaWRlcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcblxcbn1cXG4uc2xpZGVyLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC44cyBlYXNlLWluLW91dDtcXG59XFxuLmJ0bi1jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxufVxcbi5iYW5uZXItY29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIFxcbn1cXG4uYmFubmVyLWNvbnRhaW5lciBoMXtcXG4gICAgZm9udC1zaXplOiA2ZW07XFxuICAgIGNvbG9yOiBvcmFuZ2U7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDVweCB3aGl0ZTtcXG59XFxuLmJhbm5lci1jb250YWluZXIgcHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5iYW5uZXItYnRuLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG4uYmFubmVyLWJ0bi1jb250YWluZXIgYnV0dG9ue1xcbiAgICB3aWR0aDogMTB2dztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5waXp6YS1NZW51e1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG4gICAgXFxuICAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNjAwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvbWVudS1iYWNrZ3JvdW5kLnBuZycpO1xcbiAgICBcXG4gICAgXFxuICAgXFxuXFxufVxcblxcbi5tZW51LWJhbm5lcntcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9zcmMvaW1hZ2VzL2JhY2tncm91bmQucG5nJyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG59XFxuLm1lbnUtYmFubmVyIGgxe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMsIDEyLCAxMiwgMC44KTtcXG4gICAgZm9udC1zaXplOiAxOHJlbTtcXG4gICAgY29sb3I6d2hpdGU7XFxufVxcblxcbi5waXp6YS1NZW51IGgxe1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBmb250LXNpemU6IDhyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnBpenphLU1lbnUgaDJ7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIFxcbn1cXG4ucGl6emEtaW1nMXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG5cXG59XFxuLnBpenphLWltZzJ7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxufVxcblxcbi5idWlsZC15b3VyLW93bntcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNzV2dztcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLnRvcHBpbmdzIHVse1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGdhcDogMTBweDtcXG5cXG4gICAgXFxuXFxuXFxufVxcbi50b3BwaW5ncyBsaXtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJnYigyMzYsIDE0OSwgMTgpO1xcbn1cXG5cXG4udG9we1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5zcGVjaWFsc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA3NXZ3O1xcbiAgICBnYXA6NXB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBwYWRkaW5nOjIwcHg7XFxuICAgIFxcbn1cXG5cXG5cXG4uc3BlY2lhbC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsMWZyKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIFxcbiAgICBcXG4gICAgXFxuICAgIFxcbiAgICBcXG59XFxuLmZsZXgtbGlzdHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIG9yYW5nZTtcXG4gICAgXFxufVxcbi5mbGV4LWxpc3QgbGl7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBcXG5cXG5cXG5cXG59XFxuLnRvcHBpbmdze1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jYXJkLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDc1dnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwxZnIpO1xcbiAgICBwYWRkaW5nOiA1MHB4IDBweDtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgXFxuICAgIFxcbiAgICBcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4ubWVudS1jYXJke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsMWZyKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIG9yYW5nZTtcXG4gICAgXFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uaW1ne1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4ubmFtZS1wcmljZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XFxufVxcbi5jYXJkLWRlc2N7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcblxcbmZvb3RlcntcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsIDEzMCwgNTMpO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY2FyMSBmcm9tICcuLi9pbWFnZXMvY2FyMS5wbmcnO1xuaW1wb3J0IGNhcjIgZnJvbSAnLi4vaW1hZ2VzL2NhcjIucG5nJztcbmltcG9ydCBjYXIzIGZyb20gJy4uL2ltYWdlcy9jYXIzLnBuZyc7XG5pbXBvcnQgY2FyNCBmcm9tICcuLi9pbWFnZXMvY2FyNC5wbmcnO1xuaW1wb3J0IGNhcjUgZnJvbSAnLi4vaW1hZ2VzL2NhcjUucG5nJztcblxuY29uc3QgbWFrZVNsaWRlciA9ICgpID0+IHtcblxuICAgIFxuICAgIGNvbnN0IHNsaWRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2xpZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2xpZGVyJyk7XG5cbiAgICBjb25zdCBjYXJvdXNlbFNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2Fyb3VzZWxTbGlkZS5jbGFzc0xpc3QuYWRkKCdzbGlkZXItY29udGFpbmVyJyk7XG4gICAgc2xpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxTbGlkZSk7XG5cbiAgICBjb25zdCBjYXJPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjYXJPbmUuc3JjID0gY2FyMTtcbiAgICBjYXJvdXNlbFNsaWRlLmFwcGVuZENoaWxkKGNhck9uZSk7XG5cblxuICAgIGNvbnN0IGNhclR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNhclR3by5zcmMgPSBjYXIyO1xuICAgIGNhclR3by5hbHQgPSBcIlwiO1xuICAgIGNhcm91c2VsU2xpZGUuYXBwZW5kQ2hpbGQoY2FyVHdvKTtcblxuXG4gICAgY29uc3QgY2FyVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjYXJUaHJlZS5zcmMgPSBjYXIzO1xuICAgIGNhclRocmVlLmFsdCA9IFwiXCI7XG4gICAgY2Fyb3VzZWxTbGlkZS5hcHBlbmRDaGlsZChjYXJUaHJlZSk7XG4gICAgXG4gICAgY29uc3QgY2FyRm91ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNhckZvdXIuc3JjID0gY2FyNDtcbiAgICBjYXJGb3VyLmFsdCA9IFwiXCI7XG4gICAgY2Fyb3VzZWxTbGlkZS5hcHBlbmRDaGlsZChjYXJGb3VyKTtcblxuICAgIGNvbnN0IGNhckZpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjYXJGaXZlLnNyYyA9IGNhcjU7XG4gICAgY2FyRml2ZS5hbHQgPSBcIlwiO1xuICAgIGNhcm91c2VsU2xpZGUuYXBwZW5kQ2hpbGQoY2FyRml2ZSk7XG5cbiAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnRuLWNvbnRhaW5lcicpO1xuXG4gICAgLy9jaGFuZ2UgdGhpcyBhbGwgdG8gZGl2cyB3aXRoIGJhY2tncm91bmQgVVJMLiBXaWxsIGZpdCBiZXR0ZXIuIFxuICAgIFxuICAgIC8vYnV0dG9uc1xuICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcmV2QnRuLmlkID0gJ3ByZXZCdG4nO1xuICAgIHByZXZCdG4uaW5uZXJUZXh0ID0gJ3ByZXYnO1xuXG4gICAgY29uc3QgbmV4dEJ0biAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXh0QnRuLmlkID0gJ25leHQnO1xuICAgIG5leHRCdG4uaW5uZXJUZXh0ID0gJ25leHQnO1xuXG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHByZXZCdG4pXG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKG5leHRCdG4pXG5cbiAgICBzbGlkZUNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpXG5cbiAgIHJldHVybiBzbGlkZUNvbnRhaW5lcjtcbn1cblxuXG5jbGFzcyBTbGlkZXJ7XG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICBzbGlkZXJTZWxlY3RvciA9ICcuc2xpZGVyJyxcbiAgICAgICAgc2xpZGVyQ29udGFpbmVyU2VsZWN0b3IgPSAnLnNsaWRlci1jb250YWluZXInLFxuICAgICAgICBwcmV2aW91c1NlbGVjdG9yID0gJyNwcmV2QnRuJyxcbiAgICAgICAgbmV4dFNlbGVjdG9yID0gJyNuZXh0JyxcblxuICAgIH0gPSB7fSApe1xuICAgICAgICB0aGlzLnNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2xpZGVyU2VsZWN0b3IpO1xuICAgICAgICB0aGlzLnNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7c2xpZGVyQ29udGFpbmVyU2VsZWN0b3J9IGltZ2ApLmxlbmd0aDtcbiAgICAgICAgdGhpcy5zbGlkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNsaWRlckNvbnRhaW5lclNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJldmlvdXNTZWxlY3Rvcik7XG4gICAgICAgIHRoaXMubmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmV4dFNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5zbGlkZVNpemUgPSB0aGlzLnNsaWRlci5jbGllbnRXaWR0aDtcbiAgICAgICAgdGhpcy5jdXJyZW50U2xpZGUgPSAwO1xuXG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgbW92ZVNsaWRlcygpe1xuICAgICAgICB0aGlzLnNsaWRlckNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHt0aGlzLmN1cnJlbnRTbGlkZSAqIHRoaXMuc2xpZGVTaXplfXB4KWBcbiAgICB9XG4gICAgbmV4dFNsaWRlKCl7XG4gICAgICAgIHRoaXMuY3VycmVudFNsaWRlID0gdGhpcy5jdXJyZW50U2xpZGUgPj0gdGhpcy5zbGlkZXMgLTEgPyAwIDogdGhpcy5jdXJyZW50U2xpZGUgKyAxO1xuICAgICAgICB0aGlzLm1vdmVTbGlkZXMoKTtcbiAgICB9XG4gICAgcHJldmlvdXNTbGlkZSgpe1xuICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IHRoaXMuY3VycmVudFNsaWRlIDw9IDAgPyB0aGlzLnNsaWRlcyAtMSA6IHRoaXMuY3VycmVudFNsaWRlIC0xO1xuICAgICAgICB0aGlzLm1vdmVTbGlkZXMoKTtcblxuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpe1xuICAgICAgICB0aGlzLm5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRoaXMubmV4dFNsaWRlLmJpbmQodGhpcykpXG4gICAgICAgIHRoaXMucHJldmlvdXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRoaXMucHJldmlvdXNTbGlkZS5iaW5kKHRoaXMpKVxuICAgIH1cbn07XG5cbmNvbnN0IGxvYWRBYm91dCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXBhZ2UnLCdob21lLXBhZ2UnLCdjb250YWN0LXBhZ2UnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXBhZ2UnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1ha2VTbGlkZXIoKSk7XG4gICAgbmV3IFNsaWRlcigpO1xuXG5cbn1cblxuZXhwb3J0IHtcbiAgICBsb2FkQWJvdXQsXG59IiwiXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBsb2FkQ29udGFjdCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXBhZ2UnLCdob21lLXBhZ2UnLCdhYm91dC1wYWdlJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXBhZ2UnKTtcbiAgICBcbiAgICBcbn07XG5cbmV4cG9ydHtcbiAgICBsb2FkQ29udGFjdFxufSIsImltcG9ydCBhcmFuY2luaSBmcm9tICcuLi9pbWFnZXMvYXJhbmNpbmkucG5nJztcblxuXG5jb25zdCBidWlsZEJhbm5lciA9ICgpID0+IHtcbiAgICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyLWNvbnRhaW5lcicpO1xuXG5cbiAgICBjb25zdCBiYW5uZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgYmFubmVySGVhZGVyLnRleHRDb250ZW50ID0gXCJDYW1hY2kncyBQaXp6ZXJpYVwiO1xuXG4gICAgY29uc3QgYmFubmVyUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBiYW5uZXJQYXJhLmlubmVyVGV4dCA9IFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFByYWVzZW50aXVtIGNvbnNlcXVhdHVyIHZvbHVwdGF0dW0gY29tbW9kaSBleGVyY2l0YXRpb25lbS4gUGVyc3BpY2lhdGlzIGN1cGlkaXRhdGUgcGxhY2VhdCBsYXVkYW50aXVtIGl1cmUgdGVtcG9yZSBhbGlxdWlkIG5vc3RydW0gdm9sdXB0YXRlXCI7XG4gICAgXG4gIFxuICAgIGJhbm5lci5hcHBlbmQoYmFubmVySGVhZGVyLGJhbm5lclBhcmEpO1xuICAgIFxuXG5cbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyLWJ0bi1jb250YWluZXInKTtcblxuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICBtZW51QnRuLmlubmVyVGV4dCA9IFwiTWVudVwiXG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdiYW5uZXItbWVudScsICdiYW5uZXItYnRuJyk7XG4gICAgLy9tZW51QnRuLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lci1idG4nLCcnKTtcblxuXG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3RCdG4udHlwZSA9ICdidXR0b24nO1xuICAgIGNvbnRhY3RCdG4uaW5uZXJUZXh0ID0gJ0NvbnRhY3QnO1xuICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZCgnYmFubmVyLWNvbnRhY3QnLCdiYW5uZXItYnRuJyk7XG4gICAgLy9jb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lci1idG4nKVxuXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcblxuICAgIGJhbm5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICAgIFxuXG4gICAgXG5cblxuICAgIHJldHVybiBiYW5uZXJcbn07XG5cblxuXG5jb25zdCBsb2FkSG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXBhZ2UnLCdhYm91dC1wYWdlJywnY29udGFjdC1wYWdlJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdob21lLXBhZ2UnKTtcbiAgICAvL21haW4uYXBwZW5kQ2hpbGQobWFrZVNsaWRlcigpKTtcbiAgICBcbiAgICBtYWluLmFwcGVuZENoaWxkKGJ1aWxkQmFubmVyKCkpO1xuICAgIFxuICAgIC8vbWFpbi5hcHBlbmRDaGlsZChob21lSW1hZ2UoKSlcbiAgICAvL25ldyBTbGlkZXIoKTtcbiAgICBcblxufVxuXG5leHBvcnR7XG4gICAgbG9hZEhvbWUsXG59IiwiaW1wb3J0IHBhbmVsbGUgZnJvbSAnLi4vaW1hZ2VzL3BhbmVsbGUucG5nJztcbmltcG9ydCBhcmFuY2luaSBmcm9tICcuLi9pbWFnZXMvYXJhbmNpbmkucG5nJztcbmltcG9ydCBwYW56ZXJvdGkgZnJvbSAnLi4vaW1hZ2VzL3Bhbnplcm90dGkucG5nJztcbmltcG9ydCBiZWVmIGZyb20gJy4uL2ltYWdlcy9pdGFsaWFuLWJlZWYucG5nJztcbmltcG9ydCBzZmluY29uZSBmcm9tICcuLi9pbWFnZXMvc2ZpbmNpb25lLnBuZyc7XG5pbXBvcnQgZWdncGxhbnQgZnJvbSAnLi4vaW1hZ2VzL2VnZ3BsYW50LnBuZyc7XG5pbXBvcnQgbnV0ZWxsYSBmcm9tICcuLi9pbWFnZXMvbnV0ZWxsYS5wbmcnO1xuaW1wb3J0IGNvcm5ldHRvIGZyb20gJy4uL2ltYWdlcy9jb3JuZXR0by5wbmcnO1xuXG5jb25zdCBjcmVhdGVUb3BwaW5ncyA9ICgpID0+IHtcbiAgICBjb25zdCB0b3BwaW5nc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvcHBpbmdzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvcHBpbmdzJyk7XG4gICAgY29uc3QgdG9wcGluZ0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIFxuICAgIGNvbnN0IHRvcHBpbmdzID0gW1xuICAgICAgICAnUGVwcGVyb25pJyxcbiAgICAgICAgJ1NhdXNhZ2UnLFxuICAgICAgICAnUHJvc2NpdXRvJyxcbiAgICAgICAgJ0FydGljaG9rZScsXG4gICAgICAgICdNdXNocm9vbScsXG4gICAgICAgICdPbmlvbnMnLFxuICAgICAgICAnR3JlZW4gUGVwcGVyJyxcbiAgICAgICAgJ0JsYWNrIE9saXZlcycsXG4gICAgICAgICdIb3QgR2lhcmRlbmVyYScsXG4gICAgICAgICdCYXNpbCdcbiAgICBdXG4gICAgXG4gICAgdG9wcGluZ3MuZm9yRWFjaCgodG9wcGluZyk9PntcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGl0ZW0uaW5uZXJUZXh0ID0gdG9wcGluZztcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCd0b3AnKTtcbiAgICAgICAgdG9wcGluZ0xpc3QuYXBwZW5kQ2hpbGQoaXRlbSlcblxuICAgIH0pO1xuXG4gICAgdG9wcGluZ3NDb250YWluZXIuYXBwZW5kQ2hpbGQodG9wcGluZ0xpc3QpO1xuXG5cbiAgICByZXR1cm4gdG9wcGluZ3NDb250YWluZXJcbn07XG5cblxuY29uc3QgbmV3Q2FyZCA9IChuYW1lLGRlc2MscHJpY2UsaXRlbSkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZCcpO1xuXG4gICAgY29uc3QgbmFtZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZVByaWNlLmNsYXNzTGlzdC5hZGQoJ25hbWUtcHJpY2UnKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJyk7XG4gICAgaGVhZGVyLmlubmVyVGV4dCA9IG5hbWU7XG5cbiAgICBjb25zdCBjYXJkUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2FyZFByaWNlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtcHJpY2UnKTtcbiAgICBjYXJkUHJpY2UuaW5uZXJUZXh0ID0gcHJpY2U7XG5cbiAgICBcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdjYXJkLWRlc2MnKTtcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdpbWcnKVxuICAgIGltYWdlLnNyYyA9IGl0ZW07XG5cbiAgICBuYW1lUHJpY2UuYXBwZW5kKGhlYWRlcixjYXJkUHJpY2UpXG5cbiAgICBjYXJkLmFwcGVuZChpbWFnZSxuYW1lUHJpY2UsZGVzY3JpcHRpb24pO1xuXG5cbiAgICByZXR1cm4gY2FyZFxufVxuXG5jb25zdCBtZW51Q2FyZENvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgbWVudUFycmF5ID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOlwiQXJhbmNpbmlcIixcbiAgICAgICAgICAgIGRlc2M6XCJCYWxscyBvZiByaWNlIHN0dWZmZWQgd2l0aCBwZWFzLCBtZWF0IHNhdWNlLCBhbmQgY2hlZXNlLiA0Q1QgXCIsXG4gICAgICAgICAgICBwcmljZTogXCIkNy45OVwiLFxuICAgICAgICAgICAgcGljdHVyZTogYXJhbmNpbmlcblxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOlwiUGFuZWxsZVwiLFxuICAgICAgICAgICAgZGVzYzpcIlNpY2lsaWFuIGZyaXR0ZXJzIG1hZGUgZnJvbSBjaGlja3BlYSBmbG91ciwgd2l0aCBsZW1vbiBhbmQgcGVwcGVyXCIsXG4gICAgICAgICAgICBwcmljZTogXCIkNC45OVwiLFxuICAgICAgICAgICAgcGljdHVyZTogcGFuZWxsZVxuXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6XCJQYW56ZXJvdGlcIixcbiAgICAgICAgICAgIGRlc2M6XCJEZWVwIGZyaWVkIGRvdWdoIHBvY2tldCBmaWxsZWQgd2l0aCBmcmVzaCB0b21hdG8gc2F1Y2UsIGNoZWVzZSwgYW5kIGJhc2lsXCIsXG4gICAgICAgICAgICBwcmljZTogXCIkMy45OVwiLFxuICAgICAgICAgICAgcGljdHVyZTogcGFuemVyb3RpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6XCJJdGFsaWFuIEJlZWZcIixcbiAgICAgICAgICAgIGRlc2M6XCJDbGFzc2ljIENoaWNhZ28gYmVlZiB3aXRoIHlvdXIgY2hvaWNlIG9mIHBlcHBlcnNcIixcbiAgICAgICAgICAgIHByaWNlOiBcIiQ3Ljk5XCIsXG4gICAgICAgICAgICBwaWN0dXJlOiBiZWVmXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6XCJTZmluY2lvbmVcIixcbiAgICAgICAgICAgIGRlc2M6XCJTaWNpbGlhbiBzdHlsZSB0aGljayBjdXQgcGl6emEsIGJ5IHRoZSBzbGljZVwiLFxuICAgICAgICAgICAgcHJpY2U6IFwiJDIuOTlcIixcbiAgICAgICAgICAgIHBpY3R1cmU6IHNmaW5jb25lXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6XCJFZ2dwbGFudCBQYXJtZXNlYW5cIixcbiAgICAgICAgICAgIGRlc2M6XCJFZ2dwbGFudCBQYXJtZXNlYW4gU2FuZHdoaWNoXCIsXG4gICAgICAgICAgICBwcmljZTogXCIkNS45OVwiLFxuICAgICAgICAgICAgcGljdHVyZTogZWdncGxhbnRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTpcIk51dGVsbGEgQ3JlcGVzXCIsXG4gICAgICAgICAgICBkZXNjOlwiTnV0ZWxsYSBDcmVwZXMgd2l0aCBzdHJhd2JlcnJpZXNcIixcbiAgICAgICAgICAgIHByaWNlOiBcIiQ3Ljk5XCIsXG4gICAgICAgICAgICBwaWN0dXJlOiBudXRlbGxhXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6XCJDb3JuZXR0aVwiLFxuICAgICAgICAgICAgZGVzYzpcIkZyZXNoIENvcm5ldHRpIChudXRlbGxhLCBwZWFjaCwgY3JlYW0pIGFuZCBhIEVzcHJlc3NvXCIsXG4gICAgICAgICAgICBwcmljZTogXCIkOS45OVwiLFxuICAgICAgICAgICAgcGljdHVyZTogY29ybmV0dG9cbiAgICAgICAgfSxcblxuICAgIF1cblxuXG4gICAgbWVudUFycmF5LmZvckVhY2goKGl0ZW0pPT57XG4gICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZChpdGVtLm5hbWUsaXRlbS5kZXNjLGl0ZW0ucHJpY2UsaXRlbS5waWN0dXJlKSlcbiAgICB9KVxuICAgIFxuXG4gICAgcmV0dXJuIG1lbnVDb250YWluZXI7XG5cbn07XG5cbmNvbnN0IGNyZWF0ZVNwZWNpYWwgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3BlY2lhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwZWNpYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3BlY2lhbC1jb250YWluZXInKVxuICAgIGNvbnN0IHNwZWNpYWxzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVGhlIEdpdXNlcHBlJyxcbiAgICAgICAgICAgIGRlc2M6ICdQZXBwZXJvbmksIFNhdXNhZ2UsIFJlZCBQZXBwZXIsIFJvYXN0ZWQgR2FybGljLCBQZXN0bydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1RoZSBHaXVzZXBwZScsXG4gICAgICAgICAgICBkZXNjOiAnUGVwcGVyb25pLCBTYXVzYWdlLCBSZWQgUGVwcGVyLCBSb2FzdGVkIEdhcmxpYydcblxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVmVnZXRhcmlhbicsXG4gICAgICAgICAgICBkZXNjOiAnUmljb3R0YSBhbmQgU3BpbmFjaCdcblxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnTWFyYWdpdGEnLFxuICAgICAgICAgICAgZGVzYzogJ0NsYXNzaWMgc3dlZXQgdG9tYXRvIHNhdWNlIHdpdGggZnJlc2ggTW96emFyZWxsYSBDaGVlc2UgYW5kIEJhc2lsJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnRmFjY2lhIGRpIFZlY2hpYScsXG4gICAgICAgICAgICBkZXNjOiAnQnJlYWQgd2l0aCBhIGNvYXRpbmcgb2YgT2xpdmUgT2lsLCBTYWx0LCBQZXBwZXIsIE9yZWdlbm8gYW5kIENydXNoZWQgcmVkIHBlcHBlcidcblxuICAgICAgICB9XG4gICAgXVxuXG4gICAgc3BlY2lhbHMuZm9yRWFjaCgoc3BlY2lhbCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdmbGV4LWxpc3QnKVxuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpc3ROYW1lLmlubmVyVGV4dCA9IHNwZWNpYWwubmFtZTtcbiAgICAgICAgY29uc3QgbGlzdERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaXN0RGVzYy5pbm5lclRleHQgPSBzcGVjaWFsLmRlc2M7XG5cbiAgICAgICAgbGlzdC5hcHBlbmQobGlzdE5hbWUsbGlzdERlc2MpO1xuICAgICAgICBzcGVjaWFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpO1xuXG5cbiAgICB9KTtcblxuICAgIHJldHVybiBzcGVjaWFsQ29udGFpbmVyO1xufTtcblxuY2xhc3MgTWVudXtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvL3RoaXMuaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB9O1xuXG4gICAgcGl6emFNZW51KCl7XG5cbiAgICAgICAgdGhpcy5wYWdlLmNsYXNzTGlzdC5hZGQoJ3BpenphLU1lbnUnKVxuICAgICAgICAvL3RoaXMuaGVhZGVyLmlubmVyVGV4dCA9IFwiUGl6emFcIjtcbiAgICAgICAgLy90aGlzLmhlYWRlci5zdHlsZS5mb250U2l6ZSA9ICc0cmVtJ1xuICAgICAgICBcblxuICAgICAgICBjb25zdCBidWlsZFlvdXJPd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnVpbGRZb3VyT3duLmNsYXNzTGlzdC5hZGQoJ2J1aWxkLXlvdXItb3duJyk7XG4gICAgICAgIC8vYnVpbGQgeW91ciBvd24gbWFya3VwXG4gICAgICAgIGNvbnN0IG93blRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgb3duVGl0bGUuaW5uZXJUZXh0ID0gJ0J1aWxkIHlvdXIgb3duJztcblxuICAgICAgICBjb25zdCBidWlsZERpc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgYnVpbGREaXNjLmNsYXNzTGlzdC5hZGQoJ2J1aWxkLWRpc2MnKTtcbiAgICAgICAgYnVpbGREaXNjLmlubmVyVGV4dCA9ICdDaG9vc2UgMyBvZiBhbnkgdG9wcGluZ3MsIGFkaXR0aW9uYWwgdG9wcGluZ3MgJDEuNTAnO1xuICAgICAgICBcbiAgICAgICAgYnVpbGRZb3VyT3duLmFwcGVuZENoaWxkKG93blRpdGxlKTtcbiAgICAgICAgYnVpbGRZb3VyT3duLmFwcGVuZENoaWxkKGJ1aWxkRGlzYyk7XG4gICAgICAgIGJ1aWxkWW91ck93bi5hcHBlbmRDaGlsZChjcmVhdGVUb3BwaW5ncygpKTtcblxuXG4gICAgICAgIGNvbnN0IHNwZWNpYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNwZWNpYWxzLmNsYXNzTGlzdC5hZGQoJ3NwZWNpYWxzJyk7XG5cbiAgICAgICAgY29uc3Qgc3BlY2lhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgc3BlY2lhbFRpdGxlLmlubmVyVGV4dCA9ICdTcGVjaWFscyc7XG4gICAgICAgIFxuXG4gICAgICAgIFxuXG5cbiAgICAgICBcblxuXG4gICAgICAgIFxuXG5cblxuXG4gICAgICAgIHNwZWNpYWxzLmFwcGVuZENoaWxkKHNwZWNpYWxUaXRsZSk7XG4gICAgICAgIHNwZWNpYWxzLmFwcGVuZENoaWxkKGNyZWF0ZVNwZWNpYWwoKSlcblxuICAgICAgICAvKlxuICAgICAgICB0aGlzLnBhZ2UuYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXIpO1xuICAgICAgICB0aGlzLnBhZ2UuYXBwZW5kQ2hpbGQocGl6emFJbWcxKTtcbiAgICAgICAgdGhpcy5wYWdlLmFwcGVuZENoaWxkKGJ1aWxkWW91ck93bik7XG4gICAgICAgIHRoaXMucGFnZS5hcHBlbmRDaGlsZChzcGVjaWFscyk7ICovXG5cbiAgICAgICAgdGhpcy5wYWdlLmFwcGVuZChidWlsZFlvdXJPd24sc3BlY2lhbHMpXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5wYWdlXG4gICAgfVxuXG59O1xuXG5cbmNvbnN0IGNyZWF0ZUJhbm5lciA9IChuYW1lLGNhcHRpb24pID0+IHtcbiAgICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZChgJHtuYW1lfS1iYW5uZXJgKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBgJHtjYXB0aW9ufWA7XG5cbiAgICBiYW5uZXIuYXBwZW5kKHRpdGxlKVxuXG4gICAgcmV0dXJuIGJhbm5lclxuXG59O1xuY29uc3QgbG9hZE1lbnUgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnaG9tZS1wYWdlJywnYWJvdXQtcGFnZScsJ2NvbnRhY3QtcGFnZScpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWVudS1wYWdlJyk7XG5cbiAgICBjb25zdCBwaXp6YSA9IG5ldyBNZW51KCk7XG4gICAgY29uc3QgYXBwZXRpemVycyA9IG5ldyBNZW51KCk7XG4gICAgbWFpbi5hcHBlbmQoY3JlYXRlQmFubmVyKCdtZW51JywnTWVudScpLHBpenphLnBpenphTWVudSgpLG1lbnVDYXJkQ29udGFpbmVyKCkpXG4gICAgXG5cblxuIH07XG4gZXhwb3J0e1xuICAgIGxvYWRNZW51LFxuICAgIGNyZWF0ZUJhbm5lclxuXG4gfSIsImltcG9ydCB7bG9hZEhvbWV9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7bG9hZE1lbnV9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydHtsb2FkQWJvdXR9IGZyb20gJy4vYWJvdXQnXG5pbXBvcnR7bG9hZENvbnRhY3R9IGZyb20gJy4vY29udGFjdCdcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGdldFRpdGxlKCkpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKVxuICAgIHJldHVybiBoZWFkZXJcblxufTtcbmZ1bmN0aW9uIGdldFRpdGxlICgpe1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJDYW1hY2kncyBQaXp6ZXJpYVwiO1xuICAgIHJldHVybiB0aXRsZVxufVxuZnVuY3Rpb24gY3JlYXRlTmF2KCl7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cblxuICAgIGxldCBidG5BcnJheSA9IFtdO1xuICAgIFxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKTtcbiAgICBob21lLnR5cGUgPSAnYnV0dG9uJztcbiAgICBob21lLmlubmVyVGV4dCA9ICdIb21lJztcbiAgICBob21lLm5hbWUgPSAnaG9tZSdcbiAgICBidG5BcnJheS5wdXNoKGhvbWUpO1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIG1lbnUudHlwZSA9ICdidXR0b24nO1xuICAgIG1lbnUubmFtZSA9ICdtZW51JztcbiAgICBtZW51LmlubmVyVGV4dCA9ICdNZW51JztcbiAgICBidG5BcnJheS5wdXNoKG1lbnUpO1xuICAgIFxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIGFib3V0LnR5cGUgPSAnYnV0dG9uJztcbiAgICBhYm91dC5uYW1lID0gJ2Fib3V0JztcbiAgICBhYm91dC5pbm5lclRleHQgPSAnQWJvdXQnO1xuICAgIGJ0bkFycmF5LnB1c2goYWJvdXQpO1xuXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIGNvbnRhY3QudHlwZSA9ICdidXR0b24nO1xuICAgIGNvbnRhY3QubmFtZSA9ICdjb250YWN0JztcbiAgICBjb250YWN0LmlubmVyVGV4dCA9ICdDb250YWN0JztcbiAgICBidG5BcnJheS5wdXNoKGNvbnRhY3QpO1xuXG4gICAgYnRuQXJyYXkuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgIGJ0bi5kYXRhc2V0LnBhZ2UgPSBidG4ubmFtZTtcbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgbWFpbkZpbmRlcihidG4uZGF0YXNldC5wYWdlKVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuYXY7XG59XG5cblxuXG5cblxuXG5mdW5jdGlvbiBtYWluRmluZGVyKGRhdGEpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuICAgIGlmKGRhdGEgPT09ICdob21lJyl7XG4gICAgICAgIGxvYWRIb21lKClcbiAgICAgICAgXG4gICAgfVxuICAgIGVsc2UgaWYoZGF0YSA9PT0gJ21lbnUnKXtcbiAgICAgICAgbG9hZE1lbnUoKTtcbiAgICB9XG4gICAgZWxzZSBpZihkYXRhID09PSAnYWJvdXQnKXtcbiAgICAgICAgbG9hZEFib3V0KCk7XG4gICAgfVxuICAgIGVsc2UgaWYoZGF0YSA9PSdjb250YWN0Jyl7XG4gICAgICAgIGxvYWRDb250YWN0KCk7XG4gICAgfVxuXG59XG5mdW5jdGlvbiByZW5kZXIoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIGxvYWRIb21lKCk7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZyc7XG5cbmltcG9ydCByZW5kZXIgZnJvbSAnLi9tb2R1bGVzL3JlbmRlcic7XG5cbnJlbmRlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9