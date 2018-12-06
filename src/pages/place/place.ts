import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ThirdPage} from "../third/third";
import {HomePage} from "../home/home";
import {PlacesService} from "../../services/places.service";

/**
 * Generated class for the PlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {

  place: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public placesServices: PlacesService) {
    //this.namePlace = navParams.get('name');
    this.place = navParams.get('place');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

  navigateBack(){
    this.navCtrl.pop();
  }

  navigateThird(){
    this.navCtrl.push(ThirdPage);
  }

  savePlace(){
    this.place.id = Date.now();

    console.log("*******************************"+this.place);
  }

}
