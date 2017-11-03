import { Component, OnInit, Input } from '@angular/core';
import { Bike } from '../bike';

@Component({
  selector: 'bike-list-item',
  templateUrl: './bike-list-item.component.html',
  styleUrls: ['./bike-list-item.component.scss']
})
export class BikeListItemComponent implements OnInit {

  @Input('bike') bike: Bike;
  isDescriptionVisible: boolean = false

  constructor() { }

  ngOnInit() {
  }

  toggleDescription() {
    this.isDescriptionVisible = !this.isDescriptionVisible;
  }

  increaseQty() {
    if(this.bike.qtyAvailable > 0) {
      this.bike.qty++;
      this.bike.qtyAvailable--;
    }
  }

  decreaseQty() {
    if(this.bike.qty > 0){
      this.bike.qty--;
      this.bike.qtyAvailable++;
    }
  }

  addToCart() {
    if(this.bike.qtyAvailable === 0) {
      this.bike.isSoldOut = true;
    }
    this.bike.qty = 0;
  }

}
