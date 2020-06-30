import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../Constant/Constant';
import { UtilsService } from './utils.service';
import { Observable } from 'rxjs';
import { ResponseDTO } from '../Models/Response';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  constructor(
    public http: HttpClient,
    private constant: Constant,
    private utilsService: UtilsService
  ) { }

  public getReference(domain: string): Observable<ResponseDTO> {
    let url = this.constant.urls.reference.getReference;
    url = this.utilsService.settingParameter(url, "domain", domain);
    return this.http.get<ResponseDTO>(url);
  }

  public getReferenceByLvalue(domain: string, lvalue: string): Observable<ResponseDTO> {
    let url = this.constant.urls.reference.getReferenceByLvalue;
    url = this.utilsService.settingParameter(url, "domain", domain);
    url = this.utilsService.settingParameter(url, "lvalue", lvalue);
    return this.http.get<ResponseDTO>(url);
  }

}
