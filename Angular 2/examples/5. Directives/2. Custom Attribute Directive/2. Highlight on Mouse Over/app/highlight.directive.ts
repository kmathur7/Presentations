import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseover(){
    console.log('enter');
    this.backgroundColor = 'green';
  }
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }

  private backgroundColor = 'white';
  constructor() { }

}
