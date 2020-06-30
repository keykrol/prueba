import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MatSelectModule,
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
} from '@angular/material';
import { ChartsModule } from 'ng2-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';;
import { FlexLayoutModule } from '@angular/flex-layout';

import { RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './ForgotPassword/ForgotPassword.component';
import { FirstLoginComponent } from './FirstLogin/FirstLogin.component';

@NgModule({
	declarations: [
		ForgotPasswordComponent,
		FirstLoginComponent
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
		RouterModule
	],
	exports: [

	],
	entryComponents: [
		ForgotPasswordComponent,
		FirstLoginComponent
	]
})
export class WidgetSessionModule { }
