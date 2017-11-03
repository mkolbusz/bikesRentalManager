import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BikesListComponent } from './bikes-list/bikes-list.component';
import { BikeListItemComponent } from './bike-list-item/bike-list-item.component';
import { BikesService } from './services/bikes.service';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BikesListComponent,
    BikeListItemComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [BikesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
