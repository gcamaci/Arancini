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
const createInput = (attributes) => {
    const inputContainer = document.createElement('div');

    const label = document.createElement('label')
    label.setAttribute('for',`${attributes[0]}`);

    const input = document.createElement('input');
    input.setAttribute('type',`${attributes[1]}`);
    input.setAttribute('id',`${attributes[2]}`)
    input.setAttribute('name',`${attributes[2]}`)
    input.setAttribute('placeholder',`${attributes[3]}`)
    inputContainer.append(label,input);


    return inputContainer


};





const contactForm = () => {
    const formContainer = document.createElement('section');
    formContainer.classList.add('form-container');

    const inputs = [
        ['name','text','name','Full Name'],
        ['email','email','email','example@gmail.com'],
    ]


    const form = document.createElement('form');
    form.setAttribute('id','form');
    form.setAttribute('action'," ")
    form.setAttribute('method','post');

    inputs.forEach((input)=>{
        form.appendChild(createInput(input));

    })
    
    const textArea = document.createElement('textarea');
    textArea.setAttribute('placeholder','This is a text area')

    form.appendChild(textArea);
    formContainer.appendChild(form);
    


    return formContainer
    
}


const loadContact = () => {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.classList.remove('menu-page','home-page','about-page');
    main.classList.add('contact-page');
    

    main.appendChild(contactForm())
    
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
        (0,_contact__WEBPACK_IMPORTED_MODULE_3__.loadContact)()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtHQUFvQztBQUNoRiw0Q0FBNEMscUlBQStDO0FBQzNGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsNENBQTRDLGlCQUFpQixnQkFBZ0IsNkJBQTZCLEdBQUcsU0FBUyx3QkFBd0Isd0VBQXdFLGtDQUFrQywrQkFBK0IsR0FBRyxXQUFXLHVCQUF1QixhQUFhLG1CQUFtQixvQkFBb0IscUNBQXFDLDBCQUEwQixpQkFBaUIsdUJBQXVCLDhDQUE4QyxnQ0FBZ0Msb0JBQW9CLGVBQWUsTUFBTSxrQkFBa0Isb0JBQW9CLG9DQUFvQyxTQUFTLGVBQWUsbUJBQW1CLG9DQUFvQyxtQkFBbUIsbUJBQW1CLHdCQUF3QixHQUFHLE1BQU0saUJBQWlCLGtCQUFrQixRQUFRLE9BQU8sc0JBQXNCLHVCQUF1QixnQkFBZ0IsYUFBYSxtQkFBbUIsbUJBQW1CLHNEQUFzRCxlQUFlLGFBQWEsOEJBQThCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLFNBQVMsbUJBQW1CLHdCQUF3QixlQUFlLDhCQUE4QixrQkFBa0Isb0JBQW9CLHFDQUFxQyxvQkFBb0IsS0FBSyxvQkFBb0Isa0JBQWtCLG1CQUFtQixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsK0JBQStCLGVBQWUsU0FBUyx1QkFBdUIscUJBQXFCLG1CQUFtQiwyQ0FBMkMsR0FBRyxzQkFBc0IsbUJBQW1CLG1CQUFtQiwwQkFBMEIsR0FBRyx3QkFBd0Isb0JBQW9CLGdCQUFnQixHQUFHLCtCQUErQixrQkFBa0Isd0JBQXdCLHVCQUF1QixvQkFBb0IsMEJBQTBCLG1CQUFtQiwrQkFBK0IsbUJBQW1CLEdBQUcsZ0JBQWdCLDJCQUEyQiw4QkFBOEIsb0JBQW9CLDZCQUE2Qiw0Q0FBNEMsa0JBQWtCLHdCQUF3QiwwRUFBMEUsc0JBQXNCLGlCQUFpQixtQkFBbUIsb0NBQW9DLG1DQUFtQyw2QkFBNkIsa0NBQWtDLGtCQUFrQixTQUFTLGtCQUFrQixvQkFBb0IsOEJBQThCLDBCQUEwQix3QkFBd0IsbUJBQW1CLDhDQUE4QyxzQkFBc0Isa0JBQWtCLEdBQUcsbUJBQW1CLHVCQUF1QixzQkFBc0IsbUJBQW1CLCtCQUErQixHQUFHLG1CQUFtQixzQkFBc0IsZ0NBQWdDLG1CQUFtQixrQkFBa0IsU0FBUyxjQUFjLHVCQUF1QixvQkFBb0IsS0FBSyxjQUFjLG9CQUFvQix1QkFBdUIsR0FBRyxvQkFBb0Isb0NBQW9DLG9CQUFvQixvQkFBb0IsNkJBQTZCLGtCQUFrQixlQUFlLDBCQUEwQixvQkFBb0IsZUFBZSxpQkFBaUIsb0JBQW9CLHFDQUFxQywwQkFBMEIsbUJBQW1CLHdCQUF3QixnQkFBZ0IsZUFBZSxlQUFlLGlEQUFpRCxHQUFHLFNBQVMseUJBQXlCLHVCQUF1QixHQUFHLGNBQWMsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsa0JBQWtCLGNBQWMsb0JBQW9CLG1CQUFtQixTQUFTLHlCQUF5QixvQkFBb0Isd0NBQXdDLG9DQUFvQyxtQkFBbUIsc0JBQXNCLEdBQUcsYUFBYSxvQkFBb0IsdUNBQXVDLGtDQUFrQyxrQkFBa0IsbUJBQW1CLDBCQUEwQixzQ0FBc0MsU0FBUyxnQkFBZ0IsdUJBQXVCLHVCQUF1Qix3QkFBd0IsS0FBSyxZQUFZLG1CQUFtQixHQUFHLGtCQUFrQixrQkFBa0Isb0JBQW9CLDJDQUEyQyx3Q0FBd0Msd0JBQXdCLGdCQUFnQiwyQkFBMkIsaUNBQWlDLGVBQWUsb0JBQW9CLHFDQUFxQyx3Q0FBd0Msc0NBQXNDLHlCQUF5QixrQkFBa0IsMkJBQTJCLEdBQUcsT0FBTyxvQkFBb0IseUJBQXlCLG1CQUFtQixvQkFBb0IsaUNBQWlDLFNBQVMsZ0JBQWdCLG9CQUFvQixxQ0FBcUMsb0JBQW9CLDRCQUE0QiwwQkFBMEIsR0FBRyxhQUFhLG9CQUFvQixHQUFHLGFBQWEsZ0RBQWdELGtCQUFrQixpQkFBaUIsU0FBUywwQkFBMEIsMEJBQTBCLDZCQUE2QiwwQkFBMEIsd0VBQXdFLGtDQUFrQyxlQUFlLGdCQUFnQix5QkFBeUIsc0JBQXNCLGtCQUFrQixtQkFBbUIsbUJBQW1CLDBDQUEwQyx5Q0FBeUMsNkJBQTZCLGtDQUFrQyxrQkFBa0IsT0FBTyxtQkFBbUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsOENBQThDLGtCQUFrQixtQkFBbUIseUJBQXlCLHNCQUFzQixrQkFBa0IsR0FBRyx3Q0FBd0Msa0JBQWtCLG9CQUFvQixxQ0FBcUMsNkNBQTZDLGdCQUFnQixvQkFBb0Isb0JBQW9CLDBDQUEwQyxvQkFBb0IsNkJBQTZCLGdDQUFnQyw4QkFBOEIsbUJBQW1CLHlCQUF5QixHQUFHLHdDQUF3QyxxQkFBcUIsd0JBQXdCLEdBQUcsMENBQTBDLGtCQUFrQixtQkFBbUIseUJBQXlCLDJCQUEyQix5QkFBeUIsMEJBQTBCLEdBQUcsc0JBQXNCLDhDQUE4QyxTQUFTLHNCQUFzQixtQkFBbUIsR0FBRyx3QkFBd0IsdUJBQXVCLHNCQUFzQixHQUFHLHdCQUF3Qix1QkFBdUIsb0JBQW9CLEdBQUcsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLGVBQWUsTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLFlBQVksS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLGVBQWUsYUFBYSxXQUFXLGFBQWEsaUJBQWlCLE9BQU8sS0FBSyxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxLQUFLLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxXQUFXLFlBQVksV0FBVyxXQUFXLEtBQUssS0FBSyxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksZUFBZSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGNBQWMsTUFBTSxLQUFLLFlBQVksYUFBYSxjQUFjLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxpQkFBaUIsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFdBQVcsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFFBQVEsTUFBTSxZQUFZLFdBQVcsV0FBVyxXQUFXLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxlQUFlLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxh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dUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDNEI7O0FBRVQ7O0FBRXhDLHVEQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2FyYW5jaW5pLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FyYW5jaW5pLy4vc3JjL21vZHVsZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL2FyYW5jaW5pLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9zcmMvbW9kdWxlcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FyYW5jaW5pL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hcmFuY2luaS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FyYW5jaW5pL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2FyYW5jaW5pL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2FyYW5jaW5pL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvY2FyNC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9tZW51LWJhY2tncm91bmQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMsIDEyLCAxMiwgMC45KTtcXG4gICAgY29sb3I6IHJnYigyMzYsIDEzNCwgMTgpOyBcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgXFxuICAgIFxcbn1cXG5uYXZ7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXG4gICAgXFxufVxcblxcbm5hdiBidXR0b257XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuaW1ne1xcbiAgIHdpZHRoOiAxMDAlO1xcbiAgIGhlaWdodDogYXV0bztcXG4gICBcXG59XFxubWFpbntcXG4gICAgbWluLWhlaWdodDo4NXZoO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBcXG4gICBcXG5cXG59XFxuLmhvbWUtcGFnZXtcXG4gICAgaGVpZ2h0OiA4NXZoO1xcbiAgICB6LWluZGV4OiAtMTsgXFxuICAgIFxcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAxMiwgMTIsIDAuNSk7XFxuICAgIFxcbiAgICBcXG59XFxuLm1lbnUtcGFnZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4uYnRuLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG59XFxuLmJhbm5lci1jb250YWluZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgXFxufVxcbi5iYW5uZXItY29udGFpbmVyIGgxe1xcbiAgICBmb250LXNpemU6IDZlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSA1cHggd2hpdGU7XFxufVxcbi5iYW5uZXItY29udGFpbmVyIHB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uYmFubmVyLWJ0bi1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjVweDtcXG59XFxuLmJhbm5lci1idG4tY29udGFpbmVyIGJ1dHRvbntcXG4gICAgd2lkdGg6IDEwdnc7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucGl6emEtTWVudXtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxuICAgIFxcbiAgICBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBcXG4gICAgXFxuICAgXFxuXFxufVxcblxcbi5tZW51LWJhbm5lcntcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIFxcbn1cXG4ubWVudS1iYW5uZXIgaDF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMTIsIDEyLCAwLjkpO1xcbiAgICBmb250LXNpemU6IDhyZW07XFxuICAgIGNvbG9yOndoaXRlO1xcbn1cXG5cXG4ucGl6emEtTWVudSBoMXtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZm9udC1zaXplOiA4cmVtO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIFxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5waXp6YS1NZW51IGgye1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIFxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG59XFxuLnBpenphLWltZzF7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuXFxufVxcbi5waXp6YS1pbWcye1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBncmlkLWNvbHVtbjogMy80O1xcbn1cXG5cXG4uYnVpbGQteW91ci1vd257XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDc1dnc7XFxuICAgIGdhcDogNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBcXG4gICAgXFxufVxcblxcbi50b3BwaW5ncyB1bHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgIFxcblxcblxcbn1cXG4udG9wcGluZ3MgbGl7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZ2IoMjM2LCAxNDksIDE4KTtcXG59XFxuXFxuLnRvcHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uc3BlY2lhbHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNzV2dztcXG4gICAgZ2FwOjVweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgcGFkZGluZzoyMHB4O1xcbiAgICBcXG59XFxuXFxuXFxuLnNwZWNpYWwtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LDFmcik7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlOyAgICBcXG59XFxuLmZsZXgtbGlzdHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIG9yYW5nZTtcXG4gICAgXFxufVxcbi5mbGV4LWxpc3QgbGl7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcbn1cXG4udG9wcGluZ3N7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLmNhcmQtY29udGFpbmVye1xcbiAgICB3aWR0aDogNzV2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LDFmcik7XFxuICAgIHBhZGRpbmc6IDUwcHggMHB4O1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBcXG4gICAgXFxuICAgIFxcbiAgICBcXG4gICAgXFxufVxcblxcbi5tZW51LWNhcmR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwxZnIpO1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgb3JhbmdlO1xcbiAgICBcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbi5pbWd7XFxuICAgIGdyaWQtcm93OiAxLzM7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4ubmFtZS1wcmljZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XFxufVxcbi5jYXJkLWRlc2N7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcblxcbmZvb3RlcntcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDQsIDEzMCwgNTMpO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgXFxufVxcblxcblxcblxcblxcblxcblxcbi5hYm91dC1wYWdle1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBcXG4gICAgXFxufVxcbi5hYm91dC1iYW5uZXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIFxcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcblxcbn1cXG4uYWJvdXQtYmFubmVyIGgxe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMTIsIDEyLCAwLjkpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiA7XFxuICAgIGZvbnQtc2l6ZTogOHJlbTtcXG4gICAgY29sb3I6d2hpdGU7XFxufVxcblxcblxcblxcbi5mZXN0LXNlY3Rpb24sLmNhdGVyaW5nLXNlY3Rpb257XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNDUsIDI0NSwgMjQ1KTsgIFxcbiAgICBnYXA6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIFxcbiAgICBcXG4gICBcXG59XFxuLmZlc3Qtc2VjdGlvbiBkaXYsLmNhdGVyaW5nLXNlY3Rpb24gZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZmVzdC1zZWN0aW9uIGgyLC5jYXRlcmluZy1zZWN0aW9uIGgye1xcbiAgICBjb2xvcjogb3JhbmdlIDtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxufVxcbi5mZXN0LXNlY3Rpb24gaW1nLC5jYXRlcmluZy1zZWN0aW9uIGltZ3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4O1xcbn1cXG5cXG4uY2F0ZXJpbmctc2VjdGlvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMTIsIDEyLCAwLjkpO1xcbiAgICBcXG59XFxuLmNhdGVyaW5nLXNlY3Rpb24gcHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uY2F0ZXJpbmctc2VjdGlvbiBpbWd7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGJveC1zaGFkb3c6bm9uZTtcXG59XFxuLmNhdGVyaW5nLXNlY3Rpb24gZGl2e1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseURBQTBDO0lBQzFDLDJCQUEyQjtJQUMzQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHVDQUF1QztJQUN2Qyx3QkFBd0I7SUFDeEIsYUFBYTs7O0FBR2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDZCQUE2Qjs7QUFFakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7R0FDRyxXQUFXO0dBQ1gsWUFBWTs7QUFFZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjs7OztBQUlwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7OztJQUdYLHVDQUF1Qzs7O0FBRzNDO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsYUFBYTs7QUFFakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixr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ZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTs7O0lBR1osdUJBQXVCOztJQUV2Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixXQUFXOzs7QUFHZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7Ozs7QUFJQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG9DQUFvQztJQUNwQyxTQUFTO0lBQ1QsYUFBYTs7OztBQUlqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7SUFFdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVDQUF1Qzs7QUFFM0M7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHl7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2NhcjQucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMsIDEyLCAxMiwgMC45KTtcXG4gICAgY29sb3I6IHJnYigyMzYsIDEzNCwgMTgpOyBcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgXFxuICAgIFxcbn1cXG5uYXZ7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXG4gICAgXFxufVxcblxcbm5hdiBidXR0b257XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuaW1ne1xcbiAgIHdpZHRoOiAxMDAlO1xcbiAgIGhlaWdodDogYXV0bztcXG4gICBcXG59XFxubWFpbntcXG4gICAgbWluLWhlaWdodDo4NXZoO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBcXG4gICBcXG5cXG59XFxuLmhvbWUtcGFnZXtcXG4gICAgaGVpZ2h0OiA4NXZoO1xcbiAgICB6LWluZGV4OiAtMTsgXFxuICAgIFxcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAxMiwgMTIsIDAuNSk7XFxuICAgIFxcbiAgICBcXG59XFxuLm1lbnUtcGFnZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4uYnRuLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG59XFxuLmJhbm5lci1jb250YWluZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgXFxufVxcbi5iYW5uZXItY29udGFpbmVyIGgxe1xcbiAgICBmb250LXNpemU6IDZlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSA1cHggd2hpdGU7XFxufVxcbi5iYW5uZXItY29udGFpbmVyIHB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uYmFubmVyLWJ0bi1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjVweDtcXG59XFxuLmJhbm5lci1idG4tY29udGFpbmVyIGJ1dHRvbntcXG4gICAgd2lkdGg6IDEwdnc7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucGl6emEtTWVudXtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxuICAgIFxcbiAgICBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL21lbnUtYmFja2dyb3VuZC5wbmcnKTtcXG4gICAgXFxuICAgIFxcbiAgIFxcblxcbn1cXG5cXG4ubWVudS1iYW5uZXJ7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG59XFxuLm1lbnUtYmFubmVyIGgxe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMsIDEyLCAxMiwgMC45KTtcXG4gICAgZm9udC1zaXplOiA4cmVtO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuLnBpenphLU1lbnUgaDF7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGZvbnQtc2l6ZTogOHJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ucGl6emEtTWVudSBoMntcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxufVxcbi5waXp6YS1pbWcxe1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMi8zO1xcblxcbn1cXG4ucGl6emEtaW1nMntcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG59XFxuXFxuLmJ1aWxkLXlvdXItb3due1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA3NXZ3O1xcbiAgICBnYXA6IDVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4udG9wcGluZ3MgdWx7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICBcXG5cXG5cXG59XFxuLnRvcHBpbmdzIGxpe1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgcmdiKDIzNiwgMTQ5LCAxOCk7XFxufVxcblxcbi50b3B7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnNwZWNpYWxze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDc1dnc7XFxuICAgIGdhcDo1cHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHBhZGRpbmc6MjBweDtcXG4gICAgXFxufVxcblxcblxcbi5zcGVjaWFsLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwxZnIpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTsgICAgXFxufVxcbi5mbGV4LWxpc3R7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBvcmFuZ2U7XFxuICAgIFxcbn1cXG4uZmxleC1saXN0IGxpe1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG5cXG59XFxuLnRvcHBpbmdze1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jYXJkLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDc1dnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwxZnIpO1xcbiAgICBwYWRkaW5nOiA1MHB4IDBweDtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgXFxuICAgIFxcbiAgICBcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4ubWVudS1jYXJke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsMWZyKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIG9yYW5nZTtcXG4gICAgXFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uaW1ne1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLm5hbWUtcHJpY2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcbn1cXG4uY2FyZC1kZXNje1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5cXG5mb290ZXJ7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAxMzAsIDUzKTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIFxcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG4uYWJvdXQtcGFnZXtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvY2FyNC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBcXG4gICAgXFxufVxcbi5hYm91dC1iYW5uZXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIFxcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcblxcbn1cXG4uYWJvdXQtYmFubmVyIGgxe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMTIsIDEyLCAwLjkpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiA7XFxuICAgIGZvbnQtc2l6ZTogOHJlbTtcXG4gICAgY29sb3I6d2hpdGU7XFxufVxcblxcblxcblxcbi5mZXN0LXNlY3Rpb24sLmNhdGVyaW5nLXNlY3Rpb257XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNDUsIDI0NSwgMjQ1KTsgIFxcbiAgICBnYXA6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIFxcbiAgICBcXG4gICBcXG59XFxuLmZlc3Qtc2VjdGlvbiBkaXYsLmNhdGVyaW5nLXNlY3Rpb24gZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZmVzdC1zZWN0aW9uIGgyLC5jYXRlcmluZy1zZWN0aW9uIGgye1xcbiAgICBjb2xvcjogb3JhbmdlIDtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxufVxcbi5mZXN0LXNlY3Rpb24gaW1nLC5jYXRlcmluZy1zZWN0aW9uIGltZ3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4O1xcbn1cXG5cXG4uY2F0ZXJpbmctc2VjdGlvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMTIsIDEyLCAwLjkpO1xcbiAgICBcXG59XFxuLmNhdGVyaW5nLXNlY3Rpb24gcHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uY2F0ZXJpbmctc2VjdGlvbiBpbWd7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGJveC1zaGFkb3c6bm9uZTtcXG59XFxuLmNhdGVyaW5nLXNlY3Rpb24gZGl2e1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNhcjEgZnJvbSAnLi4vaW1hZ2VzL21lbC1mZXN0MS5wbmcnO1xuaW1wb3J0IGFyYW5jaW5pIGZyb20gJy4uL2ltYWdlcy9hcmFuY2luaS5wbmcnO1xuaW1wb3J0IHsgbWFpbkZpbmRlciB9IGZyb20gJy4vcmVuZGVyJztcbmltcG9ydCB7IGNyZWF0ZUJhbm5lciB9IGZyb20gJy4vbWVudSc7XG5cbmNvbnN0IGNyZWF0ZVNlY3Rpb24gPSAobmFtZSxpbWdTcmMsaHRleHQscHRleHQsYnRuKSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoYCR7bmFtZX0tc2VjdGlvbmApO1xuXG4gICAgY29uc3QgZmVzdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZmVzdEltYWdlLnNyYyA9IGltZ1NyYztcblxuICAgIGNvbnN0IGJhbm5lclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICB0aXRsZS5pbm5lclRleHQgPSBodGV4dDtcblxuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYS5pbm5lclRleHQgPSBwdGV4dDtcbiAgICBcbiAgICBiYW5uZXJUZXh0LmFwcGVuZCh0aXRsZSxwYXJhKVxuICAgIHNlY3Rpb24uYXBwZW5kKGZlc3RJbWFnZSxiYW5uZXJUZXh0KTtcblxuICAgIGlmKGJ0bil7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgIG1haW5GaW5kZXIoJ2NvbnRhY3QnKVxuICAgICAgICB9KTtcbiAgICAgICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWJ0bicpO1xuICAgICAgICBjb250YWN0QnV0dG9uLmlubmVyVGV4dCA9IFwiQ29udGFjdCBVc1wiO1xuICAgICAgICBiYW5uZXJUZXh0LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG4gICAgfVxuICAgIHJldHVybiBzZWN0aW9uXG5cbn1cblxuXG5cbmNvbnN0IGxvYWRBYm91dCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXBhZ2UnLCdob21lLXBhZ2UnLCdjb250YWN0LXBhZ2UnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXBhZ2UnKTtcblxuICAgIG1haW4uYXBwZW5kKFxuICAgICAgICBjcmVhdGVCYW5uZXIoJ2Fib3V0JywnQWJvdXQgVXMnKSxcbiAgICAgICAgY3JlYXRlU2VjdGlvbignZmVzdCcsY2FyMSwnSm9pbiBVcyBMYWJvciBEYXkgV2Vla2VuZCcsJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLCBhZGlwaXNpY2luZyBlbGl0LiBTaW50LCB0ZW1wb3JhIHJlcHVkaWFuZGFlPyBVbGxhbSBjb25zZWN0ZXR1ciBpbGx1bSBleGNlcHR1cmkgcXVvZCByYXRpb25lIGVzc2UgcXVhZXJhdCBpc3RlPycsZmFsc2UpLFxuICAgICAgICBjcmVhdGVTZWN0aW9uKCdjYXRlcmluZycsYXJhbmNpbmksJ0NvbnRhY3QgVXMgZm9yIENhdGVyaW5nJywnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIFNpbnQsIHRlbXBvcmEgcmVwdWRpYW5kYWU/IFVsbGFtIGNvbnNlY3RldHVyIGlsbHVtIGV4Y2VwdHVyaSBxdW9kIHJhdGlvbmUgZXNzZSBxdWFlcmF0IGlzdGU/Jyx0cnVlKVxuICAgIClcbn1cblxuZXhwb3J0IHtcbiAgICBsb2FkQWJvdXQsXG59XG5cbiIsImNvbnN0IGNyZWF0ZUlucHV0ID0gKGF0dHJpYnV0ZXMpID0+IHtcbiAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLGAke2F0dHJpYnV0ZXNbMF19YCk7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJyxgJHthdHRyaWJ1dGVzWzFdfWApO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLGAke2F0dHJpYnV0ZXNbMl19YClcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLGAke2F0dHJpYnV0ZXNbMl19YClcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJyxgJHthdHRyaWJ1dGVzWzNdfWApXG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kKGxhYmVsLGlucHV0KTtcblxuXG4gICAgcmV0dXJuIGlucHV0Q29udGFpbmVyXG5cblxufTtcblxuXG5cblxuXG5jb25zdCBjb250YWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGlucHV0cyA9IFtcbiAgICAgICAgWyduYW1lJywndGV4dCcsJ25hbWUnLCdGdWxsIE5hbWUnXSxcbiAgICAgICAgWydlbWFpbCcsJ2VtYWlsJywnZW1haWwnLCdleGFtcGxlQGdtYWlsLmNvbSddLFxuICAgIF1cblxuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCdmb3JtJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsXCIgXCIpXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsJ3Bvc3QnKTtcblxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCk9PntcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVJbnB1dChpbnB1dCkpO1xuXG4gICAgfSlcbiAgICBcbiAgICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1RoaXMgaXMgYSB0ZXh0IGFyZWEnKVxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0ZXh0QXJlYSk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBcblxuXG4gICAgcmV0dXJuIGZvcm1Db250YWluZXJcbiAgICBcbn1cblxuXG5jb25zdCBsb2FkQ29udGFjdCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXBhZ2UnLCdob21lLXBhZ2UnLCdhYm91dC1wYWdlJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXBhZ2UnKTtcbiAgICBcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0oKSlcbiAgICBcbn07XG5cblxuXG5leHBvcnR7XG4gICAgbG9hZENvbnRhY3QsXG59XG5cblxuXG4iLCJpbXBvcnQgYXJhbmNpbmkgZnJvbSAnLi4vaW1hZ2VzL2FyYW5jaW5pLnBuZyc7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuLi9pbWFnZXMvY2FyNC5wbmcnXG5cblxuY29uc3QgYnVpbGRCYW5uZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lci1jb250YWluZXInKTtcblxuXG4gICAgY29uc3QgYmFubmVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGJhbm5lckhlYWRlci50ZXh0Q29udGVudCA9IFwiQ2FtYWNpJ3MgUGl6emVyaWFcIjtcblxuICAgIGNvbnN0IGJhbm5lclBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYmFubmVyUGFyYS5pbm5lclRleHQgPSBcIkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQcmFlc2VudGl1bSBjb25zZXF1YXR1ciB2b2x1cHRhdHVtIGNvbW1vZGkgZXhlcmNpdGF0aW9uZW0uIFBlcnNwaWNpYXRpcyBjdXBpZGl0YXRlIHBsYWNlYXQgbGF1ZGFudGl1bSBpdXJlIHRlbXBvcmUgYWxpcXVpZCBub3N0cnVtIHZvbHVwdGF0ZVwiO1xuICAgIFxuICBcbiAgICBiYW5uZXIuYXBwZW5kKGJhbm5lckhlYWRlcixiYW5uZXJQYXJhKTtcbiAgICBcblxuXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lci1idG4tY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ0bi50eXBlID0gJ2J1dHRvbic7XG4gICAgbWVudUJ0bi5pbm5lclRleHQgPSBcIk1lbnVcIlxuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnYmFubmVyLW1lbnUnLCAnYmFubmVyLWJ0bicpO1xuICAgIC8vbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdiYW5uZXItYnRuJywnJyk7XG5cblxuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICBjb250YWN0QnRuLmlubmVyVGV4dCA9ICdDb250YWN0JztcbiAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lci1jb250YWN0JywnYmFubmVyLWJ0bicpO1xuICAgIC8vY29udGFjdEJ0bi5jbGFzc0xpc3QuYWRkKCdiYW5uZXItYnRuJylcblxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG5cbiAgICBiYW5uZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgICBcblxuICAgIFxuXG5cbiAgICByZXR1cm4gYmFubmVyXG59O1xuXG5cblxuY29uc3QgbG9hZEhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtCYWNrZ3JvdW5kfSlgXG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtcGFnZScsJ2Fib3V0LXBhZ2UnLCdjb250YWN0LXBhZ2UnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2hvbWUtcGFnZScpO1xuICAgIC8vbWFpbi5hcHBlbmRDaGlsZChtYWtlU2xpZGVyKCkpO1xuICAgIFxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYnVpbGRCYW5uZXIoKSk7XG4gICAgXG4gICAgLy9tYWluLmFwcGVuZENoaWxkKGhvbWVJbWFnZSgpKVxuICAgIC8vbmV3IFNsaWRlcigpO1xuICAgIFxuXG59XG5cbmV4cG9ydHtcbiAgICBsb2FkSG9tZSxcbn0iLCJpbXBvcnQgcGFuZWxsZSBmcm9tICcuLi9pbWFnZXMvcGFuZWxsZS5wbmcnO1xuaW1wb3J0IGFyYW5jaW5pIGZyb20gJy4uL2ltYWdlcy9hcmFuY2luaS5wbmcnO1xuaW1wb3J0IHBhbnplcm90aSBmcm9tICcuLi9pbWFnZXMvcGFuemVyb3R0aS5wbmcnO1xuaW1wb3J0IGJlZWYgZnJvbSAnLi4vaW1hZ2VzL2l0YWxpYW4tYmVlZi5wbmcnO1xuaW1wb3J0IHNmaW5jb25lIGZyb20gJy4uL2ltYWdlcy9zZmluY2lvbmUucG5nJztcbmltcG9ydCBlZ2dwbGFudCBmcm9tICcuLi9pbWFnZXMvZWdncGxhbnQucG5nJztcbmltcG9ydCBudXRlbGxhIGZyb20gJy4uL2ltYWdlcy9udXRlbGxhLnBuZyc7XG5pbXBvcnQgY29ybmV0dG8gZnJvbSAnLi4vaW1hZ2VzL2Nvcm5ldHRvLnBuZyc7XG5cbmNvbnN0IGNyZWF0ZVRvcHBpbmdzID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvcHBpbmdzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9wcGluZ3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9wcGluZ3MnKTtcbiAgICBjb25zdCB0b3BwaW5nTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgXG4gICAgY29uc3QgdG9wcGluZ3MgPSBbXG4gICAgICAgICdQZXBwZXJvbmknLFxuICAgICAgICAnU2F1c2FnZScsXG4gICAgICAgICdQcm9zY2l1dG8nLFxuICAgICAgICAnQXJ0aWNob2tlJyxcbiAgICAgICAgJ011c2hyb29tJyxcbiAgICAgICAgJ09uaW9ucycsXG4gICAgICAgICdHcmVlbiBQZXBwZXInLFxuICAgICAgICAnQmxhY2sgT2xpdmVzJyxcbiAgICAgICAgJ0hvdCBHaWFyZGVuZXJhJyxcbiAgICAgICAgJ0Jhc2lsJ1xuICAgIF1cbiAgICBcbiAgICB0b3BwaW5ncy5mb3JFYWNoKCh0b3BwaW5nKT0+e1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaXRlbS5pbm5lclRleHQgPSB0b3BwaW5nO1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3RvcCcpO1xuICAgICAgICB0b3BwaW5nTGlzdC5hcHBlbmRDaGlsZChpdGVtKVxuXG4gICAgfSk7XG5cbiAgICB0b3BwaW5nc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BwaW5nTGlzdCk7XG5cblxuICAgIHJldHVybiB0b3BwaW5nc0NvbnRhaW5lclxufTtcblxuXG5jb25zdCBuZXdDYXJkID0gKG5hbWUsZGVzYyxwcmljZSxpdGVtKSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkJyk7XG5cbiAgICBjb25zdCBuYW1lUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lUHJpY2UuY2xhc3NMaXN0LmFkZCgnbmFtZS1wcmljZScpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1oZWFkZXInKTtcbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gbmFtZTtcblxuICAgIGNvbnN0IGNhcmRQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjYXJkUHJpY2UuY2xhc3NMaXN0LmFkZCgnY2FyZC1wcmljZScpO1xuICAgIGNhcmRQcmljZS5pbm5lclRleHQgPSBwcmljZTtcblxuICAgIFxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZGVzYycpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRlc2M7XG5cbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2ltZycpXG4gICAgaW1hZ2Uuc3JjID0gaXRlbTtcblxuICAgIG5hbWVQcmljZS5hcHBlbmQoaGVhZGVyLGNhcmRQcmljZSlcblxuICAgIGNhcmQuYXBwZW5kKGltYWdlLG5hbWVQcmljZSxkZXNjcmlwdGlvbik7XG5cblxuICAgIHJldHVybiBjYXJkXG59XG5cbmNvbnN0IG1lbnVDYXJkQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBtZW51QXJyYXkgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6XCJBcmFuY2luaVwiLFxuICAgICAgICAgICAgZGVzYzpcIkJhbGxzIG9mIHJpY2Ugc3R1ZmZlZCB3aXRoIHBlYXMsIG1lYXQgc2F1Y2UsIGFuZCBjaGVlc2UuIDRDVCBcIixcbiAgICAgICAgICAgIHByaWNlOiBcIiQ3Ljk5XCIsXG4gICAgICAgICAgICBwaWN0dXJlOiBhcmFuY2luaVxuXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6XCJQYW5lbGxlXCIsXG4gICAgICAgICAgICBkZXNjOlwiU2ljaWxpYW4gZnJpdHRlcnMgbWFkZSBmcm9tIGNoaWNrcGVhIGZsb3VyLCB3aXRoIGxlbW9uIGFuZCBwZXBwZXJcIixcbiAgICAgICAgICAgIHByaWNlOiBcIiQ0Ljk5XCIsXG4gICAgICAgICAgICBwaWN0dXJlOiBwYW5lbGxlXG5cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTpcIlBhbnplcm90aVwiLFxuICAgICAgICAgICAgZGVzYzpcIkRlZXAgZnJpZWQgZG91Z2ggcG9ja2V0IGZpbGxlZCB3aXRoIGZyZXNoIHRvbWF0byBzYXVjZSwgY2hlZXNlLCBhbmQgYmFzaWxcIixcbiAgICAgICAgICAgIHByaWNlOiBcIiQzLjk5XCIsXG4gICAgICAgICAgICBwaWN0dXJlOiBwYW56ZXJvdGlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTpcIkl0YWxpYW4gQmVlZlwiLFxuICAgICAgICAgICAgZGVzYzpcIkNsYXNzaWMgQ2hpY2FnbyBiZWVmIHdpdGggeW91ciBjaG9pY2Ugb2YgcGVwcGVyc1wiLFxuICAgICAgICAgICAgcHJpY2U6IFwiJDcuOTlcIixcbiAgICAgICAgICAgIHBpY3R1cmU6IGJlZWZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTpcIlNmaW5jaW9uZVwiLFxuICAgICAgICAgICAgZGVzYzpcIlNpY2lsaWFuIHN0eWxlIHRoaWNrIGN1dCBwaXp6YSwgYnkgdGhlIHNsaWNlXCIsXG4gICAgICAgICAgICBwcmljZTogXCIkMi45OVwiLFxuICAgICAgICAgICAgcGljdHVyZTogc2ZpbmNvbmVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTpcIkVnZ3BsYW50IFBhcm1lc2VhblwiLFxuICAgICAgICAgICAgZGVzYzpcIkVnZ3BsYW50IFBhcm1lc2VhbiBTYW5kd2hpY2hcIixcbiAgICAgICAgICAgIHByaWNlOiBcIiQ1Ljk5XCIsXG4gICAgICAgICAgICBwaWN0dXJlOiBlZ2dwbGFudFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOlwiTnV0ZWxsYSBDcmVwZXNcIixcbiAgICAgICAgICAgIGRlc2M6XCJOdXRlbGxhIENyZXBlcyB3aXRoIHN0cmF3YmVycmllc1wiLFxuICAgICAgICAgICAgcHJpY2U6IFwiJDcuOTlcIixcbiAgICAgICAgICAgIHBpY3R1cmU6IG51dGVsbGFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTpcIkNvcm5ldHRpXCIsXG4gICAgICAgICAgICBkZXNjOlwiRnJlc2ggQ29ybmV0dGkgKG51dGVsbGEsIHBlYWNoLCBjcmVhbSkgYW5kIGEgRXNwcmVzc29cIixcbiAgICAgICAgICAgIHByaWNlOiBcIiQ5Ljk5XCIsXG4gICAgICAgICAgICBwaWN0dXJlOiBjb3JuZXR0b1xuICAgICAgICB9LFxuXG4gICAgXVxuXG5cbiAgICBtZW51QXJyYXkuZm9yRWFjaCgoaXRlbSk9PntcbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDYXJkKGl0ZW0ubmFtZSxpdGVtLmRlc2MsaXRlbS5wcmljZSxpdGVtLnBpY3R1cmUpKVxuICAgIH0pXG4gICAgXG5cbiAgICByZXR1cm4gbWVudUNvbnRhaW5lcjtcblxufTtcblxuY29uc3QgY3JlYXRlU3BlY2lhbCA9ICgpID0+IHtcbiAgICBjb25zdCBzcGVjaWFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3BlY2lhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzcGVjaWFsLWNvbnRhaW5lcicpXG4gICAgY29uc3Qgc3BlY2lhbHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdUaGUgR2l1c2VwcGUnLFxuICAgICAgICAgICAgZGVzYzogJ1BlcHBlcm9uaSwgU2F1c2FnZSwgUmVkIFBlcHBlciwgUm9hc3RlZCBHYXJsaWMsIFBlc3RvJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnVGhlIEdpdXNlcHBlJyxcbiAgICAgICAgICAgIGRlc2M6ICdQZXBwZXJvbmksIFNhdXNhZ2UsIFJlZCBQZXBwZXIsIFJvYXN0ZWQgR2FybGljJ1xuXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdWZWdldGFyaWFuJyxcbiAgICAgICAgICAgIGRlc2M6ICdSaWNvdHRhIGFuZCBTcGluYWNoJ1xuXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdNYXJhZ2l0YScsXG4gICAgICAgICAgICBkZXNjOiAnQ2xhc3NpYyBzd2VldCB0b21hdG8gc2F1Y2Ugd2l0aCBmcmVzaCBNb3p6YXJlbGxhIENoZWVzZSBhbmQgQmFzaWwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdGYWNjaWEgZGkgVmVjaGlhJyxcbiAgICAgICAgICAgIGRlc2M6ICdCcmVhZCB3aXRoIGEgY29hdGluZyBvZiBPbGl2ZSBPaWwsIFNhbHQsIFBlcHBlciwgT3JlZ2VubyBhbmQgQ3J1c2hlZCByZWQgcGVwcGVyJ1xuXG4gICAgICAgIH1cbiAgICBdXG5cbiAgICBzcGVjaWFscy5mb3JFYWNoKChzcGVjaWFsKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBsaXN0LmNsYXNzTGlzdC5hZGQoJ2ZsZXgtbGlzdCcpXG4gICAgICAgIGNvbnN0IGxpc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGlzdE5hbWUuaW5uZXJUZXh0ID0gc3BlY2lhbC5uYW1lO1xuICAgICAgICBjb25zdCBsaXN0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpc3REZXNjLmlubmVyVGV4dCA9IHNwZWNpYWwuZGVzYztcblxuICAgICAgICBsaXN0LmFwcGVuZChsaXN0TmFtZSxsaXN0RGVzYyk7XG4gICAgICAgIHNwZWNpYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdCk7XG5cblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNwZWNpYWxDb250YWluZXI7XG59O1xuXG5jbGFzcyBNZW51e1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5wYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIC8vdGhpcy5oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIH07XG5cbiAgICBwaXp6YU1lbnUoKXtcblxuICAgICAgICB0aGlzLnBhZ2UuY2xhc3NMaXN0LmFkZCgncGl6emEtTWVudScpXG4gICAgICAgIC8vdGhpcy5oZWFkZXIuaW5uZXJUZXh0ID0gXCJQaXp6YVwiO1xuICAgICAgICAvL3RoaXMuaGVhZGVyLnN0eWxlLmZvbnRTaXplID0gJzRyZW0nXG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IGJ1aWxkWW91ck93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidWlsZFlvdXJPd24uY2xhc3NMaXN0LmFkZCgnYnVpbGQteW91ci1vd24nKTtcbiAgICAgICAgLy9idWlsZCB5b3VyIG93biBtYXJrdXBcbiAgICAgICAgY29uc3Qgb3duVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBvd25UaXRsZS5pbm5lclRleHQgPSAnQnVpbGQgeW91ciBvd24nO1xuXG4gICAgICAgIGNvbnN0IGJ1aWxkRGlzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBidWlsZERpc2MuY2xhc3NMaXN0LmFkZCgnYnVpbGQtZGlzYycpO1xuICAgICAgICBidWlsZERpc2MuaW5uZXJUZXh0ID0gJ0Nob29zZSAzIG9mIGFueSB0b3BwaW5ncywgYWRpdHRpb25hbCB0b3BwaW5ncyAkMS41MCc7XG4gICAgICAgIFxuICAgICAgICBidWlsZFlvdXJPd24uYXBwZW5kQ2hpbGQob3duVGl0bGUpO1xuICAgICAgICBidWlsZFlvdXJPd24uYXBwZW5kQ2hpbGQoYnVpbGREaXNjKTtcbiAgICAgICAgYnVpbGRZb3VyT3duLmFwcGVuZENoaWxkKGNyZWF0ZVRvcHBpbmdzKCkpO1xuXG5cbiAgICAgICAgY29uc3Qgc3BlY2lhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3BlY2lhbHMuY2xhc3NMaXN0LmFkZCgnc3BlY2lhbHMnKTtcblxuICAgICAgICBjb25zdCBzcGVjaWFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBzcGVjaWFsVGl0bGUuaW5uZXJUZXh0ID0gJ1NwZWNpYWxzJztcbiAgICAgICAgXG5cbiAgICAgICAgXG5cblxuICAgICAgIFxuXG5cbiAgICAgICAgXG5cblxuXG5cbiAgICAgICAgc3BlY2lhbHMuYXBwZW5kQ2hpbGQoc3BlY2lhbFRpdGxlKTtcbiAgICAgICAgc3BlY2lhbHMuYXBwZW5kQ2hpbGQoY3JlYXRlU3BlY2lhbCgpKVxuXG4gICAgICAgIC8qXG4gICAgICAgIHRoaXMucGFnZS5hcHBlbmRDaGlsZCh0aGlzLmhlYWRlcik7XG4gICAgICAgIHRoaXMucGFnZS5hcHBlbmRDaGlsZChwaXp6YUltZzEpO1xuICAgICAgICB0aGlzLnBhZ2UuYXBwZW5kQ2hpbGQoYnVpbGRZb3VyT3duKTtcbiAgICAgICAgdGhpcy5wYWdlLmFwcGVuZENoaWxkKHNwZWNpYWxzKTsgKi9cblxuICAgICAgICB0aGlzLnBhZ2UuYXBwZW5kKGJ1aWxkWW91ck93bixzcGVjaWFscylcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2VcbiAgICB9XG5cbn07XG5cblxuY29uc3QgY3JlYXRlQmFubmVyID0gKG5hbWUsY2FwdGlvbikgPT4ge1xuICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJhbm5lci5jbGFzc0xpc3QuYWRkKGAke25hbWV9LWJhbm5lcmApO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IGAke2NhcHRpb259YDtcblxuICAgIGJhbm5lci5hcHBlbmQodGl0bGUpXG5cbiAgICByZXR1cm4gYmFubmVyXG5cbn07XG5jb25zdCBsb2FkTWVudSA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdob21lLXBhZ2UnLCdhYm91dC1wYWdlJywnY29udGFjdC1wYWdlJyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtZW51LXBhZ2UnKTtcblxuICAgIGNvbnN0IHBpenphID0gbmV3IE1lbnUoKTtcbiAgICBjb25zdCBhcHBldGl6ZXJzID0gbmV3IE1lbnUoKTtcbiAgICBtYWluLmFwcGVuZChjcmVhdGVCYW5uZXIoJ21lbnUnLCdNZW51JykscGl6emEucGl6emFNZW51KCksbWVudUNhcmRDb250YWluZXIoKSlcbiAgICBcblxuXG4gfTtcbiBleHBvcnR7XG4gICAgbG9hZE1lbnUsXG4gICAgY3JlYXRlQmFubmVyXG5cbiB9IiwiaW1wb3J0IHtsb2FkSG9tZX0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHtsb2FkTWVudX0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0e2xvYWRBYm91dH0gZnJvbSAnLi9hYm91dCdcbmltcG9ydHtsb2FkQ29udGFjdH0gZnJvbSAnLi9jb250YWN0J1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUoKSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpXG4gICAgcmV0dXJuIGhlYWRlclxuXG59O1xuZnVuY3Rpb24gZ2V0VGl0bGUgKCl7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkNhbWFjaSdzIFBpenplcmlhXCI7XG4gICAgcmV0dXJuIHRpdGxlXG59XG5mdW5jdGlvbiBjcmVhdGVOYXYoKXtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuXG4gICAgbGV0IGJ0bkFycmF5ID0gW107XG4gICAgXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIGhvbWUudHlwZSA9ICdidXR0b24nO1xuICAgIGhvbWUuaW5uZXJUZXh0ID0gJ0hvbWUnO1xuICAgIGhvbWUubmFtZSA9ICdob21lJ1xuICAgIGJ0bkFycmF5LnB1c2goaG9tZSk7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgbWVudS50eXBlID0gJ2J1dHRvbic7XG4gICAgbWVudS5uYW1lID0gJ21lbnUnO1xuICAgIG1lbnUuaW5uZXJUZXh0ID0gJ01lbnUnO1xuICAgIGJ0bkFycmF5LnB1c2gobWVudSk7XG4gICAgXG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgYWJvdXQudHlwZSA9ICdidXR0b24nO1xuICAgIGFib3V0Lm5hbWUgPSAnYWJvdXQnO1xuICAgIGFib3V0LmlubmVyVGV4dCA9ICdBYm91dCc7XG4gICAgYnRuQXJyYXkucHVzaChhYm91dCk7XG5cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgY29udGFjdC50eXBlID0gJ2J1dHRvbic7XG4gICAgY29udGFjdC5uYW1lID0gJ2NvbnRhY3QnO1xuICAgIGNvbnRhY3QuaW5uZXJUZXh0ID0gJ0NvbnRhY3QnO1xuICAgIGJ0bkFycmF5LnB1c2goY29udGFjdCk7XG5cbiAgICBidG5BcnJheS5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgYnRuLmRhdGFzZXQucGFnZSA9IGJ0bi5uYW1lO1xuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICBtYWluRmluZGVyKGJ0bi5kYXRhc2V0LnBhZ2UpXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5hdjtcbn1cblxuXG5cblxuXG5cbmZ1bmN0aW9uIG1haW5GaW5kZXIoZGF0YSl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgaWYoZGF0YSA9PT0gJ2hvbWUnKXtcbiAgICAgICAgbG9hZEhvbWUoKVxuICAgICAgICBcbiAgICB9XG4gICAgZWxzZSBpZihkYXRhID09PSAnbWVudScpe1xuICAgICAgICBsb2FkTWVudSgpO1xuICAgIH1cbiAgICBlbHNlIGlmKGRhdGEgPT09ICdhYm91dCcpe1xuICAgICAgICBsb2FkQWJvdXQoKTtcbiAgICB9XG4gICAgZWxzZSBpZihkYXRhID09J2NvbnRhY3QnKXtcbiAgICAgICAgbG9hZENvbnRhY3QoKVxuICAgIH1cblxufVxuY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgbG9hZEhvbWUoKTtcblxufTtcbmV4cG9ydHtcbiAgICByZW5kZXIsXG4gICAgbWFpbkZpbmRlclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZyc7XG5cbmltcG9ydCB7cmVuZGVyfSBmcm9tICcuL21vZHVsZXMvcmVuZGVyJztcblxucmVuZGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=