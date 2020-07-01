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
import { IncreaseComponent }                              from './Increase/Increase.component';
import { IncreaseRoutes }                                 from './Increase.routing';


@NgModule({
	declarations: [IncreaseComponent],
	imports: [
		FormsModule,
		MatSlideToggleModule,
		MatCheckboxModule,
		MatSelectModule,
		CommonModule,
		RouterModule.forChild(IncreaseRoutes),
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

export class IncreaseModule { }