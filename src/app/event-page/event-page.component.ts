import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import events from 'src/assets/data/events.json';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {

  event;
  favorite = false;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.event = events[id];
  }

  onClickBack(): void {
    this.location.back();
  }

  onClickFavorite(): void {
    this.favorite = !this.favorite;
  }
}
