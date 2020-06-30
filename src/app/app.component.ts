import { Component, ViewContainerRef }                                  from '@angular/core';
import { TranslateService }                                             from '@ngx-translate/core';
import { slideInAnimation }                                             from './shared/Animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
   slideInAnimation
   // animation triggers go here
 ]
})
export class AppComponent {

   constructor(translate: TranslateService) {
      translate.addLangs(['en', 'fr']);
      translate.setDefaultLang('en');
      translate.use('en');
     
   }
}
