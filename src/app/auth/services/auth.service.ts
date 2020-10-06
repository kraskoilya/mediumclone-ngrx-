import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from './../../shared/types/currentUser.interface';
import { AuthResponceInterface } from './../types/authResponce.interface';
import { LoginRequestInterface } from './../types/loginRequest.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';
    return this.http
      .post<AuthResponceInterface>(url, data)
      .pipe(map((res: AuthResponceInterface) => res.user));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login';
    return this.http
      .post<AuthResponceInterface>(url, data)
      .pipe(map((res: AuthResponceInterface) => res.user));
  }
}
