import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOnlyLetterUserAccount]'
})
export class OnlyLetterUserAccountDirective {

 
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];

  constructor(private el: ElementRef) {
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // Allow Backspace, tab, end, and home keys
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    let test = /^[a-zA-ZñÑ\s]$/g.test(event.key);
    if (!test) {
      event.preventDefault();
    }
  }
}
