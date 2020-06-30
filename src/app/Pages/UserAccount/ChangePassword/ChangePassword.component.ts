import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ToastaService } from 'ngx-toasta';
import { SessionService } from 'src/app/shared/Services/Session.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/Models/User';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ChangePassword',
  templateUrl: './ChangePassword.component.html',
  styleUrls: ['./ChangePassword.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  hide: Boolean = false;
  user: User = this.sessionService.getUserLoggedIn();
  errors: any;
  requerid: string = 'Este campo es obligatorio.';
  passwordChange: FormGroup;
  constructor(
    private router: Router,
    private formGroup: FormBuilder,
    private toastyService: ToastaService,
    private sessionService: SessionService) { }

  ngOnInit() {
    this.initErrors()

    this.passwordChange = this.formGroup.group({
      userId: this.user.userId,
      passwordCurrent: ['', [Validators.required]],
      passwordNew: ['', [Validators.required]],
      passwordRepeat: ['', [Validators.required]]
    }, {
        validator: [ChangePasswordComponent.MatchPassword,
        ChangePasswordComponent.validPassword]
      });
  }

  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('passwordNew').value;
    if (AC.get('passwordRepeat').touched || AC.get('passwordRepeat').dirty) {
      let verifyPassword = AC.get('passwordRepeat').value;

      if (password != verifyPassword) {
        AC.get('passwordRepeat').setErrors({ MatchPassword: true })
      } else {
        return null
      }
    }
  }
  static validPassword(AC: AbstractControl) {
    let password = AC.get('passwordNew').value;
    if (password.length > 16 || password.length < 8 || (password.match(/[A-Z]/g) || []).length < 2
      || (password.match(/[0-9]/g) || []).length < 2 || (password.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length < 2) {
      AC.get('passwordNew').setErrors({ validPassword: true })
    } else {
      return null;
    }
  }

  submit() {
    this.initErrors();
    if (this.passwordChange.valid) {
      this.sessionService.putUser(this.user.userId, this.passwordChange.value).subscribe(response => {
        if (response.code == "200") {
          this.sessionService.getUser(this.user.userId)
            .subscribe(responseSession => {
              if (responseSession.code == "200") {
                let userSession: User;
                userSession = responseSession.data;
                this.sessionService.session(userSession)
                this.router.navigate(['/account/profile']).then(() => {
                  Swal.fire({
                    title: 'Éxito!',
                    text: 'La contraseña ha sido modificada',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
                });
              }
            });
        } else {
          response.messages.forEach(message => {
            this.errors[message.field] = message.message;
            this.passwordChange.get(message.field).setErrors({ 'incorrect': true });
          })
        }
      });
    } else {
      for (let i in this.passwordChange.controls) {
        this.passwordChange.controls[i].markAsTouched();
      }
    }
  }

  initErrors() {
    this.errors = [
      { passwordCurrent: null },
      { passwordNew: null }];
  }

}
