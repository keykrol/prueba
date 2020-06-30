
import { NgModule } 									from '@angular/core';
import { CommonModule } 								from '@angular/common';
import { HttpClientModule, HttpClient} 					from '@angular/common/http';
import { MenuToggleConfigModule } 						from './Core/Menu/MenuToggleConfig.module';
import { AdminMenuItemsConfig } 						from './Core/Menu/MenuItemsConfig/MenuItemsConfig';

import { MatButtonModule, 
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
import { RouterModule } 								from '@angular/router';
import { FlexLayoutModule } 							from '@angular/flex-layout';
import { ToastaModule} 									from 'ngx-toasta';

import { PerfectScrollbarModule } 						from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } 					from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } 				from 'ngx-perfect-scrollbar';
import { AdminConfigRoutes } 							from './admin-config-routing';
import { TranslateModule, TranslateLoader } 			from '@ngx-translate/core';
import { TranslateHttpLoader } 							from '@ngx-translate/http-loader';
import { GlobalModule } 								from '../Global/Global.module'
import { HeaderConfigComponent } 						from './shared/HeaderConfig/HeaderConfig.component';
import { MenuListItemsConfigComponent } 				from './shared/MenuListItemsConfig/MenuListItemsConfig.component';
import { SideBarComponent } 							from './shared/SideBar/SideBar.component';
import { MainConfigComponent } 							from './MainConfig/MainConfig.component';
import { WidgetModule } from './Widget/Widget.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

/********** Custom option for ngx-translate ******/

export function createTranslateLoader(http: HttpClient) {
   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	declarations: [	
		MainConfigComponent,
		SideBarComponent,
		MenuListItemsConfigComponent,
		HeaderConfigComponent
	],
	imports: [
		CommonModule,
		MenuToggleConfigModule,
		MatButtonModule, 
		MatCardModule, 
		MatMenuModule,
		WidgetModule, 
      	FlexLayoutModule,
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
		PerfectScrollbarModule,
		RouterModule.forChild(AdminConfigRoutes),
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: createTranslateLoader,
				deps: [HttpClient]
			}
		}),
		HttpClientModule,
		GlobalModule,
		ToastaModule.forRoot()
	],
	providers : [
		AdminMenuItemsConfig
	],
	exports : [
		RouterModule,
		ToastaModule,
		MainConfigComponent
	]

})

export class AdminPanelConfigModule { }
