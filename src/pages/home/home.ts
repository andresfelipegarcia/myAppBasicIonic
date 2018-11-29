import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PlacePage} from "../place/place";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  places: any = [
    { name: 'Place One', address:'Address One', category: 'Category One' }
  ];

  constructor(public navCtrl: NavController) {

  }

  navigatePlace(name){
    this.navCtrl.push(PlacePage,{name: name});
  }

  goToViewDetail(){
    this.navCtrl.push(PlacePage,{place: {}});
  }

  goToViewDetailExistent(place){
    this.navCtrl.push(PlacePage,{place: place});
  }

}
