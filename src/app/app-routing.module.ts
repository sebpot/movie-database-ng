import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { ShowsComponent } from './shows/shows.component';
import { ActorsComponent } from './actors/actors.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'movies', component: MoviesComponent, pathMatch: 'full'
  },
  {
    path: 'movies/:id', component: MovieDetailsComponent
  },
  {
    path: 'shows', component: ShowsComponent
  },
  {
    path: 'actors', component: ActorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
