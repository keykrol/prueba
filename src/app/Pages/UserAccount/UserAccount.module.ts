import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  MatButtonModule,
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
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserAccountRoutes } from './UserAccount.routing';
import { AccountComponent } from './Account/Account.component';
import { ProfileComponent } from './Profile/Profile.component';
import { EditProfileComponent } from './EditProfile/EditProfile.component';
import { ChangeSecretQuestionComponent } from './ChangeSecretQuestion/ChangeSecretQuestion.component';
import { ChangePasswordComponent } from './ChangePassword/ChangePassword.component';
import { OrderHistoryComponent } from './OrderHistory/OrderHistory.component';
import { GridProductComponent } from './GridProduct/GridProduct.component';
import { OnlyLetterUserAccountDirective } from './Directive/only-letter-userAccount.directive';
import { OnlyNumbersUserAccountDirective } from './Directive/only-numbers-userAccount.directive';
import { OnlyLettersNumberUserAccountDirective } from './Directive/only-letters-number-userAccount.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserAccountRoutes),
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
    FormsModule,
    ReactiveFormsModule
  ],


  providers: [
    OnlyLetterUserAccountDirective,
    OnlyNumbersUserAccountDirective
  ],

  declarations: [
    AccountComponent,
    ProfileComponent,
    EditProfileComponent,
    ChangeSecretQuestionComponent,
    ChangePasswordComponent,
    OrderHistoryComponent,
    GridProductComponent,
    OnlyLetterUserAccountDirective,
    OnlyLettersNumberUserAccountDirective,
    OnlyNumbersUserAccountDirective
  ]
})
export class UserAccountModule { }
