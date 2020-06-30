import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ResponseDTO } from '../Models/Response';
import { Constant } from '../Constant/Constant';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../Models/User';
import { UtilsService } from './utils.service';
import { SessionDTO } from '../Models/SessionDTO';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public usserLogged: User;
  constructor(
    public http: HttpClient,
    private constant: Constant,
    private utilsService: UtilsService
  ) { }

  public getUser(userId: number): Observable<ResponseDTO> {
    let url = this.constant.urls.session.getUser;
    url = this.utilsService.settingParameter(url, "userId", userId.toString());
    return this.http.get<ResponseDTO>(url);
  }

  public putUser(userId: number, requestBody: Object): Observable<ResponseDTO> {
    let url = this.constant.urls.session.putUser;
    url = this.utilsService.settingParameter(url, "userId", userId.toString());
    return this.http.put<ResponseDTO>(url, requestBody);
  }

  public getUserQuestionSecret(username: string): Observable<ResponseDTO> {
    let url = this.constant.urls.session.getUserQuestionSecret;
    url = this.utilsService.settingParameter(url, "username", username);
    return this.http.get<ResponseDTO>(url);
  }

  public session(user: User): void {
    localStorage.setItem('userModel', JSON.stringify(user));
  }

  getUserLoggedIn(): User {
    return JSON.parse(localStorage.getItem('userModel'));
  }

  public sessionClose() {
    localStorage.clear();
    localStorage.removeItem('userModel');
  }



  public postLoggin(userName: string, password: string): Observable<ResponseDTO> {
    let url = this.constant.urls.session.postLoggin;
    let requestBody = {
      email: userName,
      password: password,
      app: 'appclient'
    }
    return this.http.post<ResponseDTO>(url, requestBody);
  }


  public postEmail(email: string): Observable<ResponseDTO> {
    let url = this.constant.urls.session.postEmail;
    let requestBody = {
      email: email,

    }
    return this.http.post<ResponseDTO>(url, requestBody);
  }


  public putCode(code: number): Observable<ResponseDTO> {
    let url = this.constant.urls.session.putCode;
    let requestBody = {
      code: code,

    }
    return this.http.put<ResponseDTO>(url, requestBody);
  }

  
  public putNewPassword(password: string, repetpassword: string, idrol: string): Observable<ResponseDTO> {
    let url = this.constant.urls.session.putNewpassword;
    url = this.utilsService.settingParameter(url, "userId", idrol);
    let requestBody = {
      password: password,

    }
    return this.http.put<ResponseDTO>(url, requestBody);
  }
  
  public setToken(response:SessionDTO): void {

    localStorage.setItem('token', JSON.stringify(response))
  
  }

  public getToken(): string {

    return localStorage.getItem('token');
  
  }

  public getAuthRol(){

    let authRol : SessionDTO = JSON.parse(localStorage.getItem('token'));
    
    return authRol.rol
  
  }

}
