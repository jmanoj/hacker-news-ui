import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HackerNewsDetail } from '../model/HackerNewsDetail';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  constructor(private http: HttpClient) {}

  getHackerNewsIds(): Observable<number[]> {
    return this.http.get<number[]>(`${environment.APIUrl + environment.Endpoints.HackerNewsIds}`);
  }

  getHackerNewsDetail(id: number): Observable<HackerNewsDetail> {
    return this.http.get<HackerNewsDetail>(`${environment.APIUrl}${environment.Endpoints.HackerNewsDetailById}/${id}`);
  }
}
