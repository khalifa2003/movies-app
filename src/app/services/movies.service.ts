import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  language = 'en';
  private URI =
    'https://api.themoviedb.org/3/movie/popular?api_key=2cb53535aac3d21f2f18dd7397aa6297';
  constructor(private http: HttpClient) {}
  changeLanguage() {
    if (this.language === 'en') {
      this.language = 'ar';
    } else {
      this.language = 'en';
    }
  }

  getMovies(): Observable<any> {
    return this.http.get(`${this.URI}&language=en`);
  }

  getMoviesSearch(word: string): Observable<any> {
    return this.http.get(`${this.URI}&language=${this.language}&query=${word}`);
  }

  getNextPage(page: number): Observable<any> {
    return this.http.get(`${this.URI}&language=${this.language}&page=${page}`);
  }
}
