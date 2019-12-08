import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as HomeActions from './store/home.actions';
import { FetchUsersModel } from 'src/models/home.model';
import { Observable, Subject } from 'rxjs';
import { UserDetailPage } from './user-detail/user-detail.page';
import { UserModel } from 'src/models/user.model';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {
  userList$: Observable<UserModel[]>;
  isLoadingUsers$: Observable<boolean>;
  isLoadingMoreUsers$: Observable<boolean>;
  isButtonClicked = false;
  page = 1;
  totalEntries = 10;
  isGoToTopEnabled = false;

  // variable that handles unsubscription of the observables in the page
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private store: Store<fromApp.AppState>, private modalController: ModalController) {}

  ngOnInit(): void {
    this.userList$ = this.store.select(fromApp.getUserList);
    this.isLoadingUsers$ = this.store.select(fromApp.getIsLoadingUserList);
    this.isLoadingMoreUsers$ = this.store.select(fromApp.getIsLoadingMoreUsers);
  }

  onFetchUsers() {
    this.store.dispatch(new HomeActions.LoadUsers(new FetchUsersModel(this.page, this.totalEntries)));
    this.isButtonClicked = true;
  }
  loadData(event) {
    this.page++;

    this.store.dispatch(new HomeActions.LoadMoreUsers(new FetchUsersModel(this.page, this.totalEntries)));
    this.isLoadingMoreUsers$.pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (res) => {
        if (!res) {
          event.target.complete();
        }
      },
      (err) => {}
    );
  }

  async showUserDetail(user) {
    const modal = await this.modalController.create({
      component: UserDetailPage,
      componentProps: { user }
    });
    return await modal.present();
  }

  onScroll(event) {
    this.isGoToTopEnabled = event.detail.scrollTop > 400 ? true : false;
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
