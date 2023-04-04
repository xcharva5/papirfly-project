import { Component, Input } from '@angular/core';
import { Tile } from '../tile-dashboard/tile-dashboard.component';

@Component({
  selector: 'app-tile-list',
  templateUrl: './tile-list.component.html',
  styleUrls: ['./tile-list.component.scss']
})
export class TileListComponent {
  @Input() tiles: Tile[] = [];
}
