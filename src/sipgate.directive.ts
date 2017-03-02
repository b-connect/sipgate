import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[SipgateDirective]'
})
export class SipgateDirective {

  constructor(private el: ElementRef) {
  }

}
