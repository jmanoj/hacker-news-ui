import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HackerNewsService } from '../services/hacker-news.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  id: string | null = null;
  additionalDetails$: Observable<any> | undefined;
  loading: boolean = true;
  hackerNewsDetail: any;

  constructor(private route: ActivatedRoute,
    private hackerNewsService: HackerNewsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = this.route.snapshot.paramMap.get('id');

      this.hackerNewsService.getHackerNewsDetail(Number(this.id)).subscribe(
        (data) => {
          this.hackerNewsDetail = data;
          this.loading = false;
        },
        (error) => {
          console.error('Error fetching Hacker News detail:', error);
          this.loading = false;
        }
      );
    });
  }
}
