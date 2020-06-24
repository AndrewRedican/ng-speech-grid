import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GridApi, ColumnApi, ColDef } from 'ag-grid-community';
import { AppService, Station } from './app.service';

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

  constructor(private service: AppService) { }

  getSelectedRows() {
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data as Station);
    const selectedDataStringPresentation = selectedData.map(({ stationCode, stationDesc }) => `[${stationCode}] ${stationDesc}`);
    alert(`Selected nodes:\n${selectedDataStringPresentation.join('\n')}`);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
    this.rowData$ = this.service.getAllStations();
  }

  onFirstDataRendered() {
    this.gridApi.sizeColumnsToFit();
  }

  onGridSizeChanged() {
    this.gridApi.sizeColumnsToFit();
  }
}
