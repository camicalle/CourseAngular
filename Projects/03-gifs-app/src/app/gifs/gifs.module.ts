import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CardListComponent } from './components/card-list/card-list.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    CardListComponent,
    HomePageComponent,
    GifsCardComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
