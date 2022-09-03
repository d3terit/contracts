import { AuthData } from '@core/models/authData.model';
import { createAction, props } from '@ngrx/store';
import { Profile } from '@core/models/profile.model';

export const loadProfile = createAction(
  '[Profile data] Load profile',
  props<{authData: AuthData}>()
)

export const loadedProfile = createAction(
  '[Profile data] Loaded success',
  props<{profile: Profile}>()
);
