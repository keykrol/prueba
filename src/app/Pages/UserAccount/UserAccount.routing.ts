import { Routes } from '@angular/router';

import { AccountComponent } from './Account/Account.component';
import { ProfileComponent } from './Profile/Profile.component';
import { EditProfileComponent } from './EditProfile/EditProfile.component';
import { ChangeSecretQuestionComponent } from './ChangeSecretQuestion/ChangeSecretQuestion.component';
import { ChangePasswordComponent } from './ChangePassword/ChangePassword.component';
import { OrderHistoryComponent } from './OrderHistory/OrderHistory.component';
import { GridProductComponent } from './GridProduct/GridProduct.component';
import { AuthenticatedGuard } from 'src/app/shared/guards/authenticated.guard';

export const UserAccountRoutes: Routes = [
   {
      path: '',
      component: AccountComponent,
      children: [
         {
            path: 'profile',
            component: ProfileComponent,
            canActivate: [AuthenticatedGuard]
         },
         {
            path: 'ChangeSecretQuestion',
            component: ChangeSecretQuestionComponent,
            canActivate: [AuthenticatedGuard]
         },
         {
            path: 'ChangePassword',
            component: ChangePasswordComponent,
            canActivate: [AuthenticatedGuard]
         },
         {
            path: 'order-history',
            component: OrderHistoryComponent,
            canActivate: [AuthenticatedGuard]
         },
         {
            path: 'profile/edit',
            component: EditProfileComponent,
            canActivate: [AuthenticatedGuard]
         },
         {
            path: 'grid-product',
            component: GridProductComponent,
            canActivate: [AuthenticatedGuard]
         }
      ]
   }
]