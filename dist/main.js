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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Lobster-Regular.ttf */ "./src/Lobster-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/car4.png */ "./src/images/car4.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/menu-background.png */ "./src/images/menu-background.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/menu-background.png */ "./src/images/menu-background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Lobster';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf'),\n      url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf');\n    font-weight: 600;\n    font-style: normal;\n  }\n\n\n\n\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    min-height: 100vh;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-position: center;\n    background-size: cover;  \n}\n\nheader{\n    position: sticky;\n    top: 0;\n    height: 10vh;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    z-index: 1;\n    overflow: hidden;\n    background-color: rgba(13, 12, 12, 0.9);\n    color: rgb(236, 134, 18); \n    padding: 20px;\n    \n    \n}\nnav{\n    width: 30vw;\n    display: flex;\n    justify-content:space-between;\n    \n}\n\nnav button{\n    width: 100px;\n    background-color: transparent;\n    border: none;\n    color: white;\n    font-size: 1.5rem;\n}\nimg{\n   width: 100%;\n   height: auto;\n   \n}\nmain{\n    min-height:85vh;\n    overflow: hidden;\n    \n   \n\n}\n.home-page{\n    height: 85vh;\n    z-index: -1; \n    \n\n    background-color: rgba(13, 12, 12, 0.5);\n    \n    \n}\n.menu-page{\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n}\n\n.btn-container{\n    position:absolute;\n    top: 50%;\n    border: 1px solid black;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n\n}\n.banner-container{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    \n    text-align: center;\n    gap: 5px;\n    \n}\n.banner-container h1{\n    font-size: 6em;\n    color: white;\n    text-decoration: underline 5px white;\n    font-family: 'Lobster';\n}\n.banner-container p{\n    width: 500px;\n    color: white;\n    margin-bottom: 10px;\n}\n.banner-btn-container{\n    display: flex;\n    gap: 25px;\n}\n.banner-btn-container button{\n    width: 10vw;\n    font-size: 1.5rem;\n    max-width: 150px;\n    padding: 10px;\n    border-radius: 10px;\n    border: none;\n    background-color: orange;\n    color: white;\n}\n\n.pizza-Menu{\n\n    text-align: center;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    \n    \n    \n    align-items: center;\n    width: 100%;\n    min-height: 600px;\n\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    \n    \n   \n\n}\n\n.menu-banner{\n    height: 20vh;\n    \n    background-color: white;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    width: 100%;\n    \n}\n.menu-banner h1{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    width: 100%;\n    height: 100%;\n    background-color: rgba(13, 12, 12, 0.9);\n    font-size: 8rem;\n    color:white;\n}\n\n.pizza-Menu h1{\n    grid-column: 2/3;\n    font-size: 8rem;\n    color: black;\n    \n    margin-bottom: 5px;\n}\n\n.pizza-Menu h2{\n    font-size: 2rem;\n    \n    border-radius: 25px;\n    color: black;\n    width: 100%;\n    \n}\n.pizza-img1{\n    grid-column: 1/2;\n    grid-row: 2/3;\n\n}\n.pizza-img2{\n    grid-row: 2/3;\n    grid-column: 3/4;\n}\n\n.build-your-own{\n    \n    background-color: white;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    width: 75vw;\n    gap: 5px;\n    align-items: center;\n    height: 300px;\n    \n    \n}\n\n.toppings ul{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    height: 100%;\n    font-size: 1.2rem;\n    gap: 10px;\n\n    \n\n\n}\n.toppings li{\n    border-bottom: 5px solid rgb(236, 149, 18);\n}\n\n.top{\n    text-align: center;\n    list-style: none;\n}\n\n.specials{\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    width: 75vw;\n    gap:5px;\n    height: 300px;\n    padding:20px;\n    \n}\n\n\n.special-container{\n    display: grid;\n    grid-template-rows: repeat(5,1fr);\n    justify-content: space-around;\n    height: 100%;\n    width: 100%;    \n}\n.flex-list{\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    justify-content: flex-start;\n    width: 100%;\n    height: 100%;\n    align-items: center;\n    border-bottom: 1px solid orange;\n    \n}\n.flex-list li{\n    list-style: none;\n    text-align: left;\n    font-size: 1.2rem;\n\n}\n.toppings{\n    height: 100%;\n}\n.card-container{\n    width: 75vw;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-template-rows: repeat(4,1fr);\n    padding: 50px 0px;\n    gap: 50px;\n    justify-self: center;\n    \n    \n    \n    \n    \n}\n\n.menu-card{\n    display: grid;\n    grid-template-columns: 2fr 3fr;\n    grid-template-rows: repeat(2,1fr);\n    border-bottom: 5px solid orange;\n    \n    padding: 5px;\n    width: 100%;\n    justify-self: center;\n}\n.img{\n    grid-row: 1/3;\n    align-self: center;\n    width: 250px;\n    height: 150px;\n    \n    justify-self: center;\n    \n}\n\n.name-price{\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n    align-items: flex-end;\n    padding-bottom: 0px;\n}\n.card-desc{\n    padding: 10px;\n}\n\n\nfooter{\n    \n    background-color: rgb(244, 130, 53);\n    height: 5vh;\n    z-index: 2;\n    \n}\n\n\n\n\n\n\n.about-page{\n    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-position: center;\n    \n    \n}\n.about-banner,.contact-banner{\n    text-align: center;\n    font-size: 4rem;\n    width: 100%;\n    color: white;\n    height: 20vh;\n    \n    \n    background-color: white;\n    \n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    width: 100%;\n\n\n}\n.about-banner h1, .contact-banner h1{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(13, 12, 12, 0.9);\n    width: 100%;\n    height: 100%;\n    font-size: 5rem;\n    color:white;\n}\n\n\n\n.fest-section,.catering-section{\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    background-color:rgb(245, 245, 245);  \n    gap: 50px;\n    padding: 20px;\n    \n    \n   \n}\n.fest-section div,.catering-section div{\n    display: flex;\n    flex-direction: column;\n    \n    align-items: center;\n    justify-content: center;\n    color: black;\n    text-align: center;\n}\n.fest-section h2,.catering-section h2{\n    color: orange ;\n    font-size: 3.5rem;\n}\n.fest-section img,.catering-section img{\n    width: 100%;\n    height: 50vh;\n    align-self: center;\n    justify-self: center;\n    border-radius:20px;\n    box-shadow: 0 0 5px;\n}\n\n.catering-section{\n    background-color: rgba(13, 12, 12, 0.9);\n    \n}\n.catering-section p{\n    color: white;\n}\n.catering-section img{\n    grid-column: 2/3;\n    box-shadow:none;\n}\n.catering-section div{\n    grid-column: 1/2;\n    grid-row: 1/2;\n}\n\n\n\n\n\n\n/*contact page*/\n.contact-page{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-color: rgba(13, 12, 12, 0.9);\n}\n.contact-banner{\n    border-bottom: 1px solid orange;\n}\n.form-container{\n    \n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    padding: 20px;\n   \n    \n    min-height: 65vh;\n   \n}\n\nform{\n    background-color: #ffffff;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    justify-content: space-around;\n    align-items: center;\n    text-align: center;\n    width: 500px;\n    gap: 20px;\n    justify-self: center;\n    align-self: center;\n    \n   \n\n    grid-column: 2/3;\n    \n    \n}\n.form-banner{\n    display:flex;\n    flex-direction: column;\n    gap: 10px;\n}\n.input-wrapper{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    gap: 10px;\n}\ninput{\n   width: 100%;\n   height:50px;\n   padding: 5px;\n}\ntextarea{\n    width: 100%;\n    height: 150px;\n}\n\n.catering-container{\n\n    /*\n    background-color: rgba(255, 255, 255, 0.95);\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 100px 1fr;\n    gap: 20px;\n    padding: 20px;\n    text-align: center;*/\n    display: flex;\n    justify-content: space-around;\n    background-color: rgba(255, 255, 255, 0.95);\n    padding: 20px;\n    gap: 20px;\n\n}\n\n.catering-card{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    padding: 0px;\n    height: auto;\n    \n\n    /*\n    border-radius: 20px;\n    box-shadow: 0px 0px 12px 0px rgba(237,136,29,1);\n    background-color: #ffffff;\n    */\n}\n.catering-card:hover{\n    border-radius: 20px;\n    box-shadow: 0px 0px 12px 0px rgba(237,136,29,1);\n    background-color: orange;\n    color: #ffffff;\n    border-color: white;\n}\n\n.catering-card img{\n    width: 100%;\n    height: auto;\n    max-width: 250px;\n    height: 200px;\n    \n    \n    \n\n   \n    \n   \n \n}\n.cards-banner{\n  \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: orange;\n}\n.cards-banner h1{\n    font-size: 2.5rem;\n    width: 100%;\n}\n.catering-card .name-price{\n    display: flex;\n    flex-direction: column;\n    \n    align-items: center;\n    \n}\n\n\n.info-container{\n    height: 30vh;\n    background-color: rgba(13, 12, 12, 0.9);\n    color: white;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    gap: 20px;\n    width: 100%;\n}\n\n.info-grid{\n    display: flex;\n    gap: 20px;\n}\n.info-card{\n    width: 100%;\n   \n}\n\n.hours-info{\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    \n\n}\n\n.times{\n    padding: 5px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Lobster';\n    src: url('./Lobster-Regular.ttf') format('ttf'),\n      url('./Lobster-Regular.ttf') format('ttf');\n    font-weight: 600;\n    font-style: normal;\n  }\n\n\n\n\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    min-height: 100vh;\n    background-image: url('./images/car4.png');\n    background-position: center;\n    background-size: cover;  \n}\n\nheader{\n    position: sticky;\n    top: 0;\n    height: 10vh;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    z-index: 1;\n    overflow: hidden;\n    background-color: rgba(13, 12, 12, 0.9);\n    color: rgb(236, 134, 18); \n    padding: 20px;\n    \n    \n}\nnav{\n    width: 30vw;\n    display: flex;\n    justify-content:space-between;\n    \n}\n\nnav button{\n    width: 100px;\n    background-color: transparent;\n    border: none;\n    color: white;\n    font-size: 1.5rem;\n}\nimg{\n   width: 100%;\n   height: auto;\n   \n}\nmain{\n    min-height:85vh;\n    overflow: hidden;\n    \n   \n\n}\n.home-page{\n    height: 85vh;\n    z-index: -1; \n    \n\n    background-color: rgba(13, 12, 12, 0.5);\n    \n    \n}\n.menu-page{\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n}\n\n.btn-container{\n    position:absolute;\n    top: 50%;\n    border: 1px solid black;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n\n}\n.banner-container{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    \n    text-align: center;\n    gap: 5px;\n    \n}\n.banner-container h1{\n    font-size: 6em;\n    color: white;\n    text-decoration: underline 5px white;\n    font-family: 'Lobster';\n}\n.banner-container p{\n    width: 500px;\n    color: white;\n    margin-bottom: 10px;\n}\n.banner-btn-container{\n    display: flex;\n    gap: 25px;\n}\n.banner-btn-container button{\n    width: 10vw;\n    font-size: 1.5rem;\n    max-width: 150px;\n    padding: 10px;\n    border-radius: 10px;\n    border: none;\n    background-color: orange;\n    color: white;\n}\n\n.pizza-Menu{\n\n    text-align: center;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    \n    \n    \n    align-items: center;\n    width: 100%;\n    min-height: 600px;\n\n    background-image: url('./images/menu-background.png');\n    \n    \n   \n\n}\n\n.menu-banner{\n    height: 20vh;\n    \n    background-color: white;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    width: 100%;\n    \n}\n.menu-banner h1{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    width: 100%;\n    height: 100%;\n    background-color: rgba(13, 12, 12, 0.9);\n    font-size: 8rem;\n    color:white;\n}\n\n.pizza-Menu h1{\n    grid-column: 2/3;\n    font-size: 8rem;\n    color: black;\n    \n    margin-bottom: 5px;\n}\n\n.pizza-Menu h2{\n    font-size: 2rem;\n    \n    border-radius: 25px;\n    color: black;\n    width: 100%;\n    \n}\n.pizza-img1{\n    grid-column: 1/2;\n    grid-row: 2/3;\n\n}\n.pizza-img2{\n    grid-row: 2/3;\n    grid-column: 3/4;\n}\n\n.build-your-own{\n    \n    background-color: white;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    width: 75vw;\n    gap: 5px;\n    align-items: center;\n    height: 300px;\n    \n    \n}\n\n.toppings ul{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    height: 100%;\n    font-size: 1.2rem;\n    gap: 10px;\n\n    \n\n\n}\n.toppings li{\n    border-bottom: 5px solid rgb(236, 149, 18);\n}\n\n.top{\n    text-align: center;\n    list-style: none;\n}\n\n.specials{\n    display: flex;\n    flex-direction: column;\n    background-color: white;\n    width: 75vw;\n    gap:5px;\n    height: 300px;\n    padding:20px;\n    \n}\n\n\n.special-container{\n    display: grid;\n    grid-template-rows: repeat(5,1fr);\n    justify-content: space-around;\n    height: 100%;\n    width: 100%;    \n}\n.flex-list{\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    justify-content: flex-start;\n    width: 100%;\n    height: 100%;\n    align-items: center;\n    border-bottom: 1px solid orange;\n    \n}\n.flex-list li{\n    list-style: none;\n    text-align: left;\n    font-size: 1.2rem;\n\n}\n.toppings{\n    height: 100%;\n}\n.card-container{\n    width: 75vw;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-template-rows: repeat(4,1fr);\n    padding: 50px 0px;\n    gap: 50px;\n    justify-self: center;\n    \n    \n    \n    \n    \n}\n\n.menu-card{\n    display: grid;\n    grid-template-columns: 2fr 3fr;\n    grid-template-rows: repeat(2,1fr);\n    border-bottom: 5px solid orange;\n    \n    padding: 5px;\n    width: 100%;\n    justify-self: center;\n}\n.img{\n    grid-row: 1/3;\n    align-self: center;\n    width: 250px;\n    height: 150px;\n    \n    justify-self: center;\n    \n}\n\n.name-price{\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n    align-items: flex-end;\n    padding-bottom: 0px;\n}\n.card-desc{\n    padding: 10px;\n}\n\n\nfooter{\n    \n    background-color: rgb(244, 130, 53);\n    height: 5vh;\n    z-index: 2;\n    \n}\n\n\n\n\n\n\n.about-page{\n    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-image: url('./images/car4.png');\n    background-position: center;\n    \n    \n}\n.about-banner,.contact-banner{\n    text-align: center;\n    font-size: 4rem;\n    width: 100%;\n    color: white;\n    height: 20vh;\n    \n    \n    background-color: white;\n    \n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    width: 100%;\n\n\n}\n.about-banner h1, .contact-banner h1{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(13, 12, 12, 0.9);\n    width: 100%;\n    height: 100%;\n    font-size: 5rem;\n    color:white;\n}\n\n\n\n.fest-section,.catering-section{\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    background-color:rgb(245, 245, 245);  \n    gap: 50px;\n    padding: 20px;\n    \n    \n   \n}\n.fest-section div,.catering-section div{\n    display: flex;\n    flex-direction: column;\n    \n    align-items: center;\n    justify-content: center;\n    color: black;\n    text-align: center;\n}\n.fest-section h2,.catering-section h2{\n    color: orange ;\n    font-size: 3.5rem;\n}\n.fest-section img,.catering-section img{\n    width: 100%;\n    height: 50vh;\n    align-self: center;\n    justify-self: center;\n    border-radius:20px;\n    box-shadow: 0 0 5px;\n}\n\n.catering-section{\n    background-color: rgba(13, 12, 12, 0.9);\n    \n}\n.catering-section p{\n    color: white;\n}\n.catering-section img{\n    grid-column: 2/3;\n    box-shadow:none;\n}\n.catering-section div{\n    grid-column: 1/2;\n    grid-row: 1/2;\n}\n\n\n\n\n\n\n/*contact page*/\n.contact-page{\n    background-image: url('../src/images/menu-background.png');\n    background-color: rgba(13, 12, 12, 0.9);\n}\n.contact-banner{\n    border-bottom: 1px solid orange;\n}\n.form-container{\n    \n    display: grid;\n    grid-template-columns: repeat(3,1fr);\n    padding: 20px;\n   \n    \n    min-height: 65vh;\n   \n}\n\nform{\n    background-color: #ffffff;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    justify-content: space-around;\n    align-items: center;\n    text-align: center;\n    width: 500px;\n    gap: 20px;\n    justify-self: center;\n    align-self: center;\n    \n   \n\n    grid-column: 2/3;\n    \n    \n}\n.form-banner{\n    display:flex;\n    flex-direction: column;\n    gap: 10px;\n}\n.input-wrapper{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    gap: 10px;\n}\ninput{\n   width: 100%;\n   height:50px;\n   padding: 5px;\n}\ntextarea{\n    width: 100%;\n    height: 150px;\n}\n\n.catering-container{\n\n    /*\n    background-color: rgba(255, 255, 255, 0.95);\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 100px 1fr;\n    gap: 20px;\n    padding: 20px;\n    text-align: center;*/\n    display: flex;\n    justify-content: space-around;\n    background-color: rgba(255, 255, 255, 0.95);\n    padding: 20px;\n    gap: 20px;\n\n}\n\n.catering-card{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    padding: 0px;\n    height: auto;\n    \n\n    /*\n    border-radius: 20px;\n    box-shadow: 0px 0px 12px 0px rgba(237,136,29,1);\n    background-color: #ffffff;\n    */\n}\n.catering-card:hover{\n    border-radius: 20px;\n    box-shadow: 0px 0px 12px 0px rgba(237,136,29,1);\n    background-color: orange;\n    color: #ffffff;\n    border-color: white;\n}\n\n.catering-card img{\n    width: 100%;\n    height: auto;\n    max-width: 250px;\n    height: 200px;\n    \n    \n    \n\n   \n    \n   \n \n}\n.cards-banner{\n  \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: orange;\n}\n.cards-banner h1{\n    font-size: 2.5rem;\n    width: 100%;\n}\n.catering-card .name-price{\n    display: flex;\n    flex-direction: column;\n    \n    align-items: center;\n    \n}\n\n\n.info-container{\n    height: 30vh;\n    background-color: rgba(13, 12, 12, 0.9);\n    color: white;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    gap: 20px;\n    width: 100%;\n}\n\n.info-grid{\n    display: flex;\n    gap: 20px;\n}\n.info-card{\n    width: 100%;\n   \n}\n\n.hours-info{\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    \n\n}\n\n.times{\n    padding: 5px;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/modules/contact.js");






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
        createSection('catering',_images_arancini_png__WEBPACK_IMPORTED_MODULE_1__,'Contact Us for Catering','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, tempora repudiandae? Ullam consectetur illum excepturi quod ratione esse quaerat iste?',true),
        (0,_contact__WEBPACK_IMPORTED_MODULE_4__.infoMenu)()
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
/* harmony export */   "infoMenu": () => (/* binding */ infoMenu),
/* harmony export */   "loadContact": () => (/* binding */ loadContact)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/modules/menu.js");
/* harmony import */ var _images_panelle_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/panelle.png */ "./src/images/panelle.png");
/* harmony import */ var _images_arancini_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/arancini.png */ "./src/images/arancini.png");
/* harmony import */ var _images_panzerotti_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/panzerotti.png */ "./src/images/panzerotti.png");







