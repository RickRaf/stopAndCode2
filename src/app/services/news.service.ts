import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl =
    'https://newsapi.org/v2/everything?q=tesla&from=2023-11-16&sortBy=publishedAt&apiKey=b148f2d2b46342f2bae9501d831b3dd5';
  private apiKey = 'b148f2d2b46342f2bae9501d831b3dd5';
  constructor(private http: HttpClient) {}

  getDati(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `api-key ${this.apiKey}`,
    });

    return this.http.get(this.apiUrl, { headers: headers });
  }
}
