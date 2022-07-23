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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    min-height: 100vh;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: center;\n    background-size: cover;  \n}\n\nheader{\n    position: sticky;\n    top: 0;\n    height: 10vh;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    z-index: 1;\n    overflow: hidden;\n    background-color: rgba(13, 12, 12, 0.9);\n    color: rgb(236, 134, 18); \n    padding: 20px;\n    \n    \n}\nnav{\n    width: 30vw;\n    display: flex;\n    justify-content:space-between;\n    \n}\n\nnav button{\n    width: 100px;\n    background-color: transparent;\n    border: none;\n    color: white;\n    font-size: 1.5rem;\n}\nimg{\n   width: 100%;\n   height: auto;\n   \n}\nmain{\n    min-height:85vh;\n    overflow: hidden;\n    \n   \n\n}\n.home-page{\n    height: 85vh;\n    z-index: -1; \n    \n\n    background-color: rgba(13, 12, 12, 0.5);\n    \n    \n}\n.menu-page{\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n}\n\n.btn-container{\n    position:absolute;\n    top: 50%;\n    border: 1px solid black;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n\n}\n.banner-container{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    \n    text-align: center;\n    gap: 5px;\n    \n}\n.banner-container h1{\n    font-size: 6em;\n    color: white;\n    text-decoration: underline 5px white;\n}\n.banner-container p{\n    width: 500px;\n    color: white;\n    margin-bottom: 10px;\n}\n.banner-btn-container{\n    display: flex;\n    gap: 25px;\n}\n.banner-btn-container button{\n    width: 10vw;\n    font-size: 1.5rem;\n    max-width: 150px;\n    padding: 10px;\n    border-radius: 10px;\n    border: none;\n    background-color: orange;\n    color: white;\n}\n\n.pizza-Menu{\n\n    text-align: center;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    \n    \n    \n    align-items: center;\n    width: 100%;\n    min-height: 600px;\n\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    \n    \n   \n\n}\n\n.menu-banner{\n    height: 20vh;\n    \n    background-color: white;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    width: 100%;\n    \n}\n.menu-banner h1{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    width: 100%;\n    height: 100%;\n    background-color: rgba(13, 12, 12, 0.9);\n    font-size: 8rem;\n    color:white;\n}\n\n.pizza-Menu h1{\n    grid-column: 2/3;\n    font-size: 8rem;\n    color: black;\n    \n    margin-bottom: 5px;\n}\n\n.pizza-Menu h2{\n    font-size: 2rem;\n    \n    border-radius: 25px;\n    color: black;\n    width: 100%;\n    \n}\n.pizza-img1{\n    grid-column: 1/2;\n    grid-row: 2/3;\n\n}\n.pizza-img2{\n    grid-row: 2/3;\n    grid-column: 3/4;\n}\n\n.build-your-own{\n    \n    background-color: white;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    width: 75vw;\n    gap: 5px;\n    align-items: center;\n    height: 300px;\n    \n    \n}\n\n.toppings ul{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    height: 100%;\n    font-size: 1.2rem;\n    gap: 10px;\n\n    \n\n\n}\n.toppings li{\n    border-bottom: 5px solid rgb(236, 149, 18);\n}\n\n.top{\n    text-align: center;\n    list-style: none;\n}\n\n.specials{\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    width: 75vw;\n    gap:5px;\n    height: 300px;\n    padding:20px;\n    \n}\n\n\n.special-container{\n    display: grid;\n    grid-template-rows: repeat(5,1fr);\n    justify-content: space-around;\n    height: 100%;\n    width: 100%;    \n}\n.flex-list{\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    justify-content: flex-start;\n    width: 100%;\n    height: 100%;\n    align-items: center;\n    border-bottom: 1px solid orange;\n    \n}\n.flex-list li{\n    list-style: none;\n    text-align: left;\n    font-size: 1.2rem;\n\n}\n.toppings{\n    height: 100%;\n}\n.card-container{\n    width: 75vw;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-template-rows: repeat(4,1fr);\n    padding: 50px 0px;\n    gap: 50px;\n    justify-self: center;\n    \n    \n    \n    \n    \n}\n\n.menu-card{\n    display: grid;\n    grid-template-columns: 2fr 3fr;\n    grid-template-rows: repeat(2,1fr);\n    border-bottom: 5px solid orange;\n    \n    padding: 5px;\n    width: 100%;\n    justify-self: center;\n}\n.img{\n    grid-row: 1/3;\n    align-self: center;\n    width: 250px;\n    height: 150px;\n    \n    justify-self: center;\n    \n}\n\n.name-price{\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n    align-items: flex-end;\n    padding-bottom: 0px;\n}\n.card-desc{\n    padding: 10px;\n}\n\n\nfooter{\n    \n    background-color: rgb(244, 130, 53);\n    height: 5vh;\n    z-index: 2;\n    \n}\n\n\n\n\n\n\n.about-page{\n    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: center;\n    \n    \n}\n.about-banner{\n    text-align: center;\n    font-size: 4rem;\n    width: 100%;\n    color: white;\n    height: 20vh;\n    \n    \n    background-color: white;\n    \n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    width: 100%;\n\n\n}\n.about-banner h1{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(13, 12, 12, 0.9);\n    width: 100%;\n    height: 100%;\n    background-color: ;\n    font-size: 8rem;\n    color:white;\n}\n\n\n\n.fest-section,.catering-section{\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    background-color:rgba(245, 245, 245);  \n    gap: 50px;\n    padding: 20px;\n    \n    \n   \n}\n.fest-section div,.catering-section div{\n    display: flex;\n    flex-direction: column;\n    \n    align-items: center;\n    justify-content: center;\n    color: black;\n    text-align: center;\n}\n.fest-section h2,.catering-section h2{\n    color: orange ;\n    font-size: 3.5rem;\n}\n.fest-section img,.catering-section img{\n    width: 100%;\n    height: 50vh;\n    align-self: center;\n    justify-self: center;\n    border-radius:20px;\n    box-shadow: 0 0 5px;\n}\n\n.catering-section{\n    background-color: rgba(13, 12, 12, 0.9);\n    \n}\n.catering-section p{\n    color: white;\n}\n.catering-section img{\n    grid-column: 2/3;\n    box-shadow:none;\n}\n.catering-section div{\n    grid-column: 1/2;\n    grid-row: 1/2;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    min-height: 100vh;\n    background-image: url('./images/car4.png');\n    background-position: center;\n    background-size: cover;  \n}\n\nheader{\n    position: sticky;\n    top: 0;\n    height: 10vh;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    z-index: 1;\n    overflow: hidden;\n    background-color: rgba(13, 12, 12, 0.9);\n    color: rgb(236, 134, 18); \n    padding: 20px;\n    \n    \n}\nnav{\n    width: 30vw;\n    display: flex;\n    justify-content:space-between;\n    \n}\n\nnav button{\n    width: 100px;\n    background-color: transparent;\n    border: none;\n    color: white;\n    font-size: 1.5rem;\n}\nimg{\n   width: 100%;\n   height: auto;\n   \n}\nmain{\n    min-height:85vh;\n    overflow: hidden;\n    \n   \n\n}\n.home-page{\n    height: 85vh;\n    z-index: -1; \n    \n\n    background-color: rgba(13, 12, 12, 0.5);\n    \n    \n}\n.menu-page{\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n}\n\n.btn-container{\n    position:absolute;\n    top: 50%;\n    border: 1px solid black;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n\n}\n.banner-container{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    \n    text-align: center;\n    gap: 5px;\n    \n}\n.banner-container h1{\n    font-size: 6em;\n    color: white;\n    text-decoration: underline 5px white;\n}\n.banner-container p{\n    width: 500px;\n    color: white;\n    margin-bottom: 10px;\n}\n.banner-btn-container{\n    display: flex;\n    gap: 25px;\n}\n.banner-btn-container button{\n    width: 10vw;\n    font-size: 1.5rem;\n    max-width: 150px;\n    padding: 10px;\n    border-radius: 10px;\n    border: none;\n    background-color: orange;\n    color: white;\n}\n\n.pizza-Menu{\n\n    text-align: center;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    \n    \n    \n    align-items: center;\n    width: 100%;\n    min-height: 600px;\n\n    background-image: url('./images/menu-background.png');\n    \n    \n   \n\n}\n\n.menu-banner{\n    height: 20vh;\n    \n    background-color: white;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    width: 100%;\n    \n}\n.menu-banner h1{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    width: 100%;\n    height: 100%;\n    background-color: rgba(13, 12, 12, 0.9);\n    font-size: 8rem;\n    color:white;\n}\n\n.pizza-Menu h1{\n    grid-column: 2/3;\n    font-size: 8rem;\n    color: black;\n    \n    margin-bottom: 5px;\n}\n\n.pizza-Menu h2{\n    font-size: 2rem;\n    \n    border-radius: 25px;\n    color: black;\n    width: 100%;\n    \n}\n.pizza-img1{\n    grid-column: 1/2;\n    grid-row: 2/3;\n\n}\n.pizza-img2{\n    grid-row: 2/3;\n    grid-column: 3/4;\n}\n\n.build-your-own{\n    \n    background-color: white;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    width: 75vw;\n    gap: 5px;\n    align-items: center;\n    height: 300px;\n    \n    \n}\n\n.toppings ul{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    height: 100%;\n    font-size: 1.2rem;\n    gap: 10px;\n\n    \n\n\n}\n.toppings li{\n    border-bottom: 5px solid rgb(236, 149, 18);\n}\n\n.top{\n    text-align: center;\n    list-style: none;\n}\n\n.specials{\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    width: 75vw;\n    gap:5px;\n    height: 300px;\n    padding:20px;\n    \n}\n\n\n.special-container{\n    display: grid;\n    grid-template-rows: repeat(5,1fr);\n    justify-content: space-around;\n    height: 100%;\n    width: 100%;    \n}\n.flex-list{\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    justify-content: flex-start;\n    width: 100%;\n    height: 100%;\n    align-items: center;\n    border-bottom: 1px solid orange;\n    \n}\n.flex-list li{\n    list-style: none;\n    text-align: left;\n    font-size: 1.2rem;\n\n}\n.toppings{\n    height: 100%;\n}\n.card-container{\n    width: 75vw;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-template-rows: repeat(4,1fr);\n    padding: 50px 0px;\n    gap: 50px;\n    justify-self: center;\n    \n    \n    \n    \n    \n}\n\n.menu-card{\n    display: grid;\n    grid-template-columns: 2fr 3fr;\n    grid-template-rows: repeat(2,1fr);\n    border-bottom: 5px solid orange;\n    \n    padding: 5px;\n    width: 100%;\n    justify-self: center;\n}\n.img{\n    grid-row: 1/3;\n    align-self: center;\n    width: 250px;\n    height: 150px;\n    \n    justify-self: center;\n    \n}\n\n.name-price{\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n    align-items: flex-end;\n    padding-bottom: 0px;\n}\n.card-desc{\n    padding: 10px;\n}\n\n\nfooter{\n    \n    background-color: rgb(244, 130, 53);\n    height: 5vh;\n    z-index: 2;\n    \n}\n\n\n\n\n\n\n.about-page{\n    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-image: url('./images/car4.png');\n    background-position: center;\n    \n    \n}\n.about-banner{\n    text-align: center;\n    font-size: 4rem;\n    width: 100%;\n    color: white;\n    height: 20vh;\n    \n    \n    background-color: white;\n    \n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    width: 100%;\n\n\n}\n.about-banner h1{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(13, 12, 12, 0.9);\n    width: 100%;\n    height: 100%;\n    background-color: ;\n    font-size: 8rem;\n    color:white;\n}\n\n\n\n.fest-section,.catering-section{\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    background-color:rgba(245, 245, 245);  \n    gap: 50px;\n    padding: 20px;\n    \n    \n   \n}\n.fest-section div,.catering-section div{\n    display: flex;\n    flex-direction: column;\n    \n    align-items: center;\n    justify-content: center;\n    color: black;\n    text-align: center;\n}\n.fest-section h2,.catering-section h2{\n    color: orange ;\n    font-size: 3.5rem;\n}\n.fest-section img,.catering-section img{\n    width: 100%;\n    height: 50vh;\n    align-self: center;\n    justify-self: center;\n    border-radius:20px;\n    box-shadow: 0 0 5px;\n}\n\n.catering-section{\n    background-color: rgba(13, 12, 12, 0.9);\n    \n}\n.catering-section p{\n    color: white;\n}\n.catering-section img{\n    grid-column: 2/3;\n    box-shadow:none;\n}\n.catering-section div{\n    grid-column: 1/2;\n    grid-row: 1/2;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _images_mel_fest1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/mel-fest1.png */ "./src/images/mel-fest1.png");
/* harmony import */ var _images_arancini_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/arancini.png */ "./src/images/arancini.png");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/modules/render.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/modules/menu.js");





