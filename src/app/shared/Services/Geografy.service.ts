import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../Constant/Constant';
import { Observable } from 'rxjs';
import { ResponseDTO } from '../Models/Response';

@Injectable({
  providedIn: 'root'
})
export class GeografyService {


  constructor(
    private http: HttpClient,
    private constant: Constant,
  ) { }

  public getGeografy(): Observable<ResponseDTO>{
    
    let url = this.constant.urls.geografy.getGeografy
    return this.http.get<ResponseDTO>(url);

  }

  public getIdGeografy(): Observable<ResponseDTO>{
    
    let url = this.constant.urls.geografy.getGeografy
    return this.http.get<ResponseDTO>(url);

  }

  public postGeografy( requestBody: Object): Observable<ResponseDTO> {

    let url = this.constant.urls.geografy.postGeografy;
    /* url = this.utilsService.settingParameter(url, "userId", userId.toString()); */
    return this.http.post<ResponseDTO>(url, requestBody);
  }

  public putGeografy( requestBody: Object): Observable<ResponseDTO> {

    let url = this.constant.urls.geografy.putGeografy;
    /* url = this.utilsService.settingParameter(url, "userId", userId.toString()); */
    return this.http.put<ResponseDTO>(url, requestBody);
  }

}
