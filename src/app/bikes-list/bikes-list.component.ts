import { Component, OnInit } from '@angular/core';
import { Bike } from '../bike';
import { BikesService } from '../services/bikes.service';

@Component({
  selector: 'bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.scss']
})
export class BikesListComponent implements OnInit {

  bikes: Bike[];
  numberOfBikes: number;
  
  constructor(bikesService: BikesService) {
    this.bikes = bikesService.getBikes();
   }

  ngOnInit() {
    this.numberOfBikes = this.bikes.reduce((prev, el) => {
        return prev + el.qtyAvailable;
    }, 0)
  }

  qtyChange(qty:number) {
    this.numberOfBikes -= qty;
  }

}
