import { Component, OnInit } from '@angular/core';
import { Bike } from '../bike';

@Component({
  selector: 'bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.scss']
})
export class BikesListComponent implements OnInit {

  bikes: Bike[];
  
  constructor() {
    this.bikes = [
      new Bike(1, 'Wigry 2', 'Bardzo fajny rower', 3, 1234.99),
      new Bike(2, 'Romet', 'Polski rower', 15, 1220.99),
      new Bike(3, 'Ukraina', 'Rower ponadczasowy', 0, 1220.00),
      new Bike(3, 'Romet 2', 'Model 2012', 13, 1323),
      new Bike(3, 'Wigry', 'Model 2000', 10, 1334),
    ];
   }

  ngOnInit() {
  }

}
