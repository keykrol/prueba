import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../Constant/Constant';
import { Observable } from 'rxjs';
import { ResponseDTO } from '../Models/Response';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class ListGeografyService {

  constructor(
    private http: HttpClient,
    private constant: Constant,
    private utilsService: UtilsService
  ) { }

  public getListcountry(): Observable<ResponseDTO>{
    
    let url = this.constant.urls.listGeografy.getListCountry
    return this.http.get<ResponseDTO>(url);

  }
  
  getListFederalByCountry(idCountry:any): Observable<ResponseDTO>{
    let url = this.constant.urls.listGeografy.getListFederalByCountry;
    url = this.utilsService.settingParameter(url, "idCountry", idCountry.toString()); 
    return this.http.get<ResponseDTO>(url);

  }

  getListProvincesByFederal(idFederal:any): Observable<ResponseDTO>{
    let url = this.constant.urls.listGeografy.getListProvincesByFederal;
    url = this.utilsService.settingParameter(url, "idFederal", idFederal.toString()); 
    return this.http.get<ResponseDTO>(url);

  }

  getListMunicipalityByProvince(idProvince:any): Observable<ResponseDTO>{
    let url = this.constant.urls.listGeografy.getListMunicipalityByProvince;
    url = this.utilsService.settingParameter(url, "idProvince", idProvince.toString()); 
    return this.http.get<ResponseDTO>(url);

  }

  public getListReferen(): Observable<ResponseDTO>{
 
    let url = this.constant.urls.resferencia.getListReferen
    return this.http.get<ResponseDTO>(url);

  }

}
