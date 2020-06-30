import { Injectable } from '@angular/core';
import { GeneralService } from './General.service';
import { Constant } from '../Constant/Constant';
import { HttpClient } from '@angular/common/http';
import { ResponseDTO } from '../Models/Response';
import { Observable } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  constructor(
    private http: HttpClient,
    private constant: Constant,
    private generalService: GeneralService,
    private utilsService: UtilsService
  ) { }

  public getProfile(): Observable<ResponseDTO>{
    let url = this.constant.urls.profile.getProfile;
    return this.http.get<ResponseDTO>(url);
  }

  public postProfile(requestBody: Object): Observable<ResponseDTO>{
    let url = this.constant.urls.profile.postProfile;
    return this.http.post<ResponseDTO>(url, requestBody);
  }
  
  public putProfile(requestBody: Object): Observable<ResponseDTO>{
    let url = this.constant.urls.profile.putProfile;
    return this.http.put<ResponseDTO>(url, requestBody);
  }
}