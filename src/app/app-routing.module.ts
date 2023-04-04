import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TileDashboardComponent } from './tiles/tile-dashboard/tile-dashboard.component';

const routes: Routes = [
  {path: "", component: TileDashboardComponent},
  {path: "**", component: TileDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
