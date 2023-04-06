import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TileDashboardComponent } from './tile-dashboard/tile-dashboard.component';
import { TileListComponent } from './tile-list/tile-list.component';
import { TileSettingsComponent } from './tile-settings/tile-settings.component';



@NgModule({
  declarations: [
    TileDashboardComponent,
    TileListComponent,
    TileSettingsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TilesModule { }
