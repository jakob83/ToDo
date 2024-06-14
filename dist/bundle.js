/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    position: relative;
    font-size: 16px;
    --dark-blue: #3B28CC;
    --semi-dark-blue: #2667FF;
    --neutral-blue: #3F8EFC;
    --semi-light-blue: #87BFFF;
    --light-blue: #e6f5ff;
    --bright-text: aliceblue;

}

button {
    border: none;
    padding: 0;
}

.content {
    display: grid;
    grid-template-columns: 1fr 4fr;
    min-height: 100vh;
}

body {
    padding: 0;
    margin: 0;
}



.main {
    background-color: var(--light-blue);
    padding-left: 5%;
    position: relative;
    grid-column: 2/-1;
}

nav {
    grid-column: 1/2;
    display: flex;
    gap: 10px;
    flex-direction: column;
    padding: 0 20px;
    border-right: 1px solid gray;
    background-color: var(--semi-light-blue);
    position: relative;
}


.date-sorted {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.date-sorted button {
    height: 40px;
    background-color: var(--semi-dark-blue);
    font-size: 1rem;
    color: var(--bright-text);
    transition: all 0.20s;
    border-radius: 5px;
    border: 2px solid var(--light-blue);
}


.project-card:hover button {
    background-color: var(--semi-dark-blue);
}

.date-sorted button:hover {
    background-color: var(--dark-blue);
}

.projects {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.project-card {
    display: flex;
    flex-basis: 40px;
    border-radius: 5px;
    box-shadow: 3px 3px 10px;
    border: 2px solid var(--light-blue);

}


.add-project.visible {
    display: block;
    border-radius: 5px;
    background-color: var(--light-blue);
    box-shadow: 3px 3px 10px;
    transition: 0.20s;
}

.add-project:hover {
    box-shadow: 6px 6px 10px;
}

.add-project {
    display: none;
}

.add-project-form {
    display: none;
}

.add-project-form.visible {
    display: flex;
}


.project-card button {
    background-color: var(--dark-blue);
    color: var(--bright-text);
    font-size: 1rem;
}

.project-btn {
    flex: 7;
    transition: all 0.20s;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

.delete-project {
    flex: 1;
    transition: all 0.20s;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}

.add-project-form input,
.add-project button {
    flex: 1;
}

.add-project-form input {
    appearance: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid var(--dark-blue);
    font-size: 1rem;
    outline: none;
}

.add-project-form svg path {
    transition: 0.15s;
}

.add-project-form .add:hover>svg path {
    fill: greenyellow;
}


.add-project-form .cancel:hover>svg path {
    stroke: red;
}

.add-project-form button {
    background-color: transparent;
}

.project-info {
    display: flex;
    flex-direction: column;
    margin-bottom: 10vh;
}

.add-task-btn {
    position: relative;
    display: inline-block;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    background-color: var(--semi-dark-blue);
    color: var(--bright-text);
    font-size: 1rem;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 3px 3px 10px black;
    transition: all ease 0.3s;
}

.add-task-btn:hover {
    background-color: var(--dark-blue);
    box-shadow: inset 3px 3px 10px black;
}

.popup-form {
    max-width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    visibility: hidden;
}

.popup-form.visible {
    visibility: visible;
}

.popup-form fieldset {
    padding: 30px 30px;
    display: flex;
    flex-direction: column;
    align-items: stretch;

}

.popup-form form {}

.popup-form input,
.popup-form textarea,
.popup-form select {
    padding: 5px 10px;
    width: 100%;
}

li {
    list-style-type: none;
    padding: 20px;
    position: relative;
    display: flex;
    align-items: stretch;
}

li label {
    position: absolute;
    top: -7px;
}

.tasks {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.task-card {
    display: flex;
    gap: 50px;
    padding-right: 5%;
    margin-right: 10%;
    box-shadow: 3px 3px 10px var(--dark-blue);
    border-radius: 10px;
}

.task-name {
    flex: 1;
}

.delete-task {
    background-color: rgba(0, 0, 0, 0);
    border: none;
}

.task-card.done {
    background-color: #d7d7d7;
    text-decoration: line-through;
}

.show-menu {
    position: absolute;
    background-color: transparent;
    left: calc(-5% - 5px);
    top: 0;
    z-index: 100;
}

@media screen and (max-width: 900px) {
    .content {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 4fr;
        min-height: 100vh;
    }

    nav {
        grid-column: 1/2;
        padding-bottom: 10vh;
    }

    .main {
        grid-column: 1/2;
        box-shadow: inset 0px 20px 20px black;
    }

    .task-card {
        gap: 20px;
    }
}`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    position: relative;\n    font-size: 16px;\n    --dark-blue: #3B28CC;\n    --semi-dark-blue: #2667FF;\n    --neutral-blue: #3F8EFC;\n    --semi-light-blue: #87BFFF;\n    --light-blue: #e6f5ff;\n    --bright-text: aliceblue;\n\n}\n\nbutton {\n    border: none;\n    padding: 0;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    min-height: 100vh;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n}\n\n\n\n.main {\n    background-color: var(--light-blue);\n    padding-left: 5%;\n    position: relative;\n    grid-column: 2/-1;\n}\n\nnav {\n    grid-column: 1/2;\n    display: flex;\n    gap: 10px;\n    flex-direction: column;\n    padding: 0 20px;\n    border-right: 1px solid gray;\n    background-color: var(--semi-light-blue);\n    position: relative;\n}\n\n\n.date-sorted {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.date-sorted button {\n    height: 40px;\n    background-color: var(--semi-dark-blue);\n    font-size: 1rem;\n    color: var(--bright-text);\n    transition: all 0.20s;\n    border-radius: 5px;\n    border: 2px solid var(--light-blue);\n}\n\n\n.project-card:hover button {\n    background-color: var(--semi-dark-blue);\n}\n\n.date-sorted button:hover {\n    background-color: var(--dark-blue);\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.project-card {\n    display: flex;\n    flex-basis: 40px;\n    border-radius: 5px;\n    box-shadow: 3px 3px 10px;\n    border: 2px solid var(--light-blue);\n\n}\n\n\n.add-project.visible {\n    display: block;\n    border-radius: 5px;\n    background-color: var(--light-blue);\n    box-shadow: 3px 3px 10px;\n    transition: 0.20s;\n}\n\n.add-project:hover {\n    box-shadow: 6px 6px 10px;\n}\n\n.add-project {\n    display: none;\n}\n\n.add-project-form {\n    display: none;\n}\n\n.add-project-form.visible {\n    display: flex;\n}\n\n\n.project-card button {\n    background-color: var(--dark-blue);\n    color: var(--bright-text);\n    font-size: 1rem;\n}\n\n.project-btn {\n    flex: 7;\n    transition: all 0.20s;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n}\n\n.delete-project {\n    flex: 1;\n    transition: all 0.20s;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.add-project-form input,\n.add-project button {\n    flex: 1;\n}\n\n.add-project-form input {\n    appearance: none;\n    border: none;\n    background-color: transparent;\n    border-bottom: 2px solid var(--dark-blue);\n    font-size: 1rem;\n    outline: none;\n}\n\n.add-project-form svg path {\n    transition: 0.15s;\n}\n\n.add-project-form .add:hover>svg path {\n    fill: greenyellow;\n}\n\n\n.add-project-form .cancel:hover>svg path {\n    stroke: red;\n}\n\n.add-project-form button {\n    background-color: transparent;\n}\n\n.project-info {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 10vh;\n}\n\n.add-task-btn {\n    position: relative;\n    display: inline-block;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 10px;\n    background-color: var(--semi-dark-blue);\n    color: var(--bright-text);\n    font-size: 1rem;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n    box-shadow: 3px 3px 10px black;\n    transition: all ease 0.3s;\n}\n\n.add-task-btn:hover {\n    background-color: var(--dark-blue);\n    box-shadow: inset 3px 3px 10px black;\n}\n\n.popup-form {\n    max-width: 500px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    visibility: hidden;\n}\n\n.popup-form.visible {\n    visibility: visible;\n}\n\n.popup-form fieldset {\n    padding: 30px 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n\n}\n\n.popup-form form {}\n\n.popup-form input,\n.popup-form textarea,\n.popup-form select {\n    padding: 5px 10px;\n    width: 100%;\n}\n\nli {\n    list-style-type: none;\n    padding: 20px;\n    position: relative;\n    display: flex;\n    align-items: stretch;\n}\n\nli label {\n    position: absolute;\n    top: -7px;\n}\n\n.tasks {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.task-card {\n    display: flex;\n    gap: 50px;\n    padding-right: 5%;\n    margin-right: 10%;\n    box-shadow: 3px 3px 10px var(--dark-blue);\n    border-radius: 10px;\n}\n\n.task-name {\n    flex: 1;\n}\n\n.delete-task {\n    background-color: rgba(0, 0, 0, 0);\n    border: none;\n}\n\n.task-card.done {\n    background-color: #d7d7d7;\n    text-decoration: line-through;\n}\n\n.show-menu {\n    position: absolute;\n    background-color: transparent;\n    left: calc(-5% - 5px);\n    top: 0;\n    z-index: 100;\n}\n\n@media screen and (max-width: 900px) {\n    .content {\n        grid-template-columns: 1fr;\n        grid-template-rows: 1fr 4fr;\n        min-height: 100vh;\n    }\n\n    nav {\n        grid-column: 1/2;\n        padding-bottom: 10vh;\n    }\n\n    .main {\n        grid-column: 1/2;\n        box-shadow: inset 0px 20px 20px black;\n    }\n\n    .task-card {\n        gap: 20px;\n    }\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/modules/applyDoneStyles.js":
/*!****************************************!*\
  !*** ./src/modules/applyDoneStyles.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyDoneStyles: () => (/* binding */ applyDoneStyles)
/* harmony export */ });
function applyDoneStyles(parent, tasks) {
    const nodeChilds = [...parent.children];
    for (let i = 0; i < nodeChilds.length; i++) {
        const task = tasks[i];
        const node = nodeChilds[i];
        console.log({ task, node, parent })
        if (task.done) {
            makeDone(node);
        }
        else {
            makeUndone(node);
        }
    }
}

function makeDone(element) {
    element.classList = 'task-card done';
    let input = element.querySelector('input');
    input.checked = true;
}
function makeUndone(element) {
    element.classList = 'task-card';

}



/***/ }),

/***/ "./src/modules/build-project-ui.js":
/*!*****************************************!*\
  !*** ./src/modules/build-project-ui.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildProjectUI: () => (/* binding */ buildProjectUI)
/* harmony export */ });
/* harmony import */ var _user_interface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-interface.js */ "./src/modules/user-interface.js");

function buildProjectUI(project, mod = { header: true, btn: true }) {
    const projectInfo = document.querySelector('.project-info');
    const header = document.createElement('h1');
    header.innerText = project.name;
    if (mod.header) projectInfo.appendChild(header);
    const addTaskBtn = document.createElement('button');
    addTaskBtn.classList.add('add-task-btn');
    addTaskBtn.innerHTML = `<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="aliceblue" stroke-width="2.4" stroke-linecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="aliceblue" stroke-width="2.4" stroke-linecap="round"></path> </g></svg>`
    addTaskBtn.innerHTML += 'add task';
    if (mod.btn) projectInfo.appendChild(addTaskBtn);
    const form = document.querySelector('.popup-form');
    addTaskBtn.addEventListener('click', () => {
        (0,_user_interface_js__WEBPACK_IMPORTED_MODULE_0__.toggleVisible)(form);
    });
    //logic for adding project tasks:
}



/***/ }),

/***/ "./src/modules/build-task-ui.js":
/*!**************************************!*\
  !*** ./src/modules/build-task-ui.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildTasksUI: () => (/* binding */ buildTasksUI)
/* harmony export */ });
/* harmony import */ var _applyDoneStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyDoneStyles */ "./src/modules/applyDoneStyles.js");


function buildTasksUI(parent, tasks) {
    tasks.forEach(task => {
        const taskCard = document.createElement('div');
        taskCard.classList.add('task-card');
        const taskNameTxt = document.createElement('h3');
        taskNameTxt.classList.add('task-name');
        taskNameTxt.innerText = task.name;
        const dueDate = document.createElement('p');
        dueDate.innerText = 'due date: ' + task.dueDate;
        const priority = document.createElement('p');
        priority.innerText = task.priority;
        const done = document.createElement('input');
        done.type = 'checkbox';
        done.classList.add('doneCheckbox');
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-task');
        deleteBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                            viewBox="0 0 30 30">
                            <path
                                d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z">
                            </path>
        </svg>
        `

        taskCard.appendChild(taskNameTxt);
        taskCard.appendChild(dueDate);
        taskCard.appendChild(priority);
        taskCard.appendChild(done);
        taskCard.appendChild(deleteBtn);
        parent.appendChild(taskCard);
        //Durchstreichen Wenn done == true
        (0,_applyDoneStyles__WEBPACK_IMPORTED_MODULE_0__.applyDoneStyles)(parent, tasks);
    });
}



/***/ }),

