import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { UserService }from 'src/app/shared/Services/User.service';
import { UsersType } from 'src/app/shared/Models/UsersType';
import { PersonService }from 'src/app/shared/Services/Person.service';
import { Person } from 'src/app/shared/Models/Person';
import { ProfileService }from 'src/app/shared/Services/Profile.service';
import { Profile } from 'src/app/shared/Models/Perfil';



@Component({
  selector: 'app-AddUser',
  templateUrl: './AddUser.component.html',
  styleUrls: ['./AddUser.component.css']
})
export class AddUserComponent implements OnInit {

	public UsersType: UsersType[];
	public Person: Person[];
	public Profile: Profile[];


  addUserForm    : FormGroup;
	emailPattern 		: string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
	constructor( private formBuilder : FormBuilder,
				  public dialogRef    : MatDialogRef<AddUserComponent>,
				  public UserService: UserService,
				  public PersonService: PersonService,
				  public ProfileService: ProfileService) 
				  
         {
			this.getuserstype();
			this.getperson();
			this.getprofile();

			this.addUserForm = this.formBuilder.group({

		username 		 		           	: ['',[Validators.required]],
        passAccess       			      	: ['',[]],
        attempt 		 	              	: ['',[]],
        idTypeUser		 		          		: ['',[Validators.required]],
        idPerson       			        	: ['',[]],
		idPerfil 		 	            	: ['',[]],
		idStatus							: [1,[]],
		})

		}
				
	ngOnInit() {

	}

	// onFormSubmit method is submit a add new rol form.
	onFormSubmit(){
	
		this.dialogRef.close(this.addUserForm.value);
		console.log(this.addUserForm.value)
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
