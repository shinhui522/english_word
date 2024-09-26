exports.id = 347;
exports.ids = [347];
exports.modules = {

/***/ 347:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oy": function() { return /* binding */ setIsExamAction; },
/* harmony export */   "Lf": function() { return /* binding */ setIsExamTesting; },
/* harmony export */   "jh": function() { return /* binding */ setRecordCollection; },
/* harmony export */   "VY": function() { return /* binding */ deleteRecordItem; }
/* harmony export */ });
/* unused harmony export examSlice */
/* harmony import */ var idb_keyval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1261);
/* harmony import */ var idb_keyval__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(idb_keyval__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable no-console */


const initialState = {
  isExamAction: false,
  isExamTesting: false,
  recordCollection: [],
  examGuardAlert: {
    title: '確定要離開測驗？',
    content: '測驗紀錄將不會被保存'
  }
};

const updateRecordLocalData = payload => {
  const wordsUpStore = (0,idb_keyval__WEBPACK_IMPORTED_MODULE_0__.createStore)('wordsUpDB', 'wordsUpStore');
  const localData = payload.map(({
    id,
    startTime,
    finishTime,
    answerState
  }) => ({
    id,
    startTime,
    finishTime,
    answerState: answerState.map(item => ({
      id: item.id,
      answer: item.answer
    }))
  }));
  (0,idb_keyval__WEBPACK_IMPORTED_MODULE_0__.set)('record', [...localData], wordsUpStore).then(() => console.log('set record successfully')).catch(error => console.log('set record failed', error));
};

const examSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: 'exam',
  initialState,
  reducers: {
    setIsExamAction: (state, action) => {
      const assignState = state;
      assignState.isExamAction = action.payload;
    },
    setIsExamTesting: (state, action) => {
      const assignState = state;
      assignState.isExamTesting = action.payload;
    },
    setRecordCollection: (state, action) => {
      const assignState = state;
      assignState.recordCollection = [...action.payload];
      updateRecordLocalData(assignState.recordCollection);
    },
    deleteRecordItem: (state, action) => {
      const assignState = state;
      const index = assignState.recordCollection.findIndex(({
        startTime
      }) => startTime === action.payload);

      if (index > -1) {
        assignState.recordCollection.splice(index, 1);
        updateRecordLocalData(assignState.recordCollection);
      }
    }
  }
});
const {
  setIsExamAction,
  setIsExamTesting,
  setRecordCollection,
  deleteRecordItem
} = examSlice.actions;
/* harmony default export */ __webpack_exports__["ZP"] = (examSlice.reducer);

/***/ })

};
;