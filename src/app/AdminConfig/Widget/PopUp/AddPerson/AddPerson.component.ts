import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { ListGeografyService } from 'src/app/shared/Services/listGeografy.service';
import { GeneralGeografy } from 'src/app/shared/Models/GeneralGeografy';
import { Reference } from 'src/app/shared/Models/Reference';

@Component({
  selector: 'app-AddPerson',
  templateUrl: './AddPerson.component.html',
  styleUrls: ['./AddPerson.component.css']
})
export class AddPersonComponent implements OnInit {

  panelOpenState = true;
  maxDate = new Date();

  public COUNTRY: 			GeneralGeografy[] =[]; 
  public FEDERAL: 			GeneralGeografy[] =[];
  public PROVINCE:			GeneralGeografy[] =[];
  public MUNICIPALITY:		GeneralGeografy[] =[];
  typeListReferen: 			Array<Reference>;
	addPersonForm    : FormGroup;
	emailPattern 		: string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
	constructor( private formBuilder : FormBuilder,
				  public dialogRef    : MatDialogRef<AddPersonComponent>,
				  public listGeografyService : ListGeografyService,) 
         {

			this.addPersonForm = this.formBuilder.group({
			nameFirst 		 		       	: ['',[Validators.required]],
			nameSecond 		 		        : [],
			lastNameFirst					: ['',[Validators.required]],
			lastNameSecond       			: [],
			identificationType				: [],
			identificationNumber 		 	: ['',[Validators.required]],
			birthDate						: ['',[Validators.required]],
			email							: ['',[Validators.required,Validators.pattern(this.emailPattern)]],
			geographies: this.formBuilder.group({
				idCountry					: [],
				idFederalState				: [],
				idProvince					: [],
				idMunicipality				: [],
				city						: [],
				urbanizationAddress			: [],
				avenueStreet				: [],
				postalCodeAddress			: [],
				numberLocalPhoneCodeAddress : [],
				numberLocalPhoneAddress		: [],
				numberCelPhoneCodeAddress	: [],
				numberCelPhoneAddress		: [],
				
				}), 
		
					
		})

				  }

  ngOnInit() {
	this.getListcountry();
	this.getypeDocument();
  }

  onFormSubmit(){
	  
	 this.dialogRef.close(this.addPersonForm.value); 
}

getListcountry(){

	this.listGeografyService.getListcountry().subscribe((resp) => {
		
		if (resp.status == "OK") {
  
			resp.data.forEach(element => {
			  let item: GeneralGeografy = new GeneralGeografy();
			  item.id = element.id;
			  item.name = element.name;
			  item.code = element.code;
					  
			  this.COUNTRY.push(item);
			  
			});
			
		  }

	});


}

getCountry(idCountry:any) {
	this.FEDERAL  = []
	this.PROVINCE = []
	this.MUNICIPALITY = []
	this.getListFederal(idCountry)

}

getFederal(idFederal:any) {
	this.PROVINCE = []
	this.MUNICIPALITY = []
	this.getListProvince(idFederal)

}

getProvince(idProvince:any) {
	this.MUNICIPALITY = []
	this.getListMunicipality(idProvince)

}

getListFederal(idCountry:any){
	if(idCountry){

		this.listGeografyService.getListFederalByCountry(idCountry).subscribe((resp) => {
			
			if (resp.status == "OK") {
	
				resp.data.forEach(element => {
				let item: GeneralGeografy = new GeneralGeografy();
				item.id = element.id;
				item.name = element.name;
				item.code = element.code;
						
				this.FEDERAL.push(item);
				
				});
			}
		});
	}
}

getListProvince(idFederal:any){
	if(idFederal){
	
		this.listGeografyService.getListProvincesByFederal(idFederal).subscribe((resp) => {
			
			if (resp.status == "OK") {
	  
				resp.data.forEach(element => {
				  let item: GeneralGeografy = new GeneralGeografy();
				  item.id = element.id;
				  item.name = element.name;
				  item.code = element.code;
						  
				  this.PROVINCE.push(item);
				  
				});
			  }
		});
	}	
}


getListMunicipality(idProvince:any){
	if(idProvince){
	
		this.listGeografyService.getListMunicipalityByProvince(idProvince).subscribe((resp) => {
			
			if (resp.status == "OK") {
	  
				resp.data.forEach(element => {
				  let item: GeneralGeografy = new GeneralGeografy();
				  item.id = element.id;
				  item.name = element.name;
				  item.code = element.code;
						  
				  this.MUNICIPALITY.push(item);
				  
				});
			  }
		});
	}	
}

getypeDocument() {
	this.listGeografyService.getListReferen().subscribe(response => {
	   if (response.code == "200") {
		  this.typeListReferen = response.data;
	   }
	})
 }

}


