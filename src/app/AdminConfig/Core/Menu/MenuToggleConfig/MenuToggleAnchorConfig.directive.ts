import { Directive, HostListener, Inject }                  from '@angular/core';
import { MenuToggleLinkConfigDirective }                    from './MenuToggleLinkConfig.directive';

@Directive({
  selector: '[menuToggle]'
})
export class MenuToggleAnchorConfigDirective {

  protected navlink: MenuToggleLinkConfigDirective;

  constructor( @Inject(MenuToggleLinkConfigDirective) navlink: MenuToggleLinkConfigDirective) {
    this.navlink = navlink;
  }

  @HostListener('click', ['$event'])
  onClick(e: any) {
    this.navlink.toggle();
  }
}
