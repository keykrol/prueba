import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PersonGeografy } from 'src/app/shared/Models/Geografy';
import { GeneralGeografy } from 'src/app/shared/Models/GeneralGeografy';
import { Reference } from 'src/app/shared/Models/Reference';
import { ListGeografyService } from 'src/app/shared/Services/listGeografy.service';
import { Person } from 'src/app/shared/Models/Person';

@Component({
  selector: 'app-EditPerson',
  templateUrl: './EditPerson.component.html',
  styleUrls: ['./EditPerson.component.css']
})
export class EditPersonComponent implements OnInit {

	idfederal:number;
	idProvinces:number;
	idMunicipalitys:number;
	idCountrys:number;

	panelOpenState = true;
	maxDate = new Date();

	public COUNTRY: 			GeneralGeografy[] =[]; 
  	public FEDERAL: 			GeneralGeografy[] =[];
  	public PROVINCE:			GeneralGeografy[] =[];
  	public MUNICIPALITY:		GeneralGeografy[] =[];
	  
	typeListReferen: 	Array<Reference>;
	person				: Person = new Person();
	itemGeografy		: PersonGeografy = new PersonGeografy();
	editPersonForm    	: FormGroup;
	emailPattern 		: string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
	
	constructor( private formBuilder  : FormBuilder,
				  public dialogRef    : MatDialogRef<EditPersonComponent>,
				  @Inject(MAT_DIALOG_DATA) public data: any,
				  public listGeografyService : ListGeografyService,) 
         	{
				
				let fDate : any;
				let fecha =this.data.person.birthDate.replace(/[/]/gi,'-').substr(0, 10);
			
				if(fecha){

					fDate=	new Date(fecha + ' 0:00:00').toISOString()
				
				}else{
					
					fDate=	new Date(fecha + ' 0:00:00').toISOString()
					
				  } 
	if(this.data.person.geographies){

		this.itemGeografy = this.data.person.geographies[0];
		this.idfederal = this.itemGeografy.idFederalState
		this.idProvinces = this.itemGeografy.idProvince
		this.idMunicipalitys = this.itemGeografy.idMunicipality
		this.idCountrys = this.itemGeografy.idCountry
	}

			this.editPersonForm = this.formBuilder.group({
			id										: [this.data.person.id],
			nameFirst 		 		       			: [this.data.person.nameFirst,Validators.required],
			nameSecond 		 		        		: [this.data.person.nameSecond],
			lastNameFirst					    	: [this.data.person.lastNameFirst,Validators.required],
			lastNameSecond       					: [this.data.person.lastNameSecond],
			identificationType						: [this.data.person.identificationType.toString()],
			identificationNumber 		 			: [this.data.person.identificationNumber,Validators.required],
			birthDate						      	: []= fDate,
			email							        : [this.data.person.email,Validators.pattern(this.emailPattern)],
			startIdUser             				: ['user'],
			updateIdUser            				: ['user'], 
			geographies: this.formBuilder.group({
				id						    		: [this.itemGeografy.id],
				idCountry						    : [this.idCountrys],
				idFederalState						: [this.idfederal],
				idProvince					      	: [this.idProvinces],
				idMunicipality				    	: [this.idMunicipalitys],
				city						        : [this.itemGeografy.city],
				urbanizationAddress					: [this.itemGeografy.urbanizationAddress],
				avenueStreet				    	: [this.itemGeografy.avenueStreet],
				postalCodeAddress			  		: [this.itemGeografy.postalCodeAddress],
				numberLocalPhoneCodeAddress			: [this.itemGeografy.numberLocalPhoneCodeAddress],
				numberLocalPhoneAddress				: [this.itemGeografy.numberLocalPhoneAddress],
				numberCelPhoneCodeAddress			: [this.itemGeografy.numberCelPhoneCodeAddress],
				numberCelPhoneAddress				: [this.itemGeografy.numberCelPhoneAddress],
				
				}), 
		
					
		})

		}

  ngOnInit() {
	this.getypeDocument();
	this.getListcountry();
	this.getListFederal(this.itemGeografy.idCountry);
	this.getListProvince(this.itemGeografy.idFederalState);
	this.getListMunicipality(this.itemGeografy.idProvince);
	
	
  }

  onFormSubmit(){
	
	
console.log('formulario',this.editPersonForm.value);
  this.dialogRef.close(this.editPersonForm.value);  
}

getypeDocument() {
	this.listGeografyService.getListReferen().subscribe(response => {
	   if (response.code == "200") {
		   
		  this.typeListReferen = response.data;
	   }
	})
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

	this.FEDERAL  = [];
	this.PROVINCE = [];
	this.MUNICIPALITY = [];
 	this.idfederal = null;
	this.idProvinces = null;
	this.idMunicipalitys = null; 

	this.getListFederal(idCountry)

}

getFederal(idFederal:any) {
let prueba: Boolean=false
	this.PROVINCE = []
	this.MUNICIPALITY = []

if(idFederal){
	this.idProvinces = null;
	this.idMunicipalitys = null;  
prueba=true
}
	if(prueba){

		this.getListProvince(idFederal)
	}	
	
 	

	

}


getProvince(idProvince:any) {

	this.MUNICIPALITY = []
 	this.idMunicipalitys = null; 

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



}




