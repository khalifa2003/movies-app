import { Component, ViewChild } from '@angular/core';
import { IMovie } from 'src/app/models/imovie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  search: any = '';
  searchResults: IMovie[] = [];

  constructor(private moviesService: MoviesService) {}

  onSearch(event: any): void {
    this.search = event.target.value;
    if (this.search.trim() !== '') {
      this.moviesService.getMoviesSearch(this.search).subscribe((data) => {
        this.searchResults = data.results;
        console.log(data);

      });
    } else {
      this.searchResults = [];
    }
  }

  getImage(movie: IMovie): string {
    return 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
  }
}
