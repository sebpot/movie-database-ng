import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from './shared/auth-interceptor.service';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { ShowsComponent } from './shows/shows.component';
import { ActorsComponent } from './actors/actors.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MinToHoursPipe } from './shared/min-to-hours.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent,
    ShowsComponent,
    ActorsComponent,
    MovieDetailsComponent,
    MinToHoursPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
