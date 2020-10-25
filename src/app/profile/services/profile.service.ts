import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GetUserProfileInterface } from '../types/get-user-profile-interface';
import { ProfileInterface } from './../../shared/types/profile.interface';

@Injectable()
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfile(slug: string): Observable<ProfileInterface> {
    const url = `${environment.apiUrl}profiles/${slug}`;

    return this.http
      .get(url)
      .pipe(map((res: GetUserProfileInterface) => res.profile));
  }
}
