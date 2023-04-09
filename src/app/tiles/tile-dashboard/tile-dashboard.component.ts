import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

  tiles: Tile[] = [
    {
      text: "Styles",
      url: "https://www.papirfly.com/",
      color: "#6d6dff"
    },
    {
      text: "Print Templates",
      url: "https://www.papirfly.com/",
      color: "#6d6dff"
    },
    {
      text: "Colors",
      url: "https://www.papirfly.com/",
      color: "#6d6dff"
    },
    {
      text: "Photos",
      url: "https://www.papirfly.com/",
      color: "#6d6dff"
    },
    {
      text: "Videos",
      url: "https://www.papirfly.com/",
      color: "#6d6dff"
    },
    {
      text: "Shop",
      url: "https://www.papirfly.com/",
      color: "#6d6dff"
    },     
    {
      text: "Shop",
      url: "https://www.papirfly.com/",
      color: "#6d6dff"
    }, 
    {
      text: "Shop",
      url: "https://www.papirfly.com/",
      color: "#6d6dff"
    }, 
  ]

  get visibleTiles(): number {
    return this.generalSettings.loadAllTiles ? this.tiles.length : this.generalSettings.visibleTiles;
  }

  constructor(private fb: FormBuilder) { }

  obtainSettings(settings: { generalSettings: TileGeneralSettings, tiles: Tile[] }): void {
    this.generalSettings = settings.generalSettings;
    this.tiles = settings.tiles;
  }

}
