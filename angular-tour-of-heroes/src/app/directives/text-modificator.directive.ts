import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextModificator]',
})
export class TextModificatorDirective {
  innerText: string = '';
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.innerText = this.el.nativeElement.innerHTML;
    this.textModificator('#0000ff', 'in focus!');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.textModificator('#fff', '');
  }

  private textModificator(color: string, text: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.innerHTML = this.innerText + ' ' + text;
  }
}
