import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.scss']
})
export class SchedulePageComponent implements OnInit {

  schedule = [
    {
      date: 11,
      dayOfWeek: 'Mon',
      events: [
        {
          name: '國家安全教育日',
          startTime: '11:00',
          endTime: '25:00'
        }
      ]
    },
    {
      date: 12,
      dayOfWeek: 'Tue',
      events: [
        {
          name: 'Tai Po Tour',
          startTime: '13:00',
          endTime: '16:00'
        },
        {
          name: 'Avenue of Stars',
          startTime: '18:00',
          endTime: '20:00'
        }
      ]
    },
    {
      date: 14,
      dayOfWeek: 'Thu',
      events: [
        {
          name: 'Ocean Park',
          startTime: '10:00',
          endTime: '16:00'
        },
        {
          name: 'The Peak',
          startTime: '18:00',
          endTime: '21:00'
        }
      ]
    }
  ];

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  onClickBack(): void {
    this.location.back();
  }
}
