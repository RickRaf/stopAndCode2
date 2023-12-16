import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Article } from '../modules/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  articles: Article[] = [];
  constructor(private news: NewsService) {}

  ngOnInit(): void {
    this.news.getDati().subscribe(
      (data) => {
        console.log(data);
        this.articles = data.articles; // Assumendo che l'array di articoli sia contenuto nella proprietà 'articles'
      },
      (error) => {
        console.error('Errore nella richiesta:', error);
      }
    );
  }
}
