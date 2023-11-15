import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
    >
    <ng-template [ngIf]="error">
      <div class="alert alert-danger alert-dismissible fade show my-2" role="alert">
        {{ error }}
      </div>
    </ng-template>
  `
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  public error?: string;

  constructor(private gifsService: GifsService) { }

  searchTag() {
    this.validateError()
    const newTag = this.tagInput.nativeElement.value
    this.gifsService.searchTag(newTag, 0)
    this.tagInput.nativeElement.value = '';
  }

  validateError() {
    const newTag = this.tagInput.nativeElement.value
    if (!newTag) {
      this.error = 'Por favor escriba algo para iniciar la busqueda.'
    } else  {
      this.error = ''
    }
  }
}
