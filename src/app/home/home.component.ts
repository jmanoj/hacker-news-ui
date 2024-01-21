import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../services/hacker-news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  hackerNewsIds: number[] = [];
  itemsPerPageOptions: number[] = [10, 20];
  itemsPerPage: number = 10;
  currentPage: number = 1;

  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit(): void {
    this.hackerNewsService.getHackerNewsIds().subscribe((ids) => {
      this.hackerNewsIds = ids;
    });
  }
  
  get totalItems(): number {
    return this.hackerNewsIds.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get displayedHackerNewsIds(): number[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.hackerNewsIds.slice(startIndex, startIndex + this.itemsPerPage);
  }

  getPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (value, i) => i + 1);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}