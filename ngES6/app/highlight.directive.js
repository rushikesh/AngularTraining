"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HighlightDirective = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = require("@angular/core");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HighlightDirective = exports.HighlightDirective = (_dec = (0, _core.Directive)({
  selector: "[highlight]",
  host: {
    "(mouseover)": "onMouseOver($event)",
    "(mouseout)": "onMouseOut($event)"
  }
}), _dec(_class = function () {
  function HighlightDirective(ele) {
    _classCallCheck(this, HighlightDirective);

    ele.nativeElement.style.backgroundColor = "Cyan";
  }

  _createClass(HighlightDirective, [{
    key: "onMouseOver",
    value: function onMouseOver(event) {
      event.target.style.backgroundColor = "red";
    }
  }, {
    key: "onMouseOut",
    value: function onMouseOut(event) {
      event.target.style.backgroundColor = "yellow";
    }
  }]);

  return HighlightDirective;
}()) || _class);
(0, _core.Inject)(_core.ElementRef)(HighlightDirective, null, 0);