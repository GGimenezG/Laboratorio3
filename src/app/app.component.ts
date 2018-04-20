import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage } from '../pages/inicio/inicio';
import {RegistroPage} from '../pages/registro/registro';
import { LoginPage } from '../pages/login/login';
import { PrincipalPage } from '../pages/principal/principal';
import { SeguirPage } from '../pages/seguir/seguir';
import { PerfilPage } from '../pages/perfil/perfil';
import { CategoriaPage } from '../pages/categoria/categoria';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild('NAV') nav: Nav;
  public rootPage= InicioPage;
  private pages: Array<{titulo: string, component: any, icon: string}>;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen) {
    
    this.pages = [
      {titulo: 'Inicio', component: PrincipalPage, icon: 'home'},
      {titulo: 'Contactos', component: SeguirPage, icon: 'contacts'},
      {titulo: 'Categorías', component: CategoriaPage, icon: 'apps'},
      {titulo: 'Mensajes', component: CategoriaPage, icon: 'chatbubbles'},
      {titulo: 'Configuración', component: CategoriaPage, icon: 'settings'},
      {titulo: 'Cerrar sesión', component: LoginPage, icon: 'log-out'},

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

