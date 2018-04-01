import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from './../../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item-model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  menu: Observable<MenuItem[]>;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.menu = this.restaurantService.menuOfRestaurant(
      this.route.parent.snapshot.params["id"]
    );
  }

  addEventEmiter(item: MenuItem) {
    console.log(item);
  }
}
