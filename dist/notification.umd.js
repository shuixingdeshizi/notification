(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Notification = factory());
}(this, function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var Card =
  /*#__PURE__*/
  function () {
    function Card(message) {
      _classCallCheck(this, Card);

      var div = document.createElement('div');
      div.dataset.name = 'card';
      div.style.cssText = "\n      width: auto\n      height: 1rem;\n      border-raidus: .2rem;\n      border: 1px solid green;\n      background: #fff;\n      line-height: 1;\n      padding: .2rem;\n      margin: .1rem;\n      border-radius: .1rem;\n      font-size: .3rem;\n      color: green;\n    ";
      div.innerHTML = message;
      this[0] = div;
      this.length = 1;
    }

    _createClass(Card, [{
      key: "remove",
      value: function remove() {
        var card = this[0];
        console.log(card);
        console.log(card.parentNode);
        card.parentNode.removeChild(card);
      }
    }]);

    return Card;
  }();

  var Notification =
  /*#__PURE__*/
  function () {
    function Notification(el) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Notification);

      this.wrapper = typeof el === 'string' ? document.querySelector(el) : el;
      this.options = options;
      this.wrapperOffsetHeight = this.wrapper.offsetHeight;
      this.wrapperOffsetWidth = this.wrapper.offsetWidth;
      this.maxCount = options.maxCount || 5;
      this.notifys = [];
    }

    _createClass(Notification, [{
      key: "push",
      value: function push(message) {
        var card = new Card(message);

        if (this.notifys.length >= this.maxCount) {
          this.remove(this.notifys.length - 1);
        }

        this.notifys.push(card);
        this.wrapper.appendChild(card[0]);
      }
    }, {
      key: "remove",
      value: function remove() {
        var _this = this;

        var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        var step = function step() {
          var node = _this.notifys.shift();

          node && node.remove();
          count--;
          console.log(count);

          if (count > 0) {
            setTimeout(step, 100);
          }
        };

        step();
      }
    }, {
      key: "clear",
      value: function clear(count) {
        this.remove(this.notifys.length);
      }
    }]);

    return Notification;
  }();

  return Notification;

}));
