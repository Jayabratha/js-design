function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"app\" [ngClass]=\"theme\">\n  <div class=\"container\">\n    <header class=\"app-header\">\n      <div class='logo-wrapper'>\n        <div class='logos'>\n          <img src=\"../assets/js-logo.svg\" class='jsd-logo' alt=\"Zest logo\" />\n          <img src=\"../assets/angular.svg\" class=\"angular-logo\" alt=\"Angular logo\" />\n          <h1>Zest UI - Angular Demo</h1>\n        </div>\n        <div class=\"theme-toggler\" [ngClass]=\"theme\" (click)=\"toggleTheme()\"></div>\n      </div>\n      <div class='desc'>A simple minimalistic web-component set to build form elements irrespective of your choice of\n        web framework.</div>\n      <jsd-button label='Explore'></jsd-button>\n      <jsd-button btn-style='secondary' [theme]=\"theme\" label='Docs'></jsd-button>\n    </header>\n    <main>\n      <div class='demo-form'>\n        <h2>Demo Form</h2>\n        <div class='form-wrapper'>\n          <form id='form' class='form' (input)='updateForm($event)' (submit)='submitForm($event)'>\n            <div class='form-field'>\n              <jsd-input id='name' name='name' label='name' placeholder='Enter your full name' [attr.theme]='theme'\n                [attr.value]='model.name' [attr.error-msg]='errors.name' full-width='true' autofocus required='true'>\n              </jsd-input>\n            </div>\n            <div class='form-field'>\n              <jsd-input id='age' name='age' label='age' placeholder='Enter your age' [attr.theme]='theme'\n                [attr.value]='model.age' [attr.error-msg]='errors.age' type='number' min='18' max='60' full-width='true'\n                required='true'>\n              </jsd-input>\n            </div>\n            <div class='form-field'>\n              <jsd-input id='address' name='address' label='address' placeholder='Enter your address'\n                [attr.theme]='theme' [attr.value]='model.address' [attr.error-msg]='errors.address' full-width='true'\n                required='true'>\n              </jsd-input>\n            </div>\n            <div class='form-field'>\n              <jsd-radio-chip id='gender' name='gender' label='gender' inline='true' [attr.vtheme]='theme'\n                [attr.value]='model.gender' [attr.theme]='theme' [attr.error-msg]='errors.gender' required='true'\n                list='[\"Male\", \"Female\", \"Other\"]'>\n              </jsd-radio-chip>\n            </div>\n            <div class='form-field'>\n              <jsd-radio id='diet' name='diet' label='diet' inline='true' [attr.theme]='theme' [attr.value]='model.diet'\n                [attr.error-msg]='errors.diet' required='true' list='[\"Vegeterian\", \"Non-Vegeterian\"]'>\n              </jsd-radio>\n            </div>\n            <div class='form-field'>\n              <jsd-checkbox id='agreement' name='agreement' [attr.theme]='theme'\n                [attr.value]='model.agreement ? \"[\\\"agree\\\"]\" : \"[]\"' [attr.error-msg]='errors.agreement'\n                required='true'\n                list='[{\"value\": \"agree\", \"label\": \"<p style=\\\"margin: -15px 0 0\\\">I agree to the <jsd-button btn-style=\\\"tertiary\\\" label=\\\"Terms and Conditions\\\">Test</jsd-button></p>\"}]'>\n              </jsd-checkbox>\n            </div>\n            <jsd-button type='submit' label='Submit' full-width='true'></jsd-button>\n          </form>\n          <div class='model'>\n            <div><span class='label'>Name -</span><span class='value'>{{model.name}}</span></div>\n            <div><span class='label'>Age -</span><span class='value'>{{model.age}}</span></div>\n            <div><span class='label'>Address -</span><span class='value'>{{model.address}}</span></div>\n            <div><span class='label'>Gender -</span><span class='value'>{{model.gender}}</span></div>\n            <div><span class='label'>Diet -</span><span class='value'>{{model.diet}}</span></div>\n            <div><span class='label'>Agreement -</span><span class='value'>{{model.agreement.toString()}}</span></div>\n          </div>\n        </div>\n      </div>\n    </main>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app.dark {\n  background-color: #282c34;\n  color: #ffffff;\n}\n.app.dark .form-wrapper .model {\n  background: rgba(255, 255, 255, 0.3);\n}\n.app.dark .form-wrapper .model .label {\n  color: #b5b5b5;\n}\n.app.light {\n  background-color: #ffffff;\n  color: #282c34;\n}\n.app h1,\n.app h2 {\n  font-weight: 500;\n}\n.app .app-header {\n  font-size: 1rem;\n  padding: 20px 0 20px;\n}\n.app .app-header img {\n  color: #61dafb;\n  height: 75%;\n  margin-right: 10px;\n  vertical-align: middle;\n}\n.app .app-header .logo-wrapper {\n  height: 50px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.app .app-header .logos {\n  position: relative;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.app .app-header .logos img.app-logo {\n  pointer-events: none;\n}\n.app .app-header .logos img.angular-logo {\n  height: 100%;\n}\n.app .app-header .desc {\n  margin: 20px 0;\n}\n.app .app-header .theme-toggler {\n  position: relative;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.app .app-header .theme-toggler.dark {\n  background-color: #ffffff;\n}\n.app .app-header .theme-toggler.light {\n  background-color: #282c34;\n}\n.app .container {\n  position: relative;\n  width: 90%;\n  max-width: 1000px;\n  min-height: 100vh;\n  margin: auto;\n}\n.app .demo-form {\n  width: 100%;\n  margin-top: 20px;\n}\n.app .form-wrapper {\n  display: -webkit-box;\n  display: flex;\n  padding-bottom: 20px;\n}\n.app .form-wrapper form {\n  width: 50%;\n  margin-right: 20px;\n}\n.app .form-wrapper form .form-field {\n  padding: 5px 0;\n}\n.app .form-wrapper .model {\n  width: 50%;\n  background-color: #f6f6f6;\n  border: 1px solid #edebeb;\n  margin: 0;\n  border-radius: 0.5rem;\n  padding: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n  height: auto;\n}\n.app .form-wrapper .model .label {\n  display: inline-block;\n  text-transform: uppercase;\n  letter-spacing: 0.2rem;\n  font-size: 0.8rem;\n  color: #909090;\n  padding: 0.6rem;\n  text-align: right;\n  width: 120px;\n}\n.app .form-wrapper .model .value {\n  font-size: 1.1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXkvRG9jdW1lbnRzL1dvcmtzcGFjZS9qcy1kZXNpZ24vZGVtb3MvYW5ndWxhci1kZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNBSjtBREVNO0VBQ0Usb0NBQUE7QUNBUjtBRENRO0VBQ0UsY0FBQTtBQ0NWO0FESUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNGSjtBRElFOztFQUVFLGdCQUFBO0FDRko7QURJRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQ0ZKO0FER0k7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNETjtBREdJO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDRE47QURHSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNETjtBREVNO0VBQ0Usb0JBQUE7QUNBUjtBREVNO0VBQ0UsWUFBQTtBQ0FSO0FER0k7RUFDRSxjQUFBO0FDRE47QURHSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNETjtBREVNO0VBQ0UseUJBQUE7QUNBUjtBREVNO0VBQ0UseUJBQUE7QUNBUjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNGSjtBREtFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDSEo7QURNRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG9CQUFBO0FDSko7QURNSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQ0pOO0FES007RUFDRSxjQUFBO0FDSFI7QURPSTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQ0xOO0FETU07RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDSlI7QURPTTtFQUNFLGlCQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwIHtcbiAgJi5kYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyYzM0O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC5mb3JtLXdyYXBwZXIge1xuICAgICAgLm1vZGVsIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgICAubGFiZWwge1xuICAgICAgICAgIGNvbG9yOiAjYjViNWI1O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICYubGlnaHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgY29sb3I6ICMyODJjMzQ7XG4gIH1cbiAgaDEsXG4gIGgyIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIC5hcHAtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZzogMjBweCAwIDIwcHg7XG4gICAgaW1nIHtcbiAgICAgIGNvbG9yOiAjNjFkYWZiO1xuICAgICAgaGVpZ2h0OiA3NSU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgICAubG9nby13cmFwcGVyIHtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgICAubG9nb3Mge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBpbWcuYXBwLWxvZ28ge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cbiAgICAgIGltZy5hbmd1bGFyLWxvZ28ge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICAgIC5kZXNjIHtcbiAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgIH1cbiAgICAudGhlbWUtdG9nZ2xlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICYuZGFyayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICB9XG4gICAgICAmLmxpZ2h0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgLmRlbW8tZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuXG4gIC5mb3JtLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG5cbiAgICBmb3JtIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAuZm9ybS1maWVsZCB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tb2RlbCB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWI7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIC5sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIGNvbG9yOiAjOTA5MDkwO1xuICAgICAgICBwYWRkaW5nOiAwLjZyZW07XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICB9XG5cbiAgICAgIC52YWx1ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLmFwcC5kYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uYXBwLmRhcmsgLmZvcm0td3JhcHBlciAubW9kZWwge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG4uYXBwLmRhcmsgLmZvcm0td3JhcHBlciAubW9kZWwgLmxhYmVsIHtcbiAgY29sb3I6ICNiNWI1YjU7XG59XG4uYXBwLmxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgY29sb3I6ICMyODJjMzQ7XG59XG4uYXBwIGgxLFxuLmFwcCBoMiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYXBwIC5hcHAtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiAyMHB4IDAgMjBweDtcbn1cbi5hcHAgLmFwcC1oZWFkZXIgaW1nIHtcbiAgY29sb3I6ICM2MWRhZmI7XG4gIGhlaWdodDogNzUlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uYXBwIC5hcHAtaGVhZGVyIC5sb2dvLXdyYXBwZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5hcHAgLmFwcC1oZWFkZXIgLmxvZ29zIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYXBwIC5hcHAtaGVhZGVyIC5sb2dvcyBpbWcuYXBwLWxvZ28ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5hcHAgLmFwcC1oZWFkZXIgLmxvZ29zIGltZy5hbmd1bGFyLWxvZ28ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYXBwIC5hcHAtaGVhZGVyIC5kZXNjIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4uYXBwIC5hcHAtaGVhZGVyIC50aGVtZS10b2dnbGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hcHAgLmFwcC1oZWFkZXIgLnRoZW1lLXRvZ2dsZXIuZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4uYXBwIC5hcHAtaGVhZGVyIC50aGVtZS10b2dnbGVyLmxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcbn1cbi5hcHAgLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IGF1dG87XG59XG4uYXBwIC5kZW1vLWZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5hcHAgLmZvcm0td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLmFwcCAuZm9ybS13cmFwcGVyIGZvcm0ge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uYXBwIC5mb3JtLXdyYXBwZXIgZm9ybSAuZm9ybS1maWVsZCB7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuLmFwcCAuZm9ybS13cmFwcGVyIC5tb2RlbCB7XG4gIHdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWI7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmFwcCAuZm9ybS13cmFwcGVyIC5tb2RlbCAubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogIzkwOTA5MDtcbiAgcGFkZGluZzogMC42cmVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd2lkdGg6IDEyMHB4O1xufVxuLmFwcCAuZm9ybS13cmFwcGVyIC5tb2RlbCAudmFsdWUge1xuICBmb250LXNpemU6IDEuMXJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _jsdesign_jsd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @jsdesign/jsd-button */
    "./node_modules/@jsdesign/jsd-button/button.js");
    /* harmony import */


    var _jsdesign_jsd_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @jsdesign/jsd-radio */
    "./node_modules/@jsdesign/jsd-radio/radio.js");
    /* harmony import */


    var _jsdesign_jsd_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @jsdesign/jsd-checkbox */
    "./node_modules/@jsdesign/jsd-checkbox/checkbox.js");
    /* harmony import */


    var _jsdesign_jsd_radio_chip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @jsdesign/jsd-radio-chip */
    "./node_modules/@jsdesign/jsd-radio-chip/radio-chip.js");
    /* harmony import */


    var _jsdesign_jsd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @jsdesign/jsd-input */
    "./node_modules/@jsdesign/jsd-input/input.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'angular-demo';
        this.theme = 'light';
        this.model = {
          name: 'John',
          age: 30,
          address: 'Bangalore',
          gender: '',
          diet: '',
          agreement: false
        };
        this.errors = {
          name: '',
          age: '',
          address: '',
          gender: '',
          diet: '',
          agreement: ''
        };
      }

      _createClass(AppComponent, [{
        key: "toggleTheme",
        value: function toggleTheme() {
          this.theme = this.theme === 'dark' ? 'light' : 'dark';
        }
      }, {
        key: "updateForm",
        value: function updateForm(event) {
          var _this = this;

          setTimeout(function () {
            var elem = event.target;
            var property = elem.id;
            var value = elem.getAttribute('value');

            if (property === 'agreement') {
              value = JSON.parse(value).length ? true : false;
            }

            _this.model[property] = value;

            _this.validateForm(_defineProperty({}, property, value));

            event = null;
          }, 0);
        }
      }, {
        key: "requiredValidation",
        value: function requiredValidation(property, value, errors) {
          if (value) {
            errors[property] = '';
          } else {
            errors[property] = "Please enter ".concat(property);
          }

          return errors;
        }
      }, {
        key: "validateForm",
        value: function validateForm(model) {
          var _this2 = this;

          var errorList = Object.assign({}, this.errors);
          Object.keys(model).forEach(function (property) {
            errorList = _this2.requiredValidation(property, model[property], errorList);
          });
          console.log(errorList);
          this.errors = errorList;
        }
      }, {
        key: "submitForm",
        value: function submitForm(e) {
          this.validateForm(this.model);
          console.log('Submit!');
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/jay/Documents/Workspace/js-design/demos/angular-demo/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map