const createSection = (name,imgSrc,htext,ptext,btn) => {
    const section = document.createElement('section');
    section.classList.add(`${name}-section`);

    const festImage = document.createElement('img');
    festImage.src = imgSrc;

    const bannerText = document.createElement('div');
    const title = document.createElement('h2')
    title.innerText = htext;

    const para = document.createElement('p');
    para.innerText = ptext;
    
    bannerText.append(title,para)
    section.append(festImage,bannerText);

    if(btn){
        const contactButton = document.createElement('button');
        contactButton.addEventListener('click',()=>{
            (0,_render__WEBPACK_IMPORTED_MODULE_2__.mainFinder)('contact')
        });
        contactButton.classList.add('contact-btn');
        contactButton.innerText = "Contact Us";
        bannerText.appendChild(contactButton);

    }
    return section

}



const loadAbout = () => {
    const main = document.querySelector('main');
    document.body.style.backgroundImage = 'none';
    main.innerHTML = '';
    main.classList.remove('menu-page','home-page','contact-page');
    main.classList.add('about-page');

    main.append(
        (0,_menu__WEBPACK_IMPORTED_MODULE_3__.createBanner)('about','About Us'),
        createSection('fest',_images_mel_fest1_png__WEBPACK_IMPORTED_MODULE_0__,'Join Us Labor Day Weekend','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, tempora repudiandae? Ullam consectetur illum excepturi quod ratione esse quaerat iste?',false),
        createSection('catering',_images_arancini_png__WEBPACK_IMPORTED_MODULE_1__,'Contact Us for Catering','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, tempora repudiandae? Ullam consectetur illum excepturi quod ratione esse quaerat iste?',true)
    )
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
const contactForm = () => {
    const formContainer = document.createElement('section');
    
}









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
/* harmony import */ var _images_car4_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/car4.png */ "./src/images/car4.png");




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
    document.body.style.backgroundImage = `url(${_images_car4_png__WEBPACK_IMPORTED_MODULE_1__})`
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
    document.body.style.backgroundImage = 'none';
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
/* harmony export */   "mainFinder": () => (/* binding */ mainFinder),
/* harmony export */   "render": () => (/* binding */ render)
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
const render = () => {
    const main = document.createElement('main');
    const footer = document.createElement('footer');
    document.body.appendChild(createHeader());
    document.body.appendChild(main);
    document.body.appendChild(footer);
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)();

};


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

