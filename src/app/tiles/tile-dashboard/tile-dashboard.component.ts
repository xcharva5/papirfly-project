import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

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
      url: "http://www.seznam.cz",
      color: "#33cccc"
    },
    {
      text: "Print Templates",
      url: "http://www.seznam.cz",
      color: "#33cccc"
    },
    {
      text: "Colors",
      url: "http://www.seznam.cz",
      color: "#33cccc"
    },
    {
      text: "Photos",
      url: "http://www.seznam.cz",
      color: "#33cccc"
    },
    {
      text: "Videos",
      url: "http://www.seznam.cz",
      color: "#33cccc"
    },
    {
      text: "Shop",
      url: "http://www.seznam.cz",
      color: "#33cccc"
    },     
  ]

  constructor(private fb: FormBuilder) { }

  // addTile(): void {
  //   const newTile = this.fb.group(
  //     {
  //       text: ['New tile'],
  //       url: [''],
  //       color: ['#33cccc'],
  //     }
  //   );
  //   this.tilesFormArray.push(newTile);
  // }
}
