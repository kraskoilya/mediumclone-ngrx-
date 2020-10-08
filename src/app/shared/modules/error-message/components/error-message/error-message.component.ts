import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: ` <div>{{ messageProps }}</div> `,
})
export class ErrorMessageComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('message') messageProps = 'Something went wrong';
  constructor() {}

  ngOnInit(): void {}
}
