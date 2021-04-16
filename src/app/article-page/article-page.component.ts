import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import articles from 'src/assets/data/articles.json';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  article;
  favorite = false;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.article = articles[id];
  }

  onClickBack(): void {
    this.location.back();
  }

  onClickFavorite(): void {
    this.favorite = !this.favorite;
  }
}
