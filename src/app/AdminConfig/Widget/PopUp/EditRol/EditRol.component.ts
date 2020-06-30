import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-EditRol',
  templateUrl: './EditRol.component.html',
  styleUrls: ['./EditRol.component.css']
})
export class EditRolComponent implements OnInit {

  editRolForm    : FormGroup;

	constructor( private formBuilder : FormBuilder,
               public dialogRef    : MatDialogRef<EditRolComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any) {
                  this.editRolForm = this.formBuilder.group({
                    id 		 		        : [this.data.rol.id],
                    code 		 		      : [this.data.rol.code, Validators.required],
                    name       			  : [this.data.rol.name],
                    description 		 	: [this.data.rol.description],
                    idStatus          : [this.data.rol.idStatus],
                  })
               }
				
	ngOnInit() {
	}

	// onFormSubmit method is submit and add new rol form.
	onFormSubmit(){
    console.log("Valores: ", this.editRolForm.value)
		this.dialogRef.close(this.editRolForm.value); 
	}
}
