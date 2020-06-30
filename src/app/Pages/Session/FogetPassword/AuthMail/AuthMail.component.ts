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
  selector: 'app-AuthMail',
  templateUrl: './AuthMail.component.html',
  styleUrls: ['./AuthMail.component.css']
})
export class AuthMailComponent implements OnInit {

  emailPattern : any = /\S+@\S+\.\S+/;
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
  ) {
    
  
  }

  ngOnInit() {

    this.login = this.formGroup.group({
      email: ['', [Validators.required,Validators.pattern(this.emailPattern)]]
    
    });
    this.initErrors()

  }



  onSubmit() {
    
    this.initErrors();
    this.loaderService.showLoader
    
    if (this.login.valid) {
       this.sessionService.postEmail(this.login.value.email).subscribe(response => {
        if (response.code == "200") {

          console.log('prueba de email:',response.data)
          this.router.navigate(['/session/main-session/code']);

        } else {
          this.toastr.error('Correo invalido', '',
          {timeOut: 3000});
          /* response.messages.forEach(message => {
          
          }) */
        }
      });
    }
  }
 

  initErrors() {
    this.errors = [
      { username: null },
      { password: null }];
  }

/*   goto() {

    this.router.navigate(['/main-session/signin']);
  } */

}
