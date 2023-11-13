import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor( private gifsService: GifsService ) {}

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  public searchTag ( tag: string ):void {
    this.gifsService.searchTag(tag)
    this.show = false
  }

  public show?: boolean

  public menu():void {
    if (!this.show) {
      this.show = true
    } else {
      this.show = false
    }
  }
}
