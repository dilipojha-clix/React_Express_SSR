/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USER = exports.FETCH_USER = "FETCH_USER";
var fetchUsers = exports.fetchUsers = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(res) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log("===============>", res);
                        return _context.abrupt("return", {
                            type: FETCH_USER,
                            payload: res
                            /* dispatch({
                               type:FETCH_USER,
                               payload:res
                            }); */
                        });

                    case 2:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function fetchUsers(_x) {
        return _ref.apply(this, arguments);
    };
}();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

var _express = __webpack_require__(7);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(8);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(16);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.static('public'));

app.get("*", function (req, res) {
    /* some logic is initialize and load data into store */
    var store = (0, _createStore2.default)();
    /* here render react  */
    res.send((0, _renderer2.default)(req, store));
});
;
app.listen(3000, function () {
    console.log("Listing server 3000");
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(9);

var _reactRouterDom = __webpack_require__(1);

var _Routes = __webpack_require__(10);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {

    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.path, context: {} },
            _react2.default.createElement(_Routes2.default, null)
        )
    ));
    return '\n    <html>\n     <head></head>\n     <body>\n         <div id="root">' + content + '</div>\n         <script src="bundle.js"></script>\n     </body>\n    </html>\n    ';
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Menu = __webpack_require__(11);

var _Menu2 = _interopRequireDefault(_Menu);

var _Home = __webpack_require__(12);

var _Home2 = _interopRequireDefault(_Home);

var _About = __webpack_require__(13);

var _About2 = _interopRequireDefault(_About);

var _UserList = __webpack_require__(14);

var _UserList2 = _interopRequireDefault(_UserList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Menu2.default, null),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/about', component: _About2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/users', component: _UserList2.default })
    );
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu() {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "ul",
            null,
            _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: "/" },
                    "Home"
                )
            ),
            _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: "/about" },
                    "About"
                )
            ),
            _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: "/users" },
                    "Users"
                )
            )
        ),
        _react2.default.createElement("hr", null)
    );
};

exports.default = Menu;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {

  return _react2.default.createElement(
    "div",
    null,
    "Home page"
  );
};

exports.default = Home;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About() {
    return _react2.default.createElement(
        "div",
        null,
        "About"
    );
};

exports.default = About;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _action = __webpack_require__(3);

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserList = function (_Component) {
    _inherits(UserList, _Component);

    function UserList(props) {
        _classCallCheck(this, UserList);

        var _this = _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).call(this, props));

        _this.state = {
            list: []
        };

        return _this;
    }

    _createClass(UserList, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            _axios2.default.get('http://react-ssr-api.herokuapp.com/users').then(function (result) {
                _this2.setState({ list: result.data });
            }).catch(function (err) {});;
        }
    }, {
        key: "render",
        value: function render() {
            //   console.log("kkkkkkk",this.props.users)
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "h1",
                    null,
                    "User List"
                ),
                this.state.list && this.state.list.map(function (ele, i) {
                    return _react2.default.createElement(
                        "ul",
                        { key: i },
                        _react2.default.createElement(
                            "li",
                            { key: i },
                            ele.name
                        )
                    );
                })
            );
        }
    }]);

    return UserList;
}(_react.Component);

function mapStateToProps(state) {
    console.log("dkfnsdklnfkdlsngdfkln", state);
    return {
        users: state ? state.users : []
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _action.fetchUsers })(UserList);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(4);

var _reduxThunk = __webpack_require__(17);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(18);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var store = (0, _redux.createStore)((0, _reducers2.default)(), {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
    return store;
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createReducer;

var _redux = __webpack_require__(4);

var _userReducers = __webpack_require__(19);

var _userReducers2 = _interopRequireDefault(_userReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* 
export const rootReducer = () =>{
    combineReducers({
        users:userReducers
    })
}
 */
function createReducer() {
    return (0, _redux.combineReducers)({
        users: _userReducers2.default
    });
}

/*  export const store = createStore(
 createReducer(),)  */

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = userReducers;

var _action = __webpack_require__(3);

function userReducers() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    console.log("action.payload", state, action);
    switch (action.type) {

        case _action.FETCH_USER:

            return action.payload.data;

        default:
            return state;
    }
}

/***/ })
/******/ ]);