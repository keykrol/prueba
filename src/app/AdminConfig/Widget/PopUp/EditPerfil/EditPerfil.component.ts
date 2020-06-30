import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-EditPerfil',
  templateUrl: './EditPerfil.component.html',
  styleUrls: ['./EditPerfil.component.css']
})
export class EditPerfilComponent implements OnInit {

  editPerfilForm    : FormGroup;

  constructor(  private formBuilder : FormBuilder,
                public dialogRef    : MatDialogRef<EditPerfilComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) { 

                  this.editPerfilForm = this.formBuilder.group({
                    id 		 		        	    : [this.data.perfil.id],
                    name 		 		        	  : [this.data.perfil.name,Validators.required],
                    attempts 		 		        : [this.data.perfil.attempts],
                    expirationDay					  : [this.data.perfil.expirationDay],
                    cantHistory       			: [this.data.perfil.cantHistory],
                    lengthMinimum 		 			: [this.data.perfil.lengthMinimum],
                    characterUpper					: [this.data.perfil.characterUpper],
                    characterLower					: [this.data.perfil.characterLower],
                    characterNumber					: [this.data.perfil.characterNumber],
                    characterSpecial				: [this.data.perfil.characterSpecial],
                    idStatus                : [1] ,
                    startIdUser             : ['user'],
                    updateIdUser            : ['user'], 
                });

            }


  ngOnInit() {

  }

  onFormSubmit(){
    console.log('esto es perfil',this.editPerfilForm.value);
		 this.dialogRef.close(this.editPerfilForm.value); 
	}

}
