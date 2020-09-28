import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from 'src/app/auth/types/backend-errors.interface';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface;

  errorMessages: string[];

  constructor() {}

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (name: string) => {
        const message = this.backendErrorsProps[name].join(', ');
        return `${name} ${message}`;
      }
    );
  }
}
