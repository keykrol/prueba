import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-AddHaulier',
  templateUrl: './AddHaulier.component.html',
  styleUrls: ['./AddHaulier.component.css']
})
export class AddHaulierComponent implements OnInit {

	addHaulierForm    : FormGroup;
	emailPattern 		: string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
	constructor( private formBuilder : FormBuilder,
         public dialogRef    : MatDialogRef<AddHaulierComponent>,) 
         {

					this.addHaulierForm = this.formBuilder.group({
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
		this.dialogRef.close(this.addHaulierForm.value);
	}

}