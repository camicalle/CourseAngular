import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif, Pagination } from '../../interfaces/gift.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor( private gifsService: GifsService ) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList
  }

  get pagination(): Pagination {
    return this.gifsService.pagination
  }
}
