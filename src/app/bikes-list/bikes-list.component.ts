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
  
  constructor(bikesService: BikesService) {
    this.bikes = bikesService.getBikes();
   }

  ngOnInit() {
  }

}
