import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { User } from 'src/app/shared/Models/User';
import { SessionService } from 'src/app/shared/Services/Session.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'embryo-ForgotPassword',
  templateUrl: './ForgotPassword.component.html',
  styleUrls: ['./ForgotPassword.component.scss']
})

export class ForgotPasswordComponent implements OnInit {

  hide: Boolean = false;
  errors: any;
  forgotPassword: FormGroup;
  requerid: string = 'Este campo es obligatorio.';
  constructor(
    public dialogRef: MatDialogRef<ForgotPasswordComponent>,
    private formGroup: FormBuilder,
    private sessionService: SessionService,
    @Inject(MAT_DIALOG_DATA) public data: { user: User }
  ) { }

  ngOnInit() {
    this.initErrors();
    this.forgotPassword = this.formGroup.group({
      userId: this.data.user.userId,
      secretAnswer: ['', [Validators.required]],
      passwordNew: ['', [Validators.required]],
      passwordNewRepeat: ['', [Validators.required]]
    }, {
      validator: [ForgotPasswordComponent.MatchPassword,
      ForgotPasswordComponent.validPassword]
    });
  }

  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('passwordNew').value;
    if (AC.get('passwordNewRepeat').touched || AC.get('passwordNewRepeat').dirty) {
      let verifyPassword = AC.get('passwordNewRepeat').value;

      if (password != verifyPassword) {
        AC.get('passwordNewRepeat').setErrors({ MatchPassword: true })
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
  secretAnswerValid(): Boolean {
    let secretAnswer = this.forgotPassword.get('secretAnswer').value;

    if (secretAnswer != this.data.user.secretAnswer) {
      this.errors['secretAnswer'] = 'La respuesta secreta no es correcta';
      this.forgotPassword.get('secretAnswer').setErrors({ 'incorrect': true })
      return false;
    } else {
      return true;
    }
  }

  onSubmit() {
    if (this.forgotPassword.valid) {
      this.initErrors();
      if (this.secretAnswerValid()) {
        this.sessionService.putUser(this.data.user.userId, this.forgotPassword.value)
          .subscribe(response => {
            if (response.code == "200") {
              this.dialogRef.close()
              Swal.fire({
                title: 'Éxito!',
                text: 'La contraseña ha sido modificada',
                icon: 'success',
                confirmButtonText: 'OK'
              })

            } else {
              response.messages.forEach(message => {
                this.errors[message.field] = message.message;
                this.forgotPassword.get(message.field).setErrors({ 'incorrect': true });
              })
            }
          });
      }
    }
  }
  initErrors() {
    this.errors = [
      { secretAnswer: null },
      { passwordNew: null },
      { passwordNewRepeat: null }];
  }
}


