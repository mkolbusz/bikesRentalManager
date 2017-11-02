import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { BikeListItemComponent } from './bike-list-item/bike-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BikesListComponent,
    BikeListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
