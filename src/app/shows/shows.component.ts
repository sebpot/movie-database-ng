import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit{
  shows: any[];
  hoveredShow: any = null;

  constructor(private dataStorageService: DataStorageService){}

  ngOnInit(): void {
    this.dataStorageService.fetchTVShows().subscribe(
      (responseData: any) => {
        this.shows = responseData.results;
        console.log(this.shows);
      }
    );
  }

  onMouseEnter(show) {
    this.hoveredShow = show;
  }

  onMouseLeave() {
    this.hoveredShow = null;
  }
}
