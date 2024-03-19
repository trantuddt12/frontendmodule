import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8100/api/user/all";

  private createUserURL = "http://localhost:8100/api/user/create";

  constructor( private httpClient: HttpClient) { }

  //tao phuong thuc get data

  getUsersList(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl)
      .pipe(
        catchError(error => {
          throw 'Error in getUsersList API: ' + error;
        })
      );
  }

  createUser(user :User):Observable<any>{
    return this.httpClient.post(this.createUserURL, user)
    .pipe(
        catchError(error => {
          throw 'Error in getUsersList API: ' + error;
        })
    );
  }
}
