import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../Constant/Constant';
import { UtilsService } from './utils.service';
import { ResponseDTO } from '../Models/Response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http: HttpClient,
    private constant: Constant,
    private utilsService: UtilsService
  ) { }

  public getUsers(): Observable<ResponseDTO> {
    let url = this.constant.urls.user.getUsers;
    return this.http.get<ResponseDTO>(url);
  }

  public postUser(requestBody: Object): Observable<ResponseDTO> {
    let url = this.constant.urls.user.postUser;
        return this.http.post<ResponseDTO>(url, requestBody);
  }

  public getUsersType(): Observable<ResponseDTO> {
    let url = this.constant.urls.user.getUserType;
    return this.http.get<ResponseDTO>(url);
  }

  public getUsersRol(): Observable<ResponseDTO> {
    let url = this.constant.urls.user.getUserRol;
    return this.http.get<ResponseDTO>(url);
  }

  public putUser( requestBody: Object): Observable<ResponseDTO> {

    let url = this.constant.urls.user.putUser;
    /* url = this.utilsService.settingParameter(url, "userId", userId.toString()); */
    return this.http.put<ResponseDTO>(url, requestBody);
  }



  public getListRolUser(): Observable<ResponseDTO>{
    
    let url = this.constant.urls.user.getListRolUser
    return this.http.get<ResponseDTO>(url);

  }
  public deleteUser(idUser:number,): Observable<ResponseDTO> {
    let url = this.constant.urls.user.deleterol;
    url = this.utilsService.settingParameter(url, "idUser", idUser.toString());
    return this.http.delete<ResponseDTO>(url);
  }
  
  getByIdUser(idUser:any): Observable<ResponseDTO>{
    let url = this.constant.urls.user.getByIdUser;
    url = this.utilsService.settingParameter(url, "idUser", idUser.toString()); 
    return this.http.get<ResponseDTO>(url);

  }
  public postRolUser( requestBody: Object): Observable<ResponseDTO> {

    let url = this.constant.urls.user.postRolUser;
    /* url = this.utilsService.settingParameter(url, "userId", userId.toString()); */
    return this.http.post<ResponseDTO>(url, requestBody);
  }


}
