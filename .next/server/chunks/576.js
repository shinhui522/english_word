exports.id = 576;
exports.ids = [576];
exports.modules = {

/***/ 9576:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C1": function() { return /* binding */ setWordItems; },
/* harmony export */   "dO": function() { return /* binding */ setPartItems; },
/* harmony export */   "Qz": function() { return /* binding */ setFavoriteItems; },
/* harmony export */   "wF": function() { return /* binding */ addFavoriteItem; },
/* harmony export */   "qX": function() { return /* binding */ deleteFavoriteItem; }
/* harmony export */ });
/* unused harmony export collectionSlice */
/* harmony import */ var idb_keyval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1261);
/* harmony import */ var idb_keyval__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(idb_keyval__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable no-console */


const initialState = {
  words: [],
  parts: [],
  favorites: []
};

const updateFavoriteLocalData = payload => {
  const localData = payload.map(({
    id
  }) => id);
  const wordsUpStore = (0,idb_keyval__WEBPACK_IMPORTED_MODULE_0__.createStore)('wordsUpDB', 'wordsUpStore');
  (0,idb_keyval__WEBPACK_IMPORTED_MODULE_0__.set)('favorite', [...localData], wordsUpStore).then(() => console.log('set favorite successfully')).catch(error => console.log('set favorite failed', error));
};

const collectionSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: 'collection',
  initialState,
  reducers: {
    setWordItems: (state, action) => {
      const assignState = state;
      assignState.words = [...action.payload];
    },
    setPartItems: (state, action) => {
      const assignState = state;
      assignState.parts = [...action.payload];
    },
    setFavoriteItems: (state, action) => {
      const assignState = state;
      assignState.favorites = [...action.payload];
      updateFavoriteLocalData(assignState.favorites);
    },
    addFavoriteItem: (state, action) => {
      const assignState = state;
      const word = assignState.words.find(({
        id
      }) => id === action.payload);

      if (word) {
        assignState.favorites.push(word);
        updateFavoriteLocalData(assignState.favorites);
      }
    },
    deleteFavoriteItem: (state, action) => {
      const assignState = state;
      const index = assignState.favorites.findIndex(({
        id
      }) => id === action.payload);

      if (index > -1) {
        assignState.favorites.splice(index, 1);
        updateFavoriteLocalData(assignState.favorites);
      }
    }
  }
});
const {
  setWordItems,
  setPartItems,
  setFavoriteItems,
  addFavoriteItem,
  deleteFavoriteItem
} = collectionSlice.actions;
/* harmony default export */ __webpack_exports__["ZP"] = (collectionSlice.reducer);

/***/ })

};
;