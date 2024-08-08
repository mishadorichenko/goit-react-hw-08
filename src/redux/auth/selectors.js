export const selectUser = state => state.auth.user;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsLoading = state => state.auth.loading;

export const selectIsError = state => state.auth.error;

export const selectIsRefreshing = state => state.auth.isRefreshing;
