import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LayoutSetting, Tile, TileRow } from '../tile-dashboard/tile-dashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tile-list',
  templateUrl: './tile-list.component.html',
  styleUrls: ['./tile-list.component.scss']
})
export class TileListComponent implements OnChanges {
  @Input() tiles: Tile[] = [];
  @Input() layoutSetting: LayoutSetting = "33/33/33";
  @Input()
  get visibleTiles(): number { return this._visibleTiles; }
  set visibleTiles(visibleTiles: number) {
    this._visibleTiles = (visibleTiles >= 0 && visibleTiles <= this.tiles.length) ? visibleTiles : this.tiles.length;
  }
  private _visibleTiles = 0;

  tileGrid: TileRow[] = [];
  tilesPerRow = 3;
  numberOfRows = this.tiles.length / this.tilesPerRow;
  rowHeight = 340;

  constructor(private router: Router){
    //
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tiles'] && this.tiles) {
      this.tileGrid = this._mapTilesToGrid(this.tiles);
    }

    if (changes['layoutSetting'] && this.layoutSetting) {
      this.rowHeight = this._getRowHeight();
    }
  }

  navigateToUrl(url: string): void {
    window.open(url);
  }

  private _mapTilesToGrid(tiles: Tile[]): TileRow[] {
    let grid: TileRow[] = [];

    for (let index = 0; index < this.visibleTiles; index += this.tilesPerRow) {
      const endOfSlicedItems = (index + this.tilesPerRow) < this.visibleTiles ? index + this.tilesPerRow : this.visibleTiles;
      const row = tiles.slice(index, endOfSlicedItems);
      grid.push(row);
    }

    return grid;
  }

  private _getRowHeight(): number {
    return this.layoutSetting === "33/33/33" ? 340 : 270;
  }

}
