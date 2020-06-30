import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/Services/Session.service';
import { User } from 'src/app/shared/Models/User';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ChangeSecretQuestion',
  templateUrl: './ChangeSecretQuestion.component.html',
  styleUrls: ['./ChangeSecretQuestion.component.scss']
})
export class ChangeSecretQuestionComponent implements OnInit {

  user: User = JSON.parse(localStorage.getItem('userModel'))
  errors: any;
  requerid: string = 'Este campo es obligatorio.';
  ChangeSecretQuestion: FormGroup;
  constructor(
    private router: Router,
    private formGroup: FormBuilder,
    private sessionService: SessionService) { }

  ngOnInit() {
    this.initErrors();
    this.ChangeSecretQuestion = this.formGroup.group({
      userId: this.user.userId,
      secretQuestionCurrent: [{ value: this.user.secretQuestion, disabled: true }],
      secretAnswerCurrent: ['', [Validators.required]],
      secretQuestionCurrentCompare: [this.user.secretAnswer],
      secretQuestion: ['', [Validators.required]],
      secretAnswer: ['', [Validators.required]]
    },
      { validator: ChangeSecretQuestionComponent.secretAnswerCurrentValid }
    );
  }

  static secretAnswerCurrentValid(AC: AbstractControl) {
    let secretAnswerCurrent = AC.get('secretAnswerCurrent').value;
    if (secretAnswerCurrent.length > 4) {
      let secretQuestionCurrentCompare = AC.get('secretQuestionCurrentCompare').value;
      if (secretAnswerCurrent != secretQuestionCurrentCompare) {
        AC.get('secretAnswerCurrent').setErrors({ secretAnswerCurrentValid: true })
      } else {
        return null
      }
    }
  }

  submit() {
    this.initErrors();
    if (this.ChangeSecretQuestion.valid) {
      this.sessionService.putUser(this.user.userId, this.ChangeSecretQuestion.value).subscribe(response => {
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
                    text: 'La pregunta secreta ha sido modificada',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
                });
              }
            });
        } else {
          response.messages.forEach(message => {
            this.errors[message.field] = message.message;
            this.ChangeSecretQuestion.get(message.field).setErrors({ 'incorrect': true });
          })
        }
      });
    } else {
      for (let i in this.ChangeSecretQuestion.controls) {
        this.ChangeSecretQuestion.controls[i].markAsTouched();
      }
    }
  }

  initErrors() {
    this.errors = [
      { secretQuestion: null },
      { secretAnswer: null }];
  }

}
