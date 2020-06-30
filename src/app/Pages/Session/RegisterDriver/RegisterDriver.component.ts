import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, MaxLengthValidator }                                     from '@angular/forms';
import { Router, NavigationEnd }                                                  from '@angular/router';
import { MatDialog }                                                              from '@angular/material';

@Component({
  selector: 'embryo-RegisterDriver',
  templateUrl: './RegisterDriver.component.html',
  styleUrls: ['./RegisterDriver.component.scss']
})
export class RegisterDriverComponent implements OnInit {
  errors: any;
  register: FormGroup;
  requerid: string = 'Este campo es obligatorio.';
  patternLetters: string = 'Este campo solo acepta letras';
  patternEmail: string = 'El formato es nombre@dominio.com';
  patternPhone: string = 'Este campo solo acepta números';
  minlengthPass: string = 'La contaseña debe tener mínimo 8 dígitos';
  hide: Boolean = false;

  constructor(
    private router: Router,
    private formGroup: FormBuilder,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.register = this.formGroup.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      //email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      AsigAuto: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]],

    });
    this.initErrors()

  
  }

  async onSubmit() {
    this.initErrors();
    if (this.register.valid) {

                  this.router.navigate(['/admin-haulier'])

    }
    
  }

  initErrors() {
    this.errors = [
      { name: null ,
      lastname: null, 
      //{ email: null },
      AsigAuto: null, 
      password: null,
      password2: null,
      }];
  }
}
