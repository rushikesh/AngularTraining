(function(app) {
  var Directive = ng.core.Directive;

  app.HighlightDirective = Directive({
    selector: "[highlight]",
    host: {
      "(mouseover)": "onMouseOver($event)",
      "(mouseout)": "onMouseOut($event)"
    }
  }).Class({
    constructor: function HighlightDirective() {
      console.log("Directive Initialized");
    },
    onMouseOver: function(event) {
      event.target.style.backgroundColor = "red";
    },
    onMouseOut: function(event) {
      event.target.style.backgroundColor = "yellow";
    }
  });
})(window.app || (window.app = {}));
