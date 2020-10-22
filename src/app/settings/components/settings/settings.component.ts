import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { UpdateCurrentUserAction } from 'src/app/auth/store/actions/updateCurrentUser.action';
import { BackendErrorsInterface } from 'src/app/auth/types/backend-errors.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import { logOutAction } from './../../../auth/store/actions/sync.action';
import { currentUserSelector } from './../../../auth/store/selectors';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  form: FormGroup;
  currentUser: CurrentUserInterface;
  currentUserSubscription: Subscription;
  backendErrors$: Observable<BackendErrorsInterface | null>;
  isSubmitting$: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeListeners();
    this.initializeValues();
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }

  onSumbit(): void {
    this.store.dispatch(
      UpdateCurrentUserAction({
        currentUserInput: { ...this.currentUser, ...this.form.value },
      })
    );
  }

  logout(): void {
    this.store.dispatch(logOutAction());
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  private initializeListeners(): void {
    this.currentUserSubscription = this.store
      .pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser: CurrentUserInterface) => {
        this.currentUser = currentUser;
        this.initializeForm();
      });
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      image: this.currentUser.image,
      username: this.currentUser.username,
      email: this.currentUser.email,
      bio: this.currentUser.bio,
      password: null,
    });
  }
}
