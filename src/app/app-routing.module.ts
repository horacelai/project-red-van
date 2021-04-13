import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidePageComponent } from './guide-page/guide-page.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { ItineraryPageComponent } from './itinerary-page/itinerary-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { MilesPageComponent } from './miles-page/miles-page.component';

const routes: Routes = [
  {path: '', component: IndexPageComponent},
  {path: 'guide', component: GuidePageComponent},
  {path: 'intinery', component: ItineraryPageComponent},
  {path: 'map', component: MapPageComponent},
  {path: 'miles', component: MilesPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
