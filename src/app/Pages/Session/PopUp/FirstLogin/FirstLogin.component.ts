import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SessionService } from 'src/app/shared/Services/Session.service';
import { User } from 'src/app/shared/Models/User';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-FirstLogin',
  templateUrl: './FirstLogin.component.html',
  styleUrls: ['./FirstLogin.component.css']
})
export class FirstLoginComponent implements OnInit {

  hide: Boolean = false;
  errors: any;
  firstLogin: FormGroup;
  requerid: string = 'Este campo es obligatorio.';
  constructor(
    public dialogRef: MatDialogRef<FirstLoginComponent>,
    private formGroup: FormBuilder,
    private router: Router,
    private sessionService: SessionService,
    @Inject(MAT_DIALOG_DATA) public data: { user: User }
  ) {
    //https://github.com/angular/angular/issues/13831#issuecomment-319634921 - forza recargar para tomar el localStore
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        // if you need to scroll back to top, here is the right place
        window.scrollTo(0, 0);
      }
    });
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


  ngOnInit() {
    this.errors = [
      { secretAnswer: null },
      { passwordNew: null },
      { passwordNewRepeat: null }];

    this.firstLogin = this.formGroup.group({
      userId: this.data.user.userId,
      secretQuestion: ['', [Validators.required]],
      secretAnswer: ['', [Validators.required]],
      passwordNew: ['', [Validators.required]],
      passwordNewRepeat: ['', [Validators.required]]
    }, {
      validator: [FirstLoginComponent.MatchPassword,
      FirstLoginComponent.validPassword]
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

  onSubmit() {
    if (this.firstLogin.valid) {
      this.sessionService.putUser(this.data.user.userId, this.firstLogin.value)
        .subscribe(response => {
          if (response.code == "200") {
            this.sessionService.getUser(this.data.user.userId)
              .subscribe(responseSession => {
                if (responseSession.code == "200") {
                  let userSession: User;
                  userSession = responseSession.data;
                  this.sessionService.session(userSession)
                  this.dialogRef.close()
                  this.router.navigate(['/home']).then(() => {
                    //this.toastyService.success("Inicio session con exito");
                  });
                } else {
                  response.messages.forEach(message => {
                    this.errors[message.field] = message.message;
                    this.firstLogin.get(message.field).setErrors({ 'incorrect': true });
                  })
                }
              });
          }
        });
    }
  }
}
