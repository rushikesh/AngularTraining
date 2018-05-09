import { Component } from "@angular/core";
import { MovieService } from "./movie.service";

@Component({
  selector: "movies",
  template: `<h3><b highlight>{{movie.name}}</b></h3>
            {{movie.synopsis}}`
})
export class MovieComponent {
  private movie;
  constructor(movieService: MovieService) {
    this.movie = {};
    movieService.generateRandomMovie(2000, movie => (this.movie = movie));
  }
}
