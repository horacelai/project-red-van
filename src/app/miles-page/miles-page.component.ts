import { Component, OnInit } from '@angular/core';
import coupons from 'src/assets/data/coupons.json';

@Component({
  selector: 'app-miles-page',
  templateUrl: './miles-page.component.html',
  styleUrls: ['./miles-page.component.scss']
})
export class MilesPageComponent implements OnInit {

  coupons = coupons;

  constructor() { }

  ngOnInit(): void {
  }

}