/***/ "./src/modules/date-sorting.js":
/*!*************************************!*\
  !*** ./src/modules/date-sorting.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllTasks: () => (/* binding */ getAllTasks),
/* harmony export */   getTodayTasks: () => (/* binding */ getTodayTasks),
/* harmony export */   getWeekTasks: () => (/* binding */ getWeekTasks)
/* harmony export */ });
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-manager */ "./src/modules/project-manager.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isThisWeek.mjs");




function getAllTasks() {
    return (0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.getProjects)().map(p => p.getTasks()).flat();
}

function getTodayTasks() {
    let allTasks = getAllTasks();
    return allTasks.filter(task => (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.isToday)(task.dueDate));
}
function getWeekTasks() {
    let allTasks = getAllTasks();
    return allTasks.filter(task => (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isThisWeek)(task.dueDate, 1));
}



/***/ }),

/***/ "./src/modules/project-manager.js":
/*!****************************************!*\
  !*** ./src/modules/project-manager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   addTaskToActive: () => (/* binding */ addTaskToActive),
/* harmony export */   deleteTaskFromActive: () => (/* binding */ deleteTaskFromActive),
/* harmony export */   getActiveIndex: () => (/* binding */ getActiveIndex),
/* harmony export */   getProjects: () => (/* binding */ getProjects),
/* harmony export */   makeActive: () => (/* binding */ makeActive),
/* harmony export */   toggleDoneTaskFromActive: () => (/* binding */ toggleDoneTaskFromActive),
/* harmony export */   updateProjects: () => (/* binding */ updateProjects)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");

const projects = [];

class Project {
    #tasks;
    #active;
    constructor(name, tasks, active) {
        this.name = name;
        this.#tasks = tasks || [];
        this.#active = active || false;
    }


    toggleDoneTask(i) {
        this.#tasks[i].toggleDone();
    }
    addTask = (task) => this.#tasks.push(task);
    getTasks = () => this.#tasks;
    deleteTask = (i) => this.#tasks.splice(i, 1);
    makeActive = () => this.#active = true;
    makeInactive = () => this.#active = false;
    getActive = () => this.#active;
    static addProject = function (project) {
        projects.push(project);
    }
    static deleteProject = (i) => projects.splice(i, 1);

    toJSON() {
        return {
            name: this.name,
            tasks: this.#tasks,
            active: this.#active,
        }
    };
    static fromJSON(obj) {
        let tasks = obj.tasks;
        if (tasks) {
            tasks = tasks.map(task => {
                return _task__WEBPACK_IMPORTED_MODULE_0__.Task.fromJSON(task);
            });
        }
        return new Project(obj.name, tasks, obj.active)
    }

}

const getProjects = () => projects;


function makeActive(index) {
    for (let i = 0; i < projects.length; i++) {
        const element = projects[i];
        element.makeInactive();
    }
    if (index < 0) {
        return;
    }
    projects[index].makeActive();
}

function addTaskToActive(task) {
    let index = getActiveIndex();
    projects[index].addTask(task);
}
function deleteTaskFromActive(i) {
    let pIndex = getActiveIndex();
    projects[pIndex].deleteTask(i);
}


function getActiveIndex() {
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].getActive()) return i;
    }
}
function toggleDoneTaskFromActive(i) {
    let project = projects[getActiveIndex()];
    project.toggleDoneTask(i);
}

function updateProjects(updated) {
    for (let i = 0; i < updated.length; i++) {
        projects[i] = updated[i];
    }
}











/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(name, dueDate, comment, priority, done) {
        this.name = name || "Name";
        this.dueDate = dueDate || "31.12.2024";
        this.comment = comment || "No comment...";
        this.priority = priority || "low";
        this.done = done || false;
    }
    toggleDone = () => this.done = !this.done;

    static fromJSON(obj) {
        return new Task(...Object.values(obj));
    }
}



/***/ }),

/***/ "./src/modules/user-interface.js":
/*!***************************************!*\
  !*** ./src/modules/user-interface.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventListeners: () => (/* binding */ addEventListeners),
/* harmony export */   buildProjects: () => (/* binding */ buildProjects),
/* harmony export */   toggleVisible: () => (/* binding */ toggleVisible)
/* harmony export */ });
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-manager */ "./src/modules/project-manager.js");
/* harmony import */ var _build_project_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build-project-ui */ "./src/modules/build-project-ui.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _build_task_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./build-task-ui */ "./src/modules/build-task-ui.js");
/* harmony import */ var _date_sorting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date-sorting */ "./src/modules/date-sorting.js");
/* harmony import */ var _applyDoneStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./applyDoneStyles */ "./src/modules/applyDoneStyles.js");













const addProjectBtn = document.querySelector('#addProject');
const addProjectForm = document.querySelector('#addProjectForm');
//Final add Button (the one oon the form)
const addProjectFinBtn = document.querySelector('#addProjectFinBtn');
const projectInput = document.querySelector('#projectInput');
//Container of all the project buttons
const projectContainer = document.querySelector('#projectContainer');
///Button to add the task finally (the one in the form)
const addTaskBtn = document.querySelector('#addTaskBtn');


function deleteChildNodes(parent) {
    Array.from(parent.childNodes).forEach((node) => {
        node.remove();
    });
}

//adds the project to the projects array in the project manager module:
function addProject(name) {
    let project = new _project_manager__WEBPACK_IMPORTED_MODULE_0__.Project(name)
    _project_manager__WEBPACK_IMPORTED_MODULE_0__.Project.addProject(project);
}

//So also the new added ones are being displayed:
function buildProjects() {
    //Where all the projects are displayed
    const projectContainer = document.querySelector('#projectContainer');

    //first delete all:
    deleteChildNodes(projectContainer);

    //add all the existing projects
    let projects = (0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.getProjects)();
    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card')
        const btn = document.createElement('button');
        btn.classList.add('project-btn');
        btn.innerText = project.name;
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-project');
        deleteBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                            viewBox="0 0 30 30">
                            <path
                                d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z">
                            </path>
        </svg>
        `
        card.appendChild(btn);
        card.appendChild(deleteBtn);
        projectContainer.appendChild(card);
    })
}


function getIndexOfChild(child, parent) {
    //closest selects the closest element to .project-bt
    const index = [...parent.children].indexOf(child);
    return index;
}

function toggleVisible(element) {
    element.classList.toggle('visible');
}



//to add all the event listeners for the page:
function addEventListeners() {
    addProjectBtn.addEventListener('click', () => {
        //.visible class will be removed
        toggleVisible(addProjectBtn);
        //.visible class will be added
        toggleVisible(addProjectForm);
    });
    addProjectFinBtn.addEventListener('click', () => {
        let input = projectInput.value;
        addProject(input);
        buildProjects();
        //.visible class will be removed
        toggleVisible(addProjectBtn);
        //.visible class will be added
        toggleVisible(addProjectForm);
    });
    const taskContainer = document.querySelector('#taskContainer');
    const projectInfo = document.querySelector('.project-info');
    projectContainer.addEventListener('click', (e) => {
        const index = getIndexOfChild(e.target.parentElement, projectContainer)
        if (e.target.closest('.delete-project')) {
            _project_manager__WEBPACK_IMPORTED_MODULE_0__.Project.deleteProject(index);
            buildProjects();
            return;
        }
        deleteChildNodes(projectInfo);
        //handling a click on the project button
        (0,_build_project_ui__WEBPACK_IMPORTED_MODULE_1__.buildProjectUI)((0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.getProjects)()[index]);
        //making the clicked prjct the active one
        (0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.makeActive)(index);
        deleteChildNodes(taskContainer);
        (0,_build_task_ui__WEBPACK_IMPORTED_MODULE_3__.buildTasksUI)(taskContainer, (0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.getProjects)()[(0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.getActiveIndex)()].getTasks());
    })

    addTaskBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const name = document.querySelector('#nameInput').value;
        const dueDate = document.querySelector('#dueDate').value;
        const comment = document.querySelector('#comment').value;
        const priority = document.querySelector('#priority').value;

        (0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.addTaskToActive)(new _task__WEBPACK_IMPORTED_MODULE_2__.Task(name, dueDate, comment, priority))
        const form = document.querySelector('.popup-form');
        toggleVisible(form);
        deleteChildNodes(taskContainer);
        (0,_build_task_ui__WEBPACK_IMPORTED_MODULE_3__.buildTasksUI)(taskContainer, (0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.getProjects)()[(0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.getActiveIndex)()].getTasks());
    })
    taskContainer.addEventListener('click', (e) => {
        const clickedTaskCard = e.target.closest('.task-card');
        const index = getIndexOfChild(clickedTaskCard, clickedTaskCard.parentElement);
        if (e.target.closest('.delete-task')) {
            //handle the deleting of task
            (0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.deleteTaskFromActive)(index);
            deleteChildNodes(taskContainer);
            (0,_build_task_ui__WEBPACK_IMPORTED_MODULE_3__.buildTasksUI)(taskContainer, (0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.getProjects)()[(0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.getActiveIndex)()].getTasks());
            return;
        }
        else if (e.target.closest('.doneCheckbox')) {
            //logic for marking as done
            (0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.toggleDoneTaskFromActive)(index);
            (0,_applyDoneStyles__WEBPACK_IMPORTED_MODULE_5__.applyDoneStyles)(taskContainer, (0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.getProjects)()[(0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.getActiveIndex)()].getTasks());
            return;
        };
        //logic for task overview
    })
    const todayTasksBtn = document.querySelector('#todayTasksBtn');
    todayTasksBtn.addEventListener('click', () => {
        (0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.makeActive)(-1);

        deleteChildNodes(projectInfo);
        (0,_build_project_ui__WEBPACK_IMPORTED_MODULE_1__.buildProjectUI)({ name: 'Todays Tasks' }, { header: true, btn: false });
        deleteChildNodes(taskContainer);
        (0,_build_task_ui__WEBPACK_IMPORTED_MODULE_3__.buildTasksUI)(taskContainer, (0,_date_sorting__WEBPACK_IMPORTED_MODULE_4__.getTodayTasks)());
    })
    const weekTaskBtn = document.querySelector('#weekTaskBtn');
    weekTaskBtn.addEventListener('click', () => {
        (0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.makeActive)(-1);
        deleteChildNodes(projectInfo);
        (0,_build_project_ui__WEBPACK_IMPORTED_MODULE_1__.buildProjectUI)({ name: 'This Week\'s Tasks' }, { header: true, btn: false })
        deleteChildNodes(taskContainer);
        (0,_build_task_ui__WEBPACK_IMPORTED_MODULE_3__.buildTasksUI)(taskContainer, (0,_date_sorting__WEBPACK_IMPORTED_MODULE_4__.getWeekTasks)());
    })
    const allTaskBtn = document.querySelector('#allTaskBtn')
    allTaskBtn.addEventListener('click', () => {
        ;(0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.makeActive)(-1);
        deleteChildNodes(projectInfo);
        (0,_build_project_ui__WEBPACK_IMPORTED_MODULE_1__.buildProjectUI)({ name: 'All Tasks' }, { header: true, btn: false })
        deleteChildNodes(taskContainer);
        (0,_build_task_ui__WEBPACK_IMPORTED_MODULE_3__.buildTasksUI)(taskContainer, (0,_date_sorting__WEBPACK_IMPORTED_MODULE_4__.getAllTasks)());
    })

}





/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/constructNow.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/constructNow.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructNow: () => (/* binding */ constructNow),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");


/**
 * @name constructNow
 * @category Generic Helpers
 * @summary Constructs a new current date using the passed value constructor.
 * @pure false
 *
 * @description
 * The function constructs a new current date using the constructor from
 * the reference date. It helps to build generic functions that accept date
 * extensions and use the current date.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 *
 * @returns Current date initialized using the given date constructor
 *
 * @example
 * import { constructNow, isSameDay } from 'date-fns'
 *
 * function isToday<DateType extends Date>(
 *   date: DateType | number | string,
 * ): boolean {
 *   // If we were to use `new Date()` directly, the function would  behave
 *   // differently in different timezones and return false for the same date.
 *   return isSameDay(date, constructNow(date));
 * }
 */
function constructNow(date) {
  return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_0__.constructFrom)(date, Date.now());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructNow);


/***/ }),

/***/ "./node_modules/date-fns/isSameDay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/isSameDay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameDay: () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dateLeft, dateRight) {
  const dateLeftStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const dateRightStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  return +dateLeftStartOfDay === +dateRightStartOfDay;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameDay);


/***/ }),

/***/ "./node_modules/date-fns/isSameWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/isSameWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameWeek: () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * The {@link isSameWeek} function options.
 */

/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same week (and month and year)
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dateLeft, dateRight, options) {
  const dateLeftStartOfWeek = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(dateLeft, options);
  const dateRightStartOfWeek = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(dateRight, options);

  return +dateLeftStartOfWeek === +dateRightStartOfWeek;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameWeek);


/***/ }),

/***/ "./node_modules/date-fns/isThisWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/isThisWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isThisWeek: () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _constructNow_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructNow.mjs */ "./node_modules/date-fns/constructNow.mjs");
/* harmony import */ var _isSameWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameWeek.mjs */ "./node_modules/date-fns/isSameWeek.mjs");



/**
 * The {@link isThisWeek} function options.
 */

/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 * @param options - The object with options
 *
 * @returns The date is in this week
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(date, options) {
  return (0,_isSameWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameWeek)(date, (0,_constructNow_mjs__WEBPACK_IMPORTED_MODULE_1__.constructNow)(date), options);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isThisWeek);


/***/ }),

/***/ "./node_modules/date-fns/isToday.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isToday.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isToday: () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _constructNow_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructNow.mjs */ "./node_modules/date-fns/constructNow.mjs");
/* harmony import */ var _isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.mjs */ "./node_modules/date-fns/isSameDay.mjs");



/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date) {
  return (0,_isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(date, (0,_constructNow_mjs__WEBPACK_IMPORTED_MODULE_1__.constructNow)(date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isToday);


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


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
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task.js */ "./src/modules/task.js");
/* harmony import */ var _modules_project_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project-manager.js */ "./src/modules/project-manager.js");
/* harmony import */ var _modules_user_interface_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/user-interface.js */ "./src/modules/user-interface.js");







_modules_project_manager_js__WEBPACK_IMPORTED_MODULE_2__.Project.addProject(new _modules_project_manager_js__WEBPACK_IMPORTED_MODULE_2__.Project('My first project'));

(0,_modules_user_interface_js__WEBPACK_IMPORTED_MODULE_3__.addEventListeners)();


window.addEventListener('load', () => {
    let data = localStorage.getItem('projects');
    data = JSON.parse(data);
    let arr = data.map(obj => {
        return _modules_project_manager_js__WEBPACK_IMPORTED_MODULE_2__.Project.fromJSON(obj);
    })
    ;(0,_modules_project_manager_js__WEBPACK_IMPORTED_MODULE_2__.updateProjects)(arr);
    (0,_modules_user_interface_js__WEBPACK_IMPORTED_MODULE_3__.buildProjects)();
});

window.addEventListener('beforeunload', () => {
    const data = JSON.stringify((0,_modules_project_manager_js__WEBPACK_IMPORTED_MODULE_2__.getProjects)());
    localStorage.setItem('projects', data);
});



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxP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eEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ29CO0FBQ2M7QUFDUztBQUNMO0FBQ0c7QUFDRjtBQUM1RCxnRUFBTyxnQkFBZ0IsZ0VBQU87O0FBRTlCLDZFQUFpQjs7O0FBR2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnRUFBTztBQUN0QixLQUFLO0FBQ0wsSUFBSSw0RUFBYztBQUNsQixJQUFJLHlFQUFhO0FBQ2pCLENBQUM7O0FBRUQ7QUFDQSxnQ0FBZ0Msd0VBQVc7QUFDM0M7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvYXBwbHlEb25lU3R5bGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9idWlsZC1wcm9qZWN0LXVpLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9idWlsZC10YXNrLXVpLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kdWxlcy9kYXRlLXNvcnRpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2R1bGVzL3Byb2plY3QtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21vZHVsZXMvdXNlci1pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2RlZmF1bHRPcHRpb25zLm1qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0cnVjdEZyb20ubWpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RydWN0Tm93Lm1qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzU2FtZURheS5tanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1NhbWVXZWVrLm1qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVGhpc1dlZWsubWpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNUb2RheS5tanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mRGF5Lm1qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrLm1qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLS1kYXJrLWJsdWU6ICMzQjI4Q0M7XG4gICAgLS1zZW1pLWRhcmstYmx1ZTogIzI2NjdGRjtcbiAgICAtLW5ldXRyYWwtYmx1ZTogIzNGOEVGQztcbiAgICAtLXNlbWktbGlnaHQtYmx1ZTogIzg3QkZGRjtcbiAgICAtLWxpZ2h0LWJsdWU6ICNlNmY1ZmY7XG4gICAgLS1icmlnaHQtdGV4dDogYWxpY2VibHVlO1xuXG59XG5cbmJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuYm9keSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cblxuXG4ubWFpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZ3JpZC1jb2x1bW46IDIvLTE7XG59XG5cbm5hdiB7XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbWktbGlnaHQtYmx1ZSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cbi5kYXRlLXNvcnRlZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmRhdGUtc29ydGVkIGJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbWktZGFyay1ibHVlKTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IHZhcigtLWJyaWdodC10ZXh0KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yMHM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpO1xufVxuXG5cbi5wcm9qZWN0LWNhcmQ6aG92ZXIgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZW1pLWRhcmstYmx1ZSk7XG59XG5cbi5kYXRlLXNvcnRlZCBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG59XG5cbi5wcm9qZWN0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuLnByb2plY3QtY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWJhc2lzOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGlnaHQtYmx1ZSk7XG5cbn1cblxuXG4uYWRkLXByb2plY3QudmlzaWJsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjIwcztcbn1cblxuLmFkZC1wcm9qZWN0OmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDEwcHg7XG59XG5cbi5hZGQtcHJvamVjdCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFkZC1wcm9qZWN0LWZvcm0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hZGQtcHJvamVjdC1mb3JtLnZpc2libGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cblxuLnByb2plY3QtY2FyZCBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gICAgY29sb3I6IHZhcigtLWJyaWdodC10ZXh0KTtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5wcm9qZWN0LWJ0biB7XG4gICAgZmxleDogNztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yMHM7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0IHtcbiAgICBmbGV4OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjIwcztcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG5cbi5hZGQtcHJvamVjdC1mb3JtIGlucHV0LFxuLmFkZC1wcm9qZWN0IGJ1dHRvbiB7XG4gICAgZmxleDogMTtcbn1cblxuLmFkZC1wcm9qZWN0LWZvcm0gaW5wdXQge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uYWRkLXByb2plY3QtZm9ybSBzdmcgcGF0aCB7XG4gICAgdHJhbnNpdGlvbjogMC4xNXM7XG59XG5cbi5hZGQtcHJvamVjdC1mb3JtIC5hZGQ6aG92ZXI+c3ZnIHBhdGgge1xuICAgIGZpbGw6IGdyZWVueWVsbG93O1xufVxuXG5cbi5hZGQtcHJvamVjdC1mb3JtIC5jYW5jZWw6aG92ZXI+c3ZnIHBhdGgge1xuICAgIHN0cm9rZTogcmVkO1xufVxuXG4uYWRkLXByb2plY3QtZm9ybSBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ucHJvamVjdC1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcbn1cblxuLmFkZC10YXNrLWJ0biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbWktZGFyay1ibHVlKTtcbiAgICBjb2xvcjogdmFyKC0tYnJpZ2h0LXRleHQpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IGJsYWNrO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuM3M7XG59XG5cbi5hZGQtdGFzay1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgM3B4IDNweCAxMHB4IGJsYWNrO1xufVxuXG4ucG9wdXAtZm9ybSB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLnBvcHVwLWZvcm0udmlzaWJsZSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnBvcHVwLWZvcm0gZmllbGRzZXQge1xuICAgIHBhZGRpbmc6IDMwcHggMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cbn1cblxuLnBvcHVwLWZvcm0gZm9ybSB7fVxuXG4ucG9wdXAtZm9ybSBpbnB1dCxcbi5wb3B1cC1mb3JtIHRleHRhcmVhLFxuLnBvcHVwLWZvcm0gc2VsZWN0IHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxubGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG5saSBsYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTdweDtcbn1cblxuLnRhc2tzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA1cHg7XG59XG5cbi50YXNrLWNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCB2YXIoLS1kYXJrLWJsdWUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi50YXNrLW5hbWUge1xuICAgIGZsZXg6IDE7XG59XG5cbi5kZWxldGUtdGFzayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi50YXNrLWNhcmQuZG9uZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDdkNztcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLnNob3ctbWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGxlZnQ6IGNhbGMoLTUlIC0gNXB4KTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIC5jb250ZW50IHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgfVxuXG4gICAgbmF2IHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwdmg7XG4gICAgfVxuXG4gICAgLm1haW4ge1xuICAgICAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMjBweCAyMHB4IGJsYWNrO1xuICAgIH1cblxuICAgIC50YXNrLWNhcmQge1xuICAgICAgICBnYXA6IDIwcHg7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQix3QkFBd0I7O0FBRTVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7OztBQUlBO0lBQ0ksbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFD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QzdCLHFCQUFxQjtJQUNyQixNQUFNO0lBQ04sWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksMEJBQTBCO1FBQzFCLDJCQUEyQjtRQUMzQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLHFDQUFxQztJQUN6Qzs7SUFFQTtRQUNJLFNBQVM7SUFDYjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIC0tZGFyay1ibHVlOiAjM0IyOENDO1xcbiAgICAtLXNlbWktZGFyay1ibHVlOiAjMjY2N0ZGO1xcbiAgICAtLW5ldXRyYWwtYmx1ZTogIzNGOEVGQztcXG4gICAgLS1zZW1pLWxpZ2h0LWJsdWU6ICM4N0JGRkY7XFxuICAgIC0tbGlnaHQtYmx1ZTogI2U2ZjVmZjtcXG4gICAgLS1icmlnaHQtdGV4dDogYWxpY2VibHVlO1xcblxcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuXFxuXFxuLm1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBncmlkLWNvbHVtbjogMi8tMTtcXG59XFxuXFxubmF2IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbWktbGlnaHQtYmx1ZSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuXFxuLmRhdGUtc29ydGVkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZGF0ZS1zb3J0ZWQgYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZW1pLWRhcmstYmx1ZSk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHZhcigtLWJyaWdodC10ZXh0KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjBzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpO1xcbn1cXG5cXG5cXG4ucHJvamVjdC1jYXJkOmhvdmVyIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbWktZGFyay1ibHVlKTtcXG59XFxuXFxuLmRhdGUtc29ydGVkIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtY2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtYmFzaXM6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ibHVlKTtcXG5cXG59XFxuXFxuXFxuLmFkZC1wcm9qZWN0LnZpc2libGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjIwcztcXG59XFxuXFxuLmFkZC1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogNnB4IDZweCAxMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hZGQtcHJvamVjdC1mb3JtLnZpc2libGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5cXG4ucHJvamVjdC1jYXJkIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1icmlnaHQtdGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnByb2plY3QtYnRuIHtcXG4gICAgZmxleDogNztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjBzO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0IHtcXG4gICAgZmxleDogMTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjBzO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZm9ybSBpbnB1dCxcXG4uYWRkLXByb2plY3QgYnV0dG9uIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWZvcm0gaW5wdXQge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZm9ybSBzdmcgcGF0aCB7XFxuICAgIHRyYW5zaXRpb246IDAuMTVzO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtZm9ybSAuYWRkOmhvdmVyPnN2ZyBwYXRoIHtcXG4gICAgZmlsbDogZ3JlZW55ZWxsb3c7XFxufVxcblxcblxcbi5hZGQtcHJvamVjdC1mb3JtIC5jYW5jZWw6aG92ZXI+c3ZnIHBhdGgge1xcbiAgICBzdHJva2U6IHJlZDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWZvcm0gYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5wcm9qZWN0LWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZoO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZW1pLWRhcmstYmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1icmlnaHQtdGV4dCk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjNzO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgM3B4IDNweCAxMHB4IGJsYWNrO1xcbn1cXG5cXG4ucG9wdXAtZm9ybSB7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnBvcHVwLWZvcm0udmlzaWJsZSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5wb3B1cC1mb3JtIGZpZWxkc2V0IHtcXG4gICAgcGFkZGluZzogMzBweCAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG5cXG59XFxuXFxuLnBvcHVwLWZvcm0gZm9ybSB7fVxcblxcbi5wb3B1cC1mb3JtIGlucHV0LFxcbi5wb3B1cC1mb3JtIHRleHRhcmVhLFxcbi5wb3B1cC1mb3JtIHNlbGVjdCB7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbmxpIGxhYmVsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC03cHg7XFxufVxcblxcbi50YXNrcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4udGFzay1jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4udGFzay1uYW1lIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmRlbGV0ZS10YXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udGFzay1jYXJkLmRvbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkN2Q3O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnNob3ctbWVudSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGxlZnQ6IGNhbGMoLTUlIC0gNXB4KTtcXG4gICAgdG9wOiAwO1xcbiAgICB6LWluZGV4OiAxMDA7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIH1cXG5cXG4gICAgbmF2IHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTB2aDtcXG4gICAgfVxcblxcbiAgICAubWFpbiB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDIwcHggMjBweCBibGFjaztcXG4gICAgfVxcblxcbiAgICAudGFzay1jYXJkIHtcXG4gICAgICAgIGdhcDogMjBweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGFwcGx5RG9uZVN0eWxlcyhwYXJlbnQsIHRhc2tzKSB7XG4gICAgY29uc3Qgbm9kZUNoaWxkcyA9IFsuLi5wYXJlbnQuY2hpbGRyZW5dO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZUNoaWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrID0gdGFza3NbaV07XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2RlQ2hpbGRzW2ldO1xuICAgICAgICBjb25zb2xlLmxvZyh7IHRhc2ssIG5vZGUsIHBhcmVudCB9KVxuICAgICAgICBpZiAodGFzay5kb25lKSB7XG4gICAgICAgICAgICBtYWtlRG9uZShub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1ha2VVbmRvbmUobm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VEb25lKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdCA9ICd0YXNrLWNhcmQgZG9uZSc7XG4gICAgbGV0IGlucHV0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xufVxuZnVuY3Rpb24gbWFrZVVuZG9uZShlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QgPSAndGFzay1jYXJkJztcblxufVxuXG5leHBvcnQgeyBhcHBseURvbmVTdHlsZXMgfTsiLCJpbXBvcnQgeyB0b2dnbGVWaXNpYmxlIH0gZnJvbSAnLi91c2VyLWludGVyZmFjZS5qcyc7XG5mdW5jdGlvbiBidWlsZFByb2plY3RVSShwcm9qZWN0LCBtb2QgPSB7IGhlYWRlcjogdHJ1ZSwgYnRuOiB0cnVlIH0pIHtcbiAgICBjb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWluZm8nKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRlci5pbm5lclRleHQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgaWYgKG1vZC5oZWFkZXIpIHByb2plY3RJbmZvLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnRuJyk7XG4gICAgYWRkVGFza0J0bi5pbm5lckhUTUwgPSBgPHN2ZyB3aWR0aD1cIjMwcHhcIiBoZWlnaHQ9XCIzMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnIGlkPVwiU1ZHUmVwb19iZ0NhcnJpZXJcIiBzdHJva2Utd2lkdGg9XCIwXCI+PC9nPjxnIGlkPVwiU1ZHUmVwb190cmFjZXJDYXJyaWVyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PC9nPjxnIGlkPVwiU1ZHUmVwb19pY29uQ2FycmllclwiPiA8cGF0aCBkPVwiTTE1IDEyTDEyIDEyTTEyIDEyTDkgMTJNMTIgMTJMMTIgOU0xMiAxMkwxMiAxNVwiIHN0cm9rZT1cImFsaWNlYmx1ZVwiIHN0cm9rZS13aWR0aD1cIjIuNFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIj48L3BhdGg+IDxwYXRoIGQ9XCJNNyAzLjMzNzgyQzguNDcwODcgMi40ODY5NyAxMC4xNzg2IDIgMTIgMkMxNy41MjI4IDIgMjIgNi40NzcxNSAyMiAxMkMyMiAxNy41MjI4IDE3LjUyMjggMjIgMTIgMjJDNi40NzcxNSAyMiAyIDE3LjUyMjggMiAxMkMyIDEwLjE3ODYgMi40ODY5NyA4LjQ3MDg3IDMuMzM3ODIgN1wiIHN0cm9rZT1cImFsaWNlYmx1ZVwiIHN0cm9rZS13aWR0aD1cIjIuNFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIj48L3BhdGg+IDwvZz48L3N2Zz5gXG4gICAgYWRkVGFza0J0bi5pbm5lckhUTUwgKz0gJ2FkZCB0YXNrJztcbiAgICBpZiAobW9kLmJ0bikgcHJvamVjdEluZm8uYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1mb3JtJyk7XG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlVmlzaWJsZShmb3JtKTtcbiAgICB9KTtcbiAgICAvL2xvZ2ljIGZvciBhZGRpbmcgcHJvamVjdCB0YXNrczpcbn1cblxuZXhwb3J0IHsgYnVpbGRQcm9qZWN0VUkgfTsiLCJpbXBvcnQgeyBhcHBseURvbmVTdHlsZXMgfSBmcm9tIFwiLi9hcHBseURvbmVTdHlsZXNcIjtcblxuZnVuY3Rpb24gYnVpbGRUYXNrc1VJKHBhcmVudCwgdGFza3MpIHtcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKCd0YXNrLWNhcmQnKTtcbiAgICAgICAgY29uc3QgdGFza05hbWVUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICB0YXNrTmFtZVR4dC5jbGFzc0xpc3QuYWRkKCd0YXNrLW5hbWUnKTtcbiAgICAgICAgdGFza05hbWVUeHQuaW5uZXJUZXh0ID0gdGFzay5uYW1lO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkdWVEYXRlLmlubmVyVGV4dCA9ICdkdWUgZGF0ZTogJyArIHRhc2suZHVlRGF0ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByaW9yaXR5LmlubmVyVGV4dCA9IHRhc2sucHJpb3JpdHk7XG4gICAgICAgIGNvbnN0IGRvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkb25lLnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICBkb25lLmNsYXNzTGlzdC5hZGQoJ2RvbmVDaGVja2JveCcpO1xuICAgICAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtdGFzaycpO1xuICAgICAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gYFxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMCAzMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNIDE0Ljk4NDM3NSAyLjQ4NjMyODEgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDE0IDMuNSBMIDE0IDQgTCA4LjUgNCBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgNy40ODYzMjgxIDUgTCA2IDUgQSAxLjAwMDEgMS4wMDAxIDAgMSAwIDYgNyBMIDI0IDcgQSAxLjAwMDEgMS4wMDAxIDAgMSAwIDI0IDUgTCAyMi41MTM2NzIgNSBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgMjEuNSA0IEwgMTYgNCBMIDE2IDMuNSBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgMTQuOTg0Mzc1IDIuNDg2MzI4MSB6IE0gNiA5IEwgNy43OTI5Njg4IDI0LjIzNDM3NSBDIDcuOTEwOTY4NyAyNS4yNDEzNzUgOC43NjMzNDM4IDI2IDkuNzc3MzQzOCAyNiBMIDIwLjIyMjY1NiAyNiBDIDIxLjIzNjY1NiAyNiAyMi4wODgwMzEgMjUuMjQxMzc1IDIyLjIwNzAzMSAyNC4yMzQzNzUgTCAyNCA5IEwgNiA5IHpcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhdGg+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICBgXG5cbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQodGFza05hbWVUeHQpO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChkb25lKTtcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcbiAgICAgICAgLy9EdXJjaHN0cmVpY2hlbiBXZW5uIGRvbmUgPT0gdHJ1ZVxuICAgICAgICBhcHBseURvbmVTdHlsZXMocGFyZW50LCB0YXNrcyk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGJ1aWxkVGFza3NVSSB9OyIsImltcG9ydCB7IGdldFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdC1tYW5hZ2VyXCI7XG5pbXBvcnQgeyBpc1RvZGF5IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgaXNUaGlzV2VlayB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5mdW5jdGlvbiBnZXRBbGxUYXNrcygpIHtcbiAgICByZXR1cm4gZ2V0UHJvamVjdHMoKS5tYXAocCA9PiBwLmdldFRhc2tzKCkpLmZsYXQoKTtcbn1cblxuZnVuY3Rpb24gZ2V0VG9kYXlUYXNrcygpIHtcbiAgICBsZXQgYWxsVGFza3MgPSBnZXRBbGxUYXNrcygpO1xuICAgIHJldHVybiBhbGxUYXNrcy5maWx0ZXIodGFzayA9PiBpc1RvZGF5KHRhc2suZHVlRGF0ZSkpO1xufVxuZnVuY3Rpb24gZ2V0V2Vla1Rhc2tzKCkge1xuICAgIGxldCBhbGxUYXNrcyA9IGdldEFsbFRhc2tzKCk7XG4gICAgcmV0dXJuIGFsbFRhc2tzLmZpbHRlcih0YXNrID0+IGlzVGhpc1dlZWsodGFzay5kdWVEYXRlLCAxKSk7XG59XG5cbmV4cG9ydCB7IGdldFRvZGF5VGFza3MsIGdldFdlZWtUYXNrcywgZ2V0QWxsVGFza3MgfTsiLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuY29uc3QgcHJvamVjdHMgPSBbXTtcblxuY2xhc3MgUHJvamVjdCB7XG4gICAgI3Rhc2tzO1xuICAgICNhY3RpdmU7XG4gICAgY29uc3RydWN0b3IobmFtZSwgdGFza3MsIGFjdGl2ZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLiN0YXNrcyA9IHRhc2tzIHx8IFtdO1xuICAgICAgICB0aGlzLiNhY3RpdmUgPSBhY3RpdmUgfHwgZmFsc2U7XG4gICAgfVxuXG5cbiAgICB0b2dnbGVEb25lVGFzayhpKSB7XG4gICAgICAgIHRoaXMuI3Rhc2tzW2ldLnRvZ2dsZURvbmUoKTtcbiAgICB9XG4gICAgYWRkVGFzayA9ICh0YXNrKSA9PiB0aGlzLiN0YXNrcy5wdXNoKHRhc2spO1xuICAgIGdldFRhc2tzID0gKCkgPT4gdGhpcy4jdGFza3M7XG4gICAgZGVsZXRlVGFzayA9IChpKSA9PiB0aGlzLiN0YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgbWFrZUFjdGl2ZSA9ICgpID0+IHRoaXMuI2FjdGl2ZSA9IHRydWU7XG4gICAgbWFrZUluYWN0aXZlID0gKCkgPT4gdGhpcy4jYWN0aXZlID0gZmFsc2U7XG4gICAgZ2V0QWN0aXZlID0gKCkgPT4gdGhpcy4jYWN0aXZlO1xuICAgIHN0YXRpYyBhZGRQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB9XG4gICAgc3RhdGljIGRlbGV0ZVByb2plY3QgPSAoaSkgPT4gcHJvamVjdHMuc3BsaWNlKGksIDEpO1xuXG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgdGFza3M6IHRoaXMuI3Rhc2tzLFxuICAgICAgICAgICAgYWN0aXZlOiB0aGlzLiNhY3RpdmUsXG4gICAgICAgIH1cbiAgICB9O1xuICAgIHN0YXRpYyBmcm9tSlNPTihvYmopIHtcbiAgICAgICAgbGV0IHRhc2tzID0gb2JqLnRhc2tzO1xuICAgICAgICBpZiAodGFza3MpIHtcbiAgICAgICAgICAgIHRhc2tzID0gdGFza3MubWFwKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBUYXNrLmZyb21KU09OKHRhc2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9qZWN0KG9iai5uYW1lLCB0YXNrcywgb2JqLmFjdGl2ZSlcbiAgICB9XG5cbn1cblxuY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0cztcblxuXG5mdW5jdGlvbiBtYWtlQWN0aXZlKGluZGV4KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gcHJvamVjdHNbaV07XG4gICAgICAgIGVsZW1lbnQubWFrZUluYWN0aXZlKCk7XG4gICAgfVxuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwcm9qZWN0c1tpbmRleF0ubWFrZUFjdGl2ZSgpO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrVG9BY3RpdmUodGFzaykge1xuICAgIGxldCBpbmRleCA9IGdldEFjdGl2ZUluZGV4KCk7XG4gICAgcHJvamVjdHNbaW5kZXhdLmFkZFRhc2sodGFzayk7XG59XG5mdW5jdGlvbiBkZWxldGVUYXNrRnJvbUFjdGl2ZShpKSB7XG4gICAgbGV0IHBJbmRleCA9IGdldEFjdGl2ZUluZGV4KCk7XG4gICAgcHJvamVjdHNbcEluZGV4XS5kZWxldGVUYXNrKGkpO1xufVxuXG5cbmZ1bmN0aW9uIGdldEFjdGl2ZUluZGV4KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHByb2plY3RzW2ldLmdldEFjdGl2ZSgpKSByZXR1cm4gaTtcbiAgICB9XG59XG5mdW5jdGlvbiB0b2dnbGVEb25lVGFza0Zyb21BY3RpdmUoaSkge1xuICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdHNbZ2V0QWN0aXZlSW5kZXgoKV07XG4gICAgcHJvamVjdC50b2dnbGVEb25lVGFzayhpKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdHModXBkYXRlZCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXBkYXRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBwcm9qZWN0c1tpXSA9IHVwZGF0ZWRbaV07XG4gICAgfVxufVxuXG5leHBvcnQgeyB1cGRhdGVQcm9qZWN0cyB9O1xuZXhwb3J0IHsgdG9nZ2xlRG9uZVRhc2tGcm9tQWN0aXZlIH07XG5leHBvcnQgeyBnZXRBY3RpdmVJbmRleCB9O1xuZXhwb3J0IHsgZGVsZXRlVGFza0Zyb21BY3RpdmUgfTtcbmV4cG9ydCB7IG1ha2VBY3RpdmUgfTtcbmV4cG9ydCB7IGFkZFRhc2tUb0FjdGl2ZSB9O1xuZXhwb3J0IHsgUHJvamVjdCB9O1xuZXhwb3J0IHsgZ2V0UHJvamVjdHMgfTtcbiIsImNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGR1ZURhdGUsIGNvbW1lbnQsIHByaW9yaXR5LCBkb25lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWUgfHwgXCJOYW1lXCI7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGUgfHwgXCIzMS4xMi4yMDI0XCI7XG4gICAgICAgIHRoaXMuY29tbWVudCA9IGNvbW1lbnQgfHwgXCJObyBjb21tZW50Li4uXCI7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eSB8fCBcImxvd1wiO1xuICAgICAgICB0aGlzLmRvbmUgPSBkb25lIHx8IGZhbHNlO1xuICAgIH1cbiAgICB0b2dnbGVEb25lID0gKCkgPT4gdGhpcy5kb25lID0gIXRoaXMuZG9uZTtcblxuICAgIHN0YXRpYyBmcm9tSlNPTihvYmopIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUYXNrKC4uLk9iamVjdC52YWx1ZXMob2JqKSk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBUYXNrIH07IiwiaW1wb3J0IHsgUHJvamVjdCwgdG9nZ2xlRG9uZVRhc2tGcm9tQWN0aXZlIH0gZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IHsgZ2V0UHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5pbXBvcnQgeyBidWlsZFByb2plY3RVSSB9IGZyb20gJy4vYnVpbGQtcHJvamVjdC11aSc7XG5pbXBvcnQgeyBtYWtlQWN0aXZlIH0gZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IHsgYWRkVGFza1RvQWN0aXZlIH0gZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vdGFzayc7XG5pbXBvcnQgeyBidWlsZFRhc2tzVUkgfSBmcm9tICcuL2J1aWxkLXRhc2stdWknO1xuaW1wb3J0IHsgZ2V0QWN0aXZlSW5kZXggfSBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5pbXBvcnQgeyBkZWxldGVUYXNrRnJvbUFjdGl2ZSB9IGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmltcG9ydCB7IGdldEFsbFRhc2tzLCBnZXRUb2RheVRhc2tzLCBnZXRXZWVrVGFza3MgfSBmcm9tICcuL2RhdGUtc29ydGluZyc7XG5pbXBvcnQgeyBhcHBseURvbmVTdHlsZXMgfSBmcm9tICcuL2FwcGx5RG9uZVN0eWxlcyc7XG5cblxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0Jyk7XG5jb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRQcm9qZWN0Rm9ybScpO1xuLy9GaW5hbCBhZGQgQnV0dG9uICh0aGUgb25lIG9vbiB0aGUgZm9ybSlcbmNvbnN0IGFkZFByb2plY3RGaW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdEZpbkJ0bicpO1xuY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RJbnB1dCcpO1xuLy9Db250YWluZXIgb2YgYWxsIHRoZSBwcm9qZWN0IGJ1dHRvbnNcbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdENvbnRhaW5lcicpO1xuLy8vQnV0dG9uIHRvIGFkZCB0aGUgdGFzayBmaW5hbGx5ICh0aGUgb25lIGluIHRoZSBmb3JtKVxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUYXNrQnRuJyk7XG5cblxuZnVuY3Rpb24gZGVsZXRlQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgICBBcnJheS5mcm9tKHBhcmVudC5jaGlsZE5vZGVzKS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgfSk7XG59XG5cbi8vYWRkcyB0aGUgcHJvamVjdCB0byB0aGUgcHJvamVjdHMgYXJyYXkgaW4gdGhlIHByb2plY3QgbWFuYWdlciBtb2R1bGU6XG5mdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpXG4gICAgUHJvamVjdC5hZGRQcm9qZWN0KHByb2plY3QpO1xufVxuXG4vL1NvIGFsc28gdGhlIG5ldyBhZGRlZCBvbmVzIGFyZSBiZWluZyBkaXNwbGF5ZWQ6XG5mdW5jdGlvbiBidWlsZFByb2plY3RzKCkge1xuICAgIC8vV2hlcmUgYWxsIHRoZSBwcm9qZWN0cyBhcmUgZGlzcGxheWVkXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0Q29udGFpbmVyJyk7XG5cbiAgICAvL2ZpcnN0IGRlbGV0ZSBhbGw6XG4gICAgZGVsZXRlQ2hpbGROb2Rlcyhwcm9qZWN0Q29udGFpbmVyKTtcblxuICAgIC8vYWRkIGFsbCB0aGUgZXhpc3RpbmcgcHJvamVjdHNcbiAgICBsZXQgcHJvamVjdHMgPSBnZXRQcm9qZWN0cygpO1xuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNhcmQnKVxuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnRuJyk7XG4gICAgICAgIGJ0bi5pbm5lclRleHQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXByb2plY3QnKTtcbiAgICAgICAgZGVsZXRlQnRuLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzAgMzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTSAxNC45ODQzNzUgMi40ODYzMjgxIEEgMS4wMDAxIDEuMDAwMSAwIDAgMCAxNCAzLjUgTCAxNCA0IEwgOC41IDQgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDcuNDg2MzI4MSA1IEwgNiA1IEEgMS4wMDAxIDEuMDAwMSAwIDEgMCA2IDcgTCAyNCA3IEEgMS4wMDAxIDEuMDAwMSAwIDEgMCAyNCA1IEwgMjIuNTEzNjcyIDUgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDIxLjUgNCBMIDE2IDQgTCAxNiAzLjUgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDE0Ljk4NDM3NSAyLjQ4NjMyODEgeiBNIDYgOSBMIDcuNzkyOTY4OCAyNC4yMzQzNzUgQyA3LjkxMDk2ODcgMjUuMjQxMzc1IDguNzYzMzQzOCAyNiA5Ljc3NzM0MzggMjYgTCAyMC4yMjI2NTYgMjYgQyAyMS4yMzY2NTYgMjYgMjIuMDg4MDMxIDI1LjI0MTM3NSAyMi4yMDcwMzEgMjQuMjM0Mzc1IEwgMjQgOSBMIDYgOSB6XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXRoPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgYFxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICB9KVxufVxuXG5cbmZ1bmN0aW9uIGdldEluZGV4T2ZDaGlsZChjaGlsZCwgcGFyZW50KSB7XG4gICAgLy9jbG9zZXN0IHNlbGVjdHMgdGhlIGNsb3Nlc3QgZWxlbWVudCB0byAucHJvamVjdC1idFxuICAgIGNvbnN0IGluZGV4ID0gWy4uLnBhcmVudC5jaGlsZHJlbl0uaW5kZXhPZihjaGlsZCk7XG4gICAgcmV0dXJuIGluZGV4O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVWaXNpYmxlKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTtcbn1cblxuXG5cbi8vdG8gYWRkIGFsbCB0aGUgZXZlbnQgbGlzdGVuZXJzIGZvciB0aGUgcGFnZTpcbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vLnZpc2libGUgY2xhc3Mgd2lsbCBiZSByZW1vdmVkXG4gICAgICAgIHRvZ2dsZVZpc2libGUoYWRkUHJvamVjdEJ0bik7XG4gICAgICAgIC8vLnZpc2libGUgY2xhc3Mgd2lsbCBiZSBhZGRlZFxuICAgICAgICB0b2dnbGVWaXNpYmxlKGFkZFByb2plY3RGb3JtKTtcbiAgICB9KTtcbiAgICBhZGRQcm9qZWN0RmluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgaW5wdXQgPSBwcm9qZWN0SW5wdXQudmFsdWU7XG4gICAgICAgIGFkZFByb2plY3QoaW5wdXQpO1xuICAgICAgICBidWlsZFByb2plY3RzKCk7XG4gICAgICAgIC8vLnZpc2libGUgY2xhc3Mgd2lsbCBiZSByZW1vdmVkXG4gICAgICAgIHRvZ2dsZVZpc2libGUoYWRkUHJvamVjdEJ0bik7XG4gICAgICAgIC8vLnZpc2libGUgY2xhc3Mgd2lsbCBiZSBhZGRlZFxuICAgICAgICB0b2dnbGVWaXNpYmxlKGFkZFByb2plY3RGb3JtKTtcbiAgICB9KTtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tDb250YWluZXInKTtcbiAgICBjb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWluZm8nKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBnZXRJbmRleE9mQ2hpbGQoZS50YXJnZXQucGFyZW50RWxlbWVudCwgcHJvamVjdENvbnRhaW5lcilcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5kZWxldGUtcHJvamVjdCcpKSB7XG4gICAgICAgICAgICBQcm9qZWN0LmRlbGV0ZVByb2plY3QoaW5kZXgpO1xuICAgICAgICAgICAgYnVpbGRQcm9qZWN0cygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZUNoaWxkTm9kZXMocHJvamVjdEluZm8pO1xuICAgICAgICAvL2hhbmRsaW5nIGEgY2xpY2sgb24gdGhlIHByb2plY3QgYnV0dG9uXG4gICAgICAgIGJ1aWxkUHJvamVjdFVJKGdldFByb2plY3RzKClbaW5kZXhdKTtcbiAgICAgICAgLy9tYWtpbmcgdGhlIGNsaWNrZWQgcHJqY3QgdGhlIGFjdGl2ZSBvbmVcbiAgICAgICAgbWFrZUFjdGl2ZShpbmRleCk7XG4gICAgICAgIGRlbGV0ZUNoaWxkTm9kZXModGFza0NvbnRhaW5lcik7XG4gICAgICAgIGJ1aWxkVGFza3NVSSh0YXNrQ29udGFpbmVyLCBnZXRQcm9qZWN0cygpW2dldEFjdGl2ZUluZGV4KCldLmdldFRhc2tzKCkpO1xuICAgIH0pXG5cbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWVJbnB1dCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb21tZW50JykudmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWU7XG5cbiAgICAgICAgYWRkVGFza1RvQWN0aXZlKG5ldyBUYXNrKG5hbWUsIGR1ZURhdGUsIGNvbW1lbnQsIHByaW9yaXR5KSlcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1mb3JtJyk7XG4gICAgICAgIHRvZ2dsZVZpc2libGUoZm9ybSk7XG4gICAgICAgIGRlbGV0ZUNoaWxkTm9kZXModGFza0NvbnRhaW5lcik7XG4gICAgICAgIGJ1aWxkVGFza3NVSSh0YXNrQ29udGFpbmVyLCBnZXRQcm9qZWN0cygpW2dldEFjdGl2ZUluZGV4KCldLmdldFRhc2tzKCkpO1xuICAgIH0pXG4gICAgdGFza0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsaWNrZWRUYXNrQ2FyZCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWNhcmQnKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBnZXRJbmRleE9mQ2hpbGQoY2xpY2tlZFRhc2tDYXJkLCBjbGlja2VkVGFza0NhcmQucGFyZW50RWxlbWVudCk7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuZGVsZXRlLXRhc2snKSkge1xuICAgICAgICAgICAgLy9oYW5kbGUgdGhlIGRlbGV0aW5nIG9mIHRhc2tcbiAgICAgICAgICAgIGRlbGV0ZVRhc2tGcm9tQWN0aXZlKGluZGV4KTtcbiAgICAgICAgICAgIGRlbGV0ZUNoaWxkTm9kZXModGFza0NvbnRhaW5lcik7XG4gICAgICAgICAgICBidWlsZFRhc2tzVUkodGFza0NvbnRhaW5lciwgZ2V0UHJvamVjdHMoKVtnZXRBY3RpdmVJbmRleCgpXS5nZXRUYXNrcygpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuZG9uZUNoZWNrYm94JykpIHtcbiAgICAgICAgICAgIC8vbG9naWMgZm9yIG1hcmtpbmcgYXMgZG9uZVxuICAgICAgICAgICAgdG9nZ2xlRG9uZVRhc2tGcm9tQWN0aXZlKGluZGV4KTtcbiAgICAgICAgICAgIGFwcGx5RG9uZVN0eWxlcyh0YXNrQ29udGFpbmVyLCBnZXRQcm9qZWN0cygpW2dldEFjdGl2ZUluZGV4KCldLmdldFRhc2tzKCkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICAvL2xvZ2ljIGZvciB0YXNrIG92ZXJ2aWV3XG4gICAgfSlcbiAgICBjb25zdCB0b2RheVRhc2tzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5VGFza3NCdG4nKTtcbiAgICB0b2RheVRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtYWtlQWN0aXZlKC0xKTtcblxuICAgICAgICBkZWxldGVDaGlsZE5vZGVzKHByb2plY3RJbmZvKTtcbiAgICAgICAgYnVpbGRQcm9qZWN0VUkoeyBuYW1lOiAnVG9kYXlzIFRhc2tzJyB9LCB7IGhlYWRlcjogdHJ1ZSwgYnRuOiBmYWxzZSB9KTtcbiAgICAgICAgZGVsZXRlQ2hpbGROb2Rlcyh0YXNrQ29udGFpbmVyKTtcbiAgICAgICAgYnVpbGRUYXNrc1VJKHRhc2tDb250YWluZXIsIGdldFRvZGF5VGFza3MoKSk7XG4gICAgfSlcbiAgICBjb25zdCB3ZWVrVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWVrVGFza0J0bicpO1xuICAgIHdlZWtUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtYWtlQWN0aXZlKC0xKTtcbiAgICAgICAgZGVsZXRlQ2hpbGROb2Rlcyhwcm9qZWN0SW5mbyk7XG4gICAgICAgIGJ1aWxkUHJvamVjdFVJKHsgbmFtZTogJ1RoaXMgV2Vla1xcJ3MgVGFza3MnIH0sIHsgaGVhZGVyOiB0cnVlLCBidG46IGZhbHNlIH0pXG4gICAgICAgIGRlbGV0ZUNoaWxkTm9kZXModGFza0NvbnRhaW5lcik7XG4gICAgICAgIGJ1aWxkVGFza3NVSSh0YXNrQ29udGFpbmVyLCBnZXRXZWVrVGFza3MoKSk7XG4gICAgfSlcbiAgICBjb25zdCBhbGxUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbFRhc2tCdG4nKVxuICAgIGFsbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1ha2VBY3RpdmUoLTEpO1xuICAgICAgICBkZWxldGVDaGlsZE5vZGVzKHByb2plY3RJbmZvKTtcbiAgICAgICAgYnVpbGRQcm9qZWN0VUkoeyBuYW1lOiAnQWxsIFRhc2tzJyB9LCB7IGhlYWRlcjogdHJ1ZSwgYnRuOiBmYWxzZSB9KVxuICAgICAgICBkZWxldGVDaGlsZE5vZGVzKHRhc2tDb250YWluZXIpO1xuICAgICAgICBidWlsZFRhc2tzVUkodGFza0NvbnRhaW5lciwgZ2V0QWxsVGFza3MoKSk7XG4gICAgfSlcblxufVxuXG5leHBvcnQgeyBhZGRFdmVudExpc3RlbmVycyB9O1xuZXhwb3J0IHsgdG9nZ2xlVmlzaWJsZSB9O1xuZXhwb3J0IHsgYnVpbGRQcm9qZWN0cyB9OyIsImxldCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufVxuIiwiLyoqXG4gKiBAbmFtZSBjb25zdHJ1Y3RGcm9tXG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgZGF0ZSB1c2luZyB0aGUgcmVmZXJlbmNlIGRhdGUgYW5kIHRoZSB2YWx1ZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNvbnN0cnVjdHMgYSBuZXcgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbSB0aGUgcmVmZXJlbmNlXG4gKiBkYXRlIGFuZCB0aGUgZ2l2ZW4gdmFsdWUuIEl0IGhlbHBzIHRvIGJ1aWxkIGdlbmVyaWMgZnVuY3Rpb25zIHRoYXQgYWNjZXB0XG4gKiBkYXRlIGV4dGVuc2lvbnMuXG4gKlxuICogSXQgZGVmYXVsdHMgdG8gYERhdGVgIGlmIHRoZSBwYXNzZWQgcmVmZXJlbmNlIGRhdGUgaXMgYSBudW1iZXIgb3IgYSBzdHJpbmcuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgcmVmZXJlbmNlIGRhdGUgdG8gdGFrZSBjb25zdHJ1Y3RvciBmcm9tXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY3JlYXRlIHRoZSBkYXRlXG4gKlxuICogQHJldHVybnMgRGF0ZSBpbml0aWFsaXplZCB1c2luZyB0aGUgZ2l2ZW4gZGF0ZSBhbmQgdmFsdWVcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gJ2RhdGUtZm5zJ1xuICpcbiAqIC8vIEEgZnVuY3Rpb24gdGhhdCBjbG9uZXMgYSBkYXRlIHByZXNlcnZpbmcgdGhlIG9yaWdpbmFsIHR5cGVcbiAqIGZ1bmN0aW9uIGNsb25lRGF0ZTxEYXRlVHlwZSBleHRlbmRzIERhdGUoZGF0ZTogRGF0ZVR5cGUpOiBEYXRlVHlwZSB7XG4gKiAgIHJldHVybiBjb25zdHJ1Y3RGcm9tKFxuICogICAgIGRhdGUsIC8vIFVzZSBjb250cnVzdG9yIGZyb20gdGhlIGdpdmVuIGRhdGVcbiAqICAgICBkYXRlLmdldFRpbWUoKSAvLyBVc2UgdGhlIGRhdGUgdmFsdWUgdG8gY3JlYXRlIGEgbmV3IGRhdGVcbiAqICAgKVxuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0RnJvbShkYXRlLCB2YWx1ZSkge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gbmV3IGRhdGUuY29uc3RydWN0b3IodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3RGcm9tO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgY29uc3RydWN0Tm93XG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgbmV3IGN1cnJlbnQgZGF0ZSB1c2luZyB0aGUgcGFzc2VkIHZhbHVlIGNvbnN0cnVjdG9yLlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGN1cnJlbnQgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbVxuICogdGhlIHJlZmVyZW5jZSBkYXRlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdCBkYXRlXG4gKiBleHRlbnNpb25zIGFuZCB1c2UgdGhlIGN1cnJlbnQgZGF0ZS5cbiAqXG4gKiBJdCBkZWZhdWx0cyB0byBgRGF0ZWAgaWYgdGhlIHBhc3NlZCByZWZlcmVuY2UgZGF0ZSBpcyBhIG51bWJlciBvciBhIHN0cmluZy5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSByZWZlcmVuY2UgZGF0ZSB0byB0YWtlIGNvbnN0cnVjdG9yIGZyb21cbiAqXG4gKiBAcmV0dXJucyBDdXJyZW50IGRhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgY29uc3RydWN0b3JcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0Tm93LCBpc1NhbWVEYXkgfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiBmdW5jdGlvbiBpc1RvZGF5PERhdGVUeXBlIGV4dGVuZHMgRGF0ZT4oXG4gKiAgIGRhdGU6IERhdGVUeXBlIHwgbnVtYmVyIHwgc3RyaW5nLFxuICogKTogYm9vbGVhbiB7XG4gKiAgIC8vIElmIHdlIHdlcmUgdG8gdXNlIGBuZXcgRGF0ZSgpYCBkaXJlY3RseSwgdGhlIGZ1bmN0aW9uIHdvdWxkICBiZWhhdmVcbiAqICAgLy8gZGlmZmVyZW50bHkgaW4gZGlmZmVyZW50IHRpbWV6b25lcyBhbmQgcmV0dXJuIGZhbHNlIGZvciB0aGUgc2FtZSBkYXRlLlxuICogICByZXR1cm4gaXNTYW1lRGF5KGRhdGUsIGNvbnN0cnVjdE5vdyhkYXRlKSk7XG4gKiB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3ROb3coZGF0ZSkge1xuICByZXR1cm4gY29uc3RydWN0RnJvbShkYXRlLCBEYXRlLm5vdygpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3ROb3c7XG4iLCJpbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuXG4gKiBAcmV0dXJucyBUaGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZURheShkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkYXRlUmlnaHQpO1xuXG4gIHJldHVybiArZGF0ZUxlZnRTdGFydE9mRGF5ID09PSArZGF0ZVJpZ2h0U3RhcnRPZkRheTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1NhbWVEYXk7XG4iLCJpbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgaXNTYW1lV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGF0ZUxlZnQsIGRhdGVSaWdodCwgb3B0aW9ucykge1xuICBjb25zdCBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGF0ZUxlZnQsIG9wdGlvbnMpO1xuICBjb25zdCBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRhdGVSaWdodCwgb3B0aW9ucyk7XG5cbiAgcmV0dXJuICtkYXRlTGVmdFN0YXJ0T2ZXZWVrID09PSArZGF0ZVJpZ2h0U3RhcnRPZldlZWs7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNTYW1lV2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdE5vdyB9IGZyb20gXCIuL2NvbnN0cnVjdE5vdy5tanNcIjtcbmltcG9ydCB7IGlzU2FtZVdlZWsgfSBmcm9tIFwiLi9pc1NhbWVXZWVrLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgaXNUaGlzV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGF0ZSwgb3B0aW9ucykge1xuICByZXR1cm4gaXNTYW1lV2VlayhkYXRlLCBjb25zdHJ1Y3ROb3coZGF0ZSksIG9wdGlvbnMpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVGhpc1dlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3ROb3cgfSBmcm9tIFwiLi9jb25zdHJ1Y3ROb3cubWpzXCI7XG5pbXBvcnQgeyBpc1NhbWVEYXkgfSBmcm9tIFwiLi9pc1NhbWVEYXkubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgdG9kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RvZGF5KGRhdGUpIHtcbiAgcmV0dXJuIGlzU2FtZURheShkYXRlLCBjb25zdHJ1Y3ROb3coZGF0ZSkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVG9kYXk7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IHdlZWtTdGFydHNPbiA9XG4gICAgb3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24gPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIDA7XG5cbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRheSA9IF9kYXRlLmdldERheSgpO1xuICBjb25zdCBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcblxuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZXZWVrO1xuIiwiLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICBjb25zdCBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSBcIm9iamVjdFwiICYmIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgYXJndW1lbnQuY29uc3RydWN0b3IoK2FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwibnVtYmVyXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHxcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwic3RyaW5nXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBTdHJpbmddXCJcbiAgKSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vbW9kdWxlcy90YXNrLmpzJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL21vZHVsZXMvcHJvamVjdC1tYW5hZ2VyLmpzJztcbmltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnLi9tb2R1bGVzL3VzZXItaW50ZXJmYWNlLmpzJztcbmltcG9ydCB7IGdldFByb2plY3RzIH0gZnJvbSAnLi9tb2R1bGVzL3Byb2plY3QtbWFuYWdlci5qcyc7XG5pbXBvcnQgeyB1cGRhdGVQcm9qZWN0cyB9IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0LW1hbmFnZXIuanMnO1xuaW1wb3J0IHsgYnVpbGRQcm9qZWN0cyB9IGZyb20gJy4vbW9kdWxlcy91c2VyLWludGVyZmFjZS5qcyc7XG5Qcm9qZWN0LmFkZFByb2plY3QobmV3IFByb2plY3QoJ015IGZpcnN0IHByb2plY3QnKSk7XG5cbmFkZEV2ZW50TGlzdGVuZXJzKCk7XG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgbGV0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcbiAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICBsZXQgYXJyID0gZGF0YS5tYXAob2JqID0+IHtcbiAgICAgICAgcmV0dXJuIFByb2plY3QuZnJvbUpTT04ob2JqKTtcbiAgICB9KVxuICAgIHVwZGF0ZVByb2plY3RzKGFycik7XG4gICAgYnVpbGRQcm9qZWN0cygpO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGdldFByb2plY3RzKCkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIGRhdGEpO1xufSk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9