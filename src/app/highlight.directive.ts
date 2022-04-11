import { Directive, ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( private elem: ElementRef) { 
    this.elem.nativeElement.style.backgroundcolor = "blue"
  }
  // @HostListener("click") onClicks(){
  //   this.textDeco("red")
  // }

  // @HostListener("dblclick") onDoubleClicks(){
  //   this.textDeco("None")
  // }
  // private textDeco(action:string){
  //   this.elem.nativeElement.style.color=action;
  // }
}
