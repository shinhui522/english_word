exports.id = 535;
exports.ids = [535];
exports.modules = {

/***/ 7467:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var idb_keyval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1261);
/* harmony import */ var idb_keyval__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(idb_keyval__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Slice_daily__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9054);
/* eslint-disable no-console */

/**
 * Use the ID of daily words to add words data.
 */





const useSetDailyWords = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const WORDS_DATA = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.collection.words);
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(dailyCase => {
    const wordsUpStore = (0,idb_keyval__WEBPACK_IMPORTED_MODULE_0__.createStore)('wordsUpDB', 'wordsUpStore');
    const result = dailyCase.words.reduce((prev, current) => {
      const word = WORDS_DATA.find(({
        id
      }) => id === current);

      if (word) {
        return [...prev, word];
      }

      return [...prev];
    }, []);
    dispatch((0,_Slice_daily__WEBPACK_IMPORTED_MODULE_3__/* .setDailyWords */ .yX)(result));
    (0,idb_keyval__WEBPACK_IMPORTED_MODULE_0__.set)('daily', dailyCase, wordsUpStore).then(() => console.log('set daily successfully')).catch(error => console.log('set daily failed', error));
  }, [WORDS_DATA, dispatch]);
};

/* harmony default export */ __webpack_exports__["Z"] = (useSetDailyWords);

/***/ }),

/***/ 9166:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8349);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7899);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Slice_daily__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9054);






const useSetDate = () => {
  dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1___default()));
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    const now = dayjs__WEBPACK_IMPORTED_MODULE_0___default()().valueOf();
    const id = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(now).utcOffset(8).format('YYYY-MM-DD');
    dispatch((0,_Slice_daily__WEBPACK_IMPORTED_MODULE_4__/* .setDateId */ .iB)(id));
    dispatch((0,_Slice_daily__WEBPACK_IMPORTED_MODULE_4__/* .setDateCaption */ .t2)(dayjs__WEBPACK_IMPORTED_MODULE_0___default()(now).utcOffset(8).format('YYYY年MM月DD日')));
    return id;
  }, [dispatch]);
};

/* harmony default export */ __webpack_exports__["Z"] = (useSetDate);

/***/ }),

/***/ 9054:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iB": function() { return /* binding */ setDateId; },
/* harmony export */   "t2": function() { return /* binding */ setDateCaption; },
/* harmony export */   "yX": function() { return /* binding */ setDailyWords; },
/* harmony export */   "Ny": function() { return /* binding */ setIsShowGuideButton; }
/* harmony export */ });
/* unused harmony export dailySlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  dateId: '',
  dateCaption: '',
  dailyWords: [],
  isShowGuideButton: false
};
const dailySlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'daily',
  initialState,
  reducers: {
    setDateId: (state, action) => {
      const assignState = state;
      assignState.dateId = action.payload;
    },
    setDateCaption: (state, action) => {
      const assignState = state;
      assignState.dateCaption = action.payload;
    },
    setDailyWords: (state, action) => {
      const assignState = state;
      assignState.dailyWords = [...action.payload];
    },
    setIsShowGuideButton: (state, action) => {
      const assignState = state;
      assignState.isShowGuideButton = action.payload;
    }
  }
});
const {
  setDateId,
  setDateCaption,
  setDailyWords,
  setIsShowGuideButton
} = dailySlice.actions;
/* harmony default export */ __webpack_exports__["ZP"] = (dailySlice.reducer);

/***/ })

};
;