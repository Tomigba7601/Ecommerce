(function() {
var exports = {};
exports.id = 3247;
exports.ids = [3247];
exports.modules = {

/***/ 1868:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9303);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2898);


const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
handler.use(_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* .isAuth */ .$D);
handler.get(async (req, res) => {
  res.send(process.env.GOOGLE_API_KEY || 'nokey');
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ 9722:
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

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
var __webpack_exports__ = __webpack_require__.X(0, [2898], function() { return __webpack_exec__(1868); });
module.exports = __webpack_exports__;

})();