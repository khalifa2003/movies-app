import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './Components/movies-list/movies-list.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesListComponent,
    children: [{ path: '', redirectTo: '/home', pathMatch: 'full' }],
  },

  { path: 'home', component: MoviesListComponent },

  { path: 'movie/:id', component: MovieDetailsComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
