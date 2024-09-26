exports.id = 940;
exports.ids = [940];
exports.modules = {

/***/ 940:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ph": function() { return /* binding */ Select; },
/* harmony export */   "oH": function() { return /* binding */ InputText; },
/* harmony export */   "KM": function() { return /* binding */ PrimaryButton; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// * Select
const Select = ({
  options,
  onChange
}) => {
  const {
    0: currentValue,
    1: setCurrentValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const result = options.length > 0 ? options[0].value : '';
    setCurrentValue(result);
  }, [options]);

  const handleOnChange = event => {
    setCurrentValue(event.target.value);
    onChange(event);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "element-select",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
      value: currentValue,
      onChange: handleOnChange,
      children: options.map(({
        value,
        name
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
        value: value,
        children: name
      }, value))
    })
  });
}; // * Input Text

const InputText = ({
  defaultValue = '',
  placeholder = '',
  onChange
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
  type: "text",
  className: "w-full h-10 block py-3 px-4 leading-4 rounded-md text-xs bg-gray-light",
  value: defaultValue,
  onChange: onChange,
  placeholder: placeholder
}); // * Primary Button

const PrimaryButton = ({
  text = '',
  colorStyle = 'green',
  isDisabled = false,
  onClick = () => {}
}) => {
  const ClassColorStyle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    switch (colorStyle) {
      case 'red':
        return 'bg-red desktop:hover:bg-wine';

      case 'green-dark':
        return 'bg-green-dark desktop:hover:bg-green';

      default:
        return 'bg-green desktop:hover:bg-green-dark';
    }
  }, [colorStyle]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
    type: "button",
    className: `min-w-105 py-2 px-5 mx-1.5 inline-block text-sm text-center text-white rounded-lg leading-6 ${isDisabled ? 'bg-gray-dark cursor-not-allowed' : ClassColorStyle}`,
    onClick: onClick,
    title: text,
    children: text
  });
};

/***/ })

};
;