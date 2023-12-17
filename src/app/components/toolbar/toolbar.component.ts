import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  showSearch = false;
  searchQuery = '';

  constructor(private router: Router, private news: NewsService) {}

  navigateToNews() {
    this.router.navigate(['/news']);
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
    if (!this.showSearch) {
      this.searchQuery = '';
    }
  }

  performSearch() {
    if (this.searchQuery) {
      this.router.navigate(['/news-results'], {
        queryParams: { q: this.searchQuery },
      });
    }
  }

  clearSearch() {
    this.searchQuery = '';
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
