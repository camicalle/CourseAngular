import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gift.interface';

@Injectable({ providedIn: 'root' })
export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs';
  private apiKey: string = 'VlZoMMiZmRl4UZ0su0ajhEGaExaR0u97';

  constructor( private http: HttpClient ) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory]
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag)
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify( this._tagsHistory ))
  }

  private loadLocalStorage():void {
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0])
  }

  deleteList(): void {
    this._tagsHistory = []
    this.gifList = []
    localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  deleteTag(tag: string): void {
    const position = this._tagsHistory.findIndex(object => object == tag);
    if(this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag)
    }
    localStorage.setItem('history', JSON.stringify(this._tagsHistory))
    if (!this._tagsHistory.length) {
      this.gifList = []
    } else if (position == 0) {
      this.searchTag(this._tagsHistory[0])
    }
  }

  searchTag( tag:string ):void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    this.http.get<SearchResponse>(`${ this.serviceUrl }/search`, { params })
      .subscribe( response => {
        this.gifList = response.data;
      })
    //'http://api.giphy.com/v1/gifs/search?api_key=VlZoMMiZmRl4UZ0su0ajhEGaExaR0u97&q=valorant&limit=10'
  }

}
