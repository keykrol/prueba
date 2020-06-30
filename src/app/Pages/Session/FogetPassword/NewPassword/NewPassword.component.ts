import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SessionService } from 'src/app/shared/Services/Session.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
//import { MenuHomeItems } from 'src/app/HomePage/Core/menu-items-home';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/shared/Models/User';
import { FirstLoginComponent } from '../../PopUp/FirstLogin/FirstLogin.component';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/shared/Services/Loader.service';

@Component({
  selector: 'app-NewPassword',
  templateUrl: './NewPassword.component.html',
  styleUrls: ['./NewPassword.component.css']
})
export class NewPasswordComponent implements OnInit {

  idRol: string 
  hide: Boolean = false;
  hideconfirm: Boolean = false;
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
                private _route: ActivatedRoute,
                private toastr: ToastrService,
                public loaderService: LoaderService
              ) { }

  ngOnInit() {
  
    this.login = this.formGroup.group({
      password: ['', [Validators.required]],
      repetpassword: ['', [Validators.required]]
    });
    this.initErrors()

  }

  async onSubmit() {

    this.initErrors();
    this.loaderService.showLoader
    if (this.login.valid) {

      if(this.login.value.password == this.login.value.repetpassword){
      
        this.idRol=this._route.snapshot.paramMap.get('idRol')
        await this.sessionService.putNewPassword(this.login.value.password, this.login.value.repetpassword, this.idRol).subscribe(response => {

          if (response.code == "200") {

            this.router.navigate(['/session/main-session/signin']);
           
          } else {
            response.messages.forEach(message => {
              
            })
          }
        });

      }else{
        this.toastr.error('contraseña no coinciden ', '',
          {timeOut: 3000});
         
      }

    }
  }

  initErrors() {
    this.errors = [
      { password: null },
      { repetpassword: null }];
  }
}
