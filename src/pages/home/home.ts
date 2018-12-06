import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PlacePage} from "../place/place";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  places: any = [
    { nameOne: 'Place One', address:'Address One', category: 'Category One' }
  ];

  constructor(public navCtrl: NavController) {

  }

  navigatePlace(){
    //this.navCtrl.push(PlacePage,{name: name});
    this.navCtrl.push(PlacePage,{place: {}});
  }

  goToViewDetail(){
    this.navCtrl.push(PlacePage,{place: {}});
  }

  goToViewDetailExistent(place){
    //this.navCtrl.push(PlacePage,{place: place});
    this.navCtrl.push(PlacePage,{place: {}});

  }

}
