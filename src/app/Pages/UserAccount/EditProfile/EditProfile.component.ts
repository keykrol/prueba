import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ToastaService, ToastaConfig, ToastOptions, ToastData } from 'ngx-toasta';
import { User } from 'src/app/shared/Models/User';
import { ReferenceService } from 'src/app/shared/Services/Reference.service';
import { Reference } from 'src/app/shared/Models/Reference';
import { SessionService } from 'src/app/shared/Services/Session.service';
import { DateAdapter } from '@angular/material';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
   selector: 'app-EditProfile',
   templateUrl: './EditProfile.component.html',
   styleUrls: ['./EditProfile.component.scss']
})
export class EditProfileComponent implements OnInit {

   errors: any;


   typeDocList: Array<Reference>;
   genderList: Array<Reference>;
   countryList: Array<Reference>;
   typeStateCivilList: Array<Reference>;
   typeProfessionList: Array<Reference>;
   typeEducationList: Array<Reference>;
   requerid: string = 'Este campo es obligatorio.';
   user: User = JSON.parse(localStorage.getItem('userModel'));
   type: string;
   info: FormGroup;
   address: FormGroup;
   card: FormGroup;
   toastOption: ToastOptions = {
      title: "Account Information",
      msg: "Your account information updated successfully!",
      showClose: true,
      timeout: 3000,
      theme: "material"
   };

   constructor(private route: ActivatedRoute,
      private router: Router,
      private formGroup: FormBuilder,
      private toastyService: ToastaService,
      private referenceService: ReferenceService,
      private sessionService: SessionService,
      private adapter: DateAdapter<any>,
      public datepipe: DatePipe
   ) {

      this.route.queryParams.forEach(queryParams => {
         this.type = queryParams['type'];
      });
   }

   ngOnInit() {
      this.errors = [
         { username: null },
         { name: null },
         { secondName: null },
         { lastName: null },
         { secondLastname: null },
         { email: null },
         { numIden: null },
         { birthDate: null },
         { firstNumPhone: null },
         { secondNumPhone: null },
         { address: null },
         { postalCode: null },
         { numLicense: null },
         { genderRefId: null },
         { countryRefId: null },
         { tipeNatRefId: null },
         { typeStateCivilRefId: null },
         { typeProfessionRefId: null },
         { typeEducationRefId: null }]

      this.getCombox();
      this.adapter.setLocale('fr');
      this.info = this.formGroup.group({
         userId: this.user.userId,
         username: [this.user.username, [Validators.required]],
         name: [this.user.name, [Validators.required]],
         secondName: [this.user.secondName],
         lastName: [this.user.lastName],
         secondLastName: [this.user.secondLastname],
         tipeNatRefId: [this.user.typeDocRefId, [Validators.required]],
         numIden: [this.user.numIden, [Validators.required]],
         birthDate: [{ value: this.user.birthDate, disabled: true }],
         firstNumPhone: [this.user.firstNumPhone],
         secondNumPhone: [this.user.secondNumPhone],
         email: [this.user.email, [Validators.required, Validators.email]],
         address: [this.user.address],
         postalCode: [this.user.postalCode],
         numLicense: [this.user.numLicense],
         countryRefId: [this.user.countryRefId],
         typeStateCivilRefId: [this.user.typeStateCivilRefId],
         typeProfessionRefId: [this.user.typeProfessionRefId],
         typeEducationRefId: [this.user.typeEducationRefId],
         genderRefId: [this.user.genderRefId]
      });

   }

   getCombox() {
      this.getypeDocList()
      this.getGenderList();
      this.getCountryList();
      this.getTypeStateCivilList();
      this.getTypeProfession();
      this.getTypeEducationList();
   }

   getypeDocList() {
      this.referenceService.getReference('TYPE_NATIONALITY').subscribe(response => {
         if (response.code == "200") {
            this.typeDocList = response.data;
         }
      })
   }
   getGenderList() {
      this.referenceService.getReference('TYPE_GENDER').subscribe(response => {
         if (response.code == "200") {
            this.genderList = response.data;
         }
      })
   }
   getCountryList() {
      this.referenceService.getReference('TYPE_COUNTRY').subscribe(response => {
         if (response.code == "200") {
            this.countryList = response.data;
         }
      })
   }
   getTypeStateCivilList() {
      this.referenceService.getReference('TYPE_STATE_CIVIL').subscribe(response => {
         if (response.code == "200") {
            this.typeStateCivilList = response.data;
         }
      })
   }
   getTypeProfession() {
      this.referenceService.getReference('TYPE_PROFESSION').subscribe(response => {
         if (response.code == "200") {
            this.typeProfessionList = response.data;
         }
      })
   }
   getTypeEducationList() {
      this.referenceService.getReference('TYPE_LEVEL_EDUCATION').subscribe(response => {
         if (response.code == "200") {
            this.typeEducationList = response.data;
         }
      })
   }

   submitProfileInfo() {
      if (this.info.valid) {
         if (this.info.value.birthDate != null) {
            this.info.value.birthDate = this.datepipe.transform(this.info.value.birthDate, 'yyyy-MM-dd');
         }
         this.sessionService.putUser(this.user.userId, this.info.value).subscribe(response => {
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
                              text: 'Se ha actualizado los datos personales',
                              icon: 'success',
                              confirmButtonText: 'OK'
                           })
                        });
                     }
                  });
            } else {
               response.messages.forEach(message => {
                  this.errors[message.field] = message.message;
                  this.info.get(message.field).setErrors({ 'incorrect': true });
               })
            }
         });
      } else {
         for (let i in this.info.controls) {
            this.info.controls[i].markAsTouched();
         }
      }
   }

   getErrorMessage() {
      return this.info.get('email').hasError('email') ? 'No es un correo valido' : '';
   }
}


