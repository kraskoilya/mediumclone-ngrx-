import { ProfileInterface } from './../../shared/types/profile.interface';
export interface ProfileStateInterface {
  isLoading: boolean;
  data: ProfileInterface | null;
  error: string | null;
}
