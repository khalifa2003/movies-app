import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=2cb53535aac3d21f2f18dd7397aa6297&language=en`
    );
  }

  getMoviesSearch(word: string) {
    return this.http.get(
      `https://api.themoviedb.org/3/search/movie?api_key=2cb53535aac3d21f2f18dd7397aa6297&language=en&query=${word}`
    );
  }
  getPage(page: number) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=2cb53535aac3d21f2f18dd7397aa6297&language=en&page=1${page}`
    );
  }
}
