import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-AddPerfil',
  templateUrl: './AddPerfil.component.html',
  styleUrls: ['./AddPerfil.component.css']
})
export class AddPerfilComponent implements OnInit {
	
	addPerfilForm    : FormGroup;
	emailPattern 		: string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
	constructor( private formBuilder : FormBuilder,
        public dialogRef    : MatDialogRef<AddPerfilComponent>,) {}
				
	ngOnInit() {
		this.addPerfilForm = this.formBuilder.group({
			user		 		        	: ['',[Validators.required]],
			name 		 		        	: ['',[Validators.required]],
			lastname 		 		        : ['',[Validators.required]],
			planta					: ['',[]],
			telephone       			    : ['',[]],
			telephonec 		 			: ['',[]],
			superuser					: [false,[]],
			notification					: [false,[]],
			email					: ['',[]],
			state						: ['',[]],
			lastacces 		 				: ['',[]],
		})
	}

	// onFormSubmit method is submit a add new user form.
	onFormSubmit(){
		console.log('Datos: ', this.addPerfilForm.value);
		this.dialogRef.close(this.addPerfilForm.value);
	}

}