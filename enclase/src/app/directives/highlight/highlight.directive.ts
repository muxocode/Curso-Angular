import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  oElement:HTMLElement;
  constructor(el:ElementRef) { 
    
    this.oElement = el.nativeElement as HTMLElement;

  
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.oElement.style.backgroundColor=this.oElement.getAttribute("color");
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.oElement.style.backgroundColor=null;


  }

}