const createInput = (attributes) => {
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-wrapper');

    const label = document.createElement('label')
    label.setAttribute('for',`${attributes[0]}`);
    label.innerText = `${attributes[1]}`

    const input = document.createElement('input');
    input.setAttribute('type',`${attributes[2]}`);
    input.setAttribute('id',`${attributes[3]}`)
    input.setAttribute('name',`${attributes[3]}`)
    input.setAttribute('placeholder',`${attributes[4]}`)
    inputContainer.append(label,input);


    return inputContainer


};

const cateringCards = () => {
    const cateringContainer = document.createElement('section');
    cateringContainer.classList.add('catering-container');

    //const banner = createBanner('cards','Catering Options')
    //cateringContainer.appendChild(banner);
    const cards = [
        {
            name:"Arancini",
            desc:"Balls of rice stuffed with peas, meat sauce, and cheese. 4CT ",
            price: "50ct, 100ct, 250ct",
            picture: _images_arancini_png__WEBPACK_IMPORTED_MODULE_2__

        },
        {
            name:"Panelle",
            desc:"Sicilian fritters made from chickpea flour, with lemon and pepper",
            price: "50ct, 100ct, 250ct",
            picture: _images_panelle_png__WEBPACK_IMPORTED_MODULE_1__

        },
        {
            name:"Panzeroti",
            desc:"Deep fried dough pocket filled with fresh tomato sauce, cheese, and basil",
            price: "50ct, 100ct, 250ct",
            picture: _images_panzerotti_png__WEBPACK_IMPORTED_MODULE_3__
        }

    ]
    
    cards.forEach((card)=>{
        let itemCard = (0,_menu__WEBPACK_IMPORTED_MODULE_0__.newCard)(card.name,card.desc,card.price,card.picture);
        itemCard.classList.add('catering-card')
        cateringContainer.appendChild(itemCard)

    });
    
    

    return cateringContainer

};

