import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { errorSelector, isLoadingSelector } from '../../store/selectors';
import { currentUserSelector } from './../../../auth/store/selectors';
import { ProfileInterface } from './../../../shared/types/profile.interface';
import { getProfileAction } from './../../store/actions/getProfile.action';
import { profileSelector } from './../../store/selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  profile: ProfileInterface;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  profileSubscription: Subscription;
  slug: string;
  apiUrl: string;
  isCurrentUser$: Observable<boolean>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.profileSubscription.unsubscribe();
  }

  getApiUrl(): string {
    const isFavorites = this.router.url.includes('favorites');
    return (this.apiUrl = isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`);
  }

  private fetchData(): void {
    this.store.dispatch(getProfileAction({ slug: this.slug }));
  }

  private initializeListeners() {
    this.profileSubscription = this.store
      .pipe(select(profileSelector))
      .subscribe((profile: ProfileInterface) => {
        this.profile = profile;
      });

    this.route.params.subscribe((params: Params) => {
      this.slug = params.slug;
      this.fetchData();
    });
  }

  private initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isCurrentUser$ = combineLatest(
      this.store.pipe(select(currentUserSelector), filter(Boolean)),
      this.store.pipe(select(profileSelector), filter(Boolean))
    ).pipe(
      map(
        ([currentUser, profile]: [CurrentUserInterface, ProfileInterface]) => {
          return currentUser.username === profile.username;
        }
      )
    );
  }
}
