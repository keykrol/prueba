import { Component, OnInit } 										from '@angular/core';
import { PerfectScrollbarConfigInterface } 							from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-SideBar',
  templateUrl: './SideBar.component.html',
  styleUrls: ['./SideBar.component.css']
})
export class SideBarComponent implements OnInit {


	public config : PerfectScrollbarConfigInterface = {};

	constructor() { }

	ngOnInit() {
	}

}