const infoMenu = function(){
    const infoSection = document.createElement('section');
    infoSection.classList.add('info-container');

    const banner = (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createBanner)('aboutus','Camacis Pizzeria');
    infoSection.appendChild(banner);

    //Main info Section
    const infoGrid = document.createElement('div');
    infoGrid.classList.add('info-grid');
    infoSection.appendChild(infoGrid);
    //about card
    const about = document.createElement('div');
    about.classList.add('about-card');
    about.classList.add('info-card')
    const aboutTitle = document.createElement('h3');
    const aboutText = document.createElement('p');
    aboutTitle.innerText = "About Us";
    aboutText.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis similique, commodi quis sequi voluptatum officiis! Aut nam tempore culpa voluptas.'
    about.append(aboutTitle,aboutText);
    //input card
    const inputCard = document.createElement('div');
    inputCard.classList.add('input-card');
    inputCard.classList.add('info-card');

    const inputTitle = document.createElement('h3');
    inputTitle.innerText = 'Get News and Offers!';
    //input wrapper
    const inputWrap = document.createElement('div');
    inputWrap.classList.add('wrap-input');
    //creat input
    const inputEmail = document.createElement('input');
    inputEmail.setAttribute('type','email');
    inputEmail.setAttribute('id',`aboutemail`)
    inputEmail.setAttribute('name',`about-email`)
    inputEmail.setAttribute('placeholder','Enter Your Email.')
    //btn
    const inptBtn = document.createElement('div');
    inptBtn.classList.add('inpt-btn');


    inputWrap.append(inputEmail,inptBtn);
    inputCard.append(inputTitle,inputWrap);

    const hoursCard = document.createElement('div');
    hoursCard.classList.add('hours-card');
    hoursCard.classList.add('info-card')

    const hoursTitle = document.createElement('h3')
    hoursTitle.innerText = 'Our Hours';

    

    const hoursInfo = document.createElement('div')
    hoursInfo.classList.add('hours-info');
    
    //times div
    const times = document.createElement('div');
    times.classList.add('times')
    const week = document.createElement('p');
    week.innerText = "Mon - Thurs: 10AM - 10PM"

    const weekEnd = document.createElement('p');
    weekEnd.innerText = "Fri - Sat: 12PM - 12AM";

    const sunday = document.createElement('p');
    sunday.innerText = 'Sunday: Closed'
    
    times.append(week,weekEnd,sunday);
    

    //contact info
    const addressContainer = document.createElement('div');
    addressContainer.classList.add('address-container');
    const numAdd = document.createElement('p');
    numAdd.innerText = '7370 Grand Ave'

    const street = document.createElement('p');
    street.innerText = ' Elmwood Park'

    const zipState = document.createElement('p');
    zipState.innerText = 'Illinois, 60707'

    const phone = document.createElement('p');
    phone.innerText = 'Phone: +555-555-555';


    addressContainer.append(numAdd,street,zipState,phone);
    hoursInfo.append(times,addressContainer)
    hoursCard.append(hoursTitle,hoursInfo)




    infoGrid.append(about,inputCard,hoursCard);






    


    return infoSection

    



}














const contactForm = () => {
    const formContainer = document.createElement('section');
    formContainer.classList.add('form-container');
    
    //create form
    const form = document.createElement('form');
    form.setAttribute('id','form');
    form.setAttribute('action'," ")
    form.setAttribute('method','post');

    //create banner and append it 
    const banner = (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createBanner)('form','Contact Us');
    const desc = document.createElement('p');
    desc.innerText = 'For catering pricing and options please contact us and we will get back as soon as possible!';
    banner.appendChild(desc);
    form.append(banner);

    //array of input array, pass through Create input
    const inputs = [
        ['name','Name:','text','name','Full Name'],
        ['email','Email:','email','email','example@gmail.com'],
    ]

    inputs.forEach((input)=>{
        form.appendChild(createInput(input));

    })
    

    const textArea = document.createElement('textarea');
    textArea.setAttribute('placeholder','This is a text area');

    const subBtn = document.createElement('button');
    subBtn.setAttribute('type','button');
    subBtn.innerText = "Send"

    form.append(textArea,subBtn)
    formContainer.appendChild(form);
    //formContainer.appendChild(cateringCards());


    

    return formContainer
    
}


const loadContact = () => {
    const main = document.querySelector('main');
    document.body.style.backgroundImage = 'none';
    main.innerHTML = '';
    main.classList.remove('menu-page','home-page','about-page');
    main.classList.add('contact-page');
    
   
    main.append(
        (0,_menu__WEBPACK_IMPORTED_MODULE_0__.createBanner)('contact',"Contact Us"),
        contactForm(),
        cateringCards(),
        infoMenu()
    )
    
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
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu),
/* harmony export */   "newCard": () => (/* binding */ newCard)
/* harmony export */ });
/* harmony import */ var _images_panelle_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/panelle.png */ "./src/images/panelle.png");
/* harmony import */ var _images_arancini_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/arancini.png */ "./src/images/arancini.png");
/* harmony import */ var _images_panzerotti_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/panzerotti.png */ "./src/images/panzerotti.png");
/* harmony import */ var _images_italian_beef_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/italian-beef.png */ "./src/images/italian-beef.png");
/* harmony import */ var _images_sfincione_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/sfincione.png */ "./src/images/sfincione.png");
/* harmony import */ var _images_eggplant_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/eggplant.png */ "./src/images/eggplant.png");
/* harmony import */ var _images_nutella_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/nutella.png */ "./src/images/nutella.png");
/* harmony import */ var _images_cornetto_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/cornetto.png */ "./src/images/cornetto.png");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact */ "./src/modules/contact.js");










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
    main.append(createBanner('menu','Menu'),pizza.pizzaMenu(),menuCardContainer(),(0,_contact__WEBPACK_IMPORTED_MODULE_8__.infoMenu)())
    


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

/***/ "./src/Lobster-Regular.ttf":
/*!*********************************!*\
  !*** ./src/Lobster-Regular.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03c38496322925fec242.ttf";

/***/ }),

