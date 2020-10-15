import { Component, OnInit } from '@angular/core';
import { ArticleInputInterface } from 'src/app/shared/types/article-input';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    body: 'ff',
    title: 'eke',
    description: 'ekekekekeke',
    tagList: ['fdsf', 'fsdfsd'],
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(event): void {
    console.log(event);
  }
}
