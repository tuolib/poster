import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignService {
  // 通过构造函数注入的方式依赖注入到使用的类中
  constructor(private http: HttpClient) {}

  signUp(param: any): Observable<any> {
    const url = '/api/poster/user/signUp';
    return this.http.post<any>(url, param);
  }
}
