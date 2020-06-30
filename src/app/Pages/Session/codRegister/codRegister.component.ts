import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, MaxLengthValidator }                                     from '@angular/forms';
import { Router, NavigationEnd }                                                  from '@angular/router';
import { MatDialog }                                                              from '@angular/material';
import { UserSessionService } from 'src/app/shared/Services/UserSession.service'; // llamamos al servicio que necesitamos consumir
//import { MenuHomeItems } from 'src/app/HomePage/Core/menu-items-home';  

@Component({
  selector: 'embryo-codRegister',
  templateUrl: './codRegister.component.html',
  styleUrls: ['./codRegister.component.scss']
})
export class CodRegisterComponent implements OnInit {
  errors: any;
  cregister: FormGroup;
  requerid: string = 'Introduzca el código';


  constructor(
    private UserSessionService: UserSessionService, // lo declaramos en el constructor
    private router: Router,
    private formGroup: FormBuilder,
    private dialog: MatDialog,
    //public menuItems : MenuHomeItems,
  ) { }

  ngOnInit() {
    this.cregister = this.formGroup.group({
      code: ['', [Validators.required]],


    });
    this.initErrors()

  
  }


  async onSubmit() {

    this.initErrors();
    if (this.cregister.valid ) {
    
      await this.UserSessionService.putCodeR(this.cregister.value.code).subscribe(response => {
        console.log('este es el codigo',this.cregister.value.code)
        if (response.code == "200") {
         
          this.router.navigate(['/session/main-session/registro-driver']);
 
        } else {
          response.messages.forEach(message => {
            
          })
        }
      });
    }
  }

  /* async onSubmit() {
    this.initErrors();
    if (this.cregister.valid) {

                  this.router.navigate(['/admin-haulier'])

    }
    
  } */

  goto() {

    this.router.navigate(['session/main-session/email-registro']);
  }

  initErrors() {
    this.errors = [
      { code: null },
    ];
  }
}
