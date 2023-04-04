import { Component } from '@angular/core';

export interface Tile {
  title: string;
  size: number;
  url: string;
}

@Component({
  selector: 'app-tile-dashboard',
  templateUrl: './tile-dashboard.component.html',
  styleUrls: ['./tile-dashboard.component.scss']
})
export class TileDashboardComponent {
  _dashboardTitle = "";
  _dashboardSubtitle = "Get Inspired";

  _tiles: Tile[] = [
    {
      title: "Styles",
      size: 33,
      url: "http://www.seznam.cz"
    },
    {
      title: "Print Templates",
      size: 33,
      url: "http://www.seznam.cz"
    },
    {
      title: "Colors",
      size: 33,
      url: "http://www.seznam.cz"
    },
    {
      title: "Photos",
      size: 33,
      url: "http://www.seznam.cz"
    },
    {
      title: "Videos",
      size: 33,
      url: "http://www.seznam.cz"
    },
    {
      title: "Shop",
      size: 33,
      url: "http://www.seznam.cz"
    }    
  ]

}
