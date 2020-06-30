import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder }                                     from '@angular/forms';
import { Router, NavigationEnd }                                                  from '@angular/router';
import { MatDialog }                                                              from '@angular/material';

@Component({
  selector: 'embryo-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.scss']
})
export class RegisterComponent implements OnInit {

  errors: any;
  register: FormGroup;
  requerid: string = 'Este campo es obligatorio.';

  constructor(
    private router: Router,
    private formGroup: FormBuilder,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.register = this.formGroup.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.initErrors()

  
  }

  initErrors() {
    this.errors = [
      { username: null },
      { password: null }];
  }


}


