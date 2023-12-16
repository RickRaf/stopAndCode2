import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  showSearch = false;
  searchQuery = '';

  constructor(private router: Router) {}
  toggleSearch() {
    this.showSearch = !this.showSearch;
    if (!this.showSearch) {
      this.searchQuery = ''; // Resetta la query quando la barra di ricerca è nascosta
    }
  }

  performSearch() {
    // Aggiungi la logica di ricerca qui, ad esempio navigare a una nuova pagina con i risultati
    console.log('Ricerca eseguita:', this.searchQuery);
  }

  clearSearch() {
    this.searchQuery = '';
  }

  navigateToNews() {
    this.router.navigate(['/news']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
