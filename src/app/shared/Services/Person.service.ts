import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../Constant/Constant';
import { Observable } from 'rxjs';
import { ResponseDTO } from '../Models/Response';

@Injectable({
  providedIn: 'root'
})
export class PersonService {


  constructor(
    private http: HttpClient,
    private constant: Constant,
  ) { }

  public getPerson(): Observable<ResponseDTO>{
    
    let url = this.constant.urls.person.getPerson
    return this.http.get<ResponseDTO>(url);

  }

  public postPerson( requestBody: Object): Observable<ResponseDTO> {

    let url = this.constant.urls.person.postPerson;
    /* url = this.utilsService.settingParameter(url, "userId", userId.toString()); */
    return this.http.post<ResponseDTO>(url, requestBody);
  }

  public putPerson( requestBody: Object): Observable<ResponseDTO> {

    let url = this.constant.urls.person.putPerson;
    /* url = this.utilsService.settingParameter(url, "userId", userId.toString()); */
    return this.http.put<ResponseDTO>(url, requestBody);
  }


}
