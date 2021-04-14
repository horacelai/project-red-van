import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements OnInit {

  constructor() { }

  map: Map;
  locationForm: FormGroup;

  stage = 0;

  autoComplets: string[] = [
    'Mong Kok Station',
    'Mong Kok East Station'
  ]

  ngOnInit(): void {
    this.map = new Map({
      target: 'road_map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: olProj.fromLonLat([114.1764513,22.2995565]),
        zoom: 16,
        minZoom: 18,
        maxZoom: 14,
      })
    });

    this.locationForm = new FormGroup({
      destination: new FormControl('', [Validators.required]),
      seats: new FormControl('', Validators.required)
    })
  }

  searchVan(): void {
    if(this.locationForm.invalid){
      return;
    }
    this.stage = 1;

    setTimeout(() => {
      this.stage = 2;
    }, 6204)
  }

}