/***/ "./src/images/arancini.png":
/*!*********************************!*\
  !*** ./src/images/arancini.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59ea6ae4b6a3e8742819.png";

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

module.exports = __webpack_require__.p + "ef044846838b352ce047.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsYUFBYSxZQUFZLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLGVBQWUsYUFBYSxXQUFXLGFBQWEsaUJBQWlCLE9BQU8sS0FBSyxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxLQUFLLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxXQUFXLFlBQVksV0FBVyxXQUFXLEtBQUssS0FBSyxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksZUFBZSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGNBQWMsTUFBTSxLQUFLLFlBQVksYUFBYSxjQUFjLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxpQkFBaUIsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFdBQVcsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFFBQVEsTUFBTSxZQUFZLFdBQVcsV0FBVyxXQUFXLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxlQUFlLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxhQUFhLE1BQU0sS0FBSyxVQUFVLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxVQUFVLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksZ0JBQWdCLGVBQWUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxXQUFXLFlBQVksYUFBYSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFFBQVEsS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxhQUFhLGNBQWMsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEs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QTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG1EQUFZO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7Ozs7Ozs7QUFPQTs7O0FBR0E7O0FBRUE7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLG1EQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbURBQVk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBT0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVE2QztBQUNIOzs7QUFHM0M7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQSxpREFBaUQsNkNBQVUsQ0FBQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEU0QztBQUNFO0FBQ0c7QUFDSDtBQUNDO0FBQ0Q7QUFDRjtBQUNFO0FBQ1Q7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7QUFFTDs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaURBQVE7O0FBRTdCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnREFBTzs7QUFFNUIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1EQUFTO0FBQzlCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxREFBSTtBQUN6QixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsa0RBQVE7QUFDN0IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFRO0FBQzdCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnREFBTztBQUM1QixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIs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RUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUM0Qjs7QUFFVDs7QUFFeEMsdURBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcmFuY2luaS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FyYW5jaW5pLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2FyYW5jaW5pLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2FyYW5jaW5pLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2FyYW5jaW5pLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2FyYW5jaW5pLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9zcmMvbW9kdWxlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL2FyYW5jaW5pLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS8uL3NyYy9tb2R1bGVzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9hcmFuY2luaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcmFuY2luaS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hcmFuY2luaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9hcmFuY2luaS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FyYW5jaW5pL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYXJhbmNpbmkvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2FyYW5jaW5pLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0xvYnN0ZXItUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jYXI0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL21lbnUtYmFja2dyb3VuZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9zcmMvaW1hZ2VzL21lbnUtYmFja2dyb3VuZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHRmJyksXFxuICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3R0ZicpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuXFxuXFxuXFxuXFxuKntcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5e1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgXFxufVxcblxcbmhlYWRlcntcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMTIsIDEyLCAwLjkpO1xcbiAgICBjb2xvcjogcmdiKDIzNiwgMTM0LCAxOCk7IFxcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBcXG4gICAgXFxufVxcbm5hdntcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcbiAgICBcXG59XFxuXFxubmF2IGJ1dHRvbntcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5pbWd7XFxuICAgd2lkdGg6IDEwMCU7XFxuICAgaGVpZ2h0OiBhdXRvO1xcbiAgIFxcbn1cXG5tYWlue1xcbiAgICBtaW4taGVpZ2h0Ojg1dmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIFxcbiAgIFxcblxcbn1cXG4uaG9tZS1wYWdle1xcbiAgICBoZWlnaHQ6IDg1dmg7XFxuICAgIHotaW5kZXg6IC0xOyBcXG4gICAgXFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMsIDEyLCAxMiwgMC41KTtcXG4gICAgXFxuICAgIFxcbn1cXG4ubWVudS1wYWdle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5idG4tY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbn1cXG4uYmFubmVyLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBcXG59XFxuLmJhbm5lci1jb250YWluZXIgaDF7XFxuICAgIGZvbnQtc2l6ZTogNmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDVweCB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJztcXG59XFxuLmJhbm5lci1jb250YWluZXIgcHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5iYW5uZXItYnRuLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNXB4O1xcbn1cXG4uYmFubmVyLWJ0bi1jb250YWluZXIgYnV0dG9ue1xcbiAgICB3aWR0aDogMTB2dztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5waXp6YS1NZW51e1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG4gICAgXFxuICAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogNjAwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIFxcbiAgICBcXG4gICBcXG5cXG59XFxuXFxuLm1lbnUtYmFubmVye1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxufVxcbi5tZW51LWJhbm5lciBoMXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAxMiwgMTIsIDAuOSk7XFxuICAgIGZvbnQtc2l6ZTogOHJlbTtcXG4gICAgY29sb3I6d2hpdGU7XFxufVxcblxcbi5waXp6YS1NZW51IGgxe1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBmb250LXNpemU6IDhyZW07XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLnBpenphLU1lbnUgaDJ7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIFxcbn1cXG4ucGl6emEtaW1nMXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG5cXG59XFxuLnBpenphLWltZzJ7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxufVxcblxcbi5idWlsZC15b3VyLW93bntcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNzV2dztcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuLnRvcHBpbmdzIHVse1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGdhcDogMTBweDtcXG5cXG4gICAgXFxuXFxuXFxufVxcbi50b3BwaW5ncyBsaXtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJnYigyMzYsIDE0OSwgMTgpO1xcbn1cXG5cXG4udG9we1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5zcGVjaWFsc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA3NXZ3O1xcbiAgICBnYXA6NXB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBwYWRkaW5nOjIwcHg7XFxuICAgIFxcbn1cXG5cXG5cXG4uc3BlY2lhbC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsMWZyKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7ICAgIFxcbn1cXG4uZmxleC1saXN0e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgb3JhbmdlO1xcbiAgICBcXG59XFxuLmZsZXgtbGlzdCBsaXtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuXFxufVxcbi50b3BwaW5nc3tcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uY2FyZC1jb250YWluZXJ7XFxuICAgIHdpZHRoOiA3NXZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsMWZyKTtcXG4gICAgcGFkZGluZzogNTBweCAwcHg7XFxuICAgIGdhcDogNTBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIFxcbiAgICBcXG4gICAgXFxuICAgIFxcbiAgICBcXG59XFxuXFxuLm1lbnUtY2FyZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLDFmcik7XFxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCBvcmFuZ2U7XFxuICAgIFxcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuLmltZ3tcXG4gICAgZ3JpZC1yb3c6IDEvMztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIFxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5uYW1lLXByaWNle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcXG59XFxuLmNhcmQtZGVzY3tcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuXFxuZm9vdGVye1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMTMwLCA1Myk7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuLmFib3V0LXBhZ2V7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIFxcbiAgICBcXG59XFxuLmFib3V0LWJhbm5lciwuY29udGFjdC1iYW5uZXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIFxcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcblxcbn1cXG4uYWJvdXQtYmFubmVyIGgxLCAuY29udGFjdC1iYW5uZXIgaDF7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAxMiwgMTIsIDAuOSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgY29sb3I6d2hpdGU7XFxufVxcblxcblxcblxcbi5mZXN0LXNlY3Rpb24sLmNhdGVyaW5nLXNlY3Rpb257XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI0NSwgMjQ1LCAyNDUpOyAgXFxuICAgIGdhcDogNTBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgXFxuICAgIFxcbiAgIFxcbn1cXG4uZmVzdC1zZWN0aW9uIGRpdiwuY2F0ZXJpbmctc2VjdGlvbiBkaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mZXN0LXNlY3Rpb24gaDIsLmNhdGVyaW5nLXNlY3Rpb24gaDJ7XFxuICAgIGNvbG9yOiBvcmFuZ2UgO1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG59XFxuLmZlc3Qtc2VjdGlvbiBpbWcsLmNhdGVyaW5nLXNlY3Rpb24gaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA1MHZoO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHg7XFxufVxcblxcbi5jYXRlcmluZy1zZWN0aW9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAxMiwgMTIsIDAuOSk7XFxuICAgIFxcbn1cXG4uY2F0ZXJpbmctc2VjdGlvbiBwe1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5jYXRlcmluZy1zZWN0aW9uIGltZ3tcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgYm94LXNoYWRvdzpub25lO1xcbn1cXG4uY2F0ZXJpbmctc2VjdGlvbiBkaXZ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVxcblxcblxcblxcblxcblxcblxcbi8qY29udGFjdCBwYWdlKi9cXG4uY29udGFjdC1wYWdle1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAxMiwgMTIsIDAuOSk7XFxufVxcbi5jb250YWN0LWJhbm5lcntcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIG9yYW5nZTtcXG59XFxuLmZvcm0tY29udGFpbmVye1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgIFxcbiAgICBcXG4gICAgbWluLWhlaWdodDogNjV2aDtcXG4gICBcXG59XFxuXFxuZm9ybXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgXFxuICAgXFxuXFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIFxcbiAgICBcXG59XFxuLmZvcm0tYmFubmVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuLmlucHV0LXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbmlucHV0e1xcbiAgIHdpZHRoOiAxMDAlO1xcbiAgIGhlaWdodDo1MHB4O1xcbiAgIHBhZGRpbmc6IDVweDtcXG59XFxudGV4dGFyZWF7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4uY2F0ZXJpbmctY29udGFpbmVye1xcblxcbiAgICAvKlxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7Ki9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMjBweDtcXG5cXG59XFxuXFxuLmNhdGVyaW5nLWNhcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgXFxuXFxuICAgIC8qXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCAwcHggcmdiYSgyMzcsMTM2LDI5LDEpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICAqL1xcbn1cXG4uY2F0ZXJpbmctY2FyZDpob3ZlcntcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDBweCByZ2JhKDIzNywxMzYsMjksMSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5jYXRlcmluZy1jYXJkIGltZ3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgXFxuICAgIFxcbiAgICBcXG5cXG4gICBcXG4gICAgXFxuICAgXFxuIFxcbn1cXG4uY2FyZHMtYmFubmVye1xcbiAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogb3JhbmdlO1xcbn1cXG4uY2FyZHMtYmFubmVyIGgxe1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5jYXRlcmluZy1jYXJkIC5uYW1lLXByaWNle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcblxcbi5pbmZvLWNvbnRhaW5lcntcXG4gICAgaGVpZ2h0OiAzMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAxMiwgMTIsIDAuOSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pbmZvLWdyaWR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLmluZm8tY2FyZHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgXFxufVxcblxcbi5ob3Vycy1pbmZve1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBcXG5cXG59XFxuXFxuLnRpbWVze1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEI7MkRBQzRDO0lBQzVDLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7Ozs7O0FBS0Y7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5REFBMEM7SUFDMUMsMkJBQTJCO0lBQzNCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsdUNBQXVDO0lBQ3ZDLHdCQUF3QjtJQUN4QixhQUFhOzs7QUFHakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsNkJBQTZCOztBQUVqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtHQUNHLFdBQVc7R0FDWCxZQUFZOztBQUVmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCOzs7O0FBSXBCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVzs7O0lBR1gsdUNBQXVDOzs7QUFHM0M7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsUUFBUTtJQUNSLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixhQUFhOztBQUVqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1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Q2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0xvYnN0ZXInO1xcbiAgICBzcmM6IHVybCgnLi9Mb2JzdGVyLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0dGYnKSxcXG4gICAgICB1cmwoJy4vTG9ic3Rlci1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIH1cXG5cXG5cXG5cXG5cXG4qe1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHl7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2NhcjQucG5nJyk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMsIDEyLCAxMiwgMC45KTtcXG4gICAgY29sb3I6IHJnYigyMzYsIDEzNCwgMTgpOyBcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgXFxuICAgIFxcbn1cXG5uYXZ7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXG4gICAgXFxufVxcblxcbm5hdiBidXR0b257XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuaW1ne1xcbiAgIHdpZHRoOiAxMDAlO1xcbiAgIGhlaWdodDogYXV0bztcXG4gICBcXG59XFxubWFpbntcXG4gICAgbWluLWhlaWdodDo4NXZoO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBcXG4gICBcXG5cXG59XFxuLmhvbWUtcGFnZXtcXG4gICAgaGVpZ2h0OiA4NXZoO1xcbiAgICB6LWluZGV4OiAtMTsgXFxuICAgIFxcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzLCAxMiwgMTIsIDAuNSk7XFxuICAgIFxcbiAgICBcXG59XFxuLm1lbnUtcGFnZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4uYnRuLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG59XFxuLmJhbm5lci1jb250YWluZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgXFxufVxcbi5iYW5uZXItY29udGFpbmVyIGgxe1xcbiAgICBmb250LXNpemU6IDZlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSA1cHggd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnTG9ic3Rlcic7XFxufVxcbi5iYW5uZXItY29udGFpbmVyIHB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uYmFubmVyLWJ0bi1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjVweDtcXG59XFxuLmJhbm5lci1idG4tY29udGFpbmVyIGJ1dHRvbntcXG4gICAgd2lkdGg6IDEwdnc7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucGl6emEtTWVudXtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxuICAgIFxcbiAgICBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL21lbnUtYmFja2dyb3VuZC5wbmcnKTtcXG4gICAgXFxuICAgIFxcbiAgIFxcblxcbn1cXG5cXG4ubWVudS1iYW5uZXJ7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG59XFxuLm1lbnUtYmFubmVyIGgxe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMsIDEyLCAxMiwgMC45KTtcXG4gICAgZm9udC1zaXplOiA4cmVtO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuLnBpenphLU1lbnUgaDF7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGZvbnQtc2l6ZTogOHJlbTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ucGl6emEtTWVudSBoMntcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxufVxcbi5waXp6YS1pbWcxe1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMi8zO1xcblxcbn1cXG4ucGl6emEtaW1nMntcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZ3JpZC1jb2x1bW46IDMvNDtcXG59XFxuXFxuLmJ1aWxkLXlvdXItb3due1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA3NXZ3O1xcbiAgICBnYXA6IDVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4udG9wcGluZ3MgdWx7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICBcXG5cXG5cXG59XFxuLnRvcHBpbmdzIGxpe1xcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgcmdiKDIzNiwgMTQ5LCAxOCk7XFxufVxcblxcbi50b3B7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLnNwZWNpYWxze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDc1dnc7XFxuICAgIGdhcDo1cHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIHBhZGRpbmc6MjBweDtcXG4gICAgXFxufVxcblxcblxcbi5zcGVjaWFsLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwxZnIpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTsgICAgXFxufVxcbi5mbGV4LWxpc3R7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBvcmFuZ2U7XFxuICAgIFxcbn1cXG4uZmxleC1saXN0IGxpe1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG5cXG59XFxuLnRvcHBpbmdze1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jYXJkLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDc1dnc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwxZnIpO1xcbiAgICBwYWRkaW5nOiA1MHB4IDBweDtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgXFxuICAgIFxcbiAgICBcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4ubWVudS1jYXJke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsMWZyKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIG9yYW5nZTtcXG4gICAgXFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4uaW1ne1xcbiAgICBncmlkLXJvdzogMS8zO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLm5hbWUtcHJpY2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcbn1cXG4uY2FyZC1kZXNje1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5cXG5mb290ZXJ7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAxMzAsIDUzKTtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIFxcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG4uYWJvdXQtcGFnZXtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvY2FyNC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBcXG4gICAgXFxufVxcbi5hYm91dC1iYW5uZXIsLmNvbnRhY3QtYmFubmVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICBcXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG5cXG59XFxuLmFib3V0LWJhbm5lciBoMSwgLmNvbnRhY3QtYmFubmVyIGgxe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMTIsIDEyLCAwLjkpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGNvbG9yOndoaXRlO1xcbn1cXG5cXG5cXG5cXG4uZmVzdC1zZWN0aW9uLC5jYXRlcmluZy1zZWN0aW9ue1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNDUsIDI0NSwgMjQ1KTsgIFxcbiAgICBnYXA6IDUwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIFxcbiAgICBcXG4gICBcXG59XFxuLmZlc3Qtc2VjdGlvbiBkaXYsLmNhdGVyaW5nLXNlY3Rpb24gZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZmVzdC1zZWN0aW9uIGgyLC5jYXRlcmluZy1zZWN0aW9uIGgye1xcbiAgICBjb2xvcjogb3JhbmdlIDtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxufVxcbi5mZXN0LXNlY3Rpb24gaW1nLC5jYXRlcmluZy1zZWN0aW9uIGltZ3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4O1xcbn1cXG5cXG4uY2F0ZXJpbmctc2VjdGlvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMTIsIDEyLCAwLjkpO1xcbiAgICBcXG59XFxuLmNhdGVyaW5nLXNlY3Rpb24gcHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uY2F0ZXJpbmctc2VjdGlvbiBpbWd7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGJveC1zaGFkb3c6bm9uZTtcXG59XFxuLmNhdGVyaW5nLXNlY3Rpb24gZGl2e1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKmNvbnRhY3QgcGFnZSovXFxuLmNvbnRhY3QtcGFnZXtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9zcmMvaW1hZ2VzL21lbnUtYmFja2dyb3VuZC5wbmcnKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMTIsIDEyLCAwLjkpO1xcbn1cXG4uY29udGFjdC1iYW5uZXJ7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBvcmFuZ2U7XFxufVxcbi5mb3JtLWNvbnRhaW5lcntcXG4gICAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICBcXG4gICAgXFxuICAgIG1pbi1oZWlnaHQ6IDY1dmg7XFxuICAgXFxufVxcblxcbmZvcm17XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIFxcbiAgIFxcblxcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBcXG4gICAgXFxufVxcbi5mb3JtLWJhbm5lcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5pbnB1dC13cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5pbnB1dHtcXG4gICB3aWR0aDogMTAwJTtcXG4gICBoZWlnaHQ6NTBweDtcXG4gICBwYWRkaW5nOiA1cHg7XFxufVxcbnRleHRhcmVhe1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG59XFxuXFxuLmNhdGVyaW5nLWNvbnRhaW5lcntcXG5cXG4gICAgLypcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuXFxufVxcblxcbi5jYXRlcmluZy1jYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIFxcblxcbiAgICAvKlxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggMHB4IHJnYmEoMjM3LDEzNiwyOSwxKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgKi9cXG59XFxuLmNhdGVyaW5nLWNhcmQ6aG92ZXJ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTJweCAwcHggcmdiYSgyMzcsMTM2LDI5LDEpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY2F0ZXJpbmctY2FyZCBpbWd7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIFxcbiAgICBcXG4gICAgXFxuXFxuICAgXFxuICAgIFxcbiAgIFxcbiBcXG59XFxuLmNhcmRzLWJhbm5lcntcXG4gIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IG9yYW5nZTtcXG59XFxuLmNhcmRzLWJhbm5lciBoMXtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uY2F0ZXJpbmctY2FyZCAubmFtZS1wcmljZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG5cXG4uaW5mby1jb250YWluZXJ7XFxuICAgIGhlaWdodDogMzB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMywgMTIsIDEyLCAwLjkpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW5mby1ncmlke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcbi5pbmZvLWNhcmR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgIFxcbn1cXG5cXG4uaG91cnMtaW5mb3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgXFxuXFxufVxcblxcbi50aW1lc3tcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNhcjEgZnJvbSAnLi4vaW1hZ2VzL21lbC1mZXN0MS5wbmcnO1xuaW1wb3J0IGFyYW5jaW5pIGZyb20gJy4uL2ltYWdlcy9hcmFuY2luaS5wbmcnO1xuaW1wb3J0IHsgbWFpbkZpbmRlciB9IGZyb20gJy4vcmVuZGVyJztcbmltcG9ydCB7IGNyZWF0ZUJhbm5lciB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBpbmZvTWVudSB9IGZyb20gJy4vY29udGFjdCc7XG5cbmNvbnN0IGNyZWF0ZVNlY3Rpb24gPSAobmFtZSxpbWdTcmMsaHRleHQscHRleHQsYnRuKSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoYCR7bmFtZX0tc2VjdGlvbmApO1xuXG4gICAgY29uc3QgZmVzdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZmVzdEltYWdlLnNyYyA9IGltZ1NyYztcblxuICAgIGNvbnN0IGJhbm5lclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICB0aXRsZS5pbm5lclRleHQgPSBodGV4dDtcblxuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYS5pbm5lclRleHQgPSBwdGV4dDtcbiAgICBcbiAgICBiYW5uZXJUZXh0LmFwcGVuZCh0aXRsZSxwYXJhKVxuICAgIHNlY3Rpb24uYXBwZW5kKGZlc3RJbWFnZSxiYW5uZXJUZXh0KTtcblxuICAgIGlmKGJ0bil7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgIG1haW5GaW5kZXIoJ2NvbnRhY3QnKVxuICAgICAgICB9KTtcbiAgICAgICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWJ0bicpO1xuICAgICAgICBjb250YWN0QnV0dG9uLmlubmVyVGV4dCA9IFwiQ29udGFjdCBVc1wiO1xuICAgICAgICBiYW5uZXJUZXh0LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG4gICAgfVxuICAgIHJldHVybiBzZWN0aW9uXG5cbn1cblxuXG5cbmNvbnN0IGxvYWRBYm91dCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXBhZ2UnLCdob21lLXBhZ2UnLCdjb250YWN0LXBhZ2UnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXBhZ2UnKTtcblxuICAgIG1haW4uYXBwZW5kKFxuICAgICAgICBjcmVhdGVCYW5uZXIoJ2Fib3V0JywnQWJvdXQgVXMnKSxcbiAgICAgICAgY3JlYXRlU2VjdGlvbignZmVzdCcsY2FyMSwnSm9pbiBVcyBMYWJvciBEYXkgV2Vla2VuZCcsJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLCBhZGlwaXNpY2luZyBlbGl0LiBTaW50LCB0ZW1wb3JhIHJlcHVkaWFuZGFlPyBVbGxhbSBjb25zZWN0ZXR1ciBpbGx1bSBleGNlcHR1cmkgcXVvZCByYXRpb25lIGVzc2UgcXVhZXJhdCBpc3RlPycsZmFsc2UpLFxuICAgICAgICBjcmVhdGVTZWN0aW9uKCdjYXRlcmluZycsYXJhbmNpbmksJ0NvbnRhY3QgVXMgZm9yIENhdGVyaW5nJywnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIFNpbnQsIHRlbXBvcmEgcmVwdWRpYW5kYWU/IFVsbGFtIGNvbnNlY3RldHVyIGlsbHVtIGV4Y2VwdHVyaSBxdW9kIHJhdGlvbmUgZXNzZSBxdWFlcmF0IGlzdGU/Jyx0cnVlKSxcbiAgICAgICAgaW5mb01lbnUoKVxuICAgIClcbn1cblxuZXhwb3J0IHtcbiAgICBsb2FkQWJvdXQsXG59XG5cbiIsImltcG9ydCB7IGNyZWF0ZUJhbm5lciwgbmV3Q2FyZH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHBhbmVsbGUgZnJvbSAnLi4vaW1hZ2VzL3BhbmVsbGUucG5nJztcbmltcG9ydCBhcmFuY2luaSBmcm9tICcuLi9pbWFnZXMvYXJhbmNpbmkucG5nJztcbmltcG9ydCBwYW56ZXJvdGkgZnJvbSAnLi4vaW1hZ2VzL3Bhbnplcm90dGkucG5nJztcblxuXG5cbmNvbnN0IGNyZWF0ZUlucHV0ID0gKGF0dHJpYnV0ZXMpID0+IHtcbiAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LXdyYXBwZXInKTtcblxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJyxgJHthdHRyaWJ1dGVzWzBdfWApO1xuICAgIGxhYmVsLmlubmVyVGV4dCA9IGAke2F0dHJpYnV0ZXNbMV19YFxuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsYCR7YXR0cmlidXRlc1syXX1gKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHthdHRyaWJ1dGVzWzNdfWApXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJyxgJHthdHRyaWJ1dGVzWzNdfWApXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsYCR7YXR0cmlidXRlc1s0XX1gKVxuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZChsYWJlbCxpbnB1dCk7XG5cblxuICAgIHJldHVybiBpbnB1dENvbnRhaW5lclxuXG5cbn07XG5cbmNvbnN0IGNhdGVyaW5nQ2FyZHMgPSAoKSA9PiB7XG4gICAgY29uc3QgY2F0ZXJpbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY2F0ZXJpbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2F0ZXJpbmctY29udGFpbmVyJyk7XG5cbiAgICAvL2NvbnN0IGJhbm5lciA9IGNyZWF0ZUJhbm5lcignY2FyZHMnLCdDYXRlcmluZyBPcHRpb25zJylcbiAgICAvL2NhdGVyaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGJhbm5lcik7XG4gICAgY29uc3QgY2FyZHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6XCJBcmFuY2luaVwiLFxuICAgICAgICAgICAgZGVzYzpcIkJhbGxzIG9mIHJpY2Ugc3R1ZmZlZCB3aXRoIHBlYXMsIG1lYXQgc2F1Y2UsIGFuZCBjaGVlc2UuIDRDVCBcIixcbiAgICAgICAgICAgIHByaWNlOiBcIjUwY3QsIDEwMGN0LCAyNTBjdFwiLFxuICAgICAgICAgICAgcGljdHVyZTogYXJhbmNpbmlcblxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOlwiUGFuZWxsZVwiLFxuICAgICAgICAgICAgZGVzYzpcIlNpY2lsaWFuIGZyaXR0ZXJzIG1hZGUgZnJvbSBjaGlja3BlYSBmbG91ciwgd2l0aCBsZW1vbiBhbmQgcGVwcGVyXCIsXG4gICAgICAgICAgICBwcmljZTogXCI1MGN0LCAxMDBjdCwgMjUwY3RcIixcbiAgICAgICAgICAgIHBpY3R1cmU6IHBhbmVsbGVcblxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOlwiUGFuemVyb3RpXCIsXG4gICAgICAgICAgICBkZXNjOlwiRGVlcCBmcmllZCBkb3VnaCBwb2NrZXQgZmlsbGVkIHdpdGggZnJlc2ggdG9tYXRvIHNhdWNlLCBjaGVlc2UsIGFuZCBiYXNpbFwiLFxuICAgICAgICAgICAgcHJpY2U6IFwiNTBjdCwgMTAwY3QsIDI1MGN0XCIsXG4gICAgICAgICAgICBwaWN0dXJlOiBwYW56ZXJvdGlcbiAgICAgICAgfVxuXG4gICAgXVxuICAgIFxuICAgIGNhcmRzLmZvckVhY2goKGNhcmQpPT57XG4gICAgICAgIGxldCBpdGVtQ2FyZCA9IG5ld0NhcmQoY2FyZC5uYW1lLGNhcmQuZGVzYyxjYXJkLnByaWNlLGNhcmQucGljdHVyZSk7XG4gICAgICAgIGl0ZW1DYXJkLmNsYXNzTGlzdC5hZGQoJ2NhdGVyaW5nLWNhcmQnKVxuICAgICAgICBjYXRlcmluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtQ2FyZClcblxuICAgIH0pO1xuICAgIFxuICAgIFxuXG4gICAgcmV0dXJuIGNhdGVyaW5nQ29udGFpbmVyXG5cbn07XG5cbmNvbnN0IGluZm9NZW51ID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBpbmZvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBpbmZvU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdpbmZvLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYmFubmVyID0gY3JlYXRlQmFubmVyKCdhYm91dHVzJywnQ2FtYWNpcyBQaXp6ZXJpYScpO1xuICAgIGluZm9TZWN0aW9uLmFwcGVuZENoaWxkKGJhbm5lcik7XG5cbiAgICAvL01haW4gaW5mbyBTZWN0aW9uXG4gICAgY29uc3QgaW5mb0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvR3JpZC5jbGFzc0xpc3QuYWRkKCdpbmZvLWdyaWQnKTtcbiAgICBpbmZvU2VjdGlvbi5hcHBlbmRDaGlsZChpbmZvR3JpZCk7XG4gICAgLy9hYm91dCBjYXJkXG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhYm91dC1jYXJkJyk7XG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnaW5mby1jYXJkJylcbiAgICBjb25zdCBhYm91dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWJvdXRUaXRsZS5pbm5lclRleHQgPSBcIkFib3V0IFVzXCI7XG4gICAgYWJvdXRUZXh0LmlubmVyVGV4dCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gRmFjaWxpcyBzaW1pbGlxdWUsIGNvbW1vZGkgcXVpcyBzZXF1aSB2b2x1cHRhdHVtIG9mZmljaWlzISBBdXQgbmFtIHRlbXBvcmUgY3VscGEgdm9sdXB0YXMuJ1xuICAgIGFib3V0LmFwcGVuZChhYm91dFRpdGxlLGFib3V0VGV4dCk7XG4gICAgLy9pbnB1dCBjYXJkXG4gICAgY29uc3QgaW5wdXRDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5wdXRDYXJkLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNhcmQnKTtcbiAgICBpbnB1dENhcmQuY2xhc3NMaXN0LmFkZCgnaW5mby1jYXJkJyk7XG5cbiAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBpbnB1dFRpdGxlLmlubmVyVGV4dCA9ICdHZXQgTmV3cyBhbmQgT2ZmZXJzISc7XG4gICAgLy9pbnB1dCB3cmFwcGVyXG4gICAgY29uc3QgaW5wdXRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5wdXRXcmFwLmNsYXNzTGlzdC5hZGQoJ3dyYXAtaW5wdXQnKTtcbiAgICAvL2NyZWF0IGlucHV0XG4gICAgY29uc3QgaW5wdXRFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXRFbWFpbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdlbWFpbCcpO1xuICAgIGlucHV0RW1haWwuc2V0QXR0cmlidXRlKCdpZCcsYGFib3V0ZW1haWxgKVxuICAgIGlucHV0RW1haWwuc2V0QXR0cmlidXRlKCduYW1lJyxgYWJvdXQtZW1haWxgKVxuICAgIGlucHV0RW1haWwuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ0VudGVyIFlvdXIgRW1haWwuJylcbiAgICAvL2J0blxuICAgIGNvbnN0IGlucHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnB0QnRuLmNsYXNzTGlzdC5hZGQoJ2lucHQtYnRuJyk7XG5cblxuICAgIGlucHV0V3JhcC5hcHBlbmQoaW5wdXRFbWFpbCxpbnB0QnRuKTtcbiAgICBpbnB1dENhcmQuYXBwZW5kKGlucHV0VGl0bGUsaW5wdXRXcmFwKTtcblxuICAgIGNvbnN0IGhvdXJzQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJzQ2FyZC5jbGFzc0xpc3QuYWRkKCdob3Vycy1jYXJkJyk7XG4gICAgaG91cnNDYXJkLmNsYXNzTGlzdC5hZGQoJ2luZm8tY2FyZCcpXG5cbiAgICBjb25zdCBob3Vyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGhvdXJzVGl0bGUuaW5uZXJUZXh0ID0gJ091ciBIb3Vycyc7XG5cbiAgICBcblxuICAgIGNvbnN0IGhvdXJzSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaG91cnNJbmZvLmNsYXNzTGlzdC5hZGQoJ2hvdXJzLWluZm8nKTtcbiAgICBcbiAgICAvL3RpbWVzIGRpdlxuICAgIGNvbnN0IHRpbWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGltZXMuY2xhc3NMaXN0LmFkZCgndGltZXMnKVxuICAgIGNvbnN0IHdlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgd2Vlay5pbm5lclRleHQgPSBcIk1vbiAtIFRodXJzOiAxMEFNIC0gMTBQTVwiXG5cbiAgICBjb25zdCB3ZWVrRW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHdlZWtFbmQuaW5uZXJUZXh0ID0gXCJGcmkgLSBTYXQ6IDEyUE0gLSAxMkFNXCI7XG5cbiAgICBjb25zdCBzdW5kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3VuZGF5LmlubmVyVGV4dCA9ICdTdW5kYXk6IENsb3NlZCdcbiAgICBcbiAgICB0aW1lcy5hcHBlbmQod2Vlayx3ZWVrRW5kLHN1bmRheSk7XG4gICAgXG5cbiAgICAvL2NvbnRhY3QgaW5mb1xuICAgIGNvbnN0IGFkZHJlc3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRyZXNzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZHJlc3MtY29udGFpbmVyJyk7XG4gICAgY29uc3QgbnVtQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG51bUFkZC5pbm5lclRleHQgPSAnNzM3MCBHcmFuZCBBdmUnXG5cbiAgICBjb25zdCBzdHJlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3RyZWV0LmlubmVyVGV4dCA9ICcgRWxtd29vZCBQYXJrJ1xuXG4gICAgY29uc3QgemlwU3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgemlwU3RhdGUuaW5uZXJUZXh0ID0gJ0lsbGlub2lzLCA2MDcwNydcblxuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBob25lLmlubmVyVGV4dCA9ICdQaG9uZTogKzU1NS01NTUtNTU1JztcblxuXG4gICAgYWRkcmVzc0NvbnRhaW5lci5hcHBlbmQobnVtQWRkLHN0cmVldCx6aXBTdGF0ZSxwaG9uZSk7XG4gICAgaG91cnNJbmZvLmFwcGVuZCh0aW1lcyxhZGRyZXNzQ29udGFpbmVyKVxuICAgIGhvdXJzQ2FyZC5hcHBlbmQoaG91cnNUaXRsZSxob3Vyc0luZm8pXG5cblxuXG5cbiAgICBpbmZvR3JpZC5hcHBlbmQoYWJvdXQsaW5wdXRDYXJkLGhvdXJzQ2FyZCk7XG5cblxuXG5cblxuXG4gICAgXG5cblxuICAgIHJldHVybiBpbmZvU2VjdGlvblxuXG4gICAgXG5cblxuXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgY29udGFjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XG4gICAgXG4gICAgLy9jcmVhdGUgZm9ybVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywnZm9ybScpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLFwiIFwiKVxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCdwb3N0Jyk7XG5cbiAgICAvL2NyZWF0ZSBiYW5uZXIgYW5kIGFwcGVuZCBpdCBcbiAgICBjb25zdCBiYW5uZXIgPSBjcmVhdGVCYW5uZXIoJ2Zvcm0nLCdDb250YWN0IFVzJyk7XG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjLmlubmVyVGV4dCA9ICdGb3IgY2F0ZXJpbmcgcHJpY2luZyBhbmQgb3B0aW9ucyBwbGVhc2UgY29udGFjdCB1cyBhbmQgd2Ugd2lsbCBnZXQgYmFjayBhcyBzb29uIGFzIHBvc3NpYmxlISc7XG4gICAgYmFubmVyLmFwcGVuZENoaWxkKGRlc2MpO1xuICAgIGZvcm0uYXBwZW5kKGJhbm5lcik7XG5cbiAgICAvL2FycmF5IG9mIGlucHV0IGFycmF5LCBwYXNzIHRocm91Z2ggQ3JlYXRlIGlucHV0XG4gICAgY29uc3QgaW5wdXRzID0gW1xuICAgICAgICBbJ25hbWUnLCdOYW1lOicsJ3RleHQnLCduYW1lJywnRnVsbCBOYW1lJ10sXG4gICAgICAgIFsnZW1haWwnLCdFbWFpbDonLCdlbWFpbCcsJ2VtYWlsJywnZXhhbXBsZUBnbWFpbC5jb20nXSxcbiAgICBdXG5cbiAgICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpPT57XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlSW5wdXQoaW5wdXQpKTtcblxuICAgIH0pXG4gICAgXG5cbiAgICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1RoaXMgaXMgYSB0ZXh0IGFyZWEnKTtcblxuICAgIGNvbnN0IHN1YkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1YkJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcbiAgICBzdWJCdG4uaW5uZXJUZXh0ID0gXCJTZW5kXCJcblxuICAgIGZvcm0uYXBwZW5kKHRleHRBcmVhLHN1YkJ0bilcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIC8vZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlcmluZ0NhcmRzKCkpO1xuXG5cbiAgICBcblxuICAgIHJldHVybiBmb3JtQ29udGFpbmVyXG4gICAgXG59XG5cblxuY29uc3QgbG9hZENvbnRhY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1wYWdlJywnaG9tZS1wYWdlJywnYWJvdXQtcGFnZScpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1wYWdlJyk7XG4gICAgXG4gICBcbiAgICBtYWluLmFwcGVuZChcbiAgICAgICAgY3JlYXRlQmFubmVyKCdjb250YWN0JyxcIkNvbnRhY3QgVXNcIiksXG4gICAgICAgIGNvbnRhY3RGb3JtKCksXG4gICAgICAgIGNhdGVyaW5nQ2FyZHMoKSxcbiAgICAgICAgaW5mb01lbnUoKVxuICAgIClcbiAgICBcbn07XG5cblxuXG5leHBvcnR7XG4gICAgbG9hZENvbnRhY3QsXG4gICAgaW5mb01lbnVcbn1cblxuXG5cbiIsImltcG9ydCBhcmFuY2luaSBmcm9tICcuLi9pbWFnZXMvYXJhbmNpbmkucG5nJztcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4uL2ltYWdlcy9jYXI0LnBuZydcblxuXG5jb25zdCBidWlsZEJhbm5lciA9ICgpID0+IHtcbiAgICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyLWNvbnRhaW5lcicpO1xuXG5cbiAgICBjb25zdCBiYW5uZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgYmFubmVySGVhZGVyLnRleHRDb250ZW50ID0gXCJDYW1hY2kncyBQaXp6ZXJpYVwiO1xuXG4gICAgY29uc3QgYmFubmVyUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBiYW5uZXJQYXJhLmlubmVyVGV4dCA9IFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFByYWVzZW50aXVtIGNvbnNlcXVhdHVyIHZvbHVwdGF0dW0gY29tbW9kaSBleGVyY2l0YXRpb25lbS4gUGVyc3BpY2lhdGlzIGN1cGlkaXRhdGUgcGxhY2VhdCBsYXVkYW50aXVtIGl1cmUgdGVtcG9yZSBhbGlxdWlkIG5vc3RydW0gdm9sdXB0YXRlXCI7XG4gICAgXG4gIFxuICAgIGJhbm5lci5hcHBlbmQoYmFubmVySGVhZGVyLGJhbm5lclBhcmEpO1xuICAgIFxuXG5cbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyLWJ0bi1jb250YWluZXInKTtcblxuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgICBtZW51QnRuLmlubmVyVGV4dCA9IFwiTWVudVwiXG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdiYW5uZXItbWVudScsICdiYW5uZXItYnRuJyk7XG4gICAgLy9tZW51QnRuLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lci1idG4nLCcnKTtcblxuXG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3RCdG4udHlwZSA9ICdidXR0b24nO1xuICAgIGNvbnRhY3RCdG4uaW5uZXJUZXh0ID0gJ0NvbnRhY3QnO1xuICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZCgnYmFubmVyLWNvbnRhY3QnLCdiYW5uZXItYnRuJyk7XG4gICAgLy9jb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lci1idG4nKVxuXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcblxuICAgIGJhbm5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICAgIFxuXG4gICAgXG5cblxuICAgIHJldHVybiBiYW5uZXJcbn07XG5cblxuXG5jb25zdCBsb2FkSG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke0JhY2tncm91bmR9KWBcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1wYWdlJywnYWJvdXQtcGFnZScsJ2NvbnRhY3QtcGFnZScpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnaG9tZS1wYWdlJyk7XG4gICAgLy9tYWluLmFwcGVuZENoaWxkKG1ha2VTbGlkZXIoKSk7XG4gICAgXG4gICAgbWFpbi5hcHBlbmRDaGlsZChidWlsZEJhbm5lcigpKTtcbiAgICBcbiAgICAvL21haW4uYXBwZW5kQ2hpbGQoaG9tZUltYWdlKCkpXG4gICAgLy9uZXcgU2xpZGVyKCk7XG4gICAgXG5cbn1cblxuZXhwb3J0e1xuICAgIGxvYWRIb21lLFxufSIsImltcG9ydCBwYW5lbGxlIGZyb20gJy4uL2ltYWdlcy9wYW5lbGxlLnBuZyc7XG5pbXBvcnQgYXJhbmNpbmkgZnJvbSAnLi4vaW1hZ2VzL2FyYW5jaW5pLnBuZyc7XG5pbXBvcnQgcGFuemVyb3RpIGZyb20gJy4uL2ltYWdlcy9wYW56ZXJvdHRpLnBuZyc7XG5pbXBvcnQgYmVlZiBmcm9tICcuLi9pbWFnZXMvaXRhbGlhbi1iZWVmLnBuZyc7XG5pbXBvcnQgc2ZpbmNvbmUgZnJvbSAnLi4vaW1hZ2VzL3NmaW5jaW9uZS5wbmcnO1xuaW1wb3J0IGVnZ3BsYW50IGZyb20gJy4uL2ltYWdlcy9lZ2dwbGFudC5wbmcnO1xuaW1wb3J0IG51dGVsbGEgZnJvbSAnLi4vaW1hZ2VzL251dGVsbGEucG5nJztcbmltcG9ydCBjb3JuZXR0byBmcm9tICcuLi9pbWFnZXMvY29ybmV0dG8ucG5nJztcbmltcG9ydCB7IGluZm9NZW51IH0gZnJvbSAnLi9jb250YWN0JztcblxuY29uc3QgY3JlYXRlVG9wcGluZ3MgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9wcGluZ3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b3BwaW5nc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b3BwaW5ncycpO1xuICAgIGNvbnN0IHRvcHBpbmdMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBcbiAgICBjb25zdCB0b3BwaW5ncyA9IFtcbiAgICAgICAgJ1BlcHBlcm9uaScsXG4gICAgICAgICdTYXVzYWdlJyxcbiAgICAgICAgJ1Byb3NjaXV0bycsXG4gICAgICAgICdBcnRpY2hva2UnLFxuICAgICAgICAnTXVzaHJvb20nLFxuICAgICAgICAnT25pb25zJyxcbiAgICAgICAgJ0dyZWVuIFBlcHBlcicsXG4gICAgICAgICdCbGFjayBPbGl2ZXMnLFxuICAgICAgICAnSG90IEdpYXJkZW5lcmEnLFxuICAgICAgICAnQmFzaWwnXG4gICAgXVxuICAgIFxuICAgIHRvcHBpbmdzLmZvckVhY2goKHRvcHBpbmcpPT57XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpdGVtLmlubmVyVGV4dCA9IHRvcHBpbmc7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgndG9wJyk7XG4gICAgICAgIHRvcHBpbmdMaXN0LmFwcGVuZENoaWxkKGl0ZW0pXG5cbiAgICB9KTtcblxuICAgIHRvcHBpbmdzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvcHBpbmdMaXN0KTtcblxuXG4gICAgcmV0dXJuIHRvcHBpbmdzQ29udGFpbmVyXG59O1xuXG5cbmNvbnN0IG5ld0NhcmQgPSAobmFtZSxkZXNjLHByaWNlLGl0ZW0pID0+IHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdtZW51LWNhcmQnKTtcblxuICAgIGNvbnN0IG5hbWVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVQcmljZS5jbGFzc0xpc3QuYWRkKCduYW1lLXByaWNlJyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdjYXJkLWhlYWRlcicpO1xuICAgIGhlYWRlci5pbm5lclRleHQgPSBuYW1lO1xuXG4gICAgY29uc3QgY2FyZFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNhcmRQcmljZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXByaWNlJyk7XG4gICAgY2FyZFByaWNlLmlubmVyVGV4dCA9IHByaWNlO1xuXG4gICAgXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnY2FyZC1kZXNjJyk7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZGVzYztcblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnaW1nJylcbiAgICBpbWFnZS5zcmMgPSBpdGVtO1xuXG4gICAgbmFtZVByaWNlLmFwcGVuZChoZWFkZXIsY2FyZFByaWNlKVxuXG4gICAgY2FyZC5hcHBlbmQoaW1hZ2UsbmFtZVByaWNlLGRlc2NyaXB0aW9uKTtcblxuXG4gICAgcmV0dXJuIGNhcmRcbn1cblxuY29uc3QgbWVudUNhcmRDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1jb250YWluZXInKTtcblxuICAgIGNvbnN0IG1lbnVBcnJheSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTpcIkFyYW5jaW5pXCIsXG4gICAgICAgICAgICBkZXNjOlwiQmFsbHMgb2YgcmljZSBzdHVmZmVkIHdpdGggcGVhcywgbWVhdCBzYXVjZSwgYW5kIGNoZWVzZS4gNENUIFwiLFxuICAgICAgICAgICAgcHJpY2U6IFwiJDcuOTlcIixcbiAgICAgICAgICAgIHBpY3R1cmU6IGFyYW5jaW5pXG5cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTpcIlBhbmVsbGVcIixcbiAgICAgICAgICAgIGRlc2M6XCJTaWNpbGlhbiBmcml0dGVycyBtYWRlIGZyb20gY2hpY2twZWEgZmxvdXIsIHdpdGggbGVtb24gYW5kIHBlcHBlclwiLFxuICAgICAgICAgICAgcHJpY2U6IFwiJDQuOTlcIixcbiAgICAgICAgICAgIHBpY3R1cmU6IHBhbmVsbGVcblxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOlwiUGFuemVyb3RpXCIsXG4gICAgICAgICAgICBkZXNjOlwiRGVlcCBmcmllZCBkb3VnaCBwb2NrZXQgZmlsbGVkIHdpdGggZnJlc2ggdG9tYXRvIHNhdWNlLCBjaGVlc2UsIGFuZCBiYXNpbFwiLFxuICAgICAgICAgICAgcHJpY2U6IFwiJDMuOTlcIixcbiAgICAgICAgICAgIHBpY3R1cmU6IHBhbnplcm90aVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOlwiSXRhbGlhbiBCZWVmXCIsXG4gICAgICAgICAgICBkZXNjOlwiQ2xhc3NpYyBDaGljYWdvIGJlZWYgd2l0aCB5b3VyIGNob2ljZSBvZiBwZXBwZXJzXCIsXG4gICAgICAgICAgICBwcmljZTogXCIkNy45OVwiLFxuICAgICAgICAgICAgcGljdHVyZTogYmVlZlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOlwiU2ZpbmNpb25lXCIsXG4gICAgICAgICAgICBkZXNjOlwiU2ljaWxpYW4gc3R5bGUgdGhpY2sgY3V0IHBpenphLCBieSB0aGUgc2xpY2VcIixcbiAgICAgICAgICAgIHByaWNlOiBcIiQyLjk5XCIsXG4gICAgICAgICAgICBwaWN0dXJlOiBzZmluY29uZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOlwiRWdncGxhbnQgUGFybWVzZWFuXCIsXG4gICAgICAgICAgICBkZXNjOlwiRWdncGxhbnQgUGFybWVzZWFuIFNhbmR3aGljaFwiLFxuICAgICAgICAgICAgcHJpY2U6IFwiJDUuOTlcIixcbiAgICAgICAgICAgIHBpY3R1cmU6IGVnZ3BsYW50XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6XCJOdXRlbGxhIENyZXBlc1wiLFxuICAgICAgICAgICAgZGVzYzpcIk51dGVsbGEgQ3JlcGVzIHdpdGggc3RyYXdiZXJyaWVzXCIsXG4gICAgICAgICAgICBwcmljZTogXCIkNy45OVwiLFxuICAgICAgICAgICAgcGljdHVyZTogbnV0ZWxsYVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOlwiQ29ybmV0dGlcIixcbiAgICAgICAgICAgIGRlc2M6XCJGcmVzaCBDb3JuZXR0aSAobnV0ZWxsYSwgcGVhY2gsIGNyZWFtKSBhbmQgYSBFc3ByZXNzb1wiLFxuICAgICAgICAgICAgcHJpY2U6IFwiJDkuOTlcIixcbiAgICAgICAgICAgIHBpY3R1cmU6IGNvcm5ldHRvXG4gICAgICAgIH0sXG5cbiAgICBdXG5cblxuICAgIG1lbnVBcnJheS5mb3JFYWNoKChpdGVtKT0+e1xuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NhcmQoaXRlbS5uYW1lLGl0ZW0uZGVzYyxpdGVtLnByaWNlLGl0ZW0ucGljdHVyZSkpXG4gICAgfSlcbiAgICBcblxuICAgIHJldHVybiBtZW51Q29udGFpbmVyO1xuXG59O1xuXG5jb25zdCBjcmVhdGVTcGVjaWFsID0gKCkgPT4ge1xuICAgIGNvbnN0IHNwZWNpYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzcGVjaWFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NwZWNpYWwtY29udGFpbmVyJylcbiAgICBjb25zdCBzcGVjaWFscyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1RoZSBHaXVzZXBwZScsXG4gICAgICAgICAgICBkZXNjOiAnUGVwcGVyb25pLCBTYXVzYWdlLCBSZWQgUGVwcGVyLCBSb2FzdGVkIEdhcmxpYywgUGVzdG8nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdUaGUgR2l1c2VwcGUnLFxuICAgICAgICAgICAgZGVzYzogJ1BlcHBlcm9uaSwgU2F1c2FnZSwgUmVkIFBlcHBlciwgUm9hc3RlZCBHYXJsaWMnXG5cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1ZlZ2V0YXJpYW4nLFxuICAgICAgICAgICAgZGVzYzogJ1JpY290dGEgYW5kIFNwaW5hY2gnXG5cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ01hcmFnaXRhJyxcbiAgICAgICAgICAgIGRlc2M6ICdDbGFzc2ljIHN3ZWV0IHRvbWF0byBzYXVjZSB3aXRoIGZyZXNoIE1venphcmVsbGEgQ2hlZXNlIGFuZCBCYXNpbCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0ZhY2NpYSBkaSBWZWNoaWEnLFxuICAgICAgICAgICAgZGVzYzogJ0JyZWFkIHdpdGggYSBjb2F0aW5nIG9mIE9saXZlIE9pbCwgU2FsdCwgUGVwcGVyLCBPcmVnZW5vIGFuZCBDcnVzaGVkIHJlZCBwZXBwZXInXG5cbiAgICAgICAgfVxuICAgIF1cblxuICAgIHNwZWNpYWxzLmZvckVhY2goKHNwZWNpYWwpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGxpc3QuY2xhc3NMaXN0LmFkZCgnZmxleC1saXN0JylcbiAgICAgICAgY29uc3QgbGlzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaXN0TmFtZS5pbm5lclRleHQgPSBzcGVjaWFsLm5hbWU7XG4gICAgICAgIGNvbnN0IGxpc3REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGlzdERlc2MuaW5uZXJUZXh0ID0gc3BlY2lhbC5kZXNjO1xuXG4gICAgICAgIGxpc3QuYXBwZW5kKGxpc3ROYW1lLGxpc3REZXNjKTtcbiAgICAgICAgc3BlY2lhbENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KTtcblxuXG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3BlY2lhbENvbnRhaW5lcjtcbn07XG5cbmNsYXNzIE1lbnV7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy90aGlzLmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgfTtcblxuICAgIHBpenphTWVudSgpe1xuXG4gICAgICAgIHRoaXMucGFnZS5jbGFzc0xpc3QuYWRkKCdwaXp6YS1NZW51JylcbiAgICAgICAgLy90aGlzLmhlYWRlci5pbm5lclRleHQgPSBcIlBpenphXCI7XG4gICAgICAgIC8vdGhpcy5oZWFkZXIuc3R5bGUuZm9udFNpemUgPSAnNHJlbSdcbiAgICAgICAgXG5cbiAgICAgICAgY29uc3QgYnVpbGRZb3VyT3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1aWxkWW91ck93bi5jbGFzc0xpc3QuYWRkKCdidWlsZC15b3VyLW93bicpO1xuICAgICAgICAvL2J1aWxkIHlvdXIgb3duIG1hcmt1cFxuICAgICAgICBjb25zdCBvd25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIG93blRpdGxlLmlubmVyVGV4dCA9ICdCdWlsZCB5b3VyIG93bic7XG5cbiAgICAgICAgY29uc3QgYnVpbGREaXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGJ1aWxkRGlzYy5jbGFzc0xpc3QuYWRkKCdidWlsZC1kaXNjJyk7XG4gICAgICAgIGJ1aWxkRGlzYy5pbm5lclRleHQgPSAnQ2hvb3NlIDMgb2YgYW55IHRvcHBpbmdzLCBhZGl0dGlvbmFsIHRvcHBpbmdzICQxLjUwJztcbiAgICAgICAgXG4gICAgICAgIGJ1aWxkWW91ck93bi5hcHBlbmRDaGlsZChvd25UaXRsZSk7XG4gICAgICAgIGJ1aWxkWW91ck93bi5hcHBlbmRDaGlsZChidWlsZERpc2MpO1xuICAgICAgICBidWlsZFlvdXJPd24uYXBwZW5kQ2hpbGQoY3JlYXRlVG9wcGluZ3MoKSk7XG5cblxuICAgICAgICBjb25zdCBzcGVjaWFscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzcGVjaWFscy5jbGFzc0xpc3QuYWRkKCdzcGVjaWFscycpO1xuXG4gICAgICAgIGNvbnN0IHNwZWNpYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHNwZWNpYWxUaXRsZS5pbm5lclRleHQgPSAnU3BlY2lhbHMnO1xuICAgICAgICBcblxuICAgICAgICBcblxuXG4gICAgICAgXG5cblxuICAgICAgICBcblxuXG5cblxuICAgICAgICBzcGVjaWFscy5hcHBlbmRDaGlsZChzcGVjaWFsVGl0bGUpO1xuICAgICAgICBzcGVjaWFscy5hcHBlbmRDaGlsZChjcmVhdGVTcGVjaWFsKCkpXG5cbiAgICAgICAgLypcbiAgICAgICAgdGhpcy5wYWdlLmFwcGVuZENoaWxkKHRoaXMuaGVhZGVyKTtcbiAgICAgICAgdGhpcy5wYWdlLmFwcGVuZENoaWxkKHBpenphSW1nMSk7XG4gICAgICAgIHRoaXMucGFnZS5hcHBlbmRDaGlsZChidWlsZFlvdXJPd24pO1xuICAgICAgICB0aGlzLnBhZ2UuYXBwZW5kQ2hpbGQoc3BlY2lhbHMpOyAqL1xuXG4gICAgICAgIHRoaXMucGFnZS5hcHBlbmQoYnVpbGRZb3VyT3duLHNwZWNpYWxzKVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZVxuICAgIH1cblxufTtcblxuXG5jb25zdCBjcmVhdGVCYW5uZXIgPSAobmFtZSxjYXB0aW9uKSA9PiB7XG4gICAgY29uc3QgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoYCR7bmFtZX0tYmFubmVyYCk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gYCR7Y2FwdGlvbn1gO1xuXG4gICAgYmFubmVyLmFwcGVuZCh0aXRsZSlcblxuICAgIHJldHVybiBiYW5uZXJcblxufTtcbmNvbnN0IGxvYWRNZW51ID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSc7XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ2hvbWUtcGFnZScsJ2Fib3V0LXBhZ2UnLCdjb250YWN0LXBhZ2UnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21lbnUtcGFnZScpO1xuXG4gICAgY29uc3QgcGl6emEgPSBuZXcgTWVudSgpO1xuICAgIGNvbnN0IGFwcGV0aXplcnMgPSBuZXcgTWVudSgpO1xuICAgIG1haW4uYXBwZW5kKGNyZWF0ZUJhbm5lcignbWVudScsJ01lbnUnKSxwaXp6YS5waXp6YU1lbnUoKSxtZW51Q2FyZENvbnRhaW5lcigpLGluZm9NZW51KCkpXG4gICAgXG5cblxuIH07XG4gZXhwb3J0e1xuICAgIGxvYWRNZW51LFxuICAgIGNyZWF0ZUJhbm5lcixcbiAgICBuZXdDYXJkXG5cbiB9IiwiaW1wb3J0IHtsb2FkSG9tZX0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHtsb2FkTWVudX0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0e2xvYWRBYm91dH0gZnJvbSAnLi9hYm91dCdcbmltcG9ydHtsb2FkQ29udGFjdH0gZnJvbSAnLi9jb250YWN0J1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZ2V0VGl0bGUoKSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpXG4gICAgcmV0dXJuIGhlYWRlclxuXG59O1xuZnVuY3Rpb24gZ2V0VGl0bGUgKCl7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkNhbWFjaSdzIFBpenplcmlhXCI7XG4gICAgcmV0dXJuIHRpdGxlXG59XG5mdW5jdGlvbiBjcmVhdGVOYXYoKXtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuXG4gICAgbGV0IGJ0bkFycmF5ID0gW107XG4gICAgXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgIGhvbWUudHlwZSA9ICdidXR0b24nO1xuICAgIGhvbWUuaW5uZXJUZXh0ID0gJ0hvbWUnO1xuICAgIGhvbWUubmFtZSA9ICdob21lJ1xuICAgIGJ0bkFycmF5LnB1c2goaG9tZSk7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgbWVudS50eXBlID0gJ2J1dHRvbic7XG4gICAgbWVudS5uYW1lID0gJ21lbnUnO1xuICAgIG1lbnUuaW5uZXJUZXh0ID0gJ01lbnUnO1xuICAgIGJ0bkFycmF5LnB1c2gobWVudSk7XG4gICAgXG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgYWJvdXQudHlwZSA9ICdidXR0b24nO1xuICAgIGFib3V0Lm5hbWUgPSAnYWJvdXQnO1xuICAgIGFib3V0LmlubmVyVGV4dCA9ICdBYm91dCc7XG4gICAgYnRuQXJyYXkucHVzaChhYm91dCk7XG5cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgY29udGFjdC50eXBlID0gJ2J1dHRvbic7XG4gICAgY29udGFjdC5uYW1lID0gJ2NvbnRhY3QnO1xuICAgIGNvbnRhY3QuaW5uZXJUZXh0ID0gJ0NvbnRhY3QnO1xuICAgIGJ0bkFycmF5LnB1c2goY29udGFjdCk7XG5cbiAgICBidG5BcnJheS5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgICAgYnRuLmRhdGFzZXQucGFnZSA9IGJ0bi5uYW1lO1xuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICBtYWluRmluZGVyKGJ0bi5kYXRhc2V0LnBhZ2UpXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5hdjtcbn1cblxuXG5cblxuXG5cbmZ1bmN0aW9uIG1haW5GaW5kZXIoZGF0YSl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgaWYoZGF0YSA9PT0gJ2hvbWUnKXtcbiAgICAgICAgbG9hZEhvbWUoKVxuICAgICAgICBcbiAgICB9XG4gICAgZWxzZSBpZihkYXRhID09PSAnbWVudScpe1xuICAgICAgICBsb2FkTWVudSgpO1xuICAgIH1cbiAgICBlbHNlIGlmKGRhdGEgPT09ICdhYm91dCcpe1xuICAgICAgICBsb2FkQWJvdXQoKTtcbiAgICB9XG4gICAgZWxzZSBpZihkYXRhID09J2NvbnRhY3QnKXtcbiAgICAgICAgbG9hZENvbnRhY3QoKVxuICAgIH1cblxufVxuY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgbG9hZEhvbWUoKTtcblxufTtcbmV4cG9ydHtcbiAgICByZW5kZXIsXG4gICAgbWFpbkZpbmRlclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZyc7XG5cbmltcG9ydCB7cmVuZGVyfSBmcm9tICcuL21vZHVsZXMvcmVuZGVyJztcblxucmVuZGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=