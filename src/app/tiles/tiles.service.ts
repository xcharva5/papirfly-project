import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, distinctUntilChanged, of } from 'rxjs';

import { ITileSettings, Tile } from './tile-dashboard/tile-dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class TilesService {
  private _tiles: Subject<Tile[]> = new Subject<Tile[]>()
  public readonly tiles: Observable<Tile[]> = this._tiles.pipe(distinctUntilChanged())

  constructor(private http: HttpClient) {
    this.getTiles().subscribe(tiles => {
      this._tiles.next(tiles);
    })
  }

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

  getTiles(): Observable<Tile[]> {
    return this.http.get<Tile[]>("/assets/fake-tiles.json");
  }

  setTiles(tiles: Tile[]): void {
    this._tiles.next(tiles);
  }
}
