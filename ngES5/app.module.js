(function(app) {
  var NgModule = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;

  var MovieService = app.MovieService;
  var HighlightDirective = app.HighlightDirective;
  var MovieComponent = app.MovieComponent;
  var AppComponent = app.AppComponent;

  app.AppModule = NgModule({
    imports: [BrowserModule],
    providers: [MovieService],
    declarations: [AppComponent, MovieComponent, HighlightDirective],
    bootstrap: [AppComponent]
  }).Class({
    constructor: function AppModule() {}
  });
})(window.app || (window.app = {}));
