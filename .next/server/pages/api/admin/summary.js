(function() {
var exports = {};
exports.id = 4097;
exports.ids = [4097];
exports.modules = {

/***/ 5639:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5619);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
});
const User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', userSchema);
/* harmony default export */ __webpack_exports__["Z"] = (User);

/***/ }),

/***/ 2561:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9303);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5019);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1908);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5639);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2898);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6420);
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9873);







const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()({
  onError: _utils_error__WEBPACK_IMPORTED_MODULE_6__/* .onError */ .q
});
handler.use(_utils_auth__WEBPACK_IMPORTED_MODULE_4__/* .isAuth */ .$D, _utils_auth__WEBPACK_IMPORTED_MODULE_4__/* .isAdmin */ .GJ);
handler.get(async (req, res) => {
  await _utils_db__WEBPACK_IMPORTED_MODULE_5__/* .default.connect */ .Z.connect();
  const ordersCount = await _models_Order__WEBPACK_IMPORTED_MODULE_1__/* .default.countDocuments */ .Z.countDocuments();
  const productsCount = await _models_Product__WEBPACK_IMPORTED_MODULE_2__/* .default.countDocuments */ .Z.countDocuments();
  const usersCount = await _models_User__WEBPACK_IMPORTED_MODULE_3__/* .default.countDocuments */ .Z.countDocuments();
  const ordersPriceGroup = await _models_Order__WEBPACK_IMPORTED_MODULE_1__/* .default.aggregate */ .Z.aggregate([{
    $group: {
      _id: null,
      sales: {
        $sum: '$totalPrice'
      }
    }
  }]);
  const ordersPrice = ordersPriceGroup.length > 0 ? ordersPriceGroup[0].sales : 0;
  const salesData = await _models_Order__WEBPACK_IMPORTED_MODULE_1__/* .default.aggregate */ .Z.aggregate([{
    $group: {
      _id: {
        $dateToString: {
          format: '%Y-%m',
          date: '$createdAt'
        }
      },
      totalSales: {
        $sum: '$totalPrice'
      }
    }
  }]);
  await _utils_db__WEBPACK_IMPORTED_MODULE_5__/* .default.disconnect */ .Z.disconnect();
  res.send({
    ordersCount,
    productsCount,
    usersCount,
    ordersPrice,
    salesData
  });
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ 9873:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": function() { return /* binding */ getError; },
/* harmony export */   "q": function() { return /* binding */ onError; }
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6420);


const getError = err => err.response && err.response.data && err.response.data.message ? err.response.data.message : err.message;

const onError = async (err, req, res, next) => {
  await _db__WEBPACK_IMPORTED_MODULE_0__/* .default.disconnect */ .Z.disconnect();
  res.status(500).send({
    message: err.toString()
  });
};



/***/ }),

/***/ 9722:
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ 5619:
/***/ (function(module) {

"use strict";
module.exports = require("mongoose");;

/***/ }),

/***/ 9303:
/***/ (function(module) {

"use strict";
module.exports = require("next-connect");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [6420,2898,1908,5019], function() { return __webpack_exec__(2561); });
module.exports = __webpack_exports__;

})();