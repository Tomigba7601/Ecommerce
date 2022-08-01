exports.id = 2236;
exports.ids = [2236];
exports.modules = {

/***/ 2236:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": function() { return /* binding */ Store; },
/* harmony export */   "g": function() { return /* binding */ StoreProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();
const initialState = {
  darkMode: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('darkMode') === 'ON' ? true : false,
  cart: {
    cartItems: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('cartItems') ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('cartItems')) : [],
    shippingAddress: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('shippingAddress') ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('shippingAddress')) : {
      location: {}
    },
    paymentMethod: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('paymentMethod') ? js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('paymentMethod') : ''
  },
  userInfo: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('userInfo') ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get('userInfo')) : null
};

function reducer(state, action) {
  switch (action.type) {
    case 'DARK_MODE_ON':
      return _objectSpread(_objectSpread({}, state), {}, {
        darkMode: true
      });

    case 'DARK_MODE_OFF':
      return _objectSpread(_objectSpread({}, state), {}, {
        darkMode: false
      });

    case 'CART_ADD_ITEM':
      {
        const newItem = action.payload;
        const existItem = state.cart.cartItems.find(item => item._id === newItem._id);
        const cartItems = existItem ? state.cart.cartItems.map(item => item.name === existItem.name ? newItem : item) : [...state.cart.cartItems, newItem];
        js_cookie__WEBPACK_IMPORTED_MODULE_1___default().set('cartItems', JSON.stringify(cartItems));
        return _objectSpread(_objectSpread({}, state), {}, {
          cart: _objectSpread(_objectSpread({}, state.cart), {}, {
            cartItems
          })
        });
      }

    case 'CART_REMOVE_ITEM':
      {
        const cartItems = state.cart.cartItems.filter(item => item._id !== action.payload._id);
        js_cookie__WEBPACK_IMPORTED_MODULE_1___default().set('cartItems', JSON.stringify(cartItems));
        return _objectSpread(_objectSpread({}, state), {}, {
          cart: _objectSpread(_objectSpread({}, state.cart), {}, {
            cartItems
          })
        });
      }

    case 'SAVE_SHIPPING_ADDRESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: _objectSpread(_objectSpread({}, state.cart), {}, {
          shippingAddress: _objectSpread(_objectSpread({}, state.cart.shippingAddress), action.payload)
        })
      });

    case 'SAVE_SHIPPING_ADDRESS_MAP_LOCATION':
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: _objectSpread(_objectSpread({}, state.cart), {}, {
          shippingAddress: _objectSpread(_objectSpread({}, state.cart.shippingAddress), {}, {
            location: action.payload
          })
        })
      });

    case 'SAVE_PAYMENT_METHOD':
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: _objectSpread(_objectSpread({}, state.cart), {}, {
          paymentMethod: action.payload
        })
      });

    case 'CART_CLEAR':
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: _objectSpread(_objectSpread({}, state.cart), {}, {
          cartItems: []
        })
      });

    case 'USER_LOGIN':
      return _objectSpread(_objectSpread({}, state), {}, {
        userInfo: action.payload
      });

    case 'USER_LOGOUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        userInfo: null,
        cart: {
          cartItems: [],
          shippingAddress: {
            location: {}
          },
          paymentMethod: ''
        }
      });

    default:
      return state;
  }
}

function StoreProvider(props) {
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer, initialState);
  const value = {
    state,
    dispatch
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Store.Provider, {
    value: value,
    children: props.children
  });
}

/***/ })

};
;