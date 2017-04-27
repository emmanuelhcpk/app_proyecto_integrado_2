import { Component, ViewChild }     from '@angular/core';
import { Nav, Platform, Events }    from 'ionic-angular';
import { StatusBar, Splashscreen }  from 'ionic-native';

import { LoginPage }                from '../pages/login/login';
import { SignUp }                   from '../pages/signup/signup';
import { CategoriesPage }           from '../pages/categories/categories';
import { ProfilePage }              from '../pages/profile/profile';
import { RequestsPage }              from '../pages/requests/requests';
import { UserService }              from '../services/user.service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any;

  pages: Array<{title: string, component: any}>;
  isLogged:Boolean = false;
  constructor(public platform: Platform, private userService:UserService, private events:Events) {
    this.initializeApp();
    
    events.subscribe('user:logged',user=>{
      this.rootPage =  CategoriesPage;
      this.isLogged = true;
      this.pages = [
        { title: 'Contratar', component: CategoriesPage },
        { title: 'Perfil', component: ProfilePage}
      ];
    })
    events.subscribe('user:verifiedCode',user=>{
      this.rootPage =  CategoriesPage;
      this.isLogged = true;
      this.pages = [
        { title: 'Contratar', component: CategoriesPage },
        { title: 'Perfil', component: ProfilePage}
      ];
    })
    events.subscribe('user:loggedOut',user=>{
      this.rootPage =  LoginPage;
      this.isLogged = false;
      this.pages = [
        { title: 'Inicio', component: LoginPage },
        { title: 'Registro', component: SignUp }
      ];
    })
    this.userService.isLogged().then(
      success=>{
        this.rootPage =  CategoriesPage;
        this.isLogged = true;
        this.pages = [
          { title: 'Historial', component: CategoriesPage },
          { title: 'Perfil', component: ProfilePage},
          { title: 'Solicitudes', component: RequestsPage}
        ];
      },error=>{
        this.isLogged = false;
        this.rootPage =  LoginPage;
        this.pages = [
          { title: 'Inicio', component: LoginPage },
          { title: 'Registro', component: SignUp }
        ];
      }
    )
    // used for an example of ngFor and navigation
  }
  closeSession(){
    localStorage.clear()
    this.nav.setRoot(LoginPage);
    this.isLogged = false;
    this.pages = [
      { title: 'Inicio', component: LoginPage },
      { title: 'Registro', component: SignUp }
    ];
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component).then(s=>{
      console.log('success',s)
    },e=>{
      console.log('error',e)
    });
  }
}
