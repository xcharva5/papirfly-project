import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITileSettings, Tile, TileGeneralSettings } from './tile-dashboard/tile-dashboard.component';
import { Observable, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TilesService {

  constructor(private http: HttpClient) { }

  updateTileSettings(settings: ITileSettings): Observable<ITileSettings> {
    const fakeBackendUrl = "https://backend.server.net";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token'
      })
    };
    
    return this.http.post<ITileSettings>(fakeBackendUrl, settings, httpOptions)
      .pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
        console.error('There was an error!', error);
        return of();
    }));
  }
}
