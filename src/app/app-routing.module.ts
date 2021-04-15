import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidePageComponent } from './guide-page/guide-page.component';
import { ItineraryPageComponent } from './itinerary-page/itinerary-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { MilesPageComponent } from './miles-page/miles-page.component';
import { EventPageComponent } from './event-page/event-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'map', pathMatch: 'full' },
  { path: 'guide', component: GuidePageComponent },
  { path: 'itinerary', component: ItineraryPageComponent },
  { path: 'map', component: MapPageComponent },
  { path: 'miles', component: MilesPageComponent },
  { path: 'event/:id', component: EventPageComponent },
  { path: 'article/:id', component: ArticlePageComponent },
  { path: 'schedule', component: SchedulePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
