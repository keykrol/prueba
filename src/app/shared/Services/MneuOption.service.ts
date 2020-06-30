import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../Constant/Constant';
import { Observable } from 'rxjs';
import { ResponseDTO } from '../Models/Response';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class MneuOptionService {


  constructor(
    private http: HttpClient,
    private constant: Constant,
    private utilsService: UtilsService
  ) { }

  public getListMenuOption(): Observable<ResponseDTO>{
    
    let url = this.constant.urls.menuOption.getListMenu
    return this.http.get<ResponseDTO>(url);

  }
  public deleteMenu(idRol:number,): Observable<ResponseDTO> {
    let url = this.constant.urls.menuOption.deletemenu;
    url = this.utilsService.settingParameter(url, "idRol", idRol.toString());
    return this.http.delete<ResponseDTO>(url);
  }
  
  getByIdRol(idRol:any): Observable<ResponseDTO>{
    let url = this.constant.urls.menuOption.getByIdRol;
    url = this.utilsService.settingParameter(url, "idRol", idRol.toString()); 
    return this.http.get<ResponseDTO>(url);

  }
  public postRolMenu( requestBody: Object): Observable<ResponseDTO> {

    let url = this.constant.urls.menuOption.postRolMenu;
    /* url = this.utilsService.settingParameter(url, "userId", userId.toString()); */
    return this.http.post<ResponseDTO>(url, requestBody);
  }

}
