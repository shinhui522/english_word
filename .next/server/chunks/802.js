exports.id = 802;
exports.ids = [802];
exports.modules = {

/***/ 1370:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1231);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_wordsCaption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5369);







const classDefines = 'py-2.5 px-4 leading-relaxed align-middle text-center border border-gray-light border-solid text-xs';

const ScoreTable = ({
  scoreList = []
}) => {
  const WORDS_DATA = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.collection.words);
  const scoreListMemo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => scoreList.map(({
    id,
    answer,
    solution,
    result
  }) => {
    const key = (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)();
    const word = WORDS_DATA.find(item => item.id === id);
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: word ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
        className: "bg-white",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
          className: classDefines,
          children: result === true ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "text-center before-font-material before:w-6 before:h-6 before:leading-6 before:block before:m-auto before:content-['\\e86c'] before:text-green-light"
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "text-center before-font-material before:w-6 before:h-6 before:leading-6 before:block before:m-auto before:content-['\\e5c9'] before:text-red"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
          className: classDefines,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "min-w-200 m-auto whitespace-normal tablet:min-w-0 tablet:max-w-xs",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Components_wordsCaption__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
              id: id,
              wordsList: word.zh,
              partsList: word.parts
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
          className: classDefines,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: !result && answer ? 'text-red' : '',
            children: answer === '' ? '-' : answer
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
          className: classDefines,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: solution
          })
        })]
      }, key) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
    });
  }), [scoreList, WORDS_DATA]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "w-full overflow-x-auto overflow-y-hidden rounded-lg",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
      className: "w-full whitespace-nowrap",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
          className: "bg-green",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
            className: `${classDefines} text-white`,
            children: "\u6210\u7E3E"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
            className: `${classDefines} text-white`,
            children: "\u984C\u76EE"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
            className: `${classDefines} text-white`,
            children: "\u4F60\u7684\u7B54\u6848"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
            className: `${classDefines} text-white`,
            children: "\u6B63\u78BA\u7B54\u6848"
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
        children: scoreListMemo
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ScoreTable);

/***/ }),

/***/ 7554:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const getExamScore = answerState => {
  const state = [...answerState];
  const correctItems = state.filter(({
    result
  }) => result === true);
  const correctNumber = correctItems.length / state.length;
  const amount = Number.isNaN(correctNumber) ? 0 : correctNumber;
  return Math.floor(amount * 100);
};

/* harmony default export */ __webpack_exports__["Z"] = (getExamScore);

/***/ })

};
;