import { createReducer, on, Action } from '@ngrx/store';
import { loadData, loadDataSuccess, loadDataFail } from './app.actions';
import { Station } from './app.service';

export interface State {
  loading: boolean;
  stations: Station[];
  lastUpdated: string;
}

// workaround to a stupid implementation of ngrx store .forRoot()
export interface AppState {
  app: State
}

export const initialState = {
  loading: false,
  stations: [],
  lastUpdated: 'N/A'
};

const _appReducer = createReducer(
  initialState,
  on(loadData, state => ({ ...state, loading: true, stations: [] })),
  on(loadDataSuccess, (state, { stations }) => ({ ...state, loading: false, stations, lastUpdated: new Date().toLocaleString() })),
  on(loadDataFail, state => ({ ...state, loading: false, stations: [], lastUpdated: new Date().toLocaleString() })),
);

export function appReducer(state: State | undefined, action: Action) {
  return _appReducer(state, action);
}
