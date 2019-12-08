import { Action } from '@ngrx/store';
import { FetchUsersModel } from 'src/models/home.model';

export enum HomeActionTypes {
  LoadUsers = '[Post] Load Users action',
  LoadUsersSucess = '[Post] Set Users on response sucess',
  LoadUsersError = '[Post] Load Users Error',

  LoadMoreUsers = '[Post] Load More Users action ',
  LoadMoreUsersSucess = '[Post] Add  More Users to the current user list ',
  LoadMoreUsersError = '[Post] Load More Users Error  '
}

// action for loading locations in the store
export class LoadUsers implements Action {
  readonly type = HomeActionTypes.LoadUsers;

  constructor(public payload: FetchUsersModel) {}
}

export class LoadUsersSucess implements Action {
  readonly type = HomeActionTypes.LoadUsersSucess;

  constructor(public userList: Array<any>) {}
}

export class LoadUsersError implements Action {
  readonly type = HomeActionTypes.LoadUsersError;

  constructor() {}
}

export class LoadMoreUsers implements Action {
  readonly type = HomeActionTypes.LoadMoreUsers;

  constructor(public payload: FetchUsersModel) {}
}

export class LoadMoreUsersSucess implements Action {
  readonly type = HomeActionTypes.LoadMoreUsersSucess;

  constructor(public userList: Array<any>) {}
}

export class LoadMoreUsersError implements Action {
  readonly type = HomeActionTypes.LoadMoreUsersError;

  constructor() {}
}

export type HomeActions =
  | LoadUsers
  | LoadUsersSucess
  | LoadUsersError
  | LoadMoreUsers
  | LoadMoreUsersSucess
  | LoadMoreUsersError;
