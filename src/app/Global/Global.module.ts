import { NgModule }                                                         from '@angular/core'; 
import { RouterModule }                                                     from '@angular/router';
import { CommonModule }                                                     from '@angular/common';
import { MatButtonModule, 
         MatBadgeModule,
         MatCardModule, 
         MatMenuModule, 
         MatToolbarModule, 
         MatIconModule, 
         MatInputModule, 
         MatDatepickerModule, 
         MatNativeDateModule, 
         MatProgressSpinnerModule,
         MatTableModule, 
         MatExpansionModule, 
         MatSelectModule,
         MatSnackBarModule, 
         MatTooltipModule, 
         MatChipsModule, 
         MatListModule, 
         MatSidenavModule, 
         MatTabsModule, 
         MatProgressBarModule,
         MatCheckboxModule,
         MatSliderModule,
         MatRadioModule,
         MatDialogModule,
         MatGridListModule
} from '@angular/material';
import { FlexLayoutModule }                                                from '@angular/flex-layout';
import { BarRatingModule }                                                 from "ngx-bar-rating";
import { AgmCoreModule }                                                   from '@agm/core';
import { FormsModule, ReactiveFormsModule }                                from '@angular/forms';
import { SlickCarouselModule }                                             from 'ngx-slick-carousel';

import { ConfirmationPopupComponent }                                      from './ConfirmationPopup/ConfirmationPopup.component';
import { HeaderUserProfileDropdownComponent }                              from './HeaderUserProfileDropdown/HeaderUserProfileDropdown.component';
import { AppLogoComponent }                                                from './AppLogo/AppLogo.component';
import { LoaderComponent }                                                 from './Loader/Loader.component';

@NgModule({
   imports: [
      CommonModule,
      RouterModule,
      MatBadgeModule,
      MatButtonModule, 
      FlexLayoutModule,
      MatCardModule, 
      MatMenuModule, 
      MatToolbarModule, 
      MatIconModule, 
      MatInputModule, 
      MatDatepickerModule, 
      MatNativeDateModule, 
      MatProgressSpinnerModule,
      MatTableModule, 
      MatExpansionModule, 
      MatSelectModule, 
      MatSnackBarModule, 
      MatTooltipModule, 
      MatChipsModule, 
      MatListModule, 
      MatSidenavModule, 
      MatTabsModule, 
      MatProgressBarModule,
      MatCheckboxModule,
      MatSliderModule,
      MatRadioModule,
      MatDialogModule,
      MatGridListModule,
      BarRatingModule,
      AgmCoreModule.forRoot({
         apiKey: 'AIzaSyC9PnuRk42kbCPMOvsfHpn40r5SoyN38zI',
         libraries: ['places']
      }),
      FormsModule,
      ReactiveFormsModule,
      SlickCarouselModule
   ],
   declarations: [
      ConfirmationPopupComponent,
      HeaderUserProfileDropdownComponent,
      AppLogoComponent,
      LoaderComponent
   ],
   exports: [
      HeaderUserProfileDropdownComponent,
      AppLogoComponent,
      LoaderComponent,
   ],
   entryComponents : [
      ConfirmationPopupComponent
   ]
})
export class GlobalModule {}
