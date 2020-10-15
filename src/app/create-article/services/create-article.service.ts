import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SaveArticleResponceInerface } from 'src/app/shared/types/save-article-responce';
import { environment } from 'src/environments/environment';
import { ArticleInputInterface } from './../../shared/types/article-input';
import { ArticleInterface } from './../../shared/types/article.interface';

@Injectable()
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(
    articleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    const fullUrl = environment.apiUrl + '/articles';

    return this.http
      .post<SaveArticleResponceInerface>(fullUrl, articleInput)
      .pipe(map((res: SaveArticleResponceInerface) => res.article));
  }
}
