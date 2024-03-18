import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, take, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(private http: HttpClient){}

    fetchMovies() {
        return this.http.get(
            'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
        ).pipe(
            take(1),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    fetchMovie(movie_id: number) {
        return this.http.get(
            'https://api.themoviedb.org/3/movie/' + movie_id + '?language=en-US'
        ).pipe(
            take(1),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    fetchTVShows() {
        return this.http.get(
            'https://api.themoviedb.org/3/trending/tv/day?language=en-US'
        ).pipe(
            take(1),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    fetchActors() {
        return this.http.get(
            'https://api.themoviedb.org/3/trending/person/day?language=en-US'
        ).pipe(
            take(1),
            catchError(error => {
                return throwError(error);
            })
        );
    }
}