import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { BackendErrorMessageModule } from './../shared/modules/backend-error-message/backend-error-message.module';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    StoreModule.forFeature('settings', reducers),
    ReactiveFormsModule,
    BackendErrorMessageModule,
  ],
})
export class SettingsModule {}
