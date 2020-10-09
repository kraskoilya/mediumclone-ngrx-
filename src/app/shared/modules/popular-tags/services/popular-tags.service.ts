import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetPopularTagResponceInterface } from '../types/get-popular-tag-responce';

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(url: string): Observable<GetPopularTagResponceInterface> {
    const fullUrl = environment.apiUrl + url;

    return this.http.get<GetPopularTagResponceInterface>(fullUrl);
  }
}
