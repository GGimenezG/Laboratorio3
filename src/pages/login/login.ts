import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {PrincipalPage} from '../principal/principal';
import {RegistroPage} from '../registro/registro';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  private menu: MenuController) {
    this.menu.enable(false);
  }

  IrPrincipal(){
    this.navCtrl.setRoot(PrincipalPage);
  }

  IrRegistro(){
    this.navCtrl.setRoot(RegistroPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
