import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { AppService } from './app.service';
import * as actions from './app.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private appService: AppService) { }

  loadData$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadData),
    switchMap(() => this.appService.getAllStations()
      .pipe(
        map(
          stations => actions.loadDataSuccess({ stations }),
          catchError(() => of(actions.loadDataFail()))
        )
      )
    )
  ));

}
