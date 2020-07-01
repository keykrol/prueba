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
import { ScaleComponent }                              from './Scale/Scale.component';
import { ScaleRoutes }                                 from './Scale.routing';


@NgModule({
	declarations: [ScaleComponent],
	imports: [
		FormsModule,
		MatSlideToggleModule,
		MatCheckboxModule,
		MatSelectModule,
		CommonModule,
		RouterModule.forChild(ScaleRoutes),
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

export class ScaleModule { }