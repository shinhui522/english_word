exports.id = 351;
exports.ids = [351];
exports.modules = {

/***/ 3351:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Interfaces_exam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6218);


const examName = id => {
  switch (id) {
    // * 隨機單字填空測驗
    case _Interfaces_exam__WEBPACK_IMPORTED_MODULE_0__/* .EnumWritedExamID.RANDOM */ .p.RANDOM:
      return '單字填空測驗';
    // * 今日單字填空測驗

    case _Interfaces_exam__WEBPACK_IMPORTED_MODULE_0__/* .EnumWritedExamID.DAILY */ .p.DAILY:
      return '今日單字填空測驗';
    // * 收藏單字填空測驗

    case _Interfaces_exam__WEBPACK_IMPORTED_MODULE_0__/* .EnumWritedExamID.FAVORITE */ .p.FAVORITE:
      return '收藏單字填空測驗';
    // * 隨機單字選擇測驗

    case _Interfaces_exam__WEBPACK_IMPORTED_MODULE_0__/* .EnumSelectedExamID.RANDOM */ .X.RANDOM:
      return '單字選擇測驗';
    // * 今日單字選擇測驗

    case _Interfaces_exam__WEBPACK_IMPORTED_MODULE_0__/* .EnumSelectedExamID.DAILY */ .X.DAILY:
      return '今日單字選擇測驗';
    // * 收藏單字選擇測驗

    case _Interfaces_exam__WEBPACK_IMPORTED_MODULE_0__/* .EnumSelectedExamID.FAVORITE */ .X.FAVORITE:
      return '收藏單字選擇測驗';

    default:
      return '';
  }
};

/* harmony default export */ __webpack_exports__["Z"] = (examName);

/***/ }),

/***/ 6218:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": function() { return /* binding */ EnumWritedExamID; },
/* harmony export */   "X": function() { return /* binding */ EnumSelectedExamID; }
/* harmony export */ });
/* eslint-disable no-shadow */
var EnumWritedExamID;

(function (EnumWritedExamID) {
  EnumWritedExamID["RANDOM"] = "writed-random";
  EnumWritedExamID["DAILY"] = "writed-daily";
  EnumWritedExamID["FAVORITE"] = "writed-favorite";
})(EnumWritedExamID || (EnumWritedExamID = {}));

var EnumSelectedExamID;

(function (EnumSelectedExamID) {
  EnumSelectedExamID["RANDOM"] = "selected-random";
  EnumSelectedExamID["DAILY"] = "selected-daily";
  EnumSelectedExamID["FAVORITE"] = "selected-favorite";
})(EnumSelectedExamID || (EnumSelectedExamID = {}));



/***/ })

};
;