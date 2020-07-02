import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatDialogRef, MatTableDataSource, MatSnackBar }    from '@angular/material';
import { Profile }                                                      from 'src/app/shared/Models/Perfil';
import { ProfileService }                                               from 'src/app/shared/Services/Profile.service';
import { AddPerfilComponent }                                           from '../../Widget/PopUp/AddPerfil/AddPerfil.component';
import { EditPerfilComponent }                                          from '../../Widget/PopUp/EditPerfil/EditPerfil.component';
import Swal from 'sweetalert2';

import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';


export interface PeriodicElement {

  action: string;
  user: string;
  name: string;
  lastname: string;
  telf: string;
  cel: string;
  email: string;
  planta: string;
  superuser: string;
  access: string;
  notification: string;
  state: string;






}

const ELEMENT_DATA: PeriodicElement[] = [
  {action: 'ver', user: 'jperez', name: 'Juan', lastname: 'Perez', telf: '00000000000', cel: '00000000000', email: 'jperez@gmail.com', planta: 'CMT', superuser: 'si', access: '20-06-2020', notification: 'si', state:'activo' },
  {action: 'ver', user: 'jperez', name: 'Juan', lastname: 'Perez', telf: '00000000000', cel: '00000000000', email: 'jperez@gmail.com', planta: 'CMT', superuser: 'si', access: '20-06-2020', notification: 'si', state:'activo' },
  {action: 'ver', user: 'jperez', name: 'Juan', lastname: 'Perez', telf: '00000000000', cel: '00000000000', email: 'jperez@gmail.com', planta: 'CMT', superuser: 'si', access: '20-06-2020', notification: 'si', state:'activo' },
  {action: 'ver', user: 'jperez', name: 'Juan', lastname: 'Perez', telf: '00000000000', cel: '00000000000', email: 'jperez@gmail.com', planta: 'CMT', superuser: 'si', access: '20-06-2020', notification: 'si', state:'activo' },
  {action: 'ver', user: 'jperez', name: 'Juan', lastname: 'Perez', telf: '00000000000', cel: '00000000000', email: 'jperez@gmail.com', planta: 'CMT', superuser: 'si', access: '20-06-2020', notification: 'si', state:'activo' },
  {action: 'ver', user: 'jperez', name: 'Juan', lastname: 'Perez', telf: '00000000000', cel: '00000000000', email: 'jperez@gmail.com', planta: 'CMT', superuser: 'si', access: '20-06-2020', notification: 'si', state:'activo' },
  {action: 'ver', user: 'jperez', name: 'Juan', lastname: 'Perez', telf: '00000000000', cel: '00000000000', email: 'jperez@gmail.com', planta: 'CMT', superuser: 'si', access: '20-06-2020', notification: 'si', state:'activo' },

];






