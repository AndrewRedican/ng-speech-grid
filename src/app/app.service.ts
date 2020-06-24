import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as convert from 'xml-js';
import { ElementCompact } from 'xml-js/types';


export interface Station {
  stationAlias: string;
  stationCode: string;
  stationDesc: string;
  stationId: string;
  stationLatitude: string;
  stationLongitude: string;
}

export function parseGetAllStationsXMLResponse(xml): Station[] {
  const parse1: ElementCompact = convert.xml2js(xml, { compact: true });
  const parse2 = [].concat(parse1?.ArrayOfObjStation?.objStation);
  return parse2.map(e => ({
    stationAlias: e.StationAlias?._text || '',
    stationCode: e.StationCode?._text,
    stationDesc: e.StationDesc?._text,
    stationId: e.StationId?._text,
    stationLatitude: e.StationLatitude?._text,
    stationLongitude: e.StationLongitude?._text
  }));
}

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(private http: HttpClient) { }

  getAllStations(): Observable<Station[]> {
    return this.http.get('http://api.irishrail.ie/realtime/realtime.asmx/getAllStationsXML', { responseType: 'text' }).pipe(
      map(parseGetAllStationsXMLResponse),
      catchError(error => (console.error(error), of([])))
    );
  }
}
