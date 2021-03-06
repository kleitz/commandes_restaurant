import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { RestaurantDetailPage } from '../restaurant-detail/restaurant-detail';

@Component({
  selector: 'page-restaurant-chinois',
  templateUrl: 'restaurant-chinois.html'
})
export class RestaurantChinoisPage {

//@ViewChild(Nav) navCtl: Nav;


constructor(
   public navCtrl: NavController,
   public navParams: NavParams,
   public menu: MenuController) {

   menu.enable(true);

 }
 goToRestaurantDetail(params){
   if (!params) params = {};
   this.navCtrl.push(RestaurantDetailPage);
 }
  openMenu(evt) {
    if(evt === "main"){
       this.menu.enable(true, 'menu1');
       this.menu.enable(false, 'menu2');
    }else{
       this.menu.enable(true, 'menu2');
       this.menu.enable(false, 'menu1');
    }
    this.menu.toggle();
}


}
