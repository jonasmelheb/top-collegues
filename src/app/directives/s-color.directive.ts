import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[SColor]'
})
export class SColorDirective {

  private elementRef: ElementRef;

  constructor(elementRef: ElementRef){
    this.elementRef = elementRef;
  }

  @HostListener('click')
  blueColor() {
    this.changeColor('blue');
  }

  private changeColor(color: string){
    this.elementRef.nativeElement.style.color = color;
  }

}
