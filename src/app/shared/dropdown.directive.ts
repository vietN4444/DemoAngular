import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor() {}

  @HostListener('click') onClickDropdown(eleRef) {
    console.log(eleRef);
  }
}
