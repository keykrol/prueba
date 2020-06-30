import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator, MatDialogRef } from '@angular/material';
import { AddUserComponent } from '../../Widget/PopUp/AddUser/AddUser.component';
import { EditUserComponent } from '../../Widget/PopUp/EditUser/EditUser.component';
import { UserService }from 'src/app/shared/Services/User.service';
import { UserAdmin } from 'src/app/shared/Models/UserAdmin';
import { identifierModuleUrl } from '@angular/compiler';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-User',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.css']
})
export class UserComponent implements OnInit {

  public UserAdmin: UserAdmin[];

  constructor(	private dialog: MatDialog, public UserService: UserService){
    

  }
  displayedColumns: string[] = ['id','username', 'idTypeUser','boolDelete','edit'];
  dataSource = new MatTableDataSource<any>();

  popUpNewRolResponse     : any;
  popUpEditRolResponse    : any;
  setvalue                : Boolean = true; 

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getuser();
    this.dataSource.paginator = this.paginator;
  }

/* add rol */
 

  getuser() {
    this.UserService.getUsers().subscribe((resp) => {
      this.UserAdmin = []

      resp.data.forEach(element => {
        let item: UserAdmin = new UserAdmin();
        item.id = element.id;
        item.username = element.username;
        item.passAccess = element.passAccess;
        item.attempt = element.attempt;
        item.idPerson = element.idPerson;
        item.idPerfil = element.idPerfil;
        item.idTypeUser = element.idTypeUser;
        item.startIdUser = element.startIdUser
        item.updateIdUser = element.updateIdUser;
        item.idStatus = element.idStatus;

        if (item.idStatus === 1) {
          element.boolDelete = true;
          item.boolDelete = element.boolDelete;
          this.UserAdmin.push(item);
        } else {
          element.boolDelete = false;
          item.boolDelete = element.boolDelete;
          this.UserAdmin.push(item);
        }

      });
      this.dataSource =  new MatTableDataSource<any>();
      this.dataSource.data = this.UserAdmin;
      this.dataSource.paginator = this.paginator; 
      console.log('prueba de usuario:',this.UserAdmin);
    });
   
  }

  

/* add rol */
  addUser() {

    this.addNewUserDialog().
       subscribe( res => {this.popUpNewRolResponse = res},
                  err => console.log(err),         
                  ()  => this.getAddUserPopupResponse(this.popUpNewRolResponse))
 }
 
   addNewUserDialog(){

		let dialogRef : MatDialogRef<AddUserComponent>;
		dialogRef = this.dialog.open(AddUserComponent);
		
		return dialogRef.afterClosed();
  }
  
  getAddUserPopupResponse(resUser: UserAdmin){
   
    if(resUser){
      console.log ("estoy afuera", resUser)

      this.UserService.postUser(resUser).subscribe(response => {
        console.log("Soy el Response: ", response.code);
         if (response.code == "200") {
          this.getuser();
          console.log ("guardado con exito", resUser);
          Swal.fire({
            title: '¡Éxito!',
            text: 'Registro guardado con éxito',
            icon: 'success',
            confirmButtonText: 'OK'
          })
          
        }else if(response.code == "400"){
  
          console.log ("guardado con no exito");

          Swal.fire({
            title: 'Error',
            text: 'Error al guardar el registro',
            icon: 'error',
            confirmButtonText: 'OK'
          })
  
        } 

    }); /**/
  
  }
}  
 

/* edit user */
 editUser(element: any){

  this.editUserDialog(element).
       subscribe( res => {this.popUpEditRolResponse = res},
                  err => console.log(err),
                  ()  => this.getEditUserResponse(this.popUpEditRolResponse))
}

editUserDialog(element: any){
  
  let dialogRef : MatDialogRef<EditUserComponent>;
  dialogRef = this.dialog.open(EditUserComponent,{
              data: { user: element }});
  
  return dialogRef.afterClosed();
 
 }
 
 getEditUserResponse(resRol: any ){
 
    if(resRol){

      this.setvalue = false;
      this.putEditRol(resRol,this.setvalue);
    }

 }

 /* setValue(element,e){
    this.setvalue = true;
    this.putEditRol(element,this.setvalue);  
  } */

  setValue(element,e) {

    element.boolDelete = e.checked;
    console.log("Status: ", element.boolDelete);

    if (element.boolDelete === true) {
      element.idStatus = "1";
      console.log("Status: ", element.idStatus);
      this.UserService.putUser(element).subscribe(response => {
        if (response.code == "202"){
          console.log(element);
        } else{
          Swal.fire({
            title: 'Error',
            text: 'Error al cambiar estado',
            icon: 'error',
            confirmButtonText: 'OK'
          })
        }
      }); 
    } else {
      element.idStatus = "2";
      console.log("Status: ", element.idStatus);
      this.UserService.putUser(element).subscribe(response => {
        if (response.code == "202"){
          console.log(element);
        } else{
          Swal.fire({
            title: 'Error',
            text: 'Error al cambiar estado',
            icon: 'error',
            confirmButtonText: 'OK'
          })
        }
      }); 
    }
  }

putEditRol(respUser:any,setvalue:Boolean){
 
 console.log('nueva data actualizada',respUser);
  this.UserService.putUser(respUser).subscribe(response => {
    if (response.code == "202") {

        if(setvalue == false){
          this.getuser();
          Swal.fire({
            title: '¡Éxito!',
            text: 'Registro actualizado',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        }

    }else if(response.code == "400"){

      Swal.fire({
        title: 'Error',
        text: 'Error al modificar el registro',
        icon: 'error',
        confirmButtonText: 'OK'
      })

    } 

  }); 
} 

}



