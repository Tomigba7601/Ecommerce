(function() {
var exports = {};
exports.id = 4373;
exports.ids = [4373];
exports.modules = {

/***/ 8964:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9303);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2898);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1908);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6420);




const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
handler.use(_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* .isAuth */ .$D, _utils_auth__WEBPACK_IMPORTED_MODULE_1__/* .isAdmin */ .GJ);
handler.get(async (req, res) => {
  await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.connect */ .Z.connect();
  const product = await _models_Product__WEBPACK_IMPORTED_MODULE_2__/* .default.findById */ .Z.findById(req.query.id);
  await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.disconnect */ .Z.disconnect();
  res.send(product);
});
handler.put(async (req, res) => {
  await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.connect */ .Z.connect();
  const product = await _models_Product__WEBPACK_IMPORTED_MODULE_2__/* .default.findById */ .Z.findById(req.query.id);

  if (product) {
    product.name = req.body.name;
    product.slug = req.body.slug;
    product.price = req.body.price;
    product.category = req.body.category;
    product.image = req.body.image;
    product.featuredImage = req.body.featuredImage;
    product.isFeatured = req.body.isFeatured;
    product.brand = req.body.brand;
    product.countInStock = req.body.countInStock;
    product.description = req.body.description;
    await product.save();
    await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.disconnect */ .Z.disconnect();
    res.send({
      message: 'Product Updated Successfully'
    });
  } else {
    await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.disconnect */ .Z.disconnect();
    res.status(404).send({
      message: 'Product Not Found'
    });
  }
});
handler.delete(async (req, res) => {
  await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.connect */ .Z.connect();
  const product = await _models_Product__WEBPACK_IMPORTED_MODULE_2__/* .default.findById */ .Z.findById(req.query.id);

  if (product) {
    await product.remove();
    await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.disconnect */ .Z.disconnect();
    res.send({
      message: 'Product Deleted'
    });
  } else {
    await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.disconnect */ .Z.disconnect();
    res.status(404).send({
      message: 'Product Not Found'
    });
  }
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

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
var __webpack_exports__ = __webpack_require__.X(0, [6420,2898,1908], function() { return __webpack_exec__(8964); });
module.exports = __webpack_exports__;

})();