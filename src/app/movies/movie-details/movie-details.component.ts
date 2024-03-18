import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  id: number;
  movie: any;

  constructor(private route: ActivatedRoute, 
    private dataStorageService: DataStorageService){}

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );

    this.dataStorageService.fetchMovie(this.id).subscribe(
      (responseData: any) => {
        this.movie = responseData;
        console.log(this.movie);
      }
    );
  }
}
