import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itinerary-page',
  templateUrl: './itinerary-page.component.html',
  styleUrls: ['./itinerary-page.component.scss']
})
export class ItineraryPageComponent implements OnInit {

  posts = [
    {
      name: 'Ocean Park',
      type: 'Theme Park',
      description: 'Mixing the elements of eco-conservation and water park, Ocean Park was beloved by tourists...',
      image: 'assets/img/ocean-park.jpg'
    },
    {
      name: 'A Glimpse of Local Livelihood: Tai Po',
      type: 'Tour',
      time: 'Tomorrow 3pm to 5pm',
      description: 'Become acquainted with the history, culture and cuisine of Tai Po by experiencing it alongside the locals as they...',
      image: 'assets/img/tai-po-tour.jpg'
    },
    {
      name: 'Avenue of Stars',
      type: 'Scenic Attractions',
      description: 'Hong Kong\'s Avenue of Stars is where you\'ll find the city\'s biggest entertainment stars immortalised via handprints and statues. It\'s...',
      image: 'assets/img/avenue-of-stars.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
