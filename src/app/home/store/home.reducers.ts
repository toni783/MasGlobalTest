import * as HomeActions from './home.actions';
// initial state type for the location store
export interface State {
  userList: Array<any>;
  isLoadingUserList: boolean;
  isLoadingMoreUserList: boolean;
}

// initial value for the entries in location store
const initialState: State = {
  userList: null,
  isLoadingUserList: false,
  isLoadingMoreUserList: false
};

// state for location value export ,to be used in the selectors declared in the app
export const getUserList = (state: State) => state.userList;
export const getIsLoadingUsers = (state: State) => state.isLoadingUserList;
export const getIsLoadingMoreUsers = (state: State) => state.isLoadingMoreUserList;

// export const getIsLoadingMorePost = (state: State) => state.isLoadingMoreUserList;
// export const getPostFeedSelectedCategory = (state: State) => state.postFeedSelectedCategory;
// export const getUserListTotalPages = (state: State) => state.userListTotalPages;
// export const getPostCommentsList = (state: State) => state.postCommentsList;
// export const getIsLoadingPostComments = (state: State) => state.isLoadingPostComments;
// export const getIsNewPostCommentCreated = (state: State) => state.isNewPostCommentCreated;
// export const getUserListCommentsTotalPages = (state: State) => state.userListCommentsTotalPages;
// export const getIsLoadingMorePostComments = (state: State) => state.isLoadingMorePostComments;
// export const getCanUserListScrollToTop = (state: State) => state.canUserListScrollToTop;
// export const getSubmittedPost = (state: State) => state.submittedPost;
// export const getSubmittedPostComment = (state: State) => state.submittedPostComment;

// location reducer that handles al the actions for the store state
export function HomeReducer(state = initialState, action: HomeActions.HomeActions) {
  switch (action.type) {
    case HomeActions.HomeActionTypes.LoadUsers:
      return {
        ...state,
        isLoadingUserList: true
      };

    case HomeActions.HomeActionTypes.LoadUsersSucess:
      return {
        ...state,
        userList: action.userList,
        isLoadingUserList: false
      };

    case HomeActions.HomeActionTypes.LoadUsersError:
      return {
        ...state,
        isLoadingUserList: false
      };

    case HomeActions.HomeActionTypes.LoadMoreUsers:
      return {
        ...state,
        isLoadingMoreUserList: true
      };

    case HomeActions.HomeActionTypes.LoadMoreUsersSucess:
      return {
        ...state,
        userList: state.userList.concat(action.userList),
        isLoadingMoreUserList: false
      };

    case HomeActions.HomeActionTypes.LoadMoreUsersError:
      return {
        ...state,
        isLoadingMoreUserList: false
      };

    default:
      return state;
  }
}
