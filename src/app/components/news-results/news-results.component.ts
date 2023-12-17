import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { Article } from '../modules/article';

@Component({
  selector: 'app-news-results',
  templateUrl: './news-results.component.html',
  styleUrls: ['./news-results.component.css'],
})
export class NewsResultsComponent implements OnInit {
  searchQuery: string = '';
  articles: Article[] = [];
  article: any;

  constructor(private route: ActivatedRoute, private news: NewsService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchQuery = params['q'] || '';
      this.search();
    });
  }

  search() {
    this.news.getDati(this.searchQuery).subscribe((data) => {
      if (data.articles) {
        this.articles = data.articles.filter((article: Article) =>
          this.articleContainsKeyword(article, this.searchQuery)
        );
      } else {
        this.articles = [];
      }
    });
  }

  private articleContainsKeyword(article: any, keyword: string): boolean {
    return (
      article.title.toLowerCase().includes(keyword.toLowerCase()) ||
      article.description.toLowerCase().includes(keyword.toLowerCase()) ||
      article.content.toLowerCase().includes(keyword.toLowerCase())
    );
  }
}
