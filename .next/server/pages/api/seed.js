(function() {
var exports = {};
exports.id = 5890;
exports.ids = [5890];
exports.modules = {

/***/ 6286:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9303);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
 // import Product from '../../models/Product';
// import db from '../../utils/db';
// import data from '../../utils/data';
// import User from '../../models/User';

const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
handler.get(async (req, res) => {
  return res.send({
    message: 'already seeded'
  }); // await db.connect();
  // await User.deleteMany();
  // await User.insertMany(data.users);
  // await Product.deleteMany();
  // await Product.insertMany(data.products);
  // await db.disconnect();
  // res.send({ message: 'seeded successfully' });
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ 9303:
/***/ (function(module) {

"use strict";
module.exports = require("next-connect");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(6286));
module.exports = __webpack_exports__;

})();