import { MattersState } from '@core/models/matters.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectMatters = (state: AppState) => state.matters;

export const selectMattersItems = createSelector(
  selectMatters,
  (state: MattersState) => state.items
);

export const selectMattersData = createSelector(
  selectMatters,
  (state: MattersState) => {state.page, state.perPage, state.totalItems}
);

export const selectNewMatter = createSelector(
  selectMatters,
  (state: MattersState) => state.newMatter
);

export const selectCurrentMatter = createSelector(
  selectMatters,
  (state: MattersState) => state.currentMatter
);

export const selectCurrentMatterId = createSelector(
  selectMatters,
  (state: MattersState) => state.currentMatter?.id
);
