import { NgModule } 									from '@angular/core';
import { CommonModule } 								from '@angular/common';
import { RouterModule } 								from '@angular/router';
import { TranslateModule } 								from '@ngx-translate/core';
import {
	MatSelectModule,
 MatIconModule,
			MatButtonModule,
			MatCardModule,
			MatTableModule,
			MatMenuModule,
			MatDividerModule,
			MatTabsModule,
			MatChipsModule,
			MatPaginatorModule,
			MatInputModule,
			MatSlideToggleModule,
			MatCheckboxModule} 							from '@angular/material';
			import {MatFormFieldModule} 				from '@angular/material/form-field';

import { FlexLayoutModule } 							from '@angular/flex-layout';
import { FormsModule } 									from '@angular/forms';
import { EmployeeComponent }                              from './Employee/Employee.component';
import { EmployeeRoutes }                                 from './Employee.routing';


@NgModule({
	declarations: [EmployeeComponent],
	imports: [
		FormsModule,
		MatSlideToggleModule,
		MatCheckboxModule,
		MatSelectModule,
		CommonModule,
		RouterModule.forChild(EmployeeRoutes),
		TranslateModule,
		MatCardModule,
		MatIconModule,
		MatButtonModule,
		MatTableModule,
		MatMenuModule,
		MatDividerModule,
		MatPaginatorModule,
		MatTabsModule,
		MatFormFieldModule,
		MatInputModule,
        MatChipsModule,
        FlexLayoutModule,
	]
})

export class EmployeeModule { }