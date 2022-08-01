(function() {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 8946:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__(4941);
// EXTERNAL MODULE: ./utils/db.js
var db = __webpack_require__(6420);
// EXTERNAL MODULE: ./models/Product.js
var Product = __webpack_require__(1908);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./utils/Store.js
var Store = __webpack_require__(2236);
// EXTERNAL MODULE: ./components/ProductItem.js
var ProductItem = __webpack_require__(4486);
;// CONCATENATED MODULE: external "react-material-ui-carousel"
var external_react_material_ui_carousel_namespaceObject = require("react-material-ui-carousel");;
var external_react_material_ui_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_material_ui_carousel_namespaceObject);
// EXTERNAL MODULE: ./utils/styles.js
var styles = __webpack_require__(530);
;// CONCATENATED MODULE: ./pages/index.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @next/next/no-img-element */












function Home(props) {
  const classes = (0,styles/* default */.Z)();
  const router = (0,router_.useRouter)();
  const {
    state,
    dispatch
  } = (0,external_react_.useContext)(Store/* Store */.y);
  const {
    topRatedProducts,
    featuredProducts
  } = props;

  const addToCartHandler = async product => {
    const existItem = state.cart.cartItems.find(x => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const {
      data
    } = await external_axios_default().get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }

    dispatch({
      type: 'CART_ADD_ITEM',
      payload: _objectSpread(_objectSpread({}, product), {}, {
        quantity
      })
    });
    router.push('/cart');
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_material_ui_carousel_default()), {
      className: classes.mt1,
      animation: "slide",
      children: featuredProducts.map(product => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `/product/${product.slug}`,
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(core_.Link, {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: product.featuredImage,
            alt: product.name,
            className: classes.featuredImage
          })
        })
      }, product._id))
    }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
      variant: "h2",
      children: "Popular Products"
    }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
      container: true,
      spacing: 3,
      children: topRatedProducts.map(product => /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
        item: true,
        md: 4,
        children: /*#__PURE__*/jsx_runtime_.jsx(ProductItem/* default */.Z, {
          product: product,
          addToCartHandler: addToCartHandler
        })
      }, product.name))
    })]
  });
}
async function getServerSideProps() {
  await db/* default.connect */.Z.connect();
  const featuredProductsDocs = await Product/* default.find */.Z.find({
    isFeatured: true
  }, '-reviews').lean().limit(3);
  const topRatedProductsDocs = await Product/* default.find */.Z.find({}, '-reviews').lean().sort({
    rating: -1
  }).limit(6);
  await db/* default.disconnect */.Z.disconnect();
  return {
    props: {
      featuredProducts: featuredProductsDocs.map(db/* default.convertDocToObj */.Z.convertDocToObj),
      topRatedProducts: topRatedProductsDocs.map(db/* default.convertDocToObj */.Z.convertDocToObj)
    }
  };
}

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

/***/ 4047:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ 9137:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ 2958:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/utils");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 3536:
/***/ (function(module) {

"use strict";
module.exports = require("clsx");;

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

/***/ 4229:
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

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

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,1394,6420,2236,3001,9452,1908,4486], function() { return __webpack_exec__(8946); });
module.exports = __webpack_exports__;

})();