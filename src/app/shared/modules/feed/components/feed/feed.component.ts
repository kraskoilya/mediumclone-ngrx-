import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { parseUrl, stringify } from 'query-string';
import { Observable } from 'rxjs';
import { isLoggedInSelector } from 'src/app/auth/store/selectors';
import { environment } from 'src/environments/environment';
import { getFeedAction } from '../../store/actions/getFeed.action';
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from './../../store/selctors';
import { GetFeedResponceInterface } from './../../types/getFeedResponce.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnChanges {
  // tslint:disable-next-line:no-input-rename
  @Input('apiUrl') apiUrlProps: string;

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  feed$: Observable<GetFeedResponceInterface | null>;

  limit = environment.limit;
  baseUrl: string;
  currentPage: number;
  isLoggedIn$: Observable<boolean>;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isApiChanged =
      !changes.apiUrlProps.firstChange &&
      changes.apiUrlProps.currentValue !== changes.apiUrlProps.previousValue;
    if (isApiChanged) {
      this.fetchFeed();
    }
  }

  private initializeListeners(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params.page || 1);
      this.fetchFeed();
    });
  }

  private initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
    this.baseUrl = this.router.url.split('?')[0];
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }

  private fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.apiUrlProps);
    const stringifiedParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    });
    const apiUrlWithparams = `${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(getFeedAction({ url: apiUrlWithparams }));
  }
}