@Component({
  selector: 'app-Perfil',
  templateUrl: './Perfil.component.html',
  styleUrls: ['./Perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public Profile           : Profile[];
  dataClean                : Profile[] = [];
  public PERFILDATA       : Profile[];

  constructor(	
    private ProfileService: ProfileService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    ){
      //this.getProfile();
  }

  displayedColumns: string[] = ['action', 'user', 'name', 'lastname','telf', 'cel', 'email', 'planta', 'superuser', 'access', 'notification', 'state' ];
 //dataSource = new MatTableDataSource<any>();
 dataSource = new ExampleDataSource();

 
  popUpPerfilResponse       : any;
  popUpEditPerfilResponse   : any;
  setvalue                  : Boolean = true; 

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
  }
// applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();
//   }

/* Show Profile */

// getProfile() {
//   this.ProfileService.getProfile().subscribe((resp) => {
//     this.Profile = []
//     if(resp.status == "OK"){

//     resp.data.forEach(element => {
//       let item: Profile = new Profile();
//       item.id = element.id;
//       item.name = element.name;
//       item.attempts = element.attempts;
//       item.lengthMinimum=element.lengthMinimum;
//       item.expirationDay = element.expirationDay;
//       item.cantHistory = element.cantHistory;
//       item.idStatus = element.idStatus;
//       item.characterLower=element.characterLower;
//       item.characterNumber=element.characterNumber;
//       item.characterSpecial=element.characterSpecial;
//       item.characterUpper=element.characterUpper;
//       item.startIdUser=element.startIdUser;
//       item.updateIdUser =element.updateIdUser;

//       if (item.idStatus === 1) {
//         element.boolDelete = true;
//         item.boolDelete = element.boolDelete;
//         this.Profile.push(item);
//       } else {
//         element.boolDelete = false;
//         item.boolDelete = element.boolDelete;
//         this.Profile.push(item);
//       }
//     });


//     this.dataSource = new MatTableDataSource<any>();
//     this.dataSource.data = this.Profile;
//     this.dataSource.paginator = this.paginator; 

// } else {

//   this.dataSource.data = this.dataClean;
// }
   

// });

// }


// addPerfil() {
//   this.addNewPerfilDialog().
//       subscribe( res => {this.popUpPerfilResponse = res},
//                 err => console.log(err),
//                 ()  => this.getAddPerfilPopupResponse(this.popUpPerfilResponse))
// }

// //addNewPerfilDialog function is used to open Add new perfil Dialog Component. 
// addNewPerfilDialog(){
//   let dialogRef : MatDialogRef<AddPerfilComponent>;
//   dialogRef = this.dialog.open(AddPerfilComponent);
  
//   return dialogRef.afterClosed();
// }
  

// getAddPerfilPopupResponse(resProfile: Profile){
//   if(resProfile){

//     this.ProfileService.postProfile(resProfile).subscribe(response => {
//       console.log("Este es el código: "+ response.code)
//       if (response.code == "201") {
//         this.getProfile();
//         Swal.fire({
//           title: '¡Éxito!',
//           text: 'Registro guardado',
//           icon: 'success',
//           confirmButtonText: 'OK'
//         }) 
//       } else if(response.code == "400")  {
//         Swal.fire({
//           title: 'Error',
//           text: 'Error al guardar el registro',
//           icon: 'error',
//           confirmButtonText: 'OK'
//         })
//       }
//     });
  
//   }
// }



 
// /* edit perfil */
// editPerfil(element: any){

//   this.editPerfilDialog(element).
//        subscribe( res => {this.popUpEditPerfilResponse = res},
//                   err => console.log(err),
//                   ()  => this.getEditPerfilResponse(this.popUpEditPerfilResponse))
 
// }

// editPerfilDialog(element: any){
  
//   let dialogRef : MatDialogRef<EditPerfilComponent>;
//   dialogRef = this.dialog.open(EditPerfilComponent,{
//               data: { perfil: element }});
  
//   return dialogRef.afterClosed();
 
//  }
 
//  getEditPerfilResponse(resPerfil: any ){
 
//     if(resPerfil){

//       this.setvalue = false;
//       this.putEditPerfil(resPerfil,this.setvalue);
//     }

//  }

//   setValue(element,e){

//   element.boolDelete = e.checked;
//   console.log("Status: ", element.boolDelete);

//   if (element.boolDelete === true) {
//     element.idStatus = "1";
//     element.startIdUser = "user";
//     element.updateIdUser = "user";
//     console.log("Status: ", element.idStatus);
//     this.ProfileService.putProfile(element).subscribe(response => {
//       if (response.code == "202"){
//         console.log(element);
//       } else{
//         Swal.fire({
//           title: 'Error',
//           text: 'Error al cambiar estado',
//           icon: 'error',
//           confirmButtonText: 'OK'
//         })
//       }
//     }); 
//   } else {
//     element.idStatus = "2";
//     element.startIdUser = "user";
//     element.updateIdUser = "user";
//     console.log("Status: ", element.idStatus);
//     this.ProfileService.putProfile(element).subscribe(response => {
//       if (response.code == "202"){
//         console.log(element);
//       } else{
//         Swal.fire({
//           title: 'Error',
//           text: 'Error al cambiar estado',
//           icon: 'error',
//           confirmButtonText: 'OK'
//         })
//       }
//     }); 
//   }
//   }

//   putEditPerfil(resPerfil:any,setvalue:Boolean){
//     console.log('respuesta de data',resPerfil);
//     this.ProfileService.putProfile(resPerfil).subscribe(response => {
//       if (response.code == "202") {

//           if(setvalue == false){
//             this.getProfile() 
//             Swal.fire({
//               title: '¡Éxito!',
//               text: 'Registro actualizado',
//               icon: 'success',
//               confirmButtonText: 'OK'
//             })
//           }
//           if(setvalue == true){
//           /*   this.getProfile()  */
//             this.snackBar.open('Estatus modificado', '', {
//               duration: 3000
//             });
//           }

//       } else if(response.code == "400"){

//         Swal.fire({
//           title: 'Error',
//           text: 'Error al modificar el registro',
//           icon: 'error',
//           confirmButtonText: 'OK'
//         })
//       }
//     }); 
//   }

}


export class ExampleDataSource extends DataSource<PeriodicElement> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<PeriodicElement[]>(ELEMENT_DATA);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<PeriodicElement[]> {
    return this.data;
  }

  disconnect() {}
}