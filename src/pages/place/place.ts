import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ThirdPage} from "../third/third";
import {HomePage} from "../home/home";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    alert(this.place);
  }

}
