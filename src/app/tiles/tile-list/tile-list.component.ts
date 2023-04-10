import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LayoutSetting, Tile, TileGeneralSettings, TileRow } from '../tile-dashboard/tile-dashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tile-list',
  templateUrl: './tile-list.component.html',
  styleUrls: ['./tile-list.component.scss']
})
export class TileListComponent implements OnChanges {
  @Input() tiles: Tile[] | null = null;
  @Input() generalSettings!: TileGeneralSettings;

  tileGrid: TileRow[] = [];
  tilesPerRow = 3;
  numberOfRows = this.tiles ? (this.tiles.length / this.tilesPerRow) : 0;
  rowHeight = 340;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['generalSettings'] && this.generalSettings) {
      this.rowHeight = this._getRowHeight();
    }

    if (changes['tiles'] && this.tiles) {
      this.tileGrid = this._mapTilesToGrid(this.tiles);
    }
  }

  navigateToUrl(url: string): void {
    window.open(url);
  }

  private _mapTilesToGrid(tiles: Tile[]): TileRow[] {
    let grid: TileRow[] = [];
    const visibleTiles = this.generalSettings.loadAllTiles ? tiles.length : this.generalSettings.visibleTiles;

    for (let index = 0; index < visibleTiles; index += this.tilesPerRow) {
      const endOfSlicedItems = (index + this.tilesPerRow) < visibleTiles ? index + this.tilesPerRow : visibleTiles;
      const row = tiles.slice(index, endOfSlicedItems);
      grid.push(row);
    }

    return grid;
  }

  private _getRowHeight(): number {
    return this.generalSettings.displayLayout === "33/33/33" ? 340 : 270;
  }
}
