import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

constructor() { }

getOptions() {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })
  };
  return httpOptions;
}

getHeaders() {
  return new HttpHeaders({
    'Content-Type': 'application/json',
    'x-access-token': localStorage.token
  });
}

}
