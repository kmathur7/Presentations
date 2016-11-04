import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  constructor(private elementref: ElementRef, private renderer: Renderer) {

    this.renderer.setElementStyle(this.elementref.nativeElement,'background-color','green');
   }

}
