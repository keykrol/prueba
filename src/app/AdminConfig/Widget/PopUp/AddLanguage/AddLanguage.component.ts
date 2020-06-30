import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-AddLanguage',
  templateUrl: './AddLanguage.component.html',
  styleUrls: ['./AddLanguage.component.css']
})
export class AddLanguageComponent implements OnInit {

	addLanguageForm    : FormGroup;
	emailPattern 		: string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
	constructor( private formBuilder : FormBuilder,
         public dialogRef    : MatDialogRef<AddLanguageComponent>,) 
         {

					this.addLanguageForm = this.formBuilder.group({
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
		this.dialogRef.close(this.addLanguageForm.value);
	}

}