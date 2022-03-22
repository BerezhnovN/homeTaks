import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRainbowTextAnimation]'
})
export class RainbowTextAnimationDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.element.nativeElement, 'rainbow-animate')
  }
}
