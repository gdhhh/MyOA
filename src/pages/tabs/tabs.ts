import {Tabs} from "ionic-angular";
import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  @ViewChild('mainTabs') tabs:Tabs;
  meRoot :any ='MePage';
  msgRoot:any = 'MsgPage';
  workRoot :any = 'WorkBenchPage';
  contactRoot  = 'ContactPersonPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  //  this.tabs.select(1); 
  //  this.navCtrl.parent.select(1);   
  }

}
