import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GetArticleResponceInterface } from '../types/get-article-responce';
import { ArticleInterface } from './../types/article.interface';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}articles/${slug}`;

    return this.http
      .get<GetArticleResponceInterface>(fullUrl)
      .pipe(map((res: GetArticleResponceInterface) => res.article));
  }
}
