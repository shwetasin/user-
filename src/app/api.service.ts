import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }
  getData(apiUrl: any) {
    return this.http.get(apiUrl).pipe(map((data) => data));
  }

  sendData(apiUrl: any, data: any) {
    return this.http.post(apiUrl, data).pipe(map((result) => result));
  }
}
