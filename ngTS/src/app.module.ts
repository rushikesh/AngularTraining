import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MovieService } from "./movie.service";
import { HighlightDirective } from "./highlight.directive";
import { MovieComponent } from "./movie.component";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule],
  providers: [MovieService],
  declarations: [AppComponent, MovieComponent, HighlightDirective],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
