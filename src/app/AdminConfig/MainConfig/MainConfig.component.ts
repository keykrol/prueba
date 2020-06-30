
import { Component, OnInit, ViewChild }                           from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd }                  from '@angular/router';
import { DeviceDetectorService }                                  from 'ngx-device-detector';
import { MediaChange, MediaObserver}                              from "@angular/flex-layout";
import { Subscription }                                           from 'rxjs';
import { AdminService }                                           from 'src/app/shared/Services/Admin.service';


@Component({
  selector: 'app-MainConfig',
  templateUrl: './MainConfig.component.html',
  styleUrls: ['./MainConfig.component.css']
})
export class MainConfigComponent implements OnInit {

	deviceInfo    							  : any     = null;
	private _mediaSubscription         : Subscription;
   private _routerEventsSubscription  : Subscription;
   private _router                    : Subscription;
   isMobile                           : boolean = false;
   isMobileStatus        				  : boolean;
   layout                             : any = "ltr";
   rtlStatus                          : boolean = false;

   /** Used for toggle the sidebar menu. **/
   @ViewChild('sidenav') sidenav;

	constructor(public coreService : AdminService,
					public router : Router,
					private activatedRoute: ActivatedRoute,
					private deviceService: DeviceDetectorService,
					private media: MediaObserver) { }

	ngOnInit() {

      document.getElementById('html').classList.remove("user-end");
      
      this.deviceInfo = this.deviceService.getDeviceInfo();
      if(this.deviceInfo.device == 'ipad' || this.deviceInfo.device == 'iphone' || this.deviceInfo.device == 'android' ){
         this.coreService.sidenavMode = 'over';
         this.coreService.sidenavOpen = false;
      }

      this._mediaSubscription = this.media.media$.subscribe((change: MediaChange) => {
     
         this.isMobileStatus = (change.mqAlias == 'xs') || (change.mqAlias == 'sm') || (change.mqAlias == 'md');
         this.isMobile = this.isMobileStatus;
         if(this.isMobile) {
            this.coreService.sidenavMode = 'over';  
            this.coreService.sidenavOpen = false;
         }
         else {
            this.coreService.sidenavMode = 'side';
            this.coreService.sidenavOpen = true;
         }
      });

      this._routerEventsSubscription = this.router.events.subscribe((event) => {
         if (event instanceof NavigationEnd && this.isMobile) {
            this.sidenav.close();
         }
      });

		if((this.activatedRoute.snapshot.url[0].path) == 'admin-config'){
			document.getElementById('html').classList.add('admin-panel');
		}else{
			document.getElementById('html').classList.remove("user-end");
		}
	}




}