/***/ "./src/images/car4.png":
/*!*****************************!*\
  !*** ./src/images/car4.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1de6188f548316862e4b.png";

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

/***/ "./src/images/mel-fest1.png":
/*!**********************************!*\
  !*** ./src/images/mel-fest1.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b669f5884aa22151b989.png";

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





(0,_modules_render__WEBPACK_IMPORTED_MODULE_2__.render)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLGVBQWUsYUFBYSxXQUFXLGFBQWEsaUJBQWlCLE9BQU8sS0FBSyxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxLQUFLLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxXQUFXLFlBQVksV0FBVyxXQUFXLEtBQUssS0FBSyxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksZUFBZSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGNBQWMsTUFBTSxLQUFLLFlBQVksYUFBYSxjQUFjLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxpQkFBaUIsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFdBQVcsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFFBQVEsTUFBTSxZQUFZLFdBQVcsV0FBVyxXQUFXLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxlQUFlLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxh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OztBQUdBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0EsaURBQWlELDZDQUFVLENBQUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRTRDO0FBQ0U7QUFDRztBQUNIO0FBQ0M7QUFDRDtBQUNGO0FBQ0U7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaURBQVE7O0FBRTdCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnREFBTzs7QUFFNUIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1EQUFTO0FBQzlCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxREFBSTtBQUN6QixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsa0RBQVE7QUFDN0IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFRO0FBQzdCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnREFBTztBQUM1QixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaURBQVE7QUFDN0IsU0FBUzs7QUFFVDs7O0FBR0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7OztBQUdBOzs7OztBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0EsNEJBQTRCLEtBQUs7O0FBRWpDO0FBQ0EseUJBQXlCLFFBQVE7O0FBRWpDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2UmdDO0FBQ0E7QUFDQTtBQUNJOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQVE7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBUTtBQUNoQjtBQUNBO0FBQ0EsUUFBUSxpREFBUztBQUNqQjtBQUNBO0FBQ0EsUUFBUSxxREFBVztBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQVE7O0FBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUM0Qjs7QUFFVDs7QUFFeEMsdURBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcmFuY2luaS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FyYW5jaW5pLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2FyYW5jaW5pLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2FyYW5jaW5pLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2FyYW5jaW5pLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2FyYW5jaW5pLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9zcmMvbW9kdWxlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL2FyYW5jaW5pLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL3NyYy9tb2R1bGVzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcmFuY2luaS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hcmFuY2luaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9hcmFuY2luaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FyYW5jaW5pL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2FyYW5jaW5pLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jYXI0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL21lbnUtYmFja2dyb3VuZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5e1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgXFxufVxcblxcbmhlYWRlcntcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMTIsIDEyLCAwLjkpO1xcbiAgICBjb2xvcjogcmdiKDIzNiwgMTM0LCAxOCk7IFxcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBcXG4gICAgXFxufVxcbm5hdntcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcbiAgICBcXG59XFxuXFxubmF2IGJ1dHRvbntcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5pbWd7XFxuICAgd2lkdGg6IDEwMCU7XFxuICAgaGVpZ2h0OiBhdXRvO1xcbiAgIFxcbn1cXG5tYWlue1xcbiAgICBtaW4taGVpZ2h0Ojg1dmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIFxcbiAgIFxcblxcbn1cXG4uaG9tZS1wYWdle1xcbiAgICBoZWlnaHQ6IDg1dmg7XFxuICAgIHotaW5kZXg6IC0xOyBcXG4gICAgXFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMsIDEyLCAxMiwgMC41KTtcXG4gICAgXFxuICAgIFxcbn1cXG4ubWVudS1wYWdle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5idG4tY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbn1cXG4uYmFubmVyLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBcXG59XFxuLmJhbm5lci1jb250YWluZXIgaDF7XFxuICAgIGZvbnQtc2l6ZTogNmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDVweCB3aGl0ZTtcXG59XFxuLmJhbm5lci1jb250YWluZXIgcHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5iYW5uZXItYnRuLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG4uYmFubmVyLWJ0bi1jb250YWluZXIgYnV0dG9ue1xcbiAgICB3aWR0aDogMTB2dztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5waXp6YS1NZW51e1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG4gICAgXFxuICAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNjAwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIFxcbiAgICBcXG4gICBcXG5cXG59XFxuXFxuLm1lbnUtYmFubmVye1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxufVxcbi5tZW51LWJhbm5lciBoMXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAxMiwgMTIsIDAuOSk7XFxuICAgIGZvbnQtc2l6ZTogOHJlbTtcXG4gICAgY29sb3I6d2hpdGU7XFxufVxcblxcbi5waXp6YS1NZW51IGgxe1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBmb250LXNpemU6IDhyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnBpenphLU1lbnUgaDJ7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIFxcbn1cXG4ucGl6emEtaW1nMXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG5cXG59XFxuLnBpenphLWltZzJ7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxufVxcblxcbi5idWlsZC15b3VyLW93bntcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNzV2dztcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLnRvcHBpbmdzIHVse1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGdhcDogMTBweDtcXG5cXG4gICAgXFxuXFxuXFxufVxcbi50b3BwaW5ncyBsaXtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJnYigyMzYsIDE0OSwgMTgpO1xcbn1cXG5cXG4udG9we1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5zcGVjaWFsc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA3NXZ3O1xcbiAgICBnYXA6NXB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBwYWRkaW5nOjIwcHg7XFxuICAgIFxcbn1cXG5cXG5cXG4uc3BlY2lhbC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsMWZyKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7ICAgIFxcbn1cXG4uZmxleC1saXN0e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgb3JhbmdlO1xcbiAgICBcXG59XFxuLmZsZXgtbGlzdCBsaXtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuXFxufVxcbi50b3BwaW5nc3tcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uY2FyZC1jb250YWluZXJ7XFxuICAgIHdpZHRoOiA3NXZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsMWZyKTtcXG4gICAgcGFkZGluZzogNTBweCAwcHg7XFxuICAgIGdhcDogNTBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIFxcbiAgICBcXG4gICAgXFxuICAgIFxcbiAgICBcXG59XFxuXFxuLm1lbnUtY2FyZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDFmcik7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCBvcmFuZ2U7XFxuICAgIFxcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLmltZ3tcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIFxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5uYW1lLXByaWNle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcXG59XFxuLmNhcmQtZGVzY3tcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuXFxuZm9vdGVye1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMTMwLCA1Myk7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuLmFib3V0LXBhZ2V7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIFxcbiAgICBcXG59XFxuLmFib3V0LWJhbm5lcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgXFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuXFxufVxcbi5hYm91dC1iYW5uZXIgaDF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAxMiwgMTIsIDAuOSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IDtcXG4gICAgZm9udC1zaXplOiA4cmVtO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuXFxuXFxuLmZlc3Qtc2VjdGlvbiwuY2F0ZXJpbmctc2VjdGlvbntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NSwgMjQ1LCAyNDUpOyAgXFxuICAgIGdhcDogNTBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgXFxuICAgIFxcbiAgIFxcbn1cXG4uZmVzdC1zZWN0aW9uIGRpdiwuY2F0ZXJpbmctc2VjdGlvbiBkaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mZXN0LXNlY3Rpb24gaDIsLmNhdGVyaW5nLXNlY3Rpb24gaDJ7XFxuICAgIGNvbG9yOiBvcmFuZ2UgO1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG59XFxuLmZlc3Qtc2VjdGlvbiBpbWcsLmNhdGVyaW5nLXNlY3Rpb24gaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHg7XFxufVxcblxcbi5jYXRlcmluZy1zZWN0aW9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAxMiwgMTIsIDAuOSk7XFxuICAgIFxcbn1cXG4uY2F0ZXJpbmctc2VjdGlvbiBwe1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5jYXRlcmluZy1zZWN0aW9uIGltZ3tcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgYm94LXNoYWRvdzpub25lO1xcbn1cXG4uY2F0ZXJpbmctc2VjdGlvbiBkaXZ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFp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OEI7SUFDOUIsb0NBQW9DO0lBQ3BDLFNBQVM7SUFDVCxhQUFhOzs7O0FBSWpCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCOztJQUV0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUNBQXVDOztBQUUzQztBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvY2FyNC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgXFxufVxcblxcbmhlYWRlcntcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMTIsIDEyLCAwLjkpO1xcbiAgICBjb2xvcjogcmdiKDIzNiwgMTM0LCAxOCk7IFxcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBcXG4gICAgXFxufVxcbm5hdntcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcbiAgICBcXG59XFxuXFxubmF2IGJ1dHRvbntcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5pbWd7XFxuICAgd2lkdGg6IDEwMCU7XFxuICAgaGVpZ2h0OiBhdXRvO1xcbiAgIFxcbn1cXG5tYWlue1xcbiAgICBtaW4taGVpZ2h0Ojg1dmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIFxcbiAgIFxcblxcbn1cXG4uaG9tZS1wYWdle1xcbiAgICBoZWlnaHQ6IDg1dmg7XFxuICAgIHotaW5kZXg6IC0xOyBcXG4gICAgXFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMsIDEyLCAxMiwgMC41KTtcXG4gICAgXFxuICAgIFxcbn1cXG4ubWVudS1wYWdle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5idG4tY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbn1cXG4uYmFubmVyLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBcXG59XFxuLmJhbm5lci1jb250YWluZXIgaDF7XFxuICAgIGZvbnQtc2l6ZTogNmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDVweCB3aGl0ZTtcXG59XFxuLmJhbm5lci1jb250YWluZXIgcHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5iYW5uZXItYnRuLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG4uYmFubmVyLWJ0bi1jb250YWluZXIgYnV0dG9ue1xcbiAgICB3aWR0aDogMTB2dztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5waXp6YS1NZW51e1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG4gICAgXFxuICAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNjAwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvbWVudS1iYWNrZ3JvdW5kLnBuZycpO1xcbiAgICBcXG4gICAgXFxuICAgXFxuXFxufVxcblxcbi5tZW51LWJhbm5lcntcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIFxcbn1cXG4ubWVudS1iYW5uZXIgaDF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMTIsIDEyLCAwLjkpO1xcbiAgICBmb250LXNpemU6IDhyZW07XFxuICAgIGNvbG9yOndoaXRlO1xcbn1cXG5cXG4ucGl6emEtTWVudSBoMXtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZm9udC1zaXplOiA4cmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIFxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5waXp6YS1NZW51IGgye1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG59XFxuLnBpenphLWltZzF7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuXFxufVxcbi5waXp6YS1pbWcye1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbn1cXG5cXG4uYnVpbGQteW91ci1vd257XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDc1dnc7XFxuICAgIGdhcDogNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBcXG4gICAgXFxufVxcblxcbi50b3BwaW5ncyB1bHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgIFxcblxcblxcbn1cXG4udG9wcGluZ3MgbGl7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZ2IoMjM2LCAxNDksIDE4KTtcXG59XFxuXFxuLnRvcHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uc3BlY2lhbHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNzV2dztcXG4gICAgZ2FwOjVweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgcGFkZGluZzoyMHB4O1xcbiAgICBcXG59XFxuXFxuXFxuLnNwZWNpYWwtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LDFmcik7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlOyAgICBcXG59XFxuLmZsZXgtbGlzdHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIG9yYW5nZTtcXG4gICAgXFxufVxcbi5mbGV4LWxpc3QgbGl7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcbn1cXG4udG9wcGluZ3N7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLmNhcmQtY29udGFpbmVye1xcbiAgICB3aWR0aDogNzV2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LDFmcik7XFxuICAgIHBhZGRpbmc6IDUwcHggMHB4O1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBcXG4gICAgXFxuICAgIFxcbiAgICBcXG4gICAgXFxufVxcblxcbi5tZW51LWNhcmR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwxZnIpO1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgb3JhbmdlO1xcbiAgICBcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi5pbWd7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4ubmFtZS1wcmljZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XFxufVxcbi5jYXJkLWRlc2N7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcblxcbmZvb3RlcntcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsIDEzMCwgNTMpO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgXFxufVxcblxcblxcblxcblxcblxcblxcbi5hYm91dC1wYWdle1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9jYXI0LnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIFxcbiAgICBcXG59XFxuLmFib3V0LWJhbm5lcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgXFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuXFxufVxcbi5hYm91dC1iYW5uZXIgaDF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAxMiwgMTIsIDAuOSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IDtcXG4gICAgZm9udC1zaXplOiA4cmVtO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuXFxuXFxuLmZlc3Qtc2VjdGlvbiwuY2F0ZXJpbmctc2VjdGlvbntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NSwgMjQ1LCAyNDUpOyAgXFxuICAgIGdhcDogNTBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgXFxuICAgIFxcbiAgIFxcbn1cXG4uZmVzdC1zZWN0aW9uIGRpdiwuY2F0ZXJpbmctc2VjdGlvbiBkaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mZXN0LXNlY3Rpb24gaDIsLmNhdGVyaW5nLXNlY3Rpb24gaDJ7XFxuICAgIGNvbG9yOiBvcmFuZ2UgO1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG59XFxuLmZlc3Qtc2VjdGlvbiBpbWcsLmNhdGVyaW5nLXNlY3Rpb24gaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHg7XFxufVxcblxcbi5jYXRlcmluZy1zZWN0aW9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAxMiwgMTIsIDAuOSk7XFxuICAgIFxcbn1cXG4uY2F0ZXJpbmctc2VjdGlvbiBwe1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5jYXRlcmluZy1zZWN0aW9uIGltZ3tcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgYm94LXNoYWRvdzpub25lO1xcbn1cXG4uY2F0ZXJpbmctc2VjdGlvbiBkaXZ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY2FyMSBmcm9tICcuLi9pbWFnZXMvbWVsLWZlc3QxLnBuZyc7XG5pbXBvcnQgYXJhbmNpbmkgZnJvbSAnLi4vaW1hZ2VzL2FyYW5jaW5pLnBuZyc7XG5pbXBvcnQgeyBtYWluRmluZGVyIH0gZnJvbSAnLi9yZW5kZXInO1xuaW1wb3J0IHsgY3JlYXRlQmFubmVyIH0gZnJvbSAnLi9tZW51JztcblxuY29uc3QgY3JlYXRlU2VjdGlvbiA9IChuYW1lLGltZ1NyYyxodGV4dCxwdGV4dCxidG4pID0+IHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChgJHtuYW1lfS1zZWN0aW9uYCk7XG5cbiAgICBjb25zdCBmZXN0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBmZXN0SW1hZ2Uuc3JjID0gaW1nU3JjO1xuXG4gICAgY29uc3QgYmFubmVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRpdGxlLmlubmVyVGV4dCA9IGh0ZXh0O1xuXG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhLmlubmVyVGV4dCA9IHB0ZXh0O1xuICAgIFxuICAgIGJhbm5lclRleHQuYXBwZW5kKHRpdGxlLHBhcmEpXG4gICAgc2VjdGlvbi5hcHBlbmQoZmVzdEltYWdlLGJhbm5lclRleHQpO1xuXG4gICAgaWYoYnRuKXtcbiAgICAgICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgbWFpbkZpbmRlcignY29udGFjdCcpXG4gICAgICAgIH0pO1xuICAgICAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtYnRuJyk7XG4gICAgICAgIGNvbnRhY3RCdXR0b24uaW5uZXJUZXh0ID0gXCJDb250YWN0IFVzXCI7XG4gICAgICAgIGJhbm5lclRleHQuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG5cbiAgICB9XG4gICAgcmV0dXJuIHNlY3Rpb25cblxufVxuXG5cblxuY29uc3QgbG9hZEFib3V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSc7XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtcGFnZScsJ2hvbWUtcGFnZScsJ2NvbnRhY3QtcGFnZScpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnYWJvdXQtcGFnZScpO1xuXG4gICAgbWFpbi5hcHBlbmQoXG4gICAgICAgIGNyZWF0ZUJhbm5lcignYWJvdXQnLCdBYm91dCBVcycpLFxuICAgICAgICBjcmVhdGVTZWN0aW9uKCdmZXN0JyxjYXIxLCdKb2luIFVzIExhYm9yIERheSBXZWVrZW5kJywnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIFNpbnQsIHRlbXBvcmEgcmVwdWRpYW5kYWU/IFVsbGFtIGNvbnNlY3RldHVyIGlsbHVtIGV4Y2VwdHVyaSBxdW9kIHJhdGlvbmUgZXNzZSBxdWFlcmF0IGlzdGU/JyxmYWxzZSksXG4gICAgICAgIGNyZWF0ZVNlY3Rpb24oJ2NhdGVyaW5nJyxhcmFuY2luaSwnQ29udGFjdCBVcyBmb3IgQ2F0ZXJpbmcnLCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gU2ludCwgdGVtcG9yYSByZXB1ZGlhbmRhZT8gVWxsYW0gY29uc2VjdGV0dXIgaWxsdW0gZXhjZXB0dXJpIHF1b2QgcmF0aW9uZSBlc3NlIHF1YWVyYXQgaXN0ZT8nLHRydWUpXG4gICAgKVxufVxuXG5leHBvcnQge1xuICAgIGxvYWRBYm91dCxcbn1cblxuIiwiY29uc3QgY29udGFjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBcbn1cblxuXG5cblxuXG5cblxuXG5cbmNvbnN0IGxvYWRDb250YWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtcGFnZScsJ2hvbWUtcGFnZScsJ2Fib3V0LXBhZ2UnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtcGFnZScpO1xuICAgIFxuICAgIFxufTtcblxuZXhwb3J0e1xuICAgIGxvYWRDb250YWN0XG59IiwiaW1wb3J0IGFyYW5jaW5pIGZyb20gJy4uL2ltYWdlcy9hcmFuY2luaS5wbmcnO1xuaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi4vaW1hZ2VzL2NhcjQucG5nJ1xuXG5cbmNvbnN0IGJ1aWxkQmFubmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJhbm5lci5jbGFzc0xpc3QuYWRkKCdiYW5uZXItY29udGFpbmVyJyk7XG5cblxuICAgIGNvbnN0IGJhbm5lckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBiYW5uZXJIZWFkZXIudGV4dENvbnRlbnQgPSBcIkNhbWFjaSdzIFBpenplcmlhXCI7XG5cbiAgICBjb25zdCBiYW5uZXJQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGJhbm5lclBhcmEuaW5uZXJUZXh0ID0gXCJMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUHJhZXNlbnRpdW0gY29uc2VxdWF0dXIgdm9sdXB0YXR1bSBjb21tb2RpIGV4ZXJjaXRhdGlvbmVtLiBQZXJzcGljaWF0aXMgY3VwaWRpdGF0ZSBwbGFjZWF0IGxhdWRhbnRpdW0gaXVyZSB0ZW1wb3JlIGFsaXF1aWQgbm9zdHJ1bSB2b2x1cHRhdGVcIjtcbiAgICBcbiAgXG4gICAgYmFubmVyLmFwcGVuZChiYW5uZXJIZWFkZXIsYmFubmVyUGFyYSk7XG4gICAgXG5cblxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdiYW5uZXItYnRuLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnVCdG4udHlwZSA9ICdidXR0b24nO1xuICAgIG1lbnVCdG4uaW5uZXJUZXh0ID0gXCJNZW51XCJcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lci1tZW51JywgJ2Jhbm5lci1idG4nKTtcbiAgICAvL21lbnVCdG4uY2xhc3NMaXN0LmFkZCgnYmFubmVyLWJ0bicsJycpO1xuXG5cbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ0bi50eXBlID0gJ2J1dHRvbic7XG4gICAgY29udGFjdEJ0bi5pbm5lclRleHQgPSAnQ29udGFjdCc7XG4gICAgY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKCdiYW5uZXItY29udGFjdCcsJ2Jhbm5lci1idG4nKTtcbiAgICAvL2NvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZCgnYmFubmVyLWJ0bicpXG5cbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUJ0bik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuXG4gICAgYmFubmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgXG5cbiAgICBcblxuXG4gICAgcmV0dXJuIGJhbm5lclxufTtcblxuXG5cbmNvbnN0IGxvYWRIb21lID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7QmFja2dyb3VuZH0pYFxuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXBhZ2UnLCdhYm91dC1wYWdlJywnY29udGFjdC1wYWdlJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdob21lLXBhZ2UnKTtcbiAgICAvL21haW4uYXBwZW5kQ2hpbGQobWFrZVNsaWRlcigpKTtcbiAgICBcbiAgICBtYWluLmFwcGVuZENoaWxkKGJ1aWxkQmFubmVyKCkpO1xuICAgIFxuICAgIC8vbWFpbi5hcHBlbmRDaGlsZChob21lSW1hZ2UoKSlcbiAgICAvL25ldyBTbGlkZXIoKTtcbiAgICBcblxufVxuXG5leHBvcnR7XG4gICAgbG9hZEhvbWUsXG59IiwiaW1wb3J0IHBhbmVsbGUgZnJvbSAnLi4vaW1hZ2VzL3BhbmVsbGUucG5nJztcbmltcG9ydCBhcmFuY2luaSBmcm9tICcuLi9pbWFnZXMvYXJhbmNpbmkucG5nJztcbmltcG9ydCBwYW56ZXJvdGkgZnJvbSAnLi4vaW1hZ2VzL3Bhbnplcm90dGkucG5nJztcbmltcG9ydCBiZWVmIGZyb20gJy4uL2ltYWdlcy9pdGFsaWFuLWJlZWYucG5nJztcbmltcG9ydCBzZmluY29uZSBmcm9tICcuLi9pbWFnZXMvc2ZpbmNpb25lLnBuZyc7XG5pbXBvcnQgZWdncGxhbnQgZnJvbSAnLi4vaW1hZ2VzL2VnZ3BsYW50LnBuZyc7XG5pbXBvcnQgbnV0ZWxsYSBmcm9tICcuLi9pbWFnZXMvbnV0ZWxsYS5wbmcnO1xuaW1wb3J0IGNvcm5ldHRvIGZyb20gJy4uL2ltYWdlcy9jb3JuZXR0by5wbmcnO1xuXG5jb25zdCBjcmVhdGVUb3BwaW5ncyA9ICgpID0+IHtcbiAgICBjb25zdCB0b3BwaW5nc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvcHBpbmdzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvcHBpbmdzJyk7XG4gICAgY29uc3QgdG9wcGluZ0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIFxuICAgIGNvbnN0IHRvcHBpbmdzID0gW1xuICAgICAgICAnUGVwcGVyb25pJyxcbiAgICAgICAgJ1NhdXNhZ2UnLFxuICAgICAgICAnUHJvc2NpdXRvJyxcbiAgICAgICAgJ0FydGljaG9rZScsXG4gICAgICAgICdNdXNocm9vbScsXG4gICAgICAgICdPbmlvbnMnLFxuICAgICAgICAnR3JlZW4gUGVwcGVyJyxcbiAgICAgICAgJ0JsYWNrIE9saXZlcycsXG4gICAgICAgICdIb3QgR2lhcmRlbmVyYScsXG4gICAgICAgICdCYXNpbCdcbiAgICBdXG4gICAgXG4gICAgdG9wcGluZ3MuZm9yRWFjaCgodG9wcGluZyk9PntcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGl0ZW0uaW5uZXJUZXh0ID0gdG9wcGluZztcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCd0b3AnKTtcbiAgICAgICAgdG9wcGluZ0xpc3QuYXBwZW5kQ2hpbGQoaXRlbSlcblxuICAgIH0pO1xuXG4gICAgdG9wcGluZ3NDb250YWluZXIuYXBwZW5kQ2hpbGQodG9wcGluZ0xpc3QpO1xuXG5cbiAgICByZXR1cm4gdG9wcGluZ3NDb250YWluZXJcbn07XG5cblxuY29uc3QgbmV3Q2FyZCA9IChuYW1lLGRlc2MscHJpY2UsaXRlbSkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZCcpO1xuXG4gICAgY29uc3QgbmFtZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmFtZVByaWNlLmNsYXNzTGlzdC5hZGQoJ25hbWUtcHJpY2UnKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaGVhZGVyJyk7XG4gICAgaGVhZGVyLmlubmVyVGV4dCA9IG5hbWU7XG5cbiAgICBjb25zdCBjYXJkUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2FyZFByaWNlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtcHJpY2UnKTtcbiAgICBjYXJkUHJpY2UuaW5uZXJUZXh0ID0gcHJpY2U7XG5cbiAgICBcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdjYXJkLWRlc2MnKTtcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdpbWcnKVxuICAgIGltYWdlLnNyYyA9IGl0ZW07XG5cbiAgICBuYW1lUHJpY2UuYXBwZW5kKGhlYWRlcixjYXJkUHJpY2UpXG5cbiAgICBjYXJkLmFwcGVuZChpbWFnZSxuYW1lUHJpY2UsZGVzY3JpcHRpb24pO1xuXG5cbiAgICByZXR1cm4gY2FyZFxufVxuXG5jb25zdCBtZW51Q2FyZENvbnRhaW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgbWVudUFycmF5ID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOlwiQXJhbmNpbmlcIixcbiAgICAgICAgICAgIGRlc2M6XCJCYWxscyBvZiByaWNlIHN0dWZmZWQgd2l0aCBwZWFzLCBtZWF0IHNhdWNlLCBhbmQgY2hlZXNlLiA0Q1QgXCIsXG4gICAgICAgICAgICBwcmljZTogXCIkNy45OVwiLFxuICAgICAgICAgICAgcGljdHVyZTogYXJhbmNpbmlcblxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOlwiUGFuZWxsZVwiLFxuICAgICAgICAgICAgZGVzYzpcIlNpY2lsaWFuIGZyaXR0ZXJzIG1hZGUgZnJvbSBjaGlja3BlYSBmbG91ciwgd2l0aCBsZW1vbiBhbmQgcGVwcGVyXCIsXG4gICAgICAgICAgICBwcmljZTogXCIkNC45OVwiLFxuICAgICAgICAgICAgcGljdHVyZTogcGFuZWxsZVxuXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6XCJQYW56ZXJvdGlcIixcbiAgICAgICAgICAgIGRlc2M6XCJEZWVwIGZyaWVkIGRvdWdoIHBvY2tldCBmaWxsZWQgd2l0aCBmcmVzaCB0b21hdG8gc2F1Y2UsIGNoZWVzZSwgYW5kIGJhc2lsXCIsXG4gICAgICAgICAgICBwcmljZTogXCIkMy45OVwiLFxuICAgICAgICAgICAgcGljdHVyZTogcGFuemVyb3RpXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6XCJJdGFsaWFuIEJlZWZcIixcbiAgICAgICAgICAgIGRlc2M6XCJDbGFzc2ljIENoaWNhZ28gYmVlZiB3aXRoIHlvdXIgY2hvaWNlIG9mIHBlcHBlcnNcIixcbiAgICAgICAgICAgIHByaWNlOiBcIiQ3Ljk5XCIsXG4gICAgICAgICAgICBwaWN0dXJlOiBiZWVmXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6XCJTZmluY2lvbmVcIixcbiAgICAgICAgICAgIGRlc2M6XCJTaWNpbGlhbiBzdHlsZSB0aGljayBjdXQgcGl6emEsIGJ5IHRoZSBzbGljZVwiLFxuICAgICAgICAgICAgcHJpY2U6IFwiJDIuOTlcIixcbiAgICAgICAgICAgIHBpY3R1cmU6IHNmaW5jb25lXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6XCJFZ2dwbGFudCBQYXJtZXNlYW5cIixcbiAgICAgICAgICAgIGRlc2M6XCJFZ2dwbGFudCBQYXJtZXNlYW4gU2FuZHdoaWNoXCIsXG4gICAgICAgICAgICBwcmljZTogXCIkNS45OVwiLFxuICAgICAgICAgICAgcGljdHVyZTogZWdncGxhbnRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTpcIk51dGVsbGEgQ3JlcGVzXCIsXG4gICAgICAgICAgICBkZXNjOlwiTnV0ZWxsYSBDcmVwZXMgd2l0aCBzdHJhd2JlcnJpZXNcIixcbiAgICAgICAgICAgIHByaWNlOiBcIiQ3Ljk5XCIsXG4gICAgICAgICAgICBwaWN0dXJlOiBudXRlbGxhXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6XCJDb3JuZXR0aVwiLFxuICAgICAgICAgICAgZGVzYzpcIkZyZXNoIENvcm5ldHRpIChudXRlbGxhLCBwZWFjaCwgY3JlYW0pIGFuZCBhIEVzcHJlc3NvXCIsXG4gICAgICAgICAgICBwcmljZTogXCIkOS45OVwiLFxuICAgICAgICAgICAgcGljdHVyZTogY29ybmV0dG9cbiAgICAgICAgfSxcblxuICAgIF1cblxuXG4gICAgbWVudUFycmF5LmZvckVhY2goKGl0ZW0pPT57XG4gICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZChpdGVtLm5hbWUsaXRlbS5kZXNjLGl0ZW0ucHJpY2UsaXRlbS5waWN0dXJlKSlcbiAgICB9KVxuICAgIFxuXG4gICAgcmV0dXJuIG1lbnVDb250YWluZXI7XG5cbn07XG5cbmNvbnN0IGNyZWF0ZVNwZWNpYWwgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3BlY2lhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwZWNpYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3BlY2lhbC1jb250YWluZXInKVxuICAgIGNvbnN0IHNwZWNpYWxzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVGhlIEdpdXNlcHBlJyxcbiAgICAgICAgICAgIGRlc2M6ICdQZXBwZXJvbmksIFNhdXNhZ2UsIFJlZCBQZXBwZXIsIFJvYXN0ZWQgR2FybGljLCBQZXN0bydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1RoZSBHaXVzZXBwZScsXG4gICAgICAgICAgICBkZXNjOiAnUGVwcGVyb25pLCBTYXVzYWdlLCBSZWQgUGVwcGVyLCBSb2FzdGVkIEdhcmxpYydcblxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVmVnZXRhcmlhbicsXG4gICAgICAgICAgICBkZXNjOiAnUmljb3R0YSBhbmQgU3BpbmFjaCdcblxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnTWFyYWdpdGEnLFxuICAgICAgICAgICAgZGVzYzogJ0NsYXNzaWMgc3dlZXQgdG9tYXRvIHNhdWNlIHdpdGggZnJlc2ggTW96emFyZWxsYSBDaGVlc2UgYW5kIEJhc2lsJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnRmFjY2lhIGRpIFZlY2hpYScsXG4gICAgICAgICAgICBkZXNjOiAnQnJlYWQgd2l0aCBhIGNvYXRpbmcgb2YgT2xpdmUgT2lsLCBTYWx0LCBQZXBwZXIsIE9yZWdlbm8gYW5kIENydXNoZWQgcmVkIHBlcHBlcidcblxuICAgICAgICB9XG4gICAgXVxuXG4gICAgc3BlY2lhbHMuZm9yRWFjaCgoc3BlY2lhbCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdmbGV4LWxpc3QnKVxuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpc3ROYW1lLmlubmVyVGV4dCA9IHNwZWNpYWwubmFtZTtcbiAgICAgICAgY29uc3QgbGlzdERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaXN0RGVzYy5pbm5lclRleHQgPSBzcGVjaWFsLmRlc2M7XG5cbiAgICAgICAgbGlzdC5hcHBlbmQobGlzdE5hbWUsbGlzdERlc2MpO1xuICAgICAgICBzcGVjaWFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpO1xuXG5cbiAgICB9KTtcblxuICAgIHJldHVybiBzcGVjaWFsQ29udGFpbmVyO1xufTtcblxuY2xhc3MgTWVudXtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvL3RoaXMuaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB9O1xuXG4gICAgcGl6emFNZW51KCl7XG5cbiAgICAgICAgdGhpcy5wYWdlLmNsYXNzTGlzdC5hZGQoJ3BpenphLU1lbnUnKVxuICAgICAgICAvL3RoaXMuaGVhZGVyLmlubmVyVGV4dCA9IFwiUGl6emFcIjtcbiAgICAgICAgLy90aGlzLmhlYWRlci5zdHlsZS5mb250U2l6ZSA9ICc0cmVtJ1xuICAgICAgICBcblxuICAgICAgICBjb25zdCBidWlsZFlvdXJPd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnVpbGRZb3VyT3duLmNsYXNzTGlzdC5hZGQoJ2J1aWxkLXlvdXItb3duJyk7XG4gICAgICAgIC8vYnVpbGQgeW91ciBvd24gbWFya3VwXG4gICAgICAgIGNvbnN0IG93blRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgb3duVGl0bGUuaW5uZXJUZXh0ID0gJ0J1aWxkIHlvdXIgb3duJztcblxuICAgICAgICBjb25zdCBidWlsZERpc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgYnVpbGREaXNjLmNsYXNzTGlzdC5hZGQoJ2J1aWxkLWRpc2MnKTtcbiAgICAgICAgYnVpbGREaXNjLmlubmVyVGV4dCA9ICdDaG9vc2UgMyBvZiBhbnkgdG9wcGluZ3MsIGFkaXR0aW9uYWwgdG9wcGluZ3MgJDEuNTAnO1xuICAgICAgICBcbiAgICAgICAgYnVpbGRZb3VyT3duLmFwcGVuZENoaWxkKG93blRpdGxlKTtcbiAgICAgICAgYnVpbGRZb3VyT3duLmFwcGVuZENoaWxkKGJ1aWxkRGlzYyk7XG4gICAgICAgIGJ1aWxkWW91ck93bi5hcHBlbmRDaGlsZChjcmVhdGVUb3BwaW5ncygpKTtcblxuXG4gICAgICAgIGNvbnN0IHNwZWNpYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNwZWNpYWxzLmNsYXNzTGlzdC5hZGQoJ3NwZWNpYWxzJyk7XG5cbiAgICAgICAgY29uc3Qgc3BlY2lhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgc3BlY2lhbFRpdGxlLmlubmVyVGV4dCA9ICdTcGVjaWFscyc7XG4gICAgICAgIFxuXG4gICAgICAgIFxuXG5cbiAgICAgICBcblxuXG4gICAgICAgIFxuXG5cblxuXG4gICAgICAgIHNwZWNpYWxzLmFwcGVuZENoaWxkKHNwZWNpYWxUaXRsZSk7XG4gICAgICAgIHNwZWNpYWxzLmFwcGVuZENoaWxkKGNyZWF0ZVNwZWNpYWwoKSlcblxuICAgICAgICAvKlxuICAgICAgICB0aGlzLnBhZ2UuYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXIpO1xuICAgICAgICB0aGlzLnBhZ2UuYXBwZW5kQ2hpbGQocGl6emFJbWcxKTtcbiAgICAgICAgdGhpcy5wYWdlLmFwcGVuZENoaWxkKGJ1aWxkWW91ck93bik7XG4gICAgICAgIHRoaXMucGFnZS5hcHBlbmRDaGlsZChzcGVjaWFscyk7ICovXG5cbiAgICAgICAgdGhpcy5wYWdlLmFwcGVuZChidWlsZFlvdXJPd24sc3BlY2lhbHMpXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5wYWdlXG4gICAgfVxuXG59O1xuXG5cbmNvbnN0IGNyZWF0ZUJhbm5lciA9IChuYW1lLGNhcHRpb24pID0+IHtcbiAgICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZChgJHtuYW1lfS1iYW5uZXJgKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBgJHtjYXB0aW9ufWA7XG5cbiAgICBiYW5uZXIuYXBwZW5kKHRpdGxlKVxuXG4gICAgcmV0dXJuIGJhbm5lclxuXG59O1xuY29uc3QgbG9hZE1lbnUgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnaG9tZS1wYWdlJywnYWJvdXQtcGFnZScsJ2NvbnRhY3QtcGFnZScpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWVudS1wYWdlJyk7XG5cbiAgICBjb25zdCBwaXp6YSA9IG5ldyBNZW51KCk7XG4gICAgY29uc3QgYXBwZXRpemVycyA9IG5ldyBNZW51KCk7XG4gICAgbWFpbi5hcHBlbmQoY3JlYXRlQmFubmVyKCdtZW51JywnTWVudScpLHBpenphLnBpenphTWVudSgpLG1lbnVDYXJkQ29udGFpbmVyKCkpXG4gICAgXG5cblxuIH07XG4gZXhwb3J0e1xuICAgIGxvYWRNZW51LFxuICAgIGNyZWF0ZUJhbm5lclxuXG4gfSIsImltcG9ydCB7bG9hZEhvbWV9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7bG9hZE1lbnV9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydHtsb2FkQWJvdXR9IGZyb20gJy4vYWJvdXQnXG5pbXBvcnR7bG9hZENvbnRhY3R9IGZyb20gJy4vY29udGFjdCdcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGdldFRpdGxlKCkpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKVxuICAgIHJldHVybiBoZWFkZXJcblxufTtcbmZ1bmN0aW9uIGdldFRpdGxlICgpe1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJDYW1hY2kncyBQaXp6ZXJpYVwiO1xuICAgIHJldHVybiB0aXRsZVxufVxuZnVuY3Rpb24gY3JlYXRlTmF2KCl7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cblxuICAgIGxldCBidG5BcnJheSA9IFtdO1xuICAgIFxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKTtcbiAgICBob21lLnR5cGUgPSAnYnV0dG9uJztcbiAgICBob21lLmlubmVyVGV4dCA9ICdIb21lJztcbiAgICBob21lLm5hbWUgPSAnaG9tZSdcbiAgICBidG5BcnJheS5wdXNoKGhvbWUpO1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIG1lbnUudHlwZSA9ICdidXR0b24nO1xuICAgIG1lbnUubmFtZSA9ICdtZW51JztcbiAgICBtZW51LmlubmVyVGV4dCA9ICdNZW51JztcbiAgICBidG5BcnJheS5wdXNoKG1lbnUpO1xuICAgIFxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIGFib3V0LnR5cGUgPSAnYnV0dG9uJztcbiAgICBhYm91dC5uYW1lID0gJ2Fib3V0JztcbiAgICBhYm91dC5pbm5lclRleHQgPSAnQWJvdXQnO1xuICAgIGJ0bkFycmF5LnB1c2goYWJvdXQpO1xuXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIGNvbnRhY3QudHlwZSA9ICdidXR0b24nO1xuICAgIGNvbnRhY3QubmFtZSA9ICdjb250YWN0JztcbiAgICBjb250YWN0LmlubmVyVGV4dCA9ICdDb250YWN0JztcbiAgICBidG5BcnJheS5wdXNoKGNvbnRhY3QpO1xuXG4gICAgYnRuQXJyYXkuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgIGJ0bi5kYXRhc2V0LnBhZ2UgPSBidG4ubmFtZTtcbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgbWFpbkZpbmRlcihidG4uZGF0YXNldC5wYWdlKVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuYXY7XG59XG5cblxuXG5cblxuXG5mdW5jdGlvbiBtYWluRmluZGVyKGRhdGEpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuICAgIGlmKGRhdGEgPT09ICdob21lJyl7XG4gICAgICAgIGxvYWRIb21lKClcbiAgICAgICAgXG4gICAgfVxuICAgIGVsc2UgaWYoZGF0YSA9PT0gJ21lbnUnKXtcbiAgICAgICAgbG9hZE1lbnUoKTtcbiAgICB9XG4gICAgZWxzZSBpZihkYXRhID09PSAnYWJvdXQnKXtcbiAgICAgICAgbG9hZEFib3V0KCk7XG4gICAgfVxuICAgIGVsc2UgaWYoZGF0YSA9PSdjb250YWN0Jyl7XG4gICAgICAgIGxvYWRDb250YWN0KCk7XG4gICAgfVxuXG59XG5jb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgICBsb2FkSG9tZSgpO1xuXG59O1xuZXhwb3J0e1xuICAgIHJlbmRlcixcbiAgICBtYWluRmluZGVyXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vaW1hZ2VzL2JhY2tncm91bmQucG5nJztcblxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJy4vbW9kdWxlcy9yZW5kZXInO1xuXG5yZW5kZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==