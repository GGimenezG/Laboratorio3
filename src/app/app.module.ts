import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
  
import { MyApp } from './app.component'; 
import { LoginPage } from '../pages/login/login';
import { SeguirPage } from '../pages/seguir/seguir';
import { PrincipalPage } from '../pages/principal/principal';
import { PerfilPage } from '../pages/perfil/perfil';
import { CategoriaPage } from '../pages/categoria/categoria';
import { InicioPage } from '../pages/inicio/inicio';
import { RegistroPage } from '../pages/registro/registro';



@NgModule({  
  declarations: [
    MyApp,
    LoginPage,
    SeguirPage,
    PrincipalPage,
    PerfilPage,
    CategoriaPage,
    InicioPage,
    RegistroPage,
    ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SeguirPage,
    PrincipalPage,
    PerfilPage,
    CategoriaPage,
    RegistroPage,
    InicioPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
 