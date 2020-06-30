import { Component, OnInit, ViewChild, ElementRef }                               from '@angular/core';
import { SessionService }                                                         from 'src/app/shared/Services/Session.service';
import { FormGroup, Validators, FormBuilder }                                     from '@angular/forms';
import { Router, NavigationEnd }                                                  from '@angular/router';
import { MatDialog, MatSnackBar }                                                 from '@angular/material';
import { TranslateService }                                                       from '@ngx-translate/core';
//import { MenuHomeItems }                                                          from 'src/app/HomePage/Core/menu-items-home';
import { ToastrService }                                                          from 'ngx-toastr';
import { AuthGuard }                                                              from 'src/app/shared/guards/auth.guard';
import { HttpClient }                                                             from '@angular/common/http';
import { LoaderService }                                                          from 'src/app/shared/Services/Loader.service';
import { SessionDTO }                                                             from 'src/app/shared/Models/SessionDTO';

@Component({
  selector: 'signIn',
  templateUrl: './SignIn.component.html',
  styleUrls: ['./SignIn.component.scss']
})
export class SignInComponent implements OnInit {

  auth2: any;
 
  @ViewChild('loginRef') loginElement: ElementRef;

  emailPattern : any = /\S+@\S+\.\S+/;
  hide: Boolean = false;
  errors: any;
  login: FormGroup;
  requerid: string = 'Este campo es obligatorio.';
  public userGoogle: SessionDTO  = new SessionDTO();

  response;

 /*  public toastOptions = {
    closeButton: true,
    progressBar: true
  } */

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private formGroup: FormBuilder,
    private dialog: MatDialog,
    //public menuItems : MenuHomeItems,
    public translate: TranslateService,
    private snackBar: MatSnackBar,
    private toastr: ToastrService,
    private auth: AuthGuard,
    private http: HttpClient, 
    public loaderService: LoaderService

  ) { }

  ngOnInit() {
  /*   this.googleSDK();
    this.fbLibrary(); */
    this.login = this.formGroup.group({
      //username: ['', [Validators.required,Validators.pattern(this.emailPattern)]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.initErrors()

  }

  //  onSubmit() {
  //  /*  this.toast.info('El campo ya se encuentra seleccionado ', 'Información!', this.toastOptions); */
  // /*  this.loaderService.showLoader */
  //   this.initErrors();
  //   if (this.login.valid) {
  //    this.sessionService.postLoggin(this.login.value.username, this.login.value.password).subscribe(response => {
  //       if (response.code == "200") {

  //         this.sessionService.setToken(response.data);
  //         this.router.navigate(['/admin-config/admin'])
  //        /*  this.router.navigate(['/admin-config',response.data.rol]) */
     
  //       } else {

  //         this.toastr.error('El usuario no se encuentra registrado', '',
  //         {timeOut: 3000});
        
  //       }
  //     });
  //   }
  // }

   onSubmit() {

          this.router.navigate(['/admin-config/admin'])

   }
  forgotPassword() {
    this.router.navigate(['/session/main-session/mail']);
  }

  Register() {
    this.router.navigate(['/session/main-session/email-registro']);
  }

  initErrors() {
    this.errors = [
      { username: null },
      { password: null }];
  }



  LoginButtonGoogle() {
 
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
 
        let profile = googleUser.getBasicProfile();

        this.userGoogle.email = profile.getEmail();
        this.userGoogle.userId = profile.getId()
        this.userGoogle.name = profile.getName()
        this.userGoogle.imageUrl = profile.getImageUrl()
        this.userGoogle.token = googleUser.getAuthResponse().id_token;

        this.sessionService.setToken(this.userGoogle)

         /*  this.postLoginGoolgle(this.userGoogle) */
        
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
 
  }/* 
  googleSDK() {
 
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '750488949709-977somc1gtvsq870rcmb9s4lr27kvfdj.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        this.LoginButtonGoogle();
      });
    }
 
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
 
  }

  postLoginGoolgle(userGoogle: SessionDTO){
console.log('paso por aqui: el usuario de session:',userGoogle);
    this.sessionService.postLoggin(userGoogle.email,'dev_desarrollador7' ).subscribe(response => {
      if (response.code == "200") {

        this.sessionService.setToken(response.data);
        
        this.router.navigate(['/admin-config',response.data.rol])
   
      } else {

        this.toastr.error('El usuario no se encuentra registrado', '',
        {timeOut: 3000});
      
      }
    });


  }

  fbLibrary() {
 
    (window as any).fbAsyncInit = function() {
      window['FB'].init({
        appId      : '214778036355294',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      window['FB'].AppEvents.logPageView();
    };
 
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
 
}
loginFb() {
 
  window['FB'].login((response) => {
      console.log('login response',response);
      if (response.authResponse) {

        window['FB'].api('/me', {
          fields: 'last_name, first_name, email'
        }, (userInfo) => {

          console.log("user information");
          console.log(userInfo);
        });
         
      } else {
        console.log('User login failed');
      }
  }, {scope: 'email'});
} */
}