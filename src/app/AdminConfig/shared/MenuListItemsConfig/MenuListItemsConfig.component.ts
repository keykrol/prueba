import { Component, OnInit }                            from '@angular/core';
import { AdminMenuItemsConfig }                         from 'src/app/AdminConfig/Core/Menu/MenuItemsConfig/MenuItemsConfig';
import { Router, ActivatedRoute }                       from '@angular/router';
import { TranslateService }                             from '@ngx-translate/core';
import { AdminService }                                     from 'src/app/shared/Services/Admin.service'

@Component({
  selector: 'app-MenuListItemsConfig',
  templateUrl: './MenuListItemsConfig.component.html',
  styleUrls: ['./MenuListItemsConfig.component.css']
})
export class MenuListItemsConfigComponent implements OnInit {

  constructor(public menuItems: AdminMenuItemsConfig,
    private router :Router,
            private activatedRoute: ActivatedRoute,
            public translate : TranslateService,
            private coreService : AdminService ) { }

ngOnInit() {
}
toggleSidebar() {
  this.coreService.sidenavOpen = !this.coreService.sidenavOpen;
}
}
