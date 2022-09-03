import { createReducer, on } from '@ngrx/store';
import { MattersState } from '@core/models/matters.state';
import {
  createdMatter,
  createMatter,
  loadedMatter,
  loadedMatters,
  loadMatter,
  loadMatters,
} from '../actions/matters.actions';
export const initialState: MattersState = {
  loading: true,
  page: 1,
  perPage: 10,
  totalItems: 0,
  items: [],
  newMatter: null,
  currentMatter: null
};

export const mattersReducer = createReducer(
  initialState,
  on(loadMatter, (state)=>{
    return {...state, loading: true}
  }),
  on(loadedMatter, (state, {currentMatter})=>{
    return {...state, currentMatter, loading: false}
  }),
  on(loadMatters, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedMatters, (state, { matters }) => {
    return { ...state, ...matters, loading: false };
  }),
  on(createMatter, (state) => {
    return { ...state, loading: true };
  }),
  on(createdMatter, (state, { matter }) => {
    return {
      ...state,
      items: [...state.items, matter],
      totalItems: incMatter(state.totalItems),
      newMatter: matter,
      loading: false,
    };
  })
);

const incMatter = (items: number): number => {
  return Math.pow(Math.sqrt(items) + 1, 2);
};
