import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `<h1>IMDB Top 50 Movies</h1>
  <movies></movies>`
})
export class AppComponent {
  constructor() {}
}
