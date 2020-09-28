import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BackendErrorMessageModule } from '../shared/modules/backend-error-message/backend-error-message.module';
import { PersistanceService } from '../shared/services/persistance.service';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { RegisterEffect } from './store/effects/register.effect';
import { reducer } from './store/redusers';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([RegisterEffect]),
    SharedModule,
    BackendErrorMessageModule,
  ],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
