import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  // @HostListener('click') onClick() {
  //   const element = this.elementRef.nativeElement;
  //   if (element.classList.contains('open')) {
  //     this.renderer.removeClass(element, 'open');
  //   } else {
  //     this.renderer.addClass(element, 'open');
  //   }
  // }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

}
