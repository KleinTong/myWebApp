import { Directive, ElementRef } from '@angular/core';

/**
 * Generated class for the RedFont directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[redFont]' // Attribute selector
})
export class RedFont {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = "red";
  }

}
