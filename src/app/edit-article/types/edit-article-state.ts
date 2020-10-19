import { BackendErrorsInterface } from 'src/app/auth/types/backend-errors.interface';
import { ArticleInterface } from './../../shared/types/article.interface';

export interface EditArticleStateInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
  isLoading: boolean;
  article: ArticleInterface | null;
}
