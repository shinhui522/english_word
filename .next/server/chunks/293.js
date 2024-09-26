exports.id = 293;
exports.ids = [293];
exports.modules = {

/***/ 3626:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ card; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__(1231);
// EXTERNAL MODULE: ./components/utils/popup.tsx
var popup = __webpack_require__(8602);
// EXTERNAL MODULE: ./components/wordsCaption.tsx
var wordsCaption = __webpack_require__(5369);
// EXTERNAL MODULE: ./src/hooks/useSpeechSpeak.ts
var useSpeechSpeak = __webpack_require__(3347);
// EXTERNAL MODULE: ./store/slice/collection.tsx
var collection = __webpack_require__(9576);
;// CONCATENATED MODULE: ./components/wordsDetails.tsx








const WordsDetails = ({
  uuId,
  wordItem
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const handleSpeechSpeak = (0,useSpeechSpeak/* default */.Z)();
  const FAVORITES_DATA = (0,external_react_redux_.useSelector)(state => state.collection.favorites);
  const {
    0: isFavorite,
    1: setIsFavorite
  } = (0,external_react_.useState)(false);
  const {
    id,
    en,
    zh,
    parts
  } = wordItem;

  const handleSetFavorite = e => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite) {
      dispatch((0,collection/* deleteFavoriteItem */.qX)(id));
    } else {
      dispatch((0,collection/* addFavoriteItem */.wF)(id));
    }
  };

  (0,external_react_.useEffect)(() => {
    const dataSet = new Set(FAVORITES_DATA);
    setIsFavorite(dataSet.has(wordItem));
  }, [FAVORITES_DATA]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "text-sm",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "relative pr-9",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-lg text-wine leading-9",
        children: en
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "button",
        "aria-label": "favorite-button",
        className: `favorite-button before-icon-star w-9 h-9 absolute right-0 top-0 before:leading-9 ${isFavorite ? 'text-yellow-dark' : 'text-gray/60'}`,
        title: isFavorite ? '移除收藏' : '加入收藏',
        onClick: handleSetFavorite
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "leading-7",
      children: [/*#__PURE__*/jsx_runtime_.jsx(wordsCaption/* default */.Z, {
        id: uuId,
        wordsList: zh,
        partsList: parts,
        hasBrackets: true
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mt-2",
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          "aria-label": "speech",
          className: "w-7 h-7 block mr-1 leading-7 before-font-material before:content-['\\e050'] before:block before:leading-7",
          onClick: () => handleSpeechSpeak(en)
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-full h-px my-3 bg-gray"
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: `https://dictionary.cambridge.org/zht/詞典/英語-漢語-繁體/${en}`,
        target: "_blank",
        rel: "noreferrer",
        title: "\u528D\u6A4B\u8FAD\u5178\u9023\u7D50",
        className: "inline-flex items-center text-xs before-font-material before:content-['\\ea19'] before:block before:mr-2 desktop:hover:text-green",
        children: "\u528D\u6A4B\u8FAD\u5178\u9023\u7D50"
      })]
    })]
  });
};

/* harmony default export */ var wordsDetails = (WordsDetails);
;// CONCATENATED MODULE: ./components/card.tsx











const Card = ({
  wordItem
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const FAVORITES_DATA = (0,external_react_redux_.useSelector)(state => state.collection.favorites);
  const {
    0: isShow,
    1: setIsShow
  } = (0,external_react_.useState)(false);
  const {
    0: isFavorite,
    1: setIsFavorite
  } = (0,external_react_.useState)(false);
  const {
    id,
    en,
    zh,
    parts,
    example
  } = wordItem;

  const handleSetFavorite = e => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite) {
      dispatch((0,collection/* deleteFavoriteItem */.qX)(id));
    } else {
      dispatch((0,collection/* addFavoriteItem */.wF)(id));
    }
  };

  (0,external_react_.useEffect)(() => {
    const dataSet = new Set(FAVORITES_DATA);
    setIsFavorite(dataSet.has(wordItem));
  }, [FAVORITES_DATA]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "h-full p-3 block rounded-lg cursor-pointer shadow-[0_1px_3px_0_rgba(51,51,51,0.2)]",
      "aria-hidden": "true",
      onClick: () => setIsShow(true),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "relative",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-base text-wine leading-7 break-all pr-7",
          children: en
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-xs text-black leading-6",
          children: /*#__PURE__*/jsx_runtime_.jsx(wordsCaption/* default */.Z, {
            id: id,
            wordsList: zh,
            partsList: parts
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          "aria-label": "favorite-button",
          className: `favorite-button before-icon-star w-7 h-7 absolute right-0 top-0 before:leading-7 ${isFavorite ? 'text-yellow-dark' : 'text-gray/60'}`,
          title: isFavorite ? '移除收藏' : '加入收藏',
          onClick: handleSetFavorite
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(popup/* default */.Z, {
      show: isShow,
      onClose: () => setIsShow(false),
      children: /*#__PURE__*/jsx_runtime_.jsx(wordsDetails, {
        uuId: (0,external_uuid_.v4)(),
        wordItem: wordItem
      })
    })]
  });
};

/* harmony default export */ var card = (Card);

/***/ }),

/***/ 4948:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const columnItem = ({
  children,
  id
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
  className: "w-full mb-3 column-item",
  children: children
}, id);

/* harmony default export */ __webpack_exports__["Z"] = (columnItem);

/***/ }),

/***/ 3347:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_speech_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8960);
/* harmony import */ var react_speech_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_speech_kit__WEBPACK_IMPORTED_MODULE_1__);



const useSpeechSpeak = () => {
  const {
    speak,
    speaking
  } = (0,react_speech_kit__WEBPACK_IMPORTED_MODULE_1__.useSpeechSynthesis)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(text => {
    if (speaking === false) {
      speak({
        text,
        voices: {
          default: true,
          lang: 'en',
          localService: true,
          name: 'Karen',
          voiceURI: 'Karen'
        }
      });
    }
  }, [speak, speaking]);
};

/* harmony default export */ __webpack_exports__["Z"] = (useSpeechSpeak);

/***/ })

};
;