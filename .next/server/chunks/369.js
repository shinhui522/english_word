exports.id = 369;
exports.ids = [369];
exports.modules = {

/***/ 5369:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);





const WordsCaption = ({
  id,
  wordsList,
  partsList,
  hasBrackets = false,
  hasTextCenter = false,
  hasSpeechButton = false,
  onSpeech = () => {}
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: wordsList.map((textItem, index) => {
    const key = `${id}_zh-${index}`;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: hasTextCenter ? 'flex justify-center items-start' : '',
      children: [hasSpeechButton && index === 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        "aria-label": "speech",
        className: "w-8 h-8 inline-block align-top mr-1 leading-8 before-font-material before:content-['\\e050'] before:block before:leading-8",
        onClick: e => {
          e.preventDefault();
          e.stopPropagation();
          onSpeech();
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: "mr-2.5 font-bold",
        children: [hasBrackets && '(', partsList[index], ".", hasBrackets && ')']
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        children: textItem
      })]
    }, key);
  })
});

/* harmony default export */ __webpack_exports__["Z"] = (WordsCaption);

/***/ })

};
;