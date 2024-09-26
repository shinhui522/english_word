exports.id = 686;
exports.ids = [686];
exports.modules = {

/***/ 686:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ hooks_useGetSheetData; }
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: ./src/functions/googleSheetAPI/initAPIClient.ts
const initGapiClient = ({
  handleCallback,
  handleError
}) => {
  const handleInitial = () => {
    window.gapi.client.init({
      apiKey: "AIzaSyBqds6JDXuFFNBLoYlVe5GT6ch1jhFQycE",
      clientId: "",
      scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
      discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"]
    }).then(() => {
      const sheetId = "1_gakJ5WCkXsqbgzhTBGPZsqRkI9L5xpu3jUfeo36PDg";
      handleCallback(sheetId);
    }).catch(() => handleError());
  };

  const interval = setInterval(() => {
    if (window.gapi.client) {
      handleInitial();
      clearInterval(interval);
    }
  }, 500);
  window.addEventListener('beforeunload', () => {
    clearInterval(interval);
  });
};

/* harmony default export */ var initAPIClient = (initGapiClient);
;// CONCATENATED MODULE: ./src/functions/googleSheetAPI/makeAPICallback.ts
const makeApiCall = sheetId => {
  const request = window.gapi.client.sheets.spreadsheets.get({
    spreadsheetId: sheetId,
    ranges: 'Sheet1!2:1225',
    includeGridData: true
  });
  return new Promise((resolve, reject) => {
    request.then(response => {
      const sheetRowData = response.result.sheets[0].data[0].rowData;
      const result = {
        parts: [],
        words: [],
        favorites: []
      };
      const wordItemList = sheetRowData.map(sheetData => {
        var _sheetData$values$4$f, _sheetData$values$, _zhItemData$match;

        const id = sheetData.values[0].formattedValue;
        const tag = sheetData.values[1].formattedValue;
        const enItemData = sheetData.values[2].formattedValue;
        const zhItemData = sheetData.values[3].formattedValue;
        const exampleData = (_sheetData$values$4$f = (_sheetData$values$ = sheetData.values[4]) === null || _sheetData$values$ === void 0 ? void 0 : _sheetData$values$.formattedValue) !== null && _sheetData$values$4$f !== void 0 ? _sheetData$values$4$f : '';
        const alphabet = enItemData.slice(0, 1).toLowerCase();

        const _parts = (_zhItemData$match = zhItemData.match(/【[a-z]{1,}】/g)) !== null && _zhItemData$match !== void 0 ? _zhItemData$match : [];

        const parts = _parts.map(str => str.slice(1, -1));

        const partsToSet = new Set([...result.parts, ...parts]);
        result.parts = [...partsToSet];
        return {
          id,
          tag,
          alphabet,
          parts,
          en: enItemData,
          zh: zhItemData.split('%').map(itemText => {
            const name = itemText.split('$');
            return `${name[0]}`;
          }),
          example: exampleData ? exampleData.split('%').map(itemText => {
            const name = itemText.split('$');
            return `${name[0]}`.replace(/\n/g, '');
          }) : []
        };
      });
      console.log(wordItemList);
      result.words = wordItemList;
      resolve(result);
    }, response => reject(response));
  });
};

/* harmony default export */ var makeAPICallback = (makeApiCall);
// EXTERNAL MODULE: ./store/slice/collection.tsx
var collection = __webpack_require__(9576);
// EXTERNAL MODULE: ./store/slice/common.tsx
var common = __webpack_require__(8513);
;// CONCATENATED MODULE: ./src/hooks/useGetSheetData.ts
/* eslint-disable no-console */








const useGetSheetData = () => {
  const router = (0,router_.useRouter)();
  const dispatch = (0,external_react_redux_.useDispatch)();
  let sheetId;
  return (0,external_react_.useCallback)(() => {
    dispatch((0,common/* setIsLoading */.wt)(true));
    initAPIClient({
      handleCallback: SHEET_ID => {
        sheetId = SHEET_ID;
        makeAPICallback(SHEET_ID).then(async response => {
          const {
            words,
            parts
          } = response;
          const partsResult = parts.sort((a, b) => {
            if (a < b) {
              return -1;
            }

            if (a > b) {
              return 1;
            }

            return 0;
          });
          await dispatch((0,collection/* setWordItems */.C1)(words));
          await dispatch((0,collection/* setPartItems */.dO)(partsResult));
          await dispatch((0,common/* setIsLoading */.wt)(false));
        }).catch(error => {
          console.error(error);
        });
      },
      handleError: () => {
        console.log("sheetId==", sheetId);
        router.push('/error');
      }
    });
  }, [dispatch]);
};

/* harmony default export */ var hooks_useGetSheetData = (useGetSheetData);

/***/ }),

/***/ 8513:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NF": function() { return /* binding */ setIsAppMounted; },
/* harmony export */   "wt": function() { return /* binding */ setIsLoading; },
/* harmony export */   "MD": function() { return /* binding */ setIsMenuOpen; },
/* harmony export */   "UH": function() { return /* binding */ setScreenWidth; },
/* harmony export */   "yr": function() { return /* binding */ setScrollValue; }
/* harmony export */ });
/* unused harmony export commonSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  isAppMounted: false,
  isLoading: true,
  isMenuOpen: false,
  screenWidth: 0,
  scrollValue: 0
};
const commonSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'common',
  initialState,
  reducers: {
    setIsAppMounted: (state, action) => {
      const assignState = state;
      assignState.isAppMounted = action.payload;
    },
    setIsLoading: (state, action) => {
      const assignState = state;
      assignState.isLoading = action.payload;
    },
    setIsMenuOpen: (state, action) => {
      const assignState = state;
      assignState.isMenuOpen = action.payload;
    },
    setScreenWidth: (state, action) => {
      const assignState = state;
      assignState.screenWidth = action.payload < 1 ? 0 : action.payload;
    },
    setScrollValue: (state, action) => {
      const assignState = state;
      assignState.scrollValue = action.payload < 1 ? 0 : action.payload;
    }
  }
});
const {
  setIsAppMounted,
  setIsLoading,
  setIsMenuOpen,
  setScreenWidth,
  setScrollValue
} = commonSlice.actions;
/* harmony default export */ __webpack_exports__["ZP"] = (commonSlice.reducer);

/***/ })

};
;