(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7996:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(8349);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
// EXTERNAL MODULE: external "dayjs/plugin/utc"
var utc_ = __webpack_require__(7899);
var utc_default = /*#__PURE__*/__webpack_require__.n(utc_);
// EXTERNAL MODULE: external "idb-keyval"
var external_idb_keyval_ = __webpack_require__(1261);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./store/slice/common.tsx
var common = __webpack_require__(8513);
;// CONCATENATED MODULE: ./components/utils/header.tsx







const Header = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: "w-full h-header-height fixed top-0 left-0 bg-white z-3000 shadow-[0_1px_3px_0_rgba(51,51,51,0.1)]",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "w-full flex items-center justify-between",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "replace",
          className: "pr-2 pl-2 flex items-center font-bold text-base text-green before:w-8 before:h-8 before:mr-2 before:block before:bg-no-repeat before:bg-center before:bg-contain before:bg-[url('../public/img/icon.svg')]",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Words Up"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "button",
        "aria-label": "open-menu",
        className: "w-header-height h-header-height flex items-center justify-center text-center before-font-material before:content-['\\e5d2'] before:w-6 before:h-6 before:m-auto before:block before:leading-6 before:text-green",
        onClick: () => dispatch((0,common/* setIsMenuOpen */.MD)(true))
      })]
    })
  });
};

/* harmony default export */ var header = (Header);
// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__(3810);
;// CONCATENATED MODULE: ./components/utils/loader.tsx






const Loader = () => {
  const {
    isLoading
  } = (0,external_react_redux_.useSelector)(state => state.common);
  const nodeRef = (0,external_react_.useRef)(null);
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_transition_group_.CSSTransition, {
    in: isLoading,
    timeout: 400,
    classNames: "fade",
    nodeRef: nodeRef,
    unmountOnExit: true,
    appear: true,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      ref: nodeRef,
      className: "w-full h-full flex items-center justify-center fixed top-0 left-0 bg-green z-7000",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center justify-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bouncing-animation w-4 h-4 block my-12 mx-1 bg-yellow rounded-full"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bouncing-animation bouncing-animation_delay-2 w-4 h-4 block my-12 mx-1 bg-yellow rounded-full"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "bouncing-animation bouncing-animation_delay-4 w-4 h-4 block my-12 mx-1 bg-yellow rounded-full"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
          className: "block font-normal text-center text-white",
          children: "\u8CC7\u6599\u8F09\u5165\u4E2D"
        })]
      })
    })
  });
};

/* harmony default export */ var loader = (Loader);
// EXTERNAL MODULE: ./components/utils/alert.tsx
var utils_alert = __webpack_require__(6744);
;// CONCATENATED MODULE: ./components/utils/menu.tsx









const ROUTE = __webpack_require__(8898);

const Menu = () => {
  const router = (0,router_.useRouter)();
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    isMenuOpen
  } = (0,external_react_redux_.useSelector)(state => state.common);
  const {
    isExamTesting,
    examGuardAlert
  } = (0,external_react_redux_.useSelector)(state => state.exam);
  const {
    0: routeList,
    1: setRouteList
  } = (0,external_react_.useState)([]);
  const {
    0: isShowExamGuardAlert,
    1: setIsShowExamGuardAlert
  } = (0,external_react_.useState)(false);
  const {
    0: pathTarget,
    1: setPathTarget
  } = (0,external_react_.useState)('');
  (0,external_react_.useEffect)(() => {
    const {
      route
    } = ROUTE;
    setRouteList(route);
  }, []);
  (0,external_react_.useEffect)(() => {
    if (isShowExamGuardAlert === false) {
      setPathTarget('');
    }
  }, [isShowExamGuardAlert]);
  const routeListMemo = (0,external_react_.useMemo)(() => {
    const ClassHandle = (path, id) => {
      const routePath = `/${router.pathname.split('/')[1]}`;
      const isCurrent = !!(routePath === path);
      return `
        menu__item
        ${`icon-${id}`}
        ${isCurrent ? 'current' : ''}
      `;
    };

    return routeList.map(route => {
      const {
        id,
        path,
        name
      } = route;
      return /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "px-4 mb-2.5",
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          className: ClassHandle(path, id),
          onClick: () => {
            if (isExamTesting) {
              setPathTarget(path);
              setIsShowExamGuardAlert(true);
            } else {
              router.push(path);
            }
          },
          children: name
        })
      }, id);
    });
  }, [routeList, router, isExamTesting]);
  const handlePushRoute = (0,external_react_.useCallback)(() => {
    const path = pathTarget !== '' ? pathTarget : '/';
    router.push(path);
    setIsShowExamGuardAlert(false);
  }, [pathTarget]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: `w-menu-width min-w-140 max-w-400 h-full flex fixed top-0 right-0 bg-white z-4500 transition-transform duration-300 flex-col ${isMenuOpen === true ? 'translate-x-0' : 'translate-x-full'}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex items-start justify-end basis-12",
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          "aria-label": "close-menu",
          className: "w-12 h-12 flex items-center justify-center text-center before-font-material before:content-['\\e5cd'] before:w-6 before:h-6 before:leading-6 before:block before:m-auto before:text-black",
          onClick: () => dispatch((0,common/* setIsMenuOpen */.MD)(false))
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "relative overflow-hidden grow",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "w-full h-full absolute top-0 left-0 overflow-x-hidden overflow-y-auto",
          children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
            children: routeListMemo
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(utils_alert/* default */.Z, {
      show: isShowExamGuardAlert,
      title: examGuardAlert.title,
      content: examGuardAlert.content,
      confirmText: "\u78BA\u5B9A",
      cancelText: "\u53D6\u6D88",
      onConfirm: handlePushRoute,
      onCancel: () => {
        setIsShowExamGuardAlert(false);
        dispatch((0,common/* setIsMenuOpen */.MD)(false));
      },
      theme: "warn"
    })]
  });
};

/* harmony default export */ var menu = (Menu);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/utils/meta.tsx





const MetaData = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
  children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
    children: "Words Up"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    charSet: "UTF-8"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    httpEquiv: "Content-Type",
    content: "text/html; charset=utf-8"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, maximum-scale=1"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "ie=edge"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "format-detection",
    content: "telephone=no"
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: `${""}/favicon/apple-icon-57x57.png`
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: `${""}/favicon/apple-icon-60x60.png`
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: `${""}/favicon/apple-icon-72x72.png`
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: `${""}/favicon/apple-icon-76x76.png`
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: `${""}/favicon/apple-icon-114x114.png`
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: `${""}/favicon/apple-icon-120x120.png`
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: `${""}/favicon/apple-icon-144x144.png`
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: `${""}/favicon/apple-icon-152x152.png`
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: `${""}/favicon/apple-icon-180x180.png`
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: `${""}/favicon/android-icon-192x192.png`
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: `${""}/favicon/favicon-32x32.png`
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: `${""}/favicon/favicon-96x96.png`
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: `${""}/favicon/favicon-16x16.png`
  }), /*#__PURE__*/jsx_runtime_.jsx("link", {
    rel: "manifest",
    href: "https://waveciou-wordsup.vercel.app/manifest.json"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "msapplication-TileColor",
    content: "#ffffff"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "msapplication-TileImage",
    content: `${""}/favicon/ms-icon-144x144.png`
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "theme-color",
    content: "#ffffff"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "description",
    content: "\u4E00\u500B\u55AE\u5B57\u5B78\u7FD2\u5E73\u53F0\u7684 side project"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "og:title",
    content: "Words Up"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "og:description",
    content: "\u4E00\u500B\u55AE\u5B57\u5B78\u7FD2\u5E73\u53F0\u7684 side project"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    property: "og:image",
    content: "hhttps://waveciou-wordsup.vercel.app/img/icon.jpg"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "twitter:title",
    content: "Words Up"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "twitter:description",
    content: "\u4E00\u500B\u55AE\u5B57\u5B78\u7FD2\u5E73\u53F0\u7684 side project"
  }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
    name: "twitter:image",
    content: "https://waveciou-wordsup.vercel.app/img/icon.jpg"
  })]
});

/* harmony default export */ var meta = (MetaData);
;// CONCATENATED MODULE: ./src/functions/debounce.ts
const debounce = (fn, delay = 100) => {
  let timer;

  function debounced(...args) {
    const context = this;
    const _args = args;
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      fn.apply(context, _args);
    }, delay);
  }

  debounced.clear = () => {
    window.clearTimeout(timer);
  };

  return debounced;
};

/* harmony default export */ var functions_debounce = (debounce);
;// CONCATENATED MODULE: ./src/functions/googleSheetAPI/loadAPIScrpit.ts
const loadGapiScript = handleCallback => {
  const existingScript = document.getElementById('googleApis');

  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.id = 'googleApis';
    document.body.appendChild(script);

    script.onload = () => {
      if (handleCallback) {
        handleCallback();
      }
    };
  }

  if (existingScript && handleCallback) {
    handleCallback();
  }
};

/* harmony default export */ var loadAPIScrpit = (loadGapiScript);
// EXTERNAL MODULE: ./src/hooks/useGetSheetData.ts + 2 modules
var useGetSheetData = __webpack_require__(686);
// EXTERNAL MODULE: ./src/hooks/useScrollToTop.ts
var useScrollToTop = __webpack_require__(2143);
;// CONCATENATED MODULE: ./src/hooks/useSetDailyCase.ts
/**
 * Verify data from IndexedDB to return correct daily case.
 */



const useSetDailyCase = () => {
  const WORDS_DATA = (0,external_react_redux_.useSelector)(state => state.collection.words);
  console.log(WORDS_DATA);
  return (0,external_react_.useCallback)((dateId, localData) => {
    const result = {
      date: dateId,
      words: []
    };
    let hasLocalData = false;

    if (localData) {
      const {
        date = '',
        words = []
      } = JSON.parse(JSON.stringify(localData));
      const wordsNumberToSet = new Set(words);
      console.log(localData);

      if (date === dateId && wordsNumberToSet.size === 10) {
        const cleanedWords = [...wordsNumberToSet];
        const isConfirm = cleanedWords.every(wordId => WORDS_DATA.findIndex(({
          id
        }) => id === wordId) >= 0);

        if (isConfirm) {
          hasLocalData = true;
          result.words = [...cleanedWords];
        }
      }
    }

    if (hasLocalData === false) {
      console.log("false"); //const randoms: number[] = randomCollection(10, WORDS_DATA.length);
      //result.words = randoms.map((num: number) => WORDS_DATA[num].id);

      const startDay = new Date('2024-09-27'); // 設定固定的開始日期

      const currentDate = new Date(dateId);
      const diffTime = currentDate.getTime() - startDay.getTime(); // 計算時間差

      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // 將時間差轉換為天數

      const totalWords = WORDS_DATA.length;
      const startIndex = diffDays * 10 % totalWords; // 計算起始索引並處理超出範圍

      const endIndex = (startIndex + 10) % totalWords; // 計算結束索引並處理超出範圍

      if (totalWords > 0) {
        if (endIndex > startIndex) {
          // 確保在不需要從頭開始的情況下
          const wordsSlice = WORDS_DATA.slice(startIndex, endIndex);
          result.words = wordsSlice.map(word => word.id);
        } else {
          // 處理從頭開始的情況
          const wordsSlice = [...WORDS_DATA.slice(startIndex), ...WORDS_DATA.slice(0, endIndex)];
          result.words = wordsSlice.map(word => word.id);
        }
      }
    }

    return result;
  }, [WORDS_DATA]);
};

/* harmony default export */ var hooks_useSetDailyCase = (useSetDailyCase);
// EXTERNAL MODULE: ./src/hooks/useSetDailyWords.ts
var useSetDailyWords = __webpack_require__(7467);
// EXTERNAL MODULE: ./src/hooks/useSetDate.ts
var useSetDate = __webpack_require__(9166);
// EXTERNAL MODULE: ./store/slice/collection.tsx
var collection = __webpack_require__(9576);
;// CONCATENATED MODULE: ./src/hooks/useSetFavorate.ts
/* eslint-disable no-console */





const useSetFavorate = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const WORDS_DATA = (0,external_react_redux_.useSelector)(state => state.collection.words);
  return (0,external_react_.useCallback)(localData => {
    const wordsUpStore = (0,external_idb_keyval_.createStore)('wordsUpDB', 'wordsUpStore');
    const {
      local,
      global
    } = localData.reduce((prev, current) => {
      const word = WORDS_DATA.find(({
        id
      }) => id === current);

      if (word) {
        prev.local.push(current);
        prev.global.push(word);
      }

      return prev;
    }, {
      local: [],
      global: []
    });
    dispatch((0,collection/* setFavoriteItems */.Qz)(global));
    (0,external_idb_keyval_.set)('favorite', local, wordsUpStore).then(() => console.log('set favorite successfully')).catch(error => console.log('set favorite failed', error));
  }, [WORDS_DATA, dispatch]);
};

/* harmony default export */ var hooks_useSetFavorate = (useSetFavorate);
// EXTERNAL MODULE: ./src/interfaces/exam.ts
var exam = __webpack_require__(6218);
;// CONCATENATED MODULE: ./src/functions/examIdValidator.ts

const examIdCollection = [exam/* EnumWritedExamID.RANDOM */.p.RANDOM, exam/* EnumWritedExamID.DAILY */.p.DAILY, exam/* EnumWritedExamID.FAVORITE */.p.FAVORITE, exam/* EnumSelectedExamID.RANDOM */.X.RANDOM, exam/* EnumSelectedExamID.DAILY */.X.DAILY, exam/* EnumSelectedExamID.FAVORITE */.X.FAVORITE];

const examIdValidator = id => {
  const collectionSet = new Set(examIdCollection);
  return collectionSet.has(id);
};

/* harmony default export */ var functions_examIdValidator = (examIdValidator);
// EXTERNAL MODULE: ./store/slice/exam.tsx
var slice_exam = __webpack_require__(347);
;// CONCATENATED MODULE: ./src/hooks/useSetRecord.ts
/**
 * Verify data from IndexedDB and set correct record collection.
 */





const useSetRecord = () => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const WORDS_DATA = (0,external_react_redux_.useSelector)(state => state.collection.words);

  const checkTypes = (payload, base) => {
    switch (base) {
      case 'string':
        return typeof payload === 'string';

      case 'number':
        return typeof payload === 'number';

      default:
        return false;
    }
  };

  return (0,external_react_.useCallback)(localData => {
    if (localData) {
      if (Array.isArray(localData)) {
        const result = [...localData].reduce((prev, current) => {
          const {
            id = '',
            startTime = 0,
            finishTime = 0,
            answerState = []
          } = current;

          const isConfirm = (() => {
            const isId = functions_examIdValidator(id);
            const isStartTime = checkTypes(startTime, 'number') && startTime !== 0;
            const isFinishTime = checkTypes(startTime, 'number') && finishTime !== 0;
            const isAnswerState = Array.isArray(answerState) && answerState.length > 0;
            return isId && isStartTime && isFinishTime && isAnswerState;
          })();

          if (isConfirm) {
            const answerStateData = answerState.reduce((prevAns, currentAns) => {
              if (checkTypes(currentAns.id, 'string') && checkTypes(currentAns.answer, 'string')) {
                const word = WORDS_DATA.find(item => item.id === currentAns.id);

                if (word) {
                  return [...prevAns, {
                    id: currentAns.id,
                    answer: currentAns.answer,
                    solution: word.en,
                    result: currentAns.answer === word.en
                  }];
                }
              }

              return [...prevAns];
            }, []);
            return [...prev, {
              id,
              startTime,
              finishTime,
              answerState: answerStateData
            }];
          }

          return [...prev];
        }, []);
        dispatch((0,slice_exam/* setRecordCollection */.jh)(result));
      }
    }
  }, [WORDS_DATA]);
};

/* harmony default export */ var hooks_useSetRecord = (useSetRecord);
;// CONCATENATED MODULE: ./components/layout/index.tsx
























const Layout = ({
  children
}) => {
  external_dayjs_default().extend((utc_default()));
  const dispatch = (0,external_react_redux_.useDispatch)();
  const router = (0,router_.useRouter)();
  const handleGetData = (0,useGetSheetData/* default */.Z)();
  const handleScrollToTop = (0,useScrollToTop/* default */.Z)();
  const handleSetDate = (0,useSetDate/* default */.Z)();
  const handleSetDailyCase = hooks_useSetDailyCase();
  const handleSetDailyWords = (0,useSetDailyWords/* default */.Z)();
  const handleSetFavorate = hooks_useSetFavorate();
  const handleSetRecord = hooks_useSetRecord();
  const WORDS_DATA = (0,external_react_redux_.useSelector)(state => state.collection.words);
  const {
    isAppMounted,
    isMenuOpen,
    scrollValue
  } = (0,external_react_redux_.useSelector)(state => state.common);
  const {
    dateId
  } = (0,external_react_redux_.useSelector)(state => state.daily); // Get browser screen width

  const handleGetScreenWidth = (0,external_react_.useCallback)(() => {
    const value = window.innerWidth;
    dispatch((0,common/* setScreenWidth */.UH)(value));
  }, [dispatch]); // Get Scroll Value (Desktop, >= 1025)

  const handleGetScrollValue = (0,external_react_.useCallback)(() => {
    const value = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    dispatch((0,common/* setScrollValue */.yr)(value));
  }, [dispatch]); // Get Scroll Value (Tablet, Mobile, <= 1024)

  const handleGetLayoutScrollValue = (0,external_react_.useCallback)(e => {
    const value = e.target.scrollTop;
    dispatch((0,common/* setScrollValue */.yr)(value));
  }, [dispatch]);
  (0,external_react_.useEffect)(() => {
    dispatch((0,common/* setIsAppMounted */.NF)(true));
  }, [dispatch]); // Get initialization data flow

  (0,external_react_.useEffect)(() => {
    const handleResize = functions_debounce(() => handleGetScreenWidth(), 400);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleGetScrollValue);
    handleGetScreenWidth();
    handleGetScrollValue();
    return () => {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleGetScrollValue);
    };
  }, [dispatch, handleGetScreenWidth, handleGetScrollValue]); // Close menu when router change

  (0,external_react_.useEffect)(() => {
    handleScrollToTop();
    dispatch((0,common/* setIsMenuOpen */.MD)(false));
  }, [dispatch, router]); // Layout fixed when menu opening

  (0,external_react_.useEffect)(() => {
    if (isMenuOpen === true) {
      document.documentElement.classList.add('is-fixed');
    } else {
      document.documentElement.classList.remove('is-fixed');
    }
  }, [isMenuOpen]); // Get date and set date caption

  (0,external_react_.useEffect)(() => {
    handleSetDate();
  }, []);
  (0,external_react_.useEffect)(() => {
    if (!!dateId && WORDS_DATA.length > 10) {
      const wordsUpStore = (0,external_idb_keyval_.createStore)('wordsUpDB', 'wordsUpStore');
      (0,external_idb_keyval_.get)('daily', wordsUpStore).then(value => {
        const dailyCase = handleSetDailyCase(dateId, value);
        handleSetDailyWords(dailyCase);
      });
    }
  }, [dateId, WORDS_DATA]); // Get record and set record collection

  (0,external_react_.useEffect)(() => {
    if (WORDS_DATA.length) {
      const wordsUpStore = (0,external_idb_keyval_.createStore)('wordsUpDB', 'wordsUpStore');
      (0,external_idb_keyval_.get)('record', wordsUpStore).then(value => {
        const localData = value || [];
        handleSetRecord(localData);
      });
    }
  }, [WORDS_DATA]); // Get local data and set favorate words

  (0,external_react_.useEffect)(() => {
    if (WORDS_DATA.length) {
      const wordsUpStore = (0,external_idb_keyval_.createStore)('wordsUpDB', 'wordsUpStore');
      (0,external_idb_keyval_.get)('favorite', wordsUpStore).then(value => {
        const localData = value || [];

        if (Array.isArray(localData) && localData.length > 0) {
          handleSetFavorate(localData);
        }
      });
    }
  }, [WORDS_DATA]); // Import Google Sheet API

  (0,external_react_.useEffect)(() => {
    if (isAppMounted) {
      loadAPIScrpit(() => {
        window.gapi.load('client:auth2', () => {
          handleGetData();
        });
      });
    }
  }, [handleGetData, isAppMounted]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(meta, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: "__layout",
      onScroll: handleGetLayoutScrollValue,
      children: [/*#__PURE__*/jsx_runtime_.jsx(header, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
        id: "__main",
        className: "pt-header-height",
        children: children
      }), scrollValue > 0 && /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "button",
        "aria-label": "scroll-to-top-button",
        className: "w-10 h-10 block fixed right-5 bottom-12 bg-green-dark/60 rounded-full before-font-material before:content-['\\e5d8'] before:leading-10 before:text-yellow",
        onClick: handleScrollToTop
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        "aria-hidden": "true",
        onClick: () => dispatch((0,common/* setIsMenuOpen */.MD)(false)),
        className: `w-full h-full fixed top-0 left-0 z-4000 bg-black/70 transition-opacity ${isMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`
      }), /*#__PURE__*/jsx_runtime_.jsx(menu, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx(loader, {})]
  });
};

/* harmony default export */ var layout = (Layout);
;// CONCATENATED MODULE: ./components/layout/failed.tsx






const LayoutFailed = ({
  children
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
  children: [/*#__PURE__*/jsx_runtime_.jsx(meta, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "content size-small bg-transparent",
    children: children
  })]
});

/* harmony default export */ var failed = (LayoutFailed);
// EXTERNAL MODULE: ./store/slice/daily.tsx
var daily = __webpack_require__(9054);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(6139);
;// CONCATENATED MODULE: ./store/index.tsx





const store = (0,toolkit_.configureStore)({
  reducer: {
    common: common/* default */.ZP,
    collection: collection/* default */.ZP,
    daily: daily/* default */.ZP,
    exam: slice_exam/* default */.ZP
  }
});
;// CONCATENATED MODULE: ./pages/_app.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const App = ({
  Component,
  pageProps
}) => {
  const {
    pathname
  } = (0,router_.useRouter)();
  const failedPagesSet = new Set(['/404', '/error']);
  const pageMemo = (0,external_react_.useMemo)(() => {
    if (failedPagesSet.has(pathname)) {
      return /*#__PURE__*/jsx_runtime_.jsx(failed, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      });
    }

    return /*#__PURE__*/jsx_runtime_.jsx(layout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    });
  }, [Component, pageProps, pathname]);
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
    store: store,
    children: pageMemo
  });
};

/* harmony default export */ var _app = (App);

/***/ }),

/***/ 2143:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);



const useScrollToTop = () => {
  const {
    screenWidth
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.common);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (screenWidth > 1024) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById('__layout');

      if (element !== null) {
        element.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }, [screenWidth]);
};

/* harmony default export */ __webpack_exports__["Z"] = (useScrollToTop);

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



/***/ }),

/***/ 8898:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"route":[{"id":"home","name":"今日單字","path":"/"},{"id":"quiz","name":"單字測驗","path":"/quiz"},{"id":"collection","name":"單字列表","path":"/collection"},{"id":"favorite","name":"收藏單字","path":"/favorite"},{"id":"record","name":"測驗紀錄","path":"/record"},{"id":"info","name":"更多資訊","path":"/info"}]}');

/***/ }),

/***/ 6139:
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ 8349:
/***/ (function(module) {

"use strict";
module.exports = require("dayjs");;

/***/ }),

/***/ 7899:
/***/ (function(module) {

"use strict";
module.exports = require("dayjs/plugin/utc");;

/***/ }),

/***/ 1261:
/***/ (function(module) {

"use strict";
module.exports = require("idb-keyval");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 2268:
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 3810:
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,347,576,744,686,535], function() { return __webpack_exec__(7996); });
module.exports = __webpack_exports__;

})();