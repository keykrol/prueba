import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOnlyLetter]'
})
export class OnlyLetterDirective {
  
  regexStr = '^[a-zA-Z_]*$';
  @Input() isAlphaNumeric: boolean;

  constructor(private el: ElementRef) { }

  @HostListener('keypress', ['$event']) onKeyPress(event) {
      return new RegExp(this.regexStr).test(event.key);
  }

  @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
      this.validateFields(event);
  }

  validateFields(event) {
      setTimeout(() => {

          this.el.nativeElement.value = this.el.nativeElement.value.replace(/[^A-Za-z ]/g, '').replace(/\s/g, '');
          event.preventDefault();

      }, 100)
  }

}
