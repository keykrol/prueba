import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/Models/User';
import { FirstLoginComponent } from '../../PopUp/FirstLogin/FirstLogin.component';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/Services/Session.service';
//import { MenuHomeItems } from 'src/app/HomePage/Core/menu-items-home';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/shared/Services/Loader.service';

@Component({
  selector: 'app-AuthCode',
  templateUrl: './AuthCode.component.html',
  styleUrls: ['./AuthCode.component.css']
})
export class AuthCodeComponent implements OnInit {

  hide: Boolean = false;
  errors: any;
  login: FormGroup;
  requerid: string = 'Este campo es obligatorio.';
  constructor(
                private sessionService: SessionService,
                private router: Router,
                private formGroup: FormBuilder,
                private dialog: MatDialog,
                //public menuItems : MenuHomeItems,
                public translate: TranslateService,
                private toastr: ToastrService,
                public loaderService: LoaderService
              )
                  { }

  ngOnInit() {
  
    this.login = this.formGroup.group({
      code: ['', [Validators.required]]
    
    });
    this.initErrors()

  }

 onSubmit() {

    this.initErrors();
    
    this.loaderService.showLoader

    if (this.login.valid) {
    
       this.sessionService.putCode(this.login.value.code).subscribe(response => {
       
        if (response.code == "200") {
       
          this.router.navigate(['/session/main-session/newpassword',response.data.userId]);
 
        } else {
          this.toastr.error('El código es incorrecto ', '',
          {timeOut: 3000});
         /*  response.messages.forEach(message => {
            
          }) */
        }
      });
    }
  }


  initErrors() {
    this.errors = [
      { code: null }];
  }

  password() {

    
  }

}
