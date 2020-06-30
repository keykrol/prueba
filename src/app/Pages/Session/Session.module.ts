import { NgModule }                                                              from '@angular/core';
import { CommonModule }                                                          from '@angular/common';
import { RouterModule }                                                          from '@angular/router';
import { NgAisModule }                                                           from 'angular-instantsearch';
import { SessionRoutes }                                                         from './Session.routing';
import { GlobalModule }                                                          from '../../Global/Global.module';

import { FlexLayoutModule }                                                      from '@angular/flex-layout';
import {
   MatButtonModule,
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
import { ToastaModule } from 'ngx-toasta';
import { RegisterComponent } from './Register/Register.component';
import { RegisterClientComponent } from './RegisterClient/RegisterClient.component';
import { RegisterDriverComponent } from './RegisterDriver/RegisterDriver.component';
import { EmailRegisterComponent } from './emailRegister/emailRegister.component';
import { CodRegisterComponent } from './codRegister/codRegister.component';

import { SignInComponent } from './SignIn/SignIn.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WidgetSessionModule } from './PopUp/Widget.session.module';

import { AuthCodeComponent }                                                     from './FogetPassword/AuthCode/AuthCode.component';
import { AuthMailComponent }                                                     from './FogetPassword/AuthMail/AuthMail.component';
import { NewPasswordComponent }                                                  from './FogetPassword/NewPassword/NewPassword.component';
import { MainSessionComponent }                                                  from './MainSession/MainSession.component';
//import { HomePageModule }                                                        from 'src/app/HomePage/homepage.module';
import {MatDividerModule}                                                        from '@angular/material/divider';


@NgModule({
   imports: [
      CommonModule,
      RouterModule.forChild(SessionRoutes),
      FlexLayoutModule,
      MatCardModule,
      MatButtonModule,
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
      MatDividerModule,
      GlobalModule,
      NgAisModule,
      FormsModule,
      ReactiveFormsModule,
      WidgetSessionModule,
     // HomePageModule

   ],
   declarations: [
      MainSessionComponent,
      RegisterComponent,
      RegisterClientComponent,
      RegisterDriverComponent,
      SignInComponent,
      AuthCodeComponent,
      AuthMailComponent,
      NewPasswordComponent,
      EmailRegisterComponent,
      CodRegisterComponent,
      SignInComponent 
   ],
   providers:[
   ],
   exports: [
      RouterModule
   ],
   bootstrap: [SignInComponent]
})
export class SessionModule { }
