import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticleInputInterface } from 'src/app/shared/types/article-input';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { SaveArticleResponceInerface } from 'src/app/shared/types/save-article-responce';
import { environment } from 'src/environments/environment';

@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient) {}

  updateArticle(
    slug: string,
    articleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    const fullUrl = environment.apiUrl + '/articles/' + slug;

    return this.http
      .put<SaveArticleResponceInerface>(fullUrl, articleInput)
      .pipe(map((res: SaveArticleResponceInerface) => res.article));
  }
}
