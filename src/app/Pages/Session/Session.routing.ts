import { Routes } 																from '@angular/router';

import { RegisterComponent } 													from './Register/Register.component';
import { SignInComponent } 														from './SignIn/SignIn.component';
import { MainSessionComponent } 												from './MainSession/MainSession.component';
import { AuthMailComponent } 													from './FogetPassword/AuthMail/AuthMail.component';
import { AuthCodeComponent } 													from './FogetPassword/AuthCode/AuthCode.component';
import { NewPasswordComponent } 												from './FogetPassword/NewPassword/NewPassword.component';
import { RegisterClientComponent } 												from './RegisterClient/RegisterClient.component';
import { RegisterDriverComponent} 												from './RegisterDriver/RegisterDriver.component';
import { EmailRegisterComponent } 												from './emailRegister/emailRegister.component';
import { CodRegisterComponent } 												from './codRegister/codRegister.component';


export const SessionRoutes: Routes = [
	
	{
		path: 'main-session',
		component: MainSessionComponent,
		children: [

			{
				path: 'signin',
				component: SignInComponent,
				data: { animation: 'signinAnimation' }
			},
			{
				path: 'mail',
				component: AuthMailComponent,
				data: { animation: 'mailAnimation' }
			},
			{
				path: 'code',
				component: AuthCodeComponent,
				data: {animation: 'codeAnimation'},
			},
			{
				path: 'newpassword/:idRol',
				component: NewPasswordComponent
			},
			{
				path: 'email-registro',
				component: EmailRegisterComponent 
			},
			{
				path: 'cod-registro',
				component: CodRegisterComponent 
			},
			{
				path: 'registro-cliente',
				component: RegisterClientComponent
			}
			,
			{
				path: 'registro-driver',
				component: RegisterDriverComponent
			}
			
		   
		]
	}	
		
]
