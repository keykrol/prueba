import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-AddRol',
  templateUrl: './AddRol.component.html',
  styleUrls: ['./AddRol.component.css']
})
export class AddRolComponent implements OnInit {

	addRolForm    : FormGroup;
	emailPattern 		: string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
	constructor( private formBuilder : FormBuilder,
         		 public dialogRef    : MatDialogRef<AddRolComponent>,) {}
				
	ngOnInit() {
		this.addRolForm = this.formBuilder.group({
			code 		 		      : ['',[Validators.required]],
            name       			      : ['',[]],
			description 		 	  : ['',[]],
			idStatus				  : ['1',[]],
			boolDelete			 	  : [true,[]]
		})
	}

	// onFormSubmit method is submit a add new rol form.
	onFormSubmit(){
		console.log("Datos: ", this.addRolForm.value);
		this.dialogRef.close(this.addRolForm.value);
	}
}