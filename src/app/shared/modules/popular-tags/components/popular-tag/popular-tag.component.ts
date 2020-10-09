import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  errorSelector,
  isLoadingSelector,
  popularTagsSelector,
} from '../../store/selectors';
import { GetPopularTagResponceInterface } from '../../types/get-popular-tag-responce';
import { getPopularTags } from './../../store/actions/getPopularTags.action';

@Component({
  selector: 'app-popular-tag',
  templateUrl: './popular-tag.component.html',
  styleUrls: ['./popular-tag.component.scss'],
})
export class PopularTagComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('url') apiUrlProps: string;

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  tags$: Observable<GetPopularTagResponceInterface | null>;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeTags();
  }

  private initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.tags$ = this.store.pipe(select(popularTagsSelector));
  }

  private initializeTags(): void {
    this.store.dispatch(getPopularTags({ url: this.apiUrlProps }));
  }
}
