import { Component, OnInit } from '@angular/core';
import events from 'src/assets/data/events.json';

@Component({
  selector: 'app-itinerary-page',
  templateUrl: './itinerary-page.component.html',
  styleUrls: ['./itinerary-page.component.scss']
})
export class ItineraryPageComponent implements OnInit {

  events = events.map((event, index) => ({ ...event, id: index }));

  constructor() { }

  ngOnInit(): void {
  }

}
