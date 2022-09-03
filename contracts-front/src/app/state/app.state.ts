import { Matter } from '@core/models/matter.model';
import { MattersState } from '@core/models/matters.state';
import { Profile } from '@core/models/profile.model';
import { ProfileState } from '@core/models/profile.state';
import { ActionReducerMap } from '@ngrx/store';
import { MatterEffects } from './effects/matters.effects';
import { ProfileEffects } from './effects/profile.effects';
import { mattersReducer } from './reducers/matters.reducer';
import { profileReducer } from './reducers/profile.reducer';

export interface AppState {
  profile: ProfileState;
  matters: MattersState;
  // collection: ReadonlyArray<string>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  profile: profileReducer,
  matters: mattersReducer,
};

export const ROOT_EFFECTS = [ProfileEffects, MatterEffects];
