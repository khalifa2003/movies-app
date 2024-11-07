import { Component } from '@angular/core';
import { IMovie } from 'src/app/models/imovie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {
  movies: IMovie[] = [];
  data: any;

  first: number = 0;
  rows: number = 10;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getPage().subscribe((data) => {
      this.movies = data.results;
      this.data = data;
    });
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
