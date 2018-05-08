import { Component, Inject } from "@angular/core";
import { MovieService } from "./movie.service";

@Component({
  selector: "movies",
  template: "<b highlight>{{movie.name}}</b><br/>{{movie.synopsis}}"
})
export class MovieComponent {
  constructor(@Inject(MovieService) movieService) {
    this.movie = {};
    movieService.generateRandomMovie(2000, movie => (this.movie = movie));
  }
}
