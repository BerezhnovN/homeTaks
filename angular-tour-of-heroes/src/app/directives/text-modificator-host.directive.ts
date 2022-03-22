import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextModificatorHost]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})

export class TextModificatorHostDirective {
  innerText: string= '';
  constructor(private el: ElementRef) {}

  onMouseEnter() {
    this.innerText = this.el.nativeElement.innerHTML;
    this.textModificator('#0000ff', 'in focus with host!');
  }
  onMouseLeave() {
    this.textModificator('#fff', '');
  }

  private textModificator(color: string, text: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.innerHTML = this.innerText + ' ' + text;
  }
}
