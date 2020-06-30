import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-AddRol',
  templateUrl: './AddCoin.component.html',
  styleUrls: ['./AddCoin.component.css']
})
export class AddCoinComponent implements OnInit {

	addCoinForm    : FormGroup;
	emailPattern 		: string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
	constructor( private formBuilder : FormBuilder,
         public dialogRef    : MatDialogRef<AddCoinComponent>,) 
         {

					this.addCoinForm = this.formBuilder.group({
						code 		 		          : ['',[Validators.required]],
            name       			      : ['',[]],
            description 		 		  : ['',[]],
					})

				  }
				
	ngOnInit() {
	/* 	this.getShowConcept(); */
		

	}

	// onFormSubmit method is submit a add new user form.
	onFormSubmit(){
		this.dialogRef.close(this.addCoinForm.value);
	}


/* 	getShowConcept() {
	this.conceptoService.getConceptAll().subscribe((resp) => {

		if (resp.status == "OK") {
	
		  this.CONCEPTDATA = [];
		  resp.data.forEach(element => {
			let item: Concept = new Concept();
			item.id = element.id;
			item.name = element.name;
			
			this.CONCEPTDATA.push(item);	
		  }); 
		}
	  });
	} */

}