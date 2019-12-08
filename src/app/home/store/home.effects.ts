import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { map, switchMap, catchError, mergeMap, withLatestFrom } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import * as HomeActions from './home.actions';
import { Action, Store } from '@ngrx/store';
import { ModalController, PopoverController } from '@ionic/angular';
import * as fromApp from '../../store/app.reducer';
import { UserService } from 'src/services/user.service';
import { FetchUsersModel } from 'src/models/home.model';

export class EffectError implements Action {
  readonly type = '[Error] Effect Error';
}

export class EffectSucess implements Action {
  readonly type = '[Error] Effect EffectSucess';
}

@Injectable()
export class HomeEffects {
  // effects that handles countries locations load
  @Effect()
  PostLoad$: Observable<Action> = this.actions$.pipe(
    ofType(HomeActions.HomeActionTypes.LoadUsers),
    mergeMap((payload: any) => {
      return this.UsersService.fetchUsers(new FetchUsersModel(payload.payload.page, payload.payload.results)).pipe(
        map((res: any) => {
          return new HomeActions.LoadUsersSucess(res.results);
        }),
        catchError((err) => {
          return of(new HomeActions.LoadUsersError());
        })
      );
    })
  );

  @Effect()
  LoadMorePost$: Observable<Action> = this.actions$.pipe(
    ofType(HomeActions.HomeActionTypes.LoadMoreUsers),
    mergeMap((payload: any) => {
      return this.UsersService.fetchUsers(new FetchUsersModel(payload.payload.page, payload.payload.results)).pipe(
        map((res: any) => {
          return new HomeActions.LoadMoreUsersSucess(res.results);
        }),
        catchError((err) => {
          return of(new HomeActions.LoadUsersError());
        })
      );
    })
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private UsersService: UserService,
    private modalController: ModalController,
    private store: Store<fromApp.AppState>,
    private popoverController: PopoverController
  ) {}
}
