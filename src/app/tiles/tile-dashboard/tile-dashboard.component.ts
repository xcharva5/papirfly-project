import { Component } from '@angular/core';

export interface Tile {
  text: string;
  url: string;
}

export type TileRow = Tile[]; 

export type LayoutSetting = "33/33/33" | "25/25/50";

@Component({
  selector: 'app-tile-dashboard',
  templateUrl: './tile-dashboard.component.html',
  styleUrls: ['./tile-dashboard.component.scss']
})
export class TileDashboardComponent {
  tiles: Tile[] = [
    {
      text: "Styles",
      url: "http://www.seznam.cz"
    },
    {
      text: "Print Templates",
      url: "http://www.seznam.cz"
    },
    {
      text: "Colors",
      url: "http://www.seznam.cz"
    },
    {
      text: "Photos",
      url: "http://www.seznam.cz"
    },
    {
      text: "Videos",
      url: "http://www.seznam.cz"
    },
    {
      text: "Shop",
      url: "http://www.seznam.cz"
    },
     
  ]

  title = "Get Inspired";
  extraText = "Extra Text";
  layoutSetting: LayoutSetting = "25/25/50";

}
