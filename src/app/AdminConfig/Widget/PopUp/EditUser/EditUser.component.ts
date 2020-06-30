import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService }from 'src/app/shared/Services/User.service';
import { UsersType } from 'src/app/shared/Models/UsersType';
import { PersonService }from 'src/app/shared/Services/Person.service';
import { Person } from 'src/app/shared/Models/Person';
import { ProfileService }from 'src/app/shared/Services/Profile.service';
import { Profile } from 'src/app/shared/Models/Perfil';

@Component({
  selector: 'app-EditUser',
  templateUrl: './EditUser.component.html',
  styleUrls: ['./EditUser.component.css']
})
export class EditUserComponent implements OnInit {

	public UsersType: UsersType[];
	public Person: Person[];
	public Profile: Profile[];


	editUserForm    : FormGroup;
	emailPattern 		: string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
	constructor( private formBuilder : FormBuilder,
				  public dialogRef    : MatDialogRef<EditUserComponent>,
				  public UserService: UserService,
				  public PersonService: PersonService,
				  public ProfileService: ProfileService,
				  @Inject(MAT_DIALOG_DATA) public data: any)
				  
         {
			this.getuserstype();
			this.getperson();
			this.getprofile();
			console.log('prueba de data',data.user);
			this.editUserForm = this.formBuilder.group({
		id 		 		           			: [this.data.user.id],
		username 		 		           	: [this.data.user.username, Validators.required],
        passAccess       			      	: [this.data.user.passAccess],
        attempt 		 	              	: [this.data.user.attempt],
        idTypeUser		 		          	: [this.data.user.idTypeUser],
        idPerson       			        	: [this.data.user.idPerson],
		idPerfil 		 	            	: [this.data.user.idPerfil],
		idStatus							: [this.data.user.idStatus],
		boolDelete							: [this.data.user.boolDelete],
		startIdUser							: [this.data.user.startIdUser],
		updateIdUser						: [this.data.user.updateIdUser],
		})

		}
				
	ngOnInit() {

	}

	// onFormSubmit method is submit a add new rol form.
	onFormSubmit(){
		console.log('visualizar esta parte :',this.editUserForm.value)
		 this.dialogRef.close(this.editUserForm.value); 
		
	}

	getuserstype(){

		this.UserService.getUsersType().subscribe((resp) => {
		  if (resp.status == "OK") {
	  
			this.UsersType = [];
	  
			resp.data.forEach(element => {
	  
			  let item: UsersType = new UsersType();
			  item.id = element.id;
			  item.typeUser = element.typeUser;
			  item.idStatus = element.idStatus;
			  item.boolDelete = element.boolDelete;
	  
			  this.UsersType.push(item);
			 
			});
	  
	  
			
		  }
		});
	  }

	  getperson(){

		this.PersonService.getPerson().subscribe((resp) => {
		  if (resp.status == "OK") {
			console.log("Entró en idPerson");
			this.Person = [];
	  
			resp.data.forEach(element => {
	  
			  let item: Person = new Person();
			  item.id = element.id;
			  item.nameFirst = element.nameFirst;
			  item.nameSecond = element.nameSecond;
			  item.lastNameFirst = element.lastNameFirst;
			  item.lastNameSecond = element.lastNameSecond;
	  
			  this.Person.push(item);
			 
			});
		  } else {
			  console.log("No entró en idPerson");
		  }
		});
	  }
	  
	  getprofile(){

		this.ProfileService.getProfile().subscribe((resp) => {
		  if (resp.status == "OK") {
	  
			this.Profile = [];
	  
			resp.data.forEach(element => {
	  
			  let item: Profile = new Profile();
			  item.id = element.id;
			  item.name = element.name;
	  
			  this.Profile.push(item);
			 
			});
	  
	  
			
		  }
		});
	  }

}
