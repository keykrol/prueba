import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/shared/Services/Session.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'embryo-HeaderUserProfileDropdown',
  templateUrl: './HeaderUserProfileDropdown.component.html',
  styleUrls: ['./HeaderUserProfileDropdown.component.scss']
})
export class HeaderUserProfileDropdownComponent implements OnInit {

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) {
    //https://github.com/angular/angular/issues/13831#issuecomment-319634921 - forza recargar para tomar el localStore
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        // if you need to scroll back to top, here is the right place
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {
  }

  sessionClose() {
    this.sessionService.sessionClose();
    this.router.navigate(['/session/signin']);
  }
}
