"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppModule = undefined;

var _dec, _class;

var _core = require("@angular/core");

var _platformBrowser = require("@angular/platform-browser");

var _movie = require("./movie.service");

var _highlight = require("./highlight.directive");

var _movie2 = require("./movie.component");

var _app = require("./app.component");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppModule = exports.AppModule = (_dec = (0, _core.NgModule)({
  imports: [_platformBrowser.BrowserModule],
  providers: [_movie.MovieService],
  declarations: [_app.AppComponent, _movie2.MovieComponent, _highlight.HighlightDirective],
  bootstrap: [_app.AppComponent]
}), _dec(_class = function AppModule() {
  _classCallCheck(this, AppModule);
}) || _class);