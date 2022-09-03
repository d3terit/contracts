import { createAction, props } from '@ngrx/store';
import { ReqUserData } from '@core/models/reqUserData.model';
import { MattersState } from '@core/models/matters.state';
import { Matter } from '@core/models/matter.model';

export const loadMatter = createAction(
  '[Matters data] Load matter',
  props<{id: string, userId: string}>()
)

export const loadedMatter = createAction(
  '[Matters data] Loaded matter',
  props<{currentMatter: Matter}>()
);


export const loadMatters = createAction(
  '[Matters data] Load matters',
  props<{userData: ReqUserData}>()
)

export const loadedMatters = createAction(
  '[Matters data] Loaded matters',
  props<{matters: MattersState}>()
);

export const createMatter = createAction(
  '[Matters data] Create matter',
  props<{matter:Matter}>()
)

export const createdMatter = createAction(
  '[Matters data] Created matter',
  props<{matter:Matter}>()
)
