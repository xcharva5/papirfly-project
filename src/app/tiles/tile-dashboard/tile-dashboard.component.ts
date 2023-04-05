import { Component } from '@angular/core';

export interface Tile {
  text: string;
  url: string;
  color: string;
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

  title = "Get Inspired";
  extraText = "Extra Text";
  layoutSetting: LayoutSetting = "25/25/50";

}
