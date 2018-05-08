(function(app) {
  var Component = ng.core.Component;
  var MovieService = app.MovieService;

  app.MovieComponent = Component({
    selector: "movies",
    template: "<b highlight>{{movie.name}}</b><br/>{{movie.synopsis}}"
  }).Class({
    constructor: [
      MovieService,
      function MovieComponent(movieService) {
        this.movie = {};
        var self = this;
        movieService.generateRandomMovie(2000, function(movie) {
          self.movie = movie;
        });
      }
    ]
  });
})(window.app || (window.app = {}));
