import { Component, OnInit } from '@angular/core';
import articles from 'src/assets/data/articles.json';

@Component({
  selector: 'app-guide-page',
  templateUrl: './guide-page.component.html',
  styleUrls: ['./guide-page.component.scss']
})
export class GuidePageComponent implements OnInit {

  articles = articles.map((article, index) => ({ ...article, id: index }));

  constructor() { }

  ngOnInit(): void {
  }

}
