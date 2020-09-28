import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';
import { registerAction } from '../../store/actions/register.action';
import { isSubmittingSelector } from '../../store/selectors';
import { validationErrorsSelector } from './../../store/selectors';
import { BackendErrorsInterface } from './../../types/backend-errors.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  onSubmit() {
    const request: RegisterRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(registerAction({ request }));
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      username: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }
}
