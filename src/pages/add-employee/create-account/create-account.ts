import { NavParams } from 'ionic-angular/navigation/nav-params';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';

/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
  showInput;
  email ;
  chooseOpen = false;
  chooseClose = false ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }


  
  checkShow(){
    this.chooseClose = !this.chooseClose
    this.chooseOpen = !this.chooseOpen
  }



  

}