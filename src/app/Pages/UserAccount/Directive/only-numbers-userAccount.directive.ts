import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbersUserAccount]'
})
export class OnlyNumbersUserAccountDirective {
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];

  constructor(private el: ElementRef) {
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    let test = /^\d$/g.test(event.key);
    if (!test) {
      event.preventDefault();
    }
  }

}
