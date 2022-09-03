import { createReducer, on } from '@ngrx/store';
import { loadedProfile, loadProfile } from '../actions/profile.actions';
import { ProfileState } from '@core/models/profile.state';

export const initialState: ProfileState = {
  loading: false,
  profile: { userId: '', avatar: '', email: '', name: '', verified: false },
  authData:{id:'', token:''}
};

export const profileReducer = createReducer(
  initialState,
  on(loadProfile, (state, {authData}) => {
    return {...state, loading:true, authData}
  }),
  on(loadedProfile, (state, {profile}) => {
    return {...state, loading:false, profile}
  })
);
