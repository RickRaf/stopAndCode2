import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Article } from '../modules/article';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  articles: Article[] = [];

  constructor(private news: NewsService) {}

  ngOnInit(): void {
    // this.articles = this.news.getJsonData();
    this.search();
  }

  search(query?: string) {
    this.news.getDati(query).subscribe((data) => {
      this.articles = data.articles;
    });
  }
}
