import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BackendErrorMessagesComponent } from '../../components/backend-error-messages/backend-error-messages.component';

@NgModule({
  declarations: [BackendErrorMessagesComponent],
  imports: [CommonModule],
  exports: [BackendErrorMessagesComponent],
})
export class BackendErrorMessageModule {}
