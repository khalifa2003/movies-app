import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CardMovieComponent } from './Components/card-movie/card-movie.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';
import { MoviesListComponent } from './Components/movies-list/movies-list.component';
import { MyPaginationComponent } from './Components/my-pagination/my-pagination.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

// primeNG
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    AppComponent,
    CardMovieComponent,
    MovieDetailsComponent,
    MoviesListComponent,
    MyPaginationComponent,
    NavbarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,

    //primeng
    InputTextModule,
    MenubarModule,
    ToastModule,
    PaginatorModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
