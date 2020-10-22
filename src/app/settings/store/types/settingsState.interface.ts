import { BackendErrorsInterface } from 'src/app/auth/types/backend-errors.interface';

export interface SettingsStateInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface;
}
