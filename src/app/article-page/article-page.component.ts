import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import articles from 'src/assets/data/articles.json';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  article;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.article = articles[id];
  }

}
