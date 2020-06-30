import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ResponseDTO } from '../Models/Response';
import { Constant } from '../Constant/Constant';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../Models/User';;
import { UserService} from '../Models/UserService';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {
  public usserLogged: User;
  constructor(
    public http: HttpClient,
    private constant: Constant,
    private utilsService: UtilsService
  ) {
  }

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



  public postRegisterClient(userName: string, password: string): Observable<ResponseDTO> {
    let url = this.constant.urls.session.postLoggin;
    let requestBody = {
      email: userName,
      rolId: 1,
	    app: 'web',
	


      /*{	
	email: userName,
	app: web,
	rolId: 1
}*/


    }
    return this.http.post<ResponseDTO>(url, requestBody);
  }


  public postRegisterCond(userName: string, password: string): Observable<ResponseDTO> {
    let url = this.constant.urls.session.postLoggin;
    let requestBody = {
      email: userName,
      password: password,
      app: 'web'


      /*{	
	email: userName,
	"app": "web",
	"rolId": "2"
}*/


    }
    return this.http.post<ResponseDTO>(url, requestBody);
  }


  public postEmailR(email: string, rolId: number, app: string): Observable<ResponseDTO> {
    let url = this.constant.urls.session.postEmailR;
    let requestBody = {
      email: email,
      app: 'web',
      rolId: 1,
        

    }
    return this.http.post<ResponseDTO>(url, requestBody);
  }


  public putCodeR(code: number): Observable<ResponseDTO> {
    let url = this.constant.urls.session.putCodeR;
    let requestBody = {
      code: code,

    }
    return this.http.put<ResponseDTO>(url, requestBody);
  }


}