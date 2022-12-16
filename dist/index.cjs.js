'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('@babel/runtime/helpers/extends');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var _objectWithoutProperties = require('@babel/runtime/helpers/objectWithoutProperties');
var React = require('react');
var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');
var _inherits = require('@babel/runtime/helpers/inherits');
var _possibleConstructorReturn = require('@babel/runtime/helpers/possibleConstructorReturn');
var _getPrototypeOf = require('@babel/runtime/helpers/getPrototypeOf');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var _objectWithoutProperties__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutProperties);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var _classCallCheck__default = /*#__PURE__*/_interopDefaultLegacy(_classCallCheck);
var _createClass__default = /*#__PURE__*/_interopDefaultLegacy(_createClass);
var _inherits__default = /*#__PURE__*/_interopDefaultLegacy(_inherits);
var _possibleConstructorReturn__default = /*#__PURE__*/_interopDefaultLegacy(_possibleConstructorReturn);
var _getPrototypeOf__default = /*#__PURE__*/_interopDefaultLegacy(_getPrototypeOf);

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = "\n.flippy-container *\n{\n    box-sizing: border-box;\n}\n\n.flippy-cardContainer-wrapper\n{\n\tposition: relative;\n\theight: 100%;\n    width: 100%;\n}\n\n.flippy-cardContainer\n{\n    height: 100%;\n    width: 100%;\n    position: relative;\n\n    -webkit-transition: .6s;\n       -moz-transition: .6s;\n        -ms-transition: .6s;\n         -o-transition: .6s;\n            transition: .6s;\n    -moz-transform: perspective(1000px);\n         transform: perspective(1000px);\n\n    -webkit-transform-style: preserve-3d;\n       -moz-transform-style: preserve-3d;\n        -ms-transform-style: preserve-3d;\n         -o-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n}\n\n.flippy-front,\n.flippy-back\n{\n    position: relative;\n\n    width: 100%;\n    height: 100%;\n    padding: 1em;\n\n    -webkit-transform: rotateY(0deg);\n       -moz-transform: rotateY(0deg);\n        -ms-transform: rotateY(0deg);\n         -o-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n\n    background: transparent;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,.2);\n\n    -webkit-backface-visibility: hidden;\n       -moz-backface-visibility: hidden;\n        -ms-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-transform-style: preserve-3d;\n       -moz-transform-style: preserve-3d;\n         -o-transform-style: preserve-3d;\n        -ms-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n}\n\n.flippy-front\n{\n    -webkit-transform: rotateY(0deg);\n        -ms-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n}\n\n.flippy-back\n{\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    -webkit-transform: rotateY(-180deg);\n       -moz-transform: rotateY(-180deg);\n        -ms-transform: rotateY(-180deg);\n         -o-transform: rotateY(-180deg);\n            transform: rotateY(-180deg);\n}\n\n.flippy-cardContainer.isActive:not(.istouchdevice) .flippy-back,\n.flippy-cardContainer.isActive.istouchdevice .flippy-back\n{\n    -webkit-transform: rotateY(0deg);\n       -moz-transform: rotateY(0deg);\n        -ms-transform: rotateY(0deg);\n         -o-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n}\n\n.flippy-cardContainer.isActive:not(.istouchdevice) .flippy-front,\n.flippy-cardContainer.isActive.istouchdevice .flippy-front\n{\n    -webkit-transform: rotateY(180deg);\n       -moz-transform: rotateY(180deg);\n        -ms-transform: rotateY(180deg);\n         -o-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n}\n\n.flippy-cardContainer-wrapper.vertical .flippy-back\n{\n    -webkit-transform: rotateX(-180deg);\n       -moz-transform: rotateX(-180deg);\n        -ms-transform: rotateX(-180deg);\n         -o-transform: rotateX(-180deg);\n            transform: rotateX(-180deg);\n}\n\n.flippy-cardContainer-wrapper.vertical .flippy-cardContainer.isActive:not(.istouchdevice) .flippy-back,\n.flippy-cardContainer-wrapper.vertical .flippy-cardContainer.isActive.istouchdevice .flippy-back\n{\n    -webkit-transform: rotateX(0deg);\n       -moz-transform: rotateX(0deg);\n        -ms-transform: rotateX(0deg);\n         -o-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n}\n\n.flippy-cardContainer-wrapper.vertical .flippy-cardContainer.isActive:not(.istouchdevice) .flippy-front,\n.flippy-cardContainer-wrapper.vertical .flippy-cardContainer.isActive.istouchdevice .flippy-front\n{\n    -webkit-transform: rotateX(180deg);\n       -moz-transform: rotateX(180deg);\n         -o-transform: rotateX(180deg);\n            transform: rotateX(180deg);\n            transform: rotateX(180deg);\n}\n";
n(css,{});

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Flippy = /*#__PURE__*/React__default["default"].forwardRef(function (_ref, ref) {
  var _isFlipped = _ref.isFlipped,
      className = _ref.className,
      flipDirection = _ref.flipDirection,
      style = _ref.style,
      children = _ref.children,
      flipOnHover = _ref.flipOnHover,
      flipOnClick = _ref.flipOnClick,
      onClick = _ref.onClick,
      onTouchStart = _ref.onTouchStart,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      rest = _objectWithoutProperties__default["default"](_ref, ["isFlipped", "className", "flipDirection", "style", "children", "flipOnHover", "flipOnClick", "onClick", "onTouchStart", "onMouseEnter", "onMouseLeave"]);

  var simpleFlag = React.useRef({
    isTouchDevice: false
  });

  var _useState = React.useState(false),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      isTouchDevice = _useState2[0],
      setTouchDevice = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      isFlipped = _useState4[0],
      setFlipped = _useState4[1];

  var toggle = function toggle() {
    return setFlipped(!isFlipped);
  };

  React.useImperativeHandle(ref, function () {
    return {
      toggle: toggle
    };
  });

  var handleTouchStart = function handleTouchStart(event) {
    if (!isTouchDevice) {
      simpleFlag.current.isTouchDevice = true;
      setTouchDevice(true);
    }

    onTouchStart(event);
  };

  var handleMouseEnter = function handleMouseEnter(event) {
    if (flipOnHover && !simpleFlag.current.isTouchDevice) {
      setFlipped(true);
    }

    onMouseEnter(event);
  };

  var handleMouseLeave = function handleMouseLeave(event) {
    if (flipOnHover && !simpleFlag.current.isTouchDevice) {
      setFlipped(false);
    }

    onMouseLeave(event);
  };

  var handleClick = function handleClick(event) {
    switch (true) {
      case flipOnHover && !simpleFlag.current.isTouchDevice:
      case !flipOnClick && !flipOnHover:
        break;

      default:
        setFlipped(!isFlipped);
        break;
    }

    onClick(event);
  };

  React.useEffect(function () {
    if (typeof _isFlipped === 'boolean' && _isFlipped !== isFlipped) {
      setFlipped(_isFlipped);
    }
  }, [_isFlipped]);
  return /*#__PURE__*/React__default["default"].createElement("div", _extends__default["default"]({}, rest, {
    className: "flippy-container ".concat(className || ''),
    style: _objectSpread$1({}, style),
    onTouchStart: handleTouchStart,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flippy-cardContainer-wrapper ".concat(flipDirection)
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "flippy-cardContainer ".concat(isFlipped ? 'isActive' : '', " ").concat(isTouchDevice ? 'istouchdevice' : '')
  }, children)));
});
Flippy.defaultProps = {
  flipDirection: 'horizontal',
  flipOnHover: false,
  flipOnClick: true,
  isFlipped: false,
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onTouchStart: function onTouchStart() {},
  onClick: function onClick() {}
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf__default["default"](Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf__default["default"](this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn__default["default"](this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var FlippyCard = /*#__PURE__*/function (_React$Component) {
  _inherits__default["default"](FlippyCard, _React$Component);

  var _super = _createSuper(FlippyCard);

  function FlippyCard() {
    _classCallCheck__default["default"](this, FlippyCard);

    return _super.apply(this, arguments);
  }

  _createClass__default["default"](FlippyCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          cardType = _this$props.cardType,
          style = _this$props.style,
          elementType = _this$props.elementType,
          animationDuration = _this$props.animationDuration,
          rest = _objectWithoutProperties__default["default"](_this$props, ["className", "cardType", "style", "elementType", "animationDuration"]);

      return /*#__PURE__*/React__default["default"].createElement(elementType || 'div', _objectSpread(_objectSpread({
        className: "flippy-card flippy-".concat(cardType, " ").concat(className || '')
      }, rest), {}, {
        style: _objectSpread(_objectSpread({}, style || {}), {
          transitionDuration: "".concat(animationDuration / 1000, "s")
        })
      }), this.props.children);
    }
  }]);

  return FlippyCard;
}(React__default["default"].Component);

var FrontSide = function FrontSide(_ref) {
  _ref.isFlipped;
      var style = _ref.style,
      animationDuration = _ref.animationDuration,
      props = _objectWithoutProperties__default["default"](_ref, ["isFlipped", "style", "animationDuration"]);

  return /*#__PURE__*/React__default["default"].createElement(FlippyCard, _extends__default["default"]({}, props, {
    style: _objectSpread({}, style || {}),
    animationDuration: animationDuration,
    cardType: "front"
  }));
};
var BackSide = function BackSide(_ref2) {
  _ref2.isFlipped;
      var style = _ref2.style,
      props = _objectWithoutProperties__default["default"](_ref2, ["isFlipped", "style"]);

  return /*#__PURE__*/React__default["default"].createElement(FlippyCard, _extends__default["default"]({}, props, {
    style: _objectSpread({}, style || {}),
    cardType: "back"
  }));
};
FlippyCard.defaultProps = {
  animationDuration: 600
};

exports.BackSide = BackSide;
exports.Flippy = Flippy;
exports.FrontSide = FrontSide;
exports["default"] = Flippy;
