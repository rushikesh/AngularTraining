(function(app) {
  var Component = ng.core.Component;

  app.AppComponent = Component({
    selector: "my-app",
    template: "<h1>Hello World</h1>" + "<movies></movies>"
  }).Class({
    constructor: function AppComponent() {}
  });
})(window.app || (window.app = {}));
