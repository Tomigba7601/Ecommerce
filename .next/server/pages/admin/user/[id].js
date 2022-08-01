(function() {
var exports = {};
exports.id = 3478;
exports.ids = [3478];
exports.modules = {

/***/ 655:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9873);
/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2236);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4941);
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(530);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2662);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3308);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_12__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true,
        error: ''
      });

    case 'FETCH_SUCCESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: ''
      });

    case 'FETCH_FAIL':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload
      });

    case 'UPDATE_REQUEST':
      return _objectSpread(_objectSpread({}, state), {}, {
        loadingUpdate: true,
        errorUpdate: ''
      });

    case 'UPDATE_SUCCESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        loadingUpdate: false,
        errorUpdate: ''
      });

    case 'UPDATE_FAIL':
      return _objectSpread(_objectSpread({}, state), {}, {
        loadingUpdate: false,
        errorUpdate: action.payload
      });

    case 'UPLOAD_REQUEST':
      return _objectSpread(_objectSpread({}, state), {}, {
        loadingUpload: true,
        errorUpload: ''
      });

    case 'UPLOAD_SUCCESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        loadingUpload: false,
        errorUpload: ''
      });

    case 'UPLOAD_FAIL':
      return _objectSpread(_objectSpread({}, state), {}, {
        loadingUpload: false,
        errorUpload: action.payload
      });

    default:
      return state;
  }
}

function UserEdit({
  params
}) {
  const userId = params.id;
  const {
    state
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .y);
  const {
    0: {
      loading,
      error,
      loadingUpdate
    },
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useReducer)(reducer, {
    loading: true,
    error: ''
  });
  const {
    handleSubmit,
    control,
    formState: {
      errors
    },
    setValue
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_11__.useForm)();
  const {
    0: isAdmin,
    1: setIsAdmin
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const {
    enqueueSnackbar,
    closeSnackbar
  } = (0,notistack__WEBPACK_IMPORTED_MODULE_12__.useSnackbar)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const classes = (0,_utils_styles__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)();
  const {
    userInfo
  } = state;
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (!userInfo) {
      return router.push('/login');
    } else {
      const fetchData = async () => {
        try {
          dispatch({
            type: 'FETCH_REQUEST'
          });
          const {
            data
          } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/admin/users/${userId}`, {
            headers: {
              authorization: `Bearer ${userInfo.token}`
            }
          });
          setIsAdmin(data.isAdmin);
          dispatch({
            type: 'FETCH_SUCCESS'
          });
          setValue('name', data.name);
        } catch (err) {
          dispatch({
            type: 'FETCH_FAIL',
            payload: (0,_utils_error__WEBPACK_IMPORTED_MODULE_7__/* .getError */ .b)(err)
          });
        }
      };

      fetchData();
    }
  }, []);

  const submitHandler = async ({
    name
  }) => {
    closeSnackbar();

    try {
      dispatch({
        type: 'UPDATE_REQUEST'
      });
      await axios__WEBPACK_IMPORTED_MODULE_1___default().put(`/api/admin/users/${userId}`, {
        name,
        isAdmin
      }, {
        headers: {
          authorization: `Bearer ${userInfo.token}`
        }
      });
      dispatch({
        type: 'UPDATE_SUCCESS'
      });
      enqueueSnackbar('User updated successfully', {
        variant: 'success'
      });
      router.push('/admin/users');
    } catch (err) {
      dispatch({
        type: 'UPDATE_FAIL',
        payload: (0,_utils_error__WEBPACK_IMPORTED_MODULE_7__/* .getError */ .b)(err)
      });
      enqueueSnackbar((0,_utils_error__WEBPACK_IMPORTED_MODULE_7__/* .getError */ .b)(err), {
        variant: 'error'
      });
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    title: `Edit User ${userId}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
      container: true,
      spacing: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
        item: true,
        md: 3,
        xs: 12,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Card, {
          className: classes.section,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.List, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
              href: "/admin/dashboard",
              passHref: true,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                button: true,
                component: "a",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {
                  primary: "Admin Dashboard"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
              href: "/admin/orders",
              passHref: true,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                button: true,
                component: "a",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {
                  primary: "Orders"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
              href: "/admin/products",
              passHref: true,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                button: true,
                component: "a",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {
                  primary: "Products"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
              href: "/admin/users",
              passHref: true,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                selected: true,
                button: true,
                component: "a",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {
                  primary: "Users"
                })
              })
            })]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
        item: true,
        md: 9,
        xs: 12,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Card, {
          className: classes.section,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.List, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                component: "h1",
                variant: "h1",
                children: ["Edit User ", userId]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
              children: [loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.CircularProgress, {}), error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                className: classes.error,
                children: error
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                onSubmit: handleSubmit(submitHandler),
                className: classes.form,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.List, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__.Controller, {
                      name: "name",
                      control: control,
                      defaultValue: "",
                      rules: {
                        required: true
                      },
                      render: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TextField, _objectSpread({
                        variant: "outlined",
                        fullWidth: true,
                        id: "name",
                        label: "Name",
                        error: Boolean(errors.name),
                        helperText: errors.name ? 'Name is required' : ''
                      }, field))
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.FormControlLabel, {
                      label: "Is Admin",
                      control: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {
                        onClick: e => setIsAdmin(e.target.checked),
                        checked: isAdmin,
                        name: "isAdmin"
                      })
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
                      variant: "contained",
                      type: "submit",
                      fullWidth: true,
                      color: "primary",
                      children: "Update"
                    }), loadingUpdate && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.CircularProgress, {})]
                  })]
                })
              })
            })]
          })
        })
      })]
    })
  });
}

async function getServerSideProps({
  params
}) {
  return {
    props: {
      params
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(UserEdit), {
  ssr: false
}));

/***/ }),

/***/ 1731:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ 3772:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Cancel");;

/***/ }),

/***/ 1358:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Menu");;

/***/ }),

/***/ 3016:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Search");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 6155:
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ 5619:
/***/ (function(module) {

"use strict";
module.exports = require("mongoose");;

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

/***/ 9639:
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 3308:
/***/ (function(module) {

"use strict";
module.exports = require("notistack");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 2662:
/***/ (function(module) {

"use strict";
module.exports = require("react-hook-form");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,6420,2236,3001,9452], function() { return __webpack_exec__(655); });
module.exports = __webpack_exports__;

})();