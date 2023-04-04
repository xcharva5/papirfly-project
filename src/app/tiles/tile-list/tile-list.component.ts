import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LayoutSetting, Tile, TileRow } from '../tile-dashboard/tile-dashboard.component';

@Component({
  selector: 'app-tile-list',
  templateUrl: './tile-list.component.html',
  styleUrls: ['./tile-list.component.scss']
})
export class TileListComponent implements OnChanges {
  @Input() tiles: Tile[] = [];
  @Input() layoutSetting: LayoutSetting = "33/33/33";

  tileGrid: TileRow[] = [];
  tilesPerRow = 3;
  numberOfRows = this.tiles.length / this.tilesPerRow;
  rowHeight = 340;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tiles'] && this.tiles) {
      this.tileGrid = this._mapTilesToGrid(this.tiles);
    }

    if (changes['layoutSetting'] && this.layoutSetting) {
      this.rowHeight = this._getRowHeight();
    }
  }

  private _mapTilesToGrid(tiles: Tile[]): TileRow[] {
    let grid: TileRow[] = [];

    if (tiles.length) {
      for (let index = 0; index < tiles.length; index += this.tilesPerRow) {
        const row = tiles.slice(index, index + this.tilesPerRow);
        grid.push(row);
      }

    }

    return grid;
  }

  private _getRowHeight(): number {
    return this.layoutSetting === "33/33/33" ? 340 : 270;
  }

}
