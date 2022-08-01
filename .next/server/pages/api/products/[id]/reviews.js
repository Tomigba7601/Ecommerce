(function() {
var exports = {};
exports.id = 8873;
exports.ids = [8873];
exports.modules = {

/***/ 7965:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5619);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9303);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9873);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6420);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1908);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2898);
// /api/products/:id/reviews






const handler = next_connect__WEBPACK_IMPORTED_MODULE_1___default()({
  onError: _utils_error__WEBPACK_IMPORTED_MODULE_2__/* .onError */ .q
});
handler.get(async (req, res) => {
  _utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.connect */ .Z.connect();
  const product = await _models_Product__WEBPACK_IMPORTED_MODULE_4__/* .default.findById */ .Z.findById(req.query.id);
  _utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.disconnect */ .Z.disconnect();

  if (product) {
    res.send(product.reviews);
  } else {
    res.status(404).send({
      message: 'Product not found'
    });
  }
});
handler.use(_utils_auth__WEBPACK_IMPORTED_MODULE_5__/* .isAuth */ .$D).post(async (req, res) => {
  await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.connect */ .Z.connect();
  const product = await _models_Product__WEBPACK_IMPORTED_MODULE_4__/* .default.findById */ .Z.findById(req.query.id);

  if (product) {
    const existReview = product.reviews.find(x => x.user == req.user._id);

    if (existReview) {
      await _models_Product__WEBPACK_IMPORTED_MODULE_4__/* .default.updateOne */ .Z.updateOne({
        _id: req.query.id,
        'reviews._id': existReview._id
      }, {
        $set: {
          'reviews.$.comment': req.body.comment,
          'reviews.$.rating': Number(req.body.rating)
        }
      });
      const updatedProduct = await _models_Product__WEBPACK_IMPORTED_MODULE_4__/* .default.findById */ .Z.findById(req.query.id);
      updatedProduct.numReviews = updatedProduct.reviews.length;
      updatedProduct.rating = updatedProduct.reviews.reduce((a, c) => c.rating + a, 0) / updatedProduct.reviews.length;
      await updatedProduct.save();
      await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.disconnect */ .Z.disconnect();
      return res.send({
        message: 'Review updated'
      });
    } else {
      const review = {
        user: mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId(req.user._id),
        name: req.user.name,
        rating: Number(req.body.rating),
        comment: req.body.comment
      };
      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating = product.reviews.reduce((a, c) => c.rating + a, 0) / product.reviews.length;
      await product.save();
      await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.disconnect */ .Z.disconnect();
      res.status(201).send({
        message: 'Review submitted'
      });
    }
  } else {
    await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.disconnect */ .Z.disconnect();
    res.status(404).send({
      message: 'Product Not Found'
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
var __webpack_exports__ = __webpack_require__.X(0, [6420,2898,1908], function() { return __webpack_exec__(7965); });
module.exports = __webpack_exports__;

})();