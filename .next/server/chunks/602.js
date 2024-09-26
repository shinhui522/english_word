exports.id = 602;
exports.ids = [602];
exports.modules = {

/***/ 8602:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2268);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3810);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_3__);






const Popup = ({
  children,
  show,
  onClose
}) => {
  const {
    0: isBrowser,
    1: setIsBrowser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const nodeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setIsBrowser(true);
    return () => {
      document.documentElement.classList.remove('is-fixed');
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (show === true) {
      document.documentElement.classList.add('is-fixed');
    } else {
      document.documentElement.classList.remove('is-fixed');
    }
  }, [show]);

  const handleClosePopup = e => {
    e.preventDefault();
    onClose();
  };

  const modalContent = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_3__.CSSTransition, {
    in: show,
    timeout: 400,
    classNames: "fade",
    nodeRef: nodeRef,
    unmountOnExit: true,
    appear: true,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      ref: nodeRef,
      className: "w-full h-full flex items-center justify-center fixed top-0 left-0 z-5000 bg-black/90",
      "aria-hidden": "true",
      onClick: handleClosePopup,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "max-w-670 w-[calc(100%-20px)] min-h-300 max-h-[calc(100%-20px)] py-8 px-4 relative overflow-hidden rounded-lg bg-white desktop:px-5",
        "aria-hidden": "true",
        onClick: e => {
          e.stopPropagation();
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
          type: "button",
          "aria-label": "close-popup",
          className: "w-5 h-5 absolute overflow-hidden top-2.5 right-2.5 flex items-center justify-center text-center before-font-material before:content-['\\e5cd'] before:w-6 before:h-6 before:leading-6 before:block before:m-auto before:text-black",
          onClick: handleClosePopup
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "w-full h-full max-h-[calc(100vh-200px)] overflow-x-hidden overflow-y-auto",
          children: children
        })]
      })
    })
  });

  if (isBrowser === true) {
    return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_2___default().createPortal(modalContent, document.getElementById('modal-root-popup'));
  }

  return null;
};

/* harmony default export */ __webpack_exports__["Z"] = (Popup);

/***/ })

};
;