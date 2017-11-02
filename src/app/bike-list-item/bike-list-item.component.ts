import { Component, OnInit, Input } from '@angular/core';
import { Bike } from '../bike';

@Component({
  selector: 'bike-list-item',
  templateUrl: './bike-list-item.component.html',
  styleUrls: ['./bike-list-item.component.scss']
})
export class BikeListItemComponent implements OnInit {

  @Input('bike') bike: Bike;

  constructor() { }

  ngOnInit() {
  }

}
