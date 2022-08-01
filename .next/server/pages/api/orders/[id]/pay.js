(function() {
var exports = {};
exports.id = 7895;
exports.ids = [7895];
exports.modules = {

/***/ 9746:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9303);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5019);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6420);
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9873);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2898);





const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()({
  onError: _utils_error__WEBPACK_IMPORTED_MODULE_3__.default
});
handler.use(_utils_auth__WEBPACK_IMPORTED_MODULE_4__/* .isAuth */ .$D);
handler.put(async (req, res) => {
  await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* .default.connect */ .Z.connect();
  const order = await _models_Order__WEBPACK_IMPORTED_MODULE_1__/* .default.findById */ .Z.findById(req.query.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      email_address: req.body.email_address
    };
    const paidOrder = await order.save();
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* .default.disconnect */ .Z.disconnect();
    res.send({
      message: 'order paid',
      order: paidOrder
    });
  } else {
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* .default.disconnect */ .Z.disconnect();
    res.status(404).send({
      message: 'order not found'
    });
  }
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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [6420,2898,5019], function() { return __webpack_exec__(9746); });
module.exports = __webpack_exports__;

})();