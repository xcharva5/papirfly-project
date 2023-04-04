import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileDashboardComponent } from './tile-dashboard/tile-dashboard.component';
import { TileListComponent } from './tile-list/tile-list.component';



@NgModule({
  declarations: [
    TileDashboardComponent,
    TileListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TilesModule { }
