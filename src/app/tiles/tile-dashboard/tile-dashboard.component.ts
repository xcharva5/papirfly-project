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
    // 33/33/33
    // 25/25/50
    title: "Get Inspired",
    subtitle: "Extra Text",
    loadAllTiles: true,
    visibleTiles: 6,
  }

  tiles: Tile[] = [
    {
      text: "Styles",
      url: "https://www.papirfly.com/",
      color: "#33cccc"
    },
    {
      text: "Print Templates",
      url: "https://www.papirfly.com/",
      color: "#33cccc"
    },
    {
      text: "Colors",
      url: "https://www.papirfly.com/",
      color: "#33cccc"
    },
    {
      text: "Photos",
      url: "https://www.papirfly.com/",
      color: "#33cccc"
    },
    {
      text: "Videos",
      url: "https://www.papirfly.com/",
      color: "#33cccc"
    },
    {
      text: "Shop",
      url: "https://www.papirfly.com/",
      color: "#33cccc"
    },     
  ]

  constructor(private fb: FormBuilder) { }

  obtainSettings(general: TileGeneralSettings): void {
    this.generalSettings = general;
  }

}
