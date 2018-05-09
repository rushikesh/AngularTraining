import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[highlight]",
  host: {
    "(mouseover)": "onMouseOver($event)",
    "(mouseout)": "onMouseOut($event)"
  }
})
export class HighlightDirective {
  constructor(ele: ElementRef) {
    ele.nativeElement.style.backgroundColor = "Cyan";
  }
  onMouseOver(event) {
    event.target.style.backgroundColor = "red";
  }
  onMouseOut(event) {
    event.target.style.backgroundColor = "yellow";
  }
}
