import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PlacePage } from '../pages/place/place';
import {ProfilePage} from "../pages/profile/profile";
import {TabsPage} from "../pages/tabs/tabs";
import {AboutPage} from "../pages/about/about";
import {ThirdPage} from "../pages/third/third";

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';


export const firebaseConfig = {
  apiKey: "AIzaSyCKHmBEwBhOrl8PPpA60esPmrRO1YZj5jk",
  authDomain: "ionicbasic-5a1d3.firebaseapp.com",
  databaseURL: "https://ionicbasic-5a1d3.firebaseio.com",
  projectId: "ionicbasic-5a1d3",
  storageBucket: "ionicbasic-5a1d3.appspot.com",
  messagingSenderId: "239565363241"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlacePage,
    ProfilePage,
    TabsPage,
    AboutPage,
    ThirdPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlacePage,
    ProfilePage,
    TabsPage,
    AboutPage,
    ThirdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
