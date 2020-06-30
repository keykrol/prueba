import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-EditAppUser',
  templateUrl: './EditAppUser.component.html',
  styleUrls: ['./EditAppUser.component.css']
})
export class EditAppUserComponent implements OnInit {

	addRolForm    : FormGroup;
	emailPattern 		: string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
	constructor( private formBuilder : FormBuilder,
         public dialogRef    : MatDialogRef<EditAppUserComponent>,) 
         {

					this.addRolForm = this.formBuilder.group({
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
		this.dialogRef.close(this.addRolForm.value);
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