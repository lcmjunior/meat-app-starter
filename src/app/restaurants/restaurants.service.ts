import { URL_API } from './../app.api';
import { Restaurant } from './restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class RestaurantService {

    constructor(private http: Http) { }

    restaurantsLst(): Observable<Restaurant[]> {
        return this.http.get(`${URL_API}/restaurants`).map(response => response.json());
    }

};