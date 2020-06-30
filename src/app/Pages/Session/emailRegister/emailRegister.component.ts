import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, MaxLengthValidator }                                     from '@angular/forms';
import { Router, NavigationEnd }                                                  from '@angular/router';
import { MatDialog }                                                              from '@angular/material';
import { UserService }                                                                   from 'src/app/shared/Models/UserService';
import { UserSessionService } from 'src/app/shared/Services/UserSession.service';
//import { MenuHomeItems } from 'src/app/HomePage/Core/menu-items-home';                       

@Component({
  selector: 'embryo-emailRegister',
  templateUrl: './emailRegister.component.html',
  styleUrls: ['./emailRegister.component.scss']
})
export class EmailRegisterComponent implements OnInit {
  errors: any;
  eregister: FormGroup;
  requerid: string = 'Debe intrudicir el correo eléctronico donde llegará el código.';
  patternEmail: string = 'El formato es nombre@dominio.com';
  

  constructor(
    private UserSessionService: UserSessionService,
    private router: Router,
    private formGroup: FormBuilder,
    private dialog: MatDialog,
    //public menuItems : MenuHomeItems,
  ) { }

  ngOnInit() {
    this.eregister = this.formGroup.group({
      email: ['', [Validators.required]],
      rolId: ['', [Validators.required]],
      app: ['web'],
      


    });
    this.initErrors()

  
  }

  async onSubmit() {
    this.initErrors();
    if (this.eregister.valid) {
      await this.UserSessionService.postEmailR(this.eregister.value.email, this.eregister.value.rolId,
        this.eregister.value.app).subscribe(response => {
        if (response.code == "200") {

          console.log('prueba de email:',response.data);
          console.log('prueba de email:',this.eregister.value.rolId);
          console.log('prueba de email:',this.eregister.value.email);
          console.log('prueba de email:',this.eregister.value.app);
          this.router.navigate(['/session/main-session/cod-registro']);

        } else {
          response.messages.forEach(message => {
          
          })
        }
      });
    }
  }
 

/*   async onSubmit() {
    this.initErrors();
    if (this.eregister.valid) {

                  this.router.navigate(['/cod-registro'])

    }
    
  } */

  goto() {

    this.router.navigate(['/home']);
  }

  initErrors() {
    this.errors = [
      { email: null,
        rolId: null,
        app: null,
      },
    ];
  }
}
