import { Injectable } from '@angular/core';
import {BIKES} from '../data/bikes';
import { Bike } from '../bike';

@Injectable()
export class BikesService {
  
  constructor() { }

  getBikes():Bike[] {
    return this.createBikes();
  }

  createBikes():Bike[] {
    return BIKES.map(bike => new Bike(bike.id, bike.name, bike.description, bike.qty, bike.price, bike.image));
  }

}
