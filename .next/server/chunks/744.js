exports.id = 744;
exports.ids = [744];
exports.modules = {

/***/ 6744:
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






const Alert = ({
  show,
  title,
  content = '',
  confirmText,
  cancelText,
  onConfirm = () => {},
  onCancel = () => {},
  theme = ''
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

  const modalContent = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_3__.CSSTransition, {
    in: show,
    timeout: 400,
    classNames: "fade",
    nodeRef: nodeRef,
    unmountOnExit: true,
    appear: true,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      ref: nodeRef,
      className: "w-full h-full flex items-center justify-center fixed top-0 left-0 z-6000 bg-black/90",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-72 relative overflow-hidden rounded-lg bg-white",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "p-4 text-center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "text-sm leading-7 mb-2",
            children: title
          }), theme === '' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "text-xxs leading-5",
            children: content
          }), theme === 'warn' && content !== '' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex items-center justify-center text-xxs leading-5 text-red before-font-material before:content-['\\e002'] before:block before:mr-1",
            children: content
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "flex border-t border-gray border-solid",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            type: "button",
            className: "px-1 py-2 grow text-sm",
            onClick: onConfirm,
            children: confirmText
          }), cancelText && onCancel && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            type: "button",
            className: "px-1 py-2 grow text-sm border-l border-t-0 border-r-0 border-b-0 border-gray border-solid",
            onClick: onCancel,
            children: cancelText
          })]
        })]
      })
    })
  });

  if (isBrowser === true) {
    return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_2___default().createPortal(modalContent, document.getElementById('modal-root-alert'));
  }

  return null;
};

/* harmony default export */ __webpack_exports__["Z"] = (Alert);

/***/ })

};
;