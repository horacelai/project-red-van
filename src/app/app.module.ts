import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapPageComponent } from './map-page/map-page.component';
import { GuidePageComponent } from './guide-page/guide-page.component';
import { ItineraryPageComponent } from './itinerary-page/itinerary-page.component';
import { MilesPageComponent } from './miles-page/miles-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRippleModule} from '@angular/material/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { EventPageComponent } from './event-page/event-page.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { BottomNavModule } from 'ngx-bottom-nav';
import { ArticlePageComponent } from './article-page/article-page.component';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MapPageComponent,
    GuidePageComponent,
    ItineraryPageComponent,
    MilesPageComponent,
    EventPageComponent,
    BottomNavComponent,
    ArticlePageComponent,
    SchedulePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatSelectModule,
    MatIconModule,
    BottomNavModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
