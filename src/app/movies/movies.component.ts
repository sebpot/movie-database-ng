import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any[];
  hoveredMovie: any = null;

  constructor(private dataStorageService: DataStorageService){}

  ngOnInit(): void {
    this.dataStorageService.fetchMovies().subscribe(
      (responseData: any) => {
        this.movies = responseData.results;
        console.log(this.movies);
      }
    );
  }

  onMouseEnter(movie) {
    this.hoveredMovie = movie;
  }

  onMouseLeave() {
    this.hoveredMovie = null;
  }
}
