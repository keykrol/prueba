import { Component, OnInit }                  from '@angular/core';
import { RouterOutlet }                       from '@angular/router';
import { slideInAnimation }                   from 'src/app/shared/Animations/animations';


@Component({
  selector: 'app-MainSession',
  templateUrl: './MainSession.component.html',
  styleUrls: ['./MainSession.component.css'],
  animations: [ slideInAnimation ]
})
export class MainSessionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
