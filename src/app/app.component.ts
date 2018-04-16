import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PrincipalPage } from '../pages/principal/principal';
import { SeguirPage } from '../pages/seguir/seguir';
import { PerfilPage } from '../pages/perfil/perfil';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild('NAV') nav: Nav;
  public rootPage= HomePage;
  private pages: Array<{titulo: string, component: any, icon: string}>;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen) {
    
    this.pages = [
      {titulo: 'Inicio', component: PrincipalPage, icon: 'home'},
      {titulo: 'Contactos', component: SeguirPage, icon: 'contacts'},
    ];
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPerfil(){
    this.nav.setRoot(PerfilPage);
  }
  
  goToPage(page){
    this.nav.setRoot(page);
  }



}

