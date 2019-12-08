import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHome from '../home/store/home.reducers';

// here we will have all of our app initial states
export interface AppState {
  home: fromHome.State;
}

// here we will have all the reducer of our app
export const appReducers: ActionReducerMap<AppState> = {
  home: fromHome.HomeReducer
};

//  selectors for getting information from locker room service
export const selectLockerRoomState = createFeatureSelector<fromHome.State>('home');
export const getUserList = createSelector(selectLockerRoomState, fromHome.getUserList);
export const getIsLoadingUserList = createSelector(selectLockerRoomState, fromHome.getIsLoadingUsers);
export const getIsLoadingMoreUsers = createSelector(selectLockerRoomState, fromHome.getIsLoadingMoreUsers);

// export const getIsLoadingMorePost = createSelector(
//   selectLockerRoomState,
//   fromLockerRoom.getIsLoadingMorePost
// );
// export const getPostFeedSelectedCategory = createSelector(
//   selectLockerRoomState,
//   fromLockerRoom.getPostFeedSelectedCategory
// );
// export const getUserListTotalPages = createSelector(
//   selectLockerRoomState,
//   fromLockerRoom.getUserListTotalPages
// );
// export const getPostCommentsList = createSelector(
//   selectLockerRoomState,
//   fromLockerRoom.getPostCommentsList
// );
// export const getIsLoadingPostComments = createSelector(
//   selectLockerRoomState,
//   fromLockerRoom.getIsLoadingPostComments
// );
// export const getIsNewPostCommentCreated = createSelector(
//   selectLockerRoomState,
//   fromLockerRoom.getIsNewPostCommentCreated
// );
// export const getIsLoadingMorePostComments = createSelector(
//   selectLockerRoomState,
//   fromLockerRoom.getIsLoadingMorePostComments
// );
// export const getUserListCommentsTotalPages = createSelector(
//   selectLockerRoomState,
//   fromLockerRoom.getUserListCommentsTotalPages
// );
// export const getCanUserListScrollToTop = createSelector(
//   selectLockerRoomState,
//   fromLockerRoom.getCanUserListScrollToTop
// );
// export const getSubmittedPost = createSelector(
//   selectLockerRoomState,
//   fromLockerRoom.getSubmittedPost
// );
// export const getSubmittedPostComment = createSelector(
//   selectLockerRoomState,
//   fromLockerRoom.getSubmittedPostComment
// );

// //  selectors for getting information from locker room service
// export const selectHeadToHeadState = createFeatureSelector<fromHeadToHead.State>('headToHead');
// export const getSelectedPlayerA = createSelector(
//   selectHeadToHeadState,
//   fromHeadToHead.getSelectedPlayerA
// );

// export const getSelectedPlayerB = createSelector(
//   selectHeadToHeadState,
//   fromHeadToHead.getSelectedPlayerB
// );

// export const getPlayerList = createSelector(
//   selectHeadToHeadState,
//   fromHeadToHead.getPlayerList
// );

// export const getPlayerListTotalPages = createSelector(
//   selectHeadToHeadState,
//   fromHeadToHead.getPlayerListTotalPages
// );

// export const getIsLoadingPlayerList = createSelector(
//   selectHeadToHeadState,
//   fromHeadToHead.getIsLoadingPlayerList
// );

// export const getIsLoadingMorePlayers = createSelector(
//   selectHeadToHeadState,
//   fromHeadToHead.getIsLoadingMorePlayers
// );

// export const getSelectedTeamA = createSelector(
//   selectHeadToHeadState,
//   fromHeadToHead.getSelectedTeamA
// );

// export const getSelectedTeamB = createSelector(
//   selectHeadToHeadState,
//   fromHeadToHead.getSelectedTeamB
// );

// export const getCompareResults = createSelector(
//   selectHeadToHeadState,
//   fromHeadToHead.getCompareResults
// );
