import { BrowserModule }                                                             from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA }                                                from '@angular/core';
import { MDBBootstrapModule, WavesModule,DropdownModule }                            from 'angular-bootstrap-md';
import { HttpClientModule, HttpClient }                                              from '@angular/common/http';
import { RouterModule, Routes, ExtraOptions }                                        from '@angular/router';
import { FormsModule, ReactiveFormsModule }                                          from '@angular/forms';
import { BrowserAnimationsModule }                                                   from '@angular/platform-browser/animations';
import {
   MatButtonModule,
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
import { FlexLayoutModule }                                                            from '@angular/flex-layout';
import { LoadingBarRouterModule }                                                      from '@ngx-loading-bar/router';
import { LoadingBarModule }                                                            from '@ngx-loading-bar/core';
import { AngularFireModule }                                                           from '@angular/fire';
import { AngularFirestoreModule }                                                      from '@angular/fire/firestore';
import { AngularFireDatabaseModule }                                                   from '@angular/fire/database';
import { ToastaModule }                                                                from 'ngx-toasta';
import { BidiModule }                                                                  from '@angular/cdk/bidi';
import { TranslateModule, TranslateLoader }                                            from '@ngx-translate/core';
import { TranslateHttpLoader }                                                         from '@ngx-translate/http-loader';
import { SlickCarouselModule }                                                         from 'ngx-slick-carousel';
import { DeviceDetectorModule }                                                        from 'ngx-device-detector';
import { environment }                                                                 from '../environments/environment';
import { AppRoutes }                                                                   from './app-routing';
import { GlobalModule }                                                                from './Global/Global.module';
import { AppComponent }                                                                from './app.component';

import { SideBarMenuComponent }                                                        from './Layouts/Menu/SidebarMenu/SidebarMenu.component';
import { PerfectScrollbarModule }                                                      from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG }                                                    from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface }                                             from 'ngx-perfect-scrollbar';
import { ToastrModule }                                                                from 'ngx-toastr';

import { Constant }                                                                    from './shared/Constant/Constant';

import { StorageServiceModule }                                                        from 'ngx-webstorage-service';
import { SessionService }                                                              from './shared/Services/Session.service';

import { DatePipe }                                                                    from '@angular/common';
import { UserAccountModule }                                                           from './Pages/UserAccount/UserAccount.module';
import { SpecialCharacterDirective }                                                   from './shared/directives/specialChracter.directive';
import { AdminPanelConfigModule }                                                      from './AdminConfig/admin-config.module';
//import { MainComponent }                                                               from './HomePage/Main/Main.component';
//import { HomeComponent }                                                               from './HomePage/Home/Home.component';
import { SignInComponent }                                                from './Pages/Session/SignIn/SignIn.component';

//import { HomePageModule }                                                              from './HomePage/homepage.module';

//import { MenuHomeItems }                                                               from './HomePage/Core/menu-items-home';
import { HeaderComponent }                                                             from './Layouts/Header/Header.component';
import { MenuComponent }                                                               from './Layouts/Menu/SidebarMenu/Menu/Menu.component';
import { httpInterceptorProviders }                                                    from './shared/Interceptors';


const routerOptions: ExtraOptions = {
   anchorScrolling: 'enabled',
   scrollPositionRestoration: 'enabled'
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
   suppressScrollX: true
};

/********** Custom option for ngx-translate ******/
export function createTranslateLoader(http: HttpClient) {
   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
   declarations: [
      AppComponent,
      SideBarMenuComponent,
      SpecialCharacterDirective,
      //MainComponent,
      //HomeComponent,
      SignInComponent,
      MenuComponent/* ,
      HeaderComponent */
   ],
   imports: [
      BrowserModule.withServerTransition({appId: 'embryo-seo-pre'}),
      HttpClientModule,
      BrowserModule,
      BrowserAnimationsModule, 
      ToastrModule.forRoot(), 
      RouterModule.forRoot(AppRoutes, { onSameUrlNavigation: 'reload' }),
      GlobalModule,
      MatButtonModule,
      FlexLayoutModule,
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
      MatGridListModule,
      FormsModule,
      ReactiveFormsModule,
      LoadingBarRouterModule,
      LoadingBarModule.forRoot(),
      MDBBootstrapModule.forRoot(),
      WavesModule.forRoot(),
      DropdownModule.forRoot(),
      AngularFireModule.initializeApp(environment.firebase, 'embryo'),
      AngularFirestoreModule,
      AngularFireDatabaseModule,
      ToastaModule.forRoot(),
      BidiModule,
      //HomePageModule,
      TranslateModule.forRoot({
         loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
         }
      }),
      SlickCarouselModule,
      PerfectScrollbarModule,
      DeviceDetectorModule.forRoot(),
      AdminPanelConfigModule,

      StorageServiceModule,
      BrowserModule,
      RouterModule.forRoot(AppRoutes, {
         scrollPositionRestoration: 'enabled',
         anchorScrolling: 'enabled'})
   ],
   schemas: [ NO_ERRORS_SCHEMA ],
   providers: [
      SessionService,
      Constant,
      DatePipe,
     // MenuHomeItems,
      httpInterceptorProviders,     
      {
         provide: PERFECT_SCROLLBAR_CONFIG,
         useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }
   ],
   exports: [
      RouterModule,
      ToastaModule,
      SpecialCharacterDirective,

      SideBarMenuComponent,
      SpecialCharacterDirective,
      //MainComponent,
      SignInComponent,
      //HomeComponent,
      MenuComponent/* ,
      HeaderComponent */
   ],

   bootstrap: [AppComponent]
})
export class AppModule { }