
import { Routes }                                           from "@angular/router";
import { MainConfigComponent }                              from "./MainConfig/MainConfig.component";
import { AuthGuard }                                        from "../shared/guards/auth.guard";

export const AdminConfigRoutes : Routes = [
   {
      path : 'admin-config/admin',
      redirectTo: 'admin-config/admin/rol',
      pathMatch: 'full',
     /*  canActivate :[AuthGuard] */
   },
   {
     path : "admin-config/admin",
     component : MainConfigComponent,
   /*   canActivate :[AuthGuard],
 */
        
     children: [

         {
            path: 'usuario',
            loadChildren: './Perfil/Perfil.module#PerfilModule'
         }, 
         {
            path: 'access',
            loadChildren: './Access/Access.module#AccessModule'
         }, 
         {
            path: 'employee',
            loadChildren: './Employee/Employee.module#EmployeeModule'
         }, 
         {
            path: 'increase',
            loadChildren: './Increase/Increase.module#IncreaseModule'
         }, 
         {
            path: 'grade',
            loadChildren: './Grade/Grade.module#GradeModule'
         },
         {
            path: 'scale',
            loadChildren: './Scale/Scale.module#ScaleModule'
         },
         {
            path: 'comission',
            loadChildren: './Comission/Comission.module#ComissionModule'
         },
         {
            path: 'authp',
            loadChildren: './AuthP/AuthP.module#AuthPModule'
         }
         
        /*  {
            path: 'usuario',
            loadChildren: './User/User.module#UserModule'
         }, */
  
     ]
  }
    
 ]
