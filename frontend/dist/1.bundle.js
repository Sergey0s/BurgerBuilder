(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/components/Order/Order.css":
/*!****************************************!*\
  !*** ./src/components/Order/Order.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"Order\":\"Order__Order___4yi4Z\",\"order_span\":\"Order__order_span___35gjW\"};\n\n//# sourceURL=webpack:///./src/components/Order/Order.css?");

/***/ }),

/***/ "./src/components/Order/Order.js":
/*!***************************************!*\
  !*** ./src/components/Order/Order.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Order_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Order.css */ \"./src/components/Order/Order.css\");\n/* harmony import */ var _Order_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Order_css__WEBPACK_IMPORTED_MODULE_1__);\n\n // import {number} from \"prop-types\";\n\nvar order = function order(props) {\n  var ingredients = [];\n\n  for (var ingredientName in props.ingredients) {\n    ingredients.push({\n      name: ingredientName,\n      amount: props.ingredients[ingredientName]\n    });\n  }\n\n  var ingredientOutput = ingredients.map(function (ig) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      style: {\n        textTransform: 'capitalize',\n        display: \"inline-block\",\n        margin: '0 8px',\n        border: '1px solid #ccc',\n        padding: '5px'\n      },\n      key: ig.name\n    }, \" \", ig.name, \" (\", ig.amount, \")\");\n  });\n  var ordersData = Object.entries(props.orderData);\n  var orderDataOutput = ordersData.map(function (data) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      style: {\n        textTransform: 'capitalize',\n        display: \"inline-block\",\n        margin: '0 8px',\n        padding: '5px'\n      },\n      key: data[0]\n    }, \" \", data[0], \": \", data[1], \" \");\n  });\n  var orderDate = new Date(props.orderDate).toLocaleString();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _Order_css__WEBPACK_IMPORTED_MODULE_1___default.a.Order,\n    onClick: props.clicked\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: _Order_css__WEBPACK_IMPORTED_MODULE_1___default.a.order_span\n  }, \"Ingredients: \"), ingredientOutput, \" \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: _Order_css__WEBPACK_IMPORTED_MODULE_1___default.a.order_span\n  }, \"Price: USD\"), \" \", Number.parseFloat(props.price).toFixed(2), \" $\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: _Order_css__WEBPACK_IMPORTED_MODULE_1___default.a.order_span\n  }, \"Delivery data:\"), \" \", orderDataOutput), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: _Order_css__WEBPACK_IMPORTED_MODULE_1___default.a.order_span\n  }, \"Order date:\"), \" \", orderDate, \" \"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (order);\n\n//# sourceURL=webpack:///./src/components/Order/Order.js?");

/***/ }),

/***/ "./src/containers/Orders/Orders.js":
/*!*****************************************!*\
  !*** ./src/containers/Orders/Orders.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Order_Order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Order/Order */ \"./src/components/Order/Order.js\");\n/* harmony import */ var _axios_orders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../axios-orders */ \"./src/axios-orders.js\");\n/* harmony import */ var _hoc_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hoc/withErrorHandler/withErrorHandler */ \"./src/hoc/withErrorHandler/withErrorHandler.js\");\n/* harmony import */ var _store_actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/index */ \"./src/store/actions/index.js\");\n/* harmony import */ var _components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/UI/Spinner/Spinner */ \"./src/components/UI/Spinner/Spinner.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\nvar Orders =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Orders, _Component);\n\n  function Orders() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Orders);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Orders)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _this.deleteOrderHandler = function (orderId) {\n      _axios_orders__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post('http://localhost:3003/orders/delete?access_token=' + _this.props.token, {\n        orderId: orderId\n      }).then(function (res) {\n        _this.props.onFetchOrders(_this.props.token, _this.props.userId);\n      })[\"catch\"](function (err) {\n        return err.response.data;\n      });\n    };\n\n    return _this;\n  }\n\n  _createClass(Orders, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.onFetchOrders(this.props.token, this.props.userId);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var orders = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null);\n\n      if (!this.props.loading) {\n        if (!this.props.error) {\n          if (this.props.orders.length === 0) {\n            orders = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n              style: {\n                margin: '80px'\n              }\n            }, \" No orders created yet. Make your first one ;) \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n              href: \"/\"\n            }, \" Back to main page \"), \" \");\n          } else {\n            orders = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n              style: {\n                marginTop: '80px'\n              }\n            }, \" \", this.props.orders.map(function (order) {\n              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Order_Order__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                ingredients: order.ingredients,\n                price: order.totalPrice,\n                orderData: order.orderData,\n                orderDate: order.createdAt,\n                key: order.id,\n                clicked: function clicked() {\n                  return _this2.deleteOrderHandler(order.id);\n                }\n              });\n            }));\n          }\n        } else {\n          orders = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n            style: {\n              margin: '80px'\n            }\n          }, \" \", this.props.error, \" \");\n        }\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, orders);\n    }\n  }]);\n\n  return Orders;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    orders: state.order.orders,\n    loading: state.order.loading,\n    token: state.auth.token,\n    userId: state.auth.userId,\n    error: state.auth.error\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onFetchOrders: function onFetchOrders(token, userId) {\n      return dispatch(_store_actions_index__WEBPACK_IMPORTED_MODULE_5__[\"fetchOrders\"](token, userId));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Object(_hoc_withErrorHandler_withErrorHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Orders, _axios_orders__WEBPACK_IMPORTED_MODULE_3__[\"default\"])));\n\n//# sourceURL=webpack:///./src/containers/Orders/Orders.js?");

/***/ })

}]);