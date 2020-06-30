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
export class RolService {


  constructor(
    private http: HttpClient,
    private constant: Constant,
    private generalService: GeneralService,
    private utilsService: UtilsService
  ) { }

  public getRols(): Observable<ResponseDTO>{
    let url = this.constant.urls.rol.getRols;
    return this.http.get<ResponseDTO>(url);
  }

  public postRol(requestBody: Object): Observable<ResponseDTO> {
    let url = this.constant.urls.rol.postRol;
    return this.http.post<ResponseDTO>(url, requestBody);
  }

  public putRol(requestBody: Object): Observable<ResponseDTO> {
    let url = this.constant.urls.rol.putRol;
    return this.http.put<ResponseDTO>(url, requestBody);
  }
}