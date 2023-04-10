import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TilesService } from '../tiles.service';

export interface Tile {
  text: string;
  url: string;
  color: string;
}

export interface TileGeneralSettings {
  displayLayout: LayoutSetting;
  title: string;
  subtitle: string;
  loadAllTiles: boolean;
  visibleTiles: number;
}

export interface ITileSettings {
  generalSettings: TileGeneralSettings;
  tiles: Tile[];
}

export type TileRow = Tile[]; 
export type LayoutSetting = "33/33/33" | "25/25/50";

@Component({
  selector: 'app-tile-dashboard',
  templateUrl: './tile-dashboard.component.html',
  styleUrls: ['./tile-dashboard.component.scss']
})
export class TileDashboardComponent {
  generalSettings: TileGeneralSettings = {
    displayLayout: "25/25/50",
    title: "Extra Text",
    subtitle: "Get Inspired",
    loadAllTiles: false,
    visibleTiles: 6,
  }

  tiles$: Observable<Tile[]> = this.tilesService.tiles;

  constructor(private tilesService: TilesService) { 
  }

  obtainSettings(settings: { generalSettings: TileGeneralSettings, tiles: Tile[] }): void {
    this.generalSettings = settings.generalSettings;
    this.tilesService.setTiles(settings.tiles);
  }

}
