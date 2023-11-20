import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, Pagination, SearchResponse } from '../interfaces/gift.interface';

@Injectable({ providedIn: 'root' })
export class GifsService {

  public gifList: Gif[] = [];
  public pagination!: Pagination;
  public response!: boolean
  public error!: string

  private _tagsHistory: string[] = [];
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
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
    this.searchTag(this._tagsHistory[0], 0)
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
      this.searchTag(this._tagsHistory[0], 0)
    }
  }

  get limit(): number {
    const limit = 12
    return limit
  }

  searchTag( tag:string, page: any ):void {
    this.error = ''
    if (tag.length === 0) {
      this.error = 'Por favor escriba algo para iniciar la busqueda.'
      return;
    }

    page = page * this.limit

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', this.limit)
      .set('q', tag)
      .set('offset', page)

    this.response = false;

    this.http.get<SearchResponse>(`${ this.serviceUrl }/search`, { params })
      .subscribe( response => {
        let responseLength = response.data.length;
        this.response = true;
        if (!responseLength) {
          this.error = 'No se encontraron resultados.'
        } else {
          this.gifList = response.data;
          this.pagination = response.pagination;
          this.organizeHistory(tag);
        }
      })
  }

}
