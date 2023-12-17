import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../components/modules/article';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl =
    'https://newsapi.org/v2/everything?q=apple&from=2023-12-16&to=2023-12-16&sortBy=popularity&apiKey=b148f2d2b46342f2bae9501d831b3dd5';
  private apiKey = 'b148f2d2b46342f2bae9501d831b3dd5';
  private jsonData: any;
  private searchQuery: string = '';

  constructor(private http: HttpClient) {}

  search(query: string) {
    this.searchQuery = query;
  }

  getDati(query?: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `api-key ${this.apiKey}`,
    });

    let apiUrl = this.apiUrl;
    if (query) {
      apiUrl += `&q=${encodeURIComponent(query)}`;
    }

    return this.http.get(apiUrl, { headers: headers });
  }

  searchDati(query: string) {
    const searchUrl = `${this.apiUrl}?q=${query}`;
    const headers = new HttpHeaders({
      Authorization: `api-key ${this.apiKey}`,
    });

    return this.http.get(searchUrl, { headers: headers });
  }

  setJsonData(data: any) {
    this.jsonData = data.articles.map(
      (articleData: any) =>
        ({
          author: articleData.author,
          title: articleData.title,
          description: articleData.description,
          url: articleData.url,
          urlToimage: articleData.urlToimage,
          publishetAt: articleData.publishedAt,
          content: articleData.content,
        } as Article)
    );
  }

  getJsonData(): Article[] {
    return this.jsonData;
  }
}
