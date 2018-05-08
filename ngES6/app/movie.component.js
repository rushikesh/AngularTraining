"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MovieComponent = undefined;

var _dec, _class;

var _core = require("@angular/core");

var _movie = require("./movie.service");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MovieComponent = exports.MovieComponent = (_dec = (0, _core.Component)({
  selector: "movies",
  template: "<b highlight>{{movie.name}}</b><br/>{{movie.synopsis}}"
}), _dec(_class = function MovieComponent(movieService) {
  var _this = this;

  _classCallCheck(this, MovieComponent);

  this.movie = {};
  movieService.generateRandomMovie(2000, function (movie) {
    return _this.movie = movie;
  });
}) || _class);
(0, _core.Inject)(_movie.MovieService)(MovieComponent, null, 0);