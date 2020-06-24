import { createAction, props } from '@ngrx/store';
import { Station } from './app.service';

export const loadData = createAction('LOAD_DATA');
export const loadDataSuccess = createAction('LOAD_DATA_SUCCESS', props<{ stations: Station[] }>());
export const loadDataFail = createAction('LOAD_DATA_FAIL');
