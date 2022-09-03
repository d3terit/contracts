import { ProfileState } from '@core/models/profile.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectProfile = (state: AppState) => state.profile;

export const selectProfileName = createSelector(
  selectProfile,
  (state: ProfileState) => state.profile.name
);

export const selectProfileId= createSelector(
  selectProfile,
  (state: ProfileState) => state.profile.userId
);

export const selectProfileLoading = createSelector(
  selectProfile,
  (state: ProfileState) => state.loading
);
