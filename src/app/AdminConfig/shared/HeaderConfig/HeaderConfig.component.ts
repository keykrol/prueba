import { Component, OnInit }                                from '@angular/core';
import { AdminService }                                     from 'src/app/shared/Services/Admin.service';


@Component({
  selector: 'app-HeaderConfig',
  templateUrl: './HeaderConfig.component.html',
  styleUrls: ['./HeaderConfig.component.css']
})
export class HeaderConfigComponent implements OnInit {

	constructor(private coreService : AdminService) { }

	ngOnInit() {
	}

	/**
     * toggleSidebar method is used a toggle a side nav bar.
     */
   toggleSidebar() {
      this.coreService.sidenavOpen = !this.coreService.sidenavOpen;
   }
}
