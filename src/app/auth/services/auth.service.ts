import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CurrentUserInputInterface } from 'src/app/shared/types/current-user-input';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { environment } from 'src/environments/environment';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { AuthResponceInterface } from './../types/authResponce.interface';
import { LoginRequestInterface } from './../types/loginRequest.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';
    return this.http
      .post<AuthResponceInterface>(url, data)
      .pipe(map(this.getUser));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login';
    return this.http
      .post<AuthResponceInterface>(url, data)
      .pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + 'user';

    return this.http.get(url).pipe(map(this.getUser));
  }

  updateCurrentUser(
    currentUser: CurrentUserInputInterface
  ): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user';

    return this.http.put(url, currentUser).pipe(map(this.getUser));
  }

  private getUser(responce: AuthResponceInterface) {
    return responce.user;
  }
}
