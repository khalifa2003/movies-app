import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { IMovie } from 'src/app/models/imovie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  movieDetails: IMovie = {} as IMovie;
  movieDetails$: Observable<any> | undefined;
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.movieDetails$ = this.route.paramMap.pipe(
      switchMap((params) => {
        return this.moviesService.getMovieById(params.get('id') || '');
      })
    );
    this.movieDetails$.subscribe((res) => {
      this.movieDetails = res;
    });
  }

  getImage(): string {
    return 'https://image.tmdb.org/t/p/w500' + this.movieDetails.poster_path;
  }
}
