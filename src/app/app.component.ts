import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GridApi, ColumnApi, ColDef } from 'ag-grid-community';
import { AppService, Station } from './app.service';
import { AppSpeechRecognitionService } from './app.speech-recognition.service';
import { Store, select } from '@ngrx/store';
import { State, AppState } from './app.reducer';
import { loadData } from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stations';
  gridApi: GridApi;
  columnApi: ColumnApi;
  defaultColDef: ColDef = { sortable: true, filter: true, resizable: true };
  columnDefs: ColDef[] = [
    { headerName: 'ID', field: 'stationId', checkboxSelection: true },
    { headerName: 'Code', field: 'stationCode' },
    { headerName: 'Description', field: 'stationDesc' },
    { headerName: 'Alias', field: 'stationAlias' },
    { headerName: 'Latitude', field: 'stationLatitude' },
    { headerName: 'Longitude', field: 'stationLongitude' }
  ];
  rowData$: Observable<Station[]> = of([]);
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>, private service: AppService, private speech: AppSpeechRecognitionService) {
    this.speech.startOneCommandArtyom();
    this.loading$ = store.pipe(select('app', 'loading'));
    this.rowData$ = store.pipe(select('app', 'stations'));
  }

  getSelectedRows() {
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data as Station);
    const selectedDataStringPresentation = selectedData.map(({ stationCode, stationDesc }) => `[${stationCode}] ${stationDesc}`);
    alert(`Selected nodes:\n${selectedDataStringPresentation.join('\n')}`);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
    this.store.dispatch(loadData());
  }

  onFirstDataRendered() {
    this.gridApi.sizeColumnsToFit();
  }

  onGridSizeChanged() {
    this.gridApi.sizeColumnsToFit();
  }
}
