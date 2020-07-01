import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatDialogRef, MatTableDataSource, MatSnackBar }    from '@angular/material';
import { Profile }                                                      from 'src/app/shared/Models/Perfil';
import { ProfileService }                                               from 'src/app/shared/Services/Profile.service';
import { AddPerfilComponent }                                           from '../../Widget/PopUp/AddPerfil/AddPerfil.component';
import { EditPerfilComponent }                                          from '../../Widget/PopUp/EditPerfil/EditPerfil.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-Increase',
  templateUrl: './Increase.component.html',
  styleUrls: ['./Increase.component.css']
})
export class IncreaseComponent implements OnInit {

  public Profile           : Profile[];
  dataClean                : Profile[] = [];
  public PERFILDATA       : Profile[];

  constructor(	
    private ProfileService: ProfileService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    ){
      this.getProfile();
  }

  displayedColumns: string[] = ['name', 'attempts', 'expirationDay', 'cantHistory','boolDelete', 'edit'];
  dataSource = new MatTableDataSource<any>();
 
  popUpPerfilResponse       : any;
  popUpEditPerfilResponse   : any;
  setvalue                  : Boolean = true; 

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
  }
applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

/* Show Profile */

getProfile() {
  this.ProfileService.getProfile().subscribe((resp) => {
    this.Profile = []
    if(resp.status == "OK"){

    resp.data.forEach(element => {
      let item: Profile = new Profile();
      item.id = element.id;
      item.name = element.name;
      item.attempts = element.attempts;
      item.lengthMinimum=element.lengthMinimum;
      item.expirationDay = element.expirationDay;
      item.cantHistory = element.cantHistory;
      item.idStatus = element.idStatus;
      item.characterLower=element.characterLower;
      item.characterNumber=element.characterNumber;
      item.characterSpecial=element.characterSpecial;
      item.characterUpper=element.characterUpper;
      item.startIdUser=element.startIdUser;
      item.updateIdUser =element.updateIdUser;

      if (item.idStatus === 1) {
        element.boolDelete = true;
        item.boolDelete = element.boolDelete;
        this.Profile.push(item);
      } else {
        element.boolDelete = false;
        item.boolDelete = element.boolDelete;
        this.Profile.push(item);
      }
    });


    this.dataSource = new MatTableDataSource<any>();
    this.dataSource.data = this.Profile;
    this.dataSource.paginator = this.paginator; 

} else {

  this.dataSource.data = this.dataClean;
}
   

});

}


addPerfil() {
  this.addNewPerfilDialog().
      subscribe( res => {this.popUpPerfilResponse = res},
                err => console.log(err),
                ()  => this.getAddPerfilPopupResponse(this.popUpPerfilResponse))
}

//addNewPerfilDialog function is used to open Add new perfil Dialog Component. 
addNewPerfilDialog(){
  let dialogRef : MatDialogRef<AddPerfilComponent>;
  dialogRef = this.dialog.open(AddPerfilComponent);
  
  return dialogRef.afterClosed();
}
  

getAddPerfilPopupResponse(resProfile: Profile){
  if(resProfile){

    this.ProfileService.postProfile(resProfile).subscribe(response => {
      console.log("Este es el código: "+ response.code)
      if (response.code == "201") {
        this.getProfile();
        Swal.fire({
          title: '¡Éxito!',
          text: 'Registro guardado',
          icon: 'success',
          confirmButtonText: 'OK'
        }) 
      } else if(response.code == "400")  {
        Swal.fire({
          title: 'Error',
          text: 'Error al guardar el registro',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    });
  
  }
}



 
/* edit perfil */
editPerfil(element: any){

  this.editPerfilDialog(element).
       subscribe( res => {this.popUpEditPerfilResponse = res},
                  err => console.log(err),
                  ()  => this.getEditPerfilResponse(this.popUpEditPerfilResponse))
 
}

editPerfilDialog(element: any){
  
  let dialogRef : MatDialogRef<EditPerfilComponent>;
  dialogRef = this.dialog.open(EditPerfilComponent,{
              data: { perfil: element }});
  
  return dialogRef.afterClosed();
 
 }
 
 getEditPerfilResponse(resPerfil: any ){
 
    if(resPerfil){

      this.setvalue = false;
      this.putEditPerfil(resPerfil,this.setvalue);
    }

 }

  setValue(element,e){

  element.boolDelete = e.checked;
  console.log("Status: ", element.boolDelete);

  if (element.boolDelete === true) {
    element.idStatus = "1";
    element.startIdUser = "user";
    element.updateIdUser = "user";
    console.log("Status: ", element.idStatus);
    this.ProfileService.putProfile(element).subscribe(response => {
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
    element.startIdUser = "user";
    element.updateIdUser = "user";
    console.log("Status: ", element.idStatus);
    this.ProfileService.putProfile(element).subscribe(response => {
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

  putEditPerfil(resPerfil:any,setvalue:Boolean){
    console.log('respuesta de data',resPerfil);
    this.ProfileService.putProfile(resPerfil).subscribe(response => {
      if (response.code == "202") {

          if(setvalue == false){
            this.getProfile() 
            Swal.fire({
              title: '¡Éxito!',
              text: 'Registro actualizado',
              icon: 'success',
              confirmButtonText: 'OK'
            })
          }
          if(setvalue == true){
          /*   this.getProfile()  */
            this.snackBar.open('Estatus modificado', '', {
              duration: 3000
            });
          }

      } else if(response.code == "400"){

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



