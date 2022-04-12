import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
// add highlight directive
export class HighlightDirective {

  constructor( private elem: ElementRef) { 
    this.elem.nativeElement.style.backgroundcolor = "blue"
  }
  
}
