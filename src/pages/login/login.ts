import { Component, OnInit, ViewChild }         from '@angular/core';
import { NavController, Platform, Events}       from 'ionic-angular';
import { Facebook, Google }                     from 'ng2-cordova-oauth/core';
import { OauthCordova }                         from 'ng2-cordova-oauth/platform/cordova';
import { UserService }                          from '../../services/user.service';
import { CategoriesPage }                       from '../categories/categories';
import { RequestsPage }                       from '../requests/requests';
import { CordovaService}                        from '../../services/cordova.service';
import { LoadingModalComponent }                from '../../components/loading-modal/loading-modal'

//import * as $ from 'jquery'

@Component({
  selector: 'page-login',
  templateUrl: './login.html'
})
export class LoginPage implements OnInit{
  @ViewChild(LoadingModalComponent) loadingComponent:LoadingModalComponent;
  private oauth: OauthCordova = new OauthCordova();
  private facebookProvider: Facebook = new Facebook({
    clientId: '',
    appScope: ['email']
  })
  private googleProvider: Google = new Google({
    clientId: '',
    appScope: ['email']
  })

  user:any;
  showError:boolean = false;

  constructor(public navCtrl: NavController, private platform: Platform, private userService:UserService, private events:Events, private cordovaService:CordovaService){
    userService.isLogged().then(success=>{
      this.navCtrl.setRoot(CategoriesPage);
    },error=>{
      //this.router.navigate(['LoginPage']);
    })
  }
  ngOnInit():void{
    var user = {
      id:'test',
      name:'test',
      email:'test@test.com',
      phone:'test',
      address:'test',
      city:'test',
      country:'test'
    };
    this.userService.setLocal('user',JSON.stringify(user))
    this.userService.setLocal('userToken',user.email)
    this.events.publish('user:logged',user);
    this.navCtrl.setRoot(RequestsPage);
    this.user = {
      email:'',
      password:''
    };
  }
  loginSuccess(userServer:any):void{
    var user = {
      id:userServer.id,
      name:userServer.name,
      email:userServer.email,
      phone:userServer.phone,
      address:userServer.address,
      city:userServer.city,
      country:userServer.country
    };
    this.userService.setLocal('user',JSON.stringify(user))
    this.userService.setLocal('userToken',user.email)
    this.events.publish('user:logged',user);
    this.navCtrl.setRoot(CategoriesPage);
  }
  login():void{
    this.loadingComponent.show()
    //this.cordovaService.hideKeyboard()
    this.showError = false;
    if(!this.user.email || !this.user.password){
      this.showError = true;
      this.loadingComponent.hide()
      return;
    }
    console.log('i will log',this.user)
    this.userService.commonLogin(this.user.email,this.user.password)
      .then(success=>{
        console.log('uyeeeees',success)
        this.loadingComponent.hide()
        this.loginSuccess(success.user)
      },error=>{
        console.log('errrrorr',error)
        this.loadingComponent.hide()
        this.showError = true;
      })
  }
  oauthGoogle():void{
    this.oauth.logInVia(this.googleProvider).then(success => {
      if(success['access_token']){
        this.userService.oauthLogin('google',success['access_token']).then(successOauth=>{
          this.loginSuccess(successOauth.user)
        }, errorOauth=>{

        });
      }
    }, error => {
      console.log("ERROR: ", error);
    });
  }
  oauthFacebook():void{
    this.oauth.logInVia(this.facebookProvider).then(success => {
      if(success['access_token']){
        this.userService.oauthLogin('facebook',success['access_token']).then(successOauth=>{
          this.loginSuccess(successOauth.user)
        }, errorOauth=>{
          console.log('error oauth',errorOauth);
        });
      }
    }, error => {
      console.log("ERROR: ", error);
    });
  }
}
