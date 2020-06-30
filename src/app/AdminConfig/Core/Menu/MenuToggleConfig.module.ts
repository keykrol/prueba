import { NgModule }                                     from '@angular/core';

 import { MenuToggleAnchorConfigDirective, MenuToggleLinkConfigDirective, MenuToggleConfigDirective } from './MenuToggleConfig'; 

@NgModule({
  declarations: [
    MenuToggleAnchorConfigDirective,
    MenuToggleLinkConfigDirective,
    MenuToggleConfigDirective
  ],
  exports: [
    MenuToggleAnchorConfigDirective,
    MenuToggleLinkConfigDirective,
    MenuToggleConfigDirective
   ],
})
export class MenuToggleConfigModule { }
