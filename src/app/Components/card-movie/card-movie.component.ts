import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/models/imovie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css'],
})
export class CardMovieComponent {
  @Input() movie: IMovie = {} as IMovie;

  constructor(private moviesService: MoviesService) {}

  getImage(): string {
    return 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path;
  }
}
