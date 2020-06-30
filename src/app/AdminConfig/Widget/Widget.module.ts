import { NgModule } 												from '@angular/core';
import { CommonModule } 											from '@angular/common';
import { MatSelectModule,
			MatInputModule, 
			MatFormFieldModule,
			MatIconModule,
			MatCardModule,
			MatButtonModule,
			MatProgressSpinnerModule,
			MatCheckboxModule,
			MatMenuModule,
			MatDialogModule,
			MatDatepickerModule,
			MatTableModule
		 } 															from '@angular/material';
import { ChartsModule } 											from 'ng2-charts';
import { PerfectScrollbarModule } 									from 'ngx-perfect-scrollbar';
import { TranslateModule } 											from '@ngx-translate/core';
import { ReactiveFormsModule,FormsModule } 							from '@angular/forms';;
import { FlexLayoutModule } 										from '@angular/flex-layout';
import { RouterModule } 											from '@angular/router';
import { AddRolComponent }                                          from './PopUp/AddRol/AddRol.component';
import { AddPerfilComponent }                                       from './PopUp/AddPerfil/AddPerfil.component';
import { AddHaulierComponent }										from './PopUp/AddHaulier/AddHaulier.component';
import { AddCoinComponent }											from './PopUp/AddCoin/AddCoin.component';

import { OnlyNumberDirective } 										from '../Directive/only-number.directive';
import { EditAppUserComponent }                                     from './PopUp/EditAppUser/EditAppUser.component';
import { MatListModule } 											from '@angular/material/list';
import { EditRolComponent } 										from './PopUp/EditRol/EditRol.component';
import { EditPerfilComponent } 										from './PopUp/EditPerfil/EditPerfil.component';
import { AddPersonComponent } 										from './PopUp/AddPerson/AddPerson.component';
import { EditPersonComponent } 										from './PopUp/EditPerson/EditPerson.component';
import { MatExpansionModule } 										from '@angular/material/expansion';
import { AddUserComponent } 										from './PopUp/AddUser/AddUser.component';
import { EditUserComponent } 										from './PopUp/EditUser/EditUser.component';
import { AddLanguageComponent } 									from './PopUp/AddLanguage/AddLanguage.component';
import { OnlyLetterDirective } 										from '../Directive/only-letter.directive';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
	declarations: [
        AddRolComponent,
		AddPerfilComponent,
		AddHaulierComponent,
		AddCoinComponent,
		EditRolComponent,
		EditAppUserComponent,
		EditPerfilComponent,
		AddPersonComponent,
		EditPersonComponent,
		AddUserComponent,
		EditUserComponent,
		AddLanguageComponent,
		OnlyNumberDirective,
		OnlyLetterDirective
	],
	imports: [
		CommonModule,
		MatSelectModule,
		MatInputModule,
		MatFormFieldModule,		
		FormsModule,
		ChartsModule,
		MatIconModule,
		MatCardModule,
		MatButtonModule,
		MatProgressSpinnerModule,
		PerfectScrollbarModule,
		TranslateModule,
		MatCheckboxModule,
		MatMenuModule,
		MatDialogModule,
		ReactiveFormsModule,
		MatDatepickerModule,
		MatTableModule,  
		FlexLayoutModule,
		RouterModule,
		MatListModule,
		MatExpansionModule,
		MatTabsModule
		
	],
	exports : [
		
	],
	providers: [
		OnlyNumberDirective,
		OnlyLetterDirective
	 ],
	entryComponents: [
        AddRolComponent,
		AddPerfilComponent,
		AddHaulierComponent,
		AddCoinComponent,
		EditAppUserComponent,
		EditRolComponent,
		EditPerfilComponent,
		AddPersonComponent,
		EditPersonComponent,
		AddUserComponent,
		EditUserComponent,
		AddLanguageComponent,
   ]
})
export class WidgetModule { }
