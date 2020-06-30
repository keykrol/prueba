import { Routes }                                                       from '@angular/router';
import { PublicGuard }                                                  from './shared/guards/public.guard';
import { AuthenticatedGuard }                                           from './shared/guards/authenticated.guard';

//import { MainComponent }                                                from './HomePage/Main/Main.component';
//import { HomeComponent }                                                from './HomePage/Home/Home.component';
import { SignInComponent }                                                from './Pages/Session/SignIn/SignIn.component';

export const AppRoutes: Routes = [
   {
      path: '',
      redirectTo: 'signin',
      pathMatch: 'full',
   },
    {
      path: '',
      component: SignInComponent,
      children: [
         {
            path : 'signin',
            component : SignInComponent
         },
         {
            path: 'session',
            loadChildren: './Pages/Session/Session.module#SessionModule',
         }
      ]
   } 

]
