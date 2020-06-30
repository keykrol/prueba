import { Directive }                            from '@angular/core';
import { Router }                               from '@angular/router';
import { MenuToggleLinkConfigDirective }        from './MenuToggleLinkConfig.directive';

@Directive({
  selector: '[menuToggleDirective]',
})
export class MenuToggleConfigDirective {

  protected navlinks: Array<MenuToggleLinkConfigDirective> = [];

  public closeOtherLinks(openLink: MenuToggleLinkConfigDirective): void {
    this.navlinks.forEach((link: MenuToggleLinkConfigDirective) => {
      if (link !== openLink) {
        link.open = false;
      }
    });
  }

  public addLink(link: MenuToggleLinkConfigDirective): void {
    this.navlinks.push(link);
  }

  public removeGroup(link: MenuToggleLinkConfigDirective): void {
    const index = this.navlinks.indexOf(link);
    if (index !== -1) {
      this.navlinks.splice(index, 1);
    }
  }

  public getUrl() {
    return this.router.url;
  }

  constructor( private router: Router) {}
}
