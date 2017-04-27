import { Component, OnInit }                                      from '@angular/core';
import { NavController, NavParams, Events, AlertController }      from 'ionic-angular';
import { UserService }                                            from '../../services/user.service';
import { CategoriesPage }                                         from '../categories/categories';
import { LoginPage }                                              from '../login/login';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignUp implements OnInit{
  user:any;
  showError:boolean = false;
  errorMsg:string;
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, private events:Events, private userService:UserService) {
    userService.isLogged().then(success=>{
      this.navCtrl.setRoot(CategoriesPage);
    },error=>{
      //this.router.navigate(['LoginPage']);
    })
  }
  ngOnInit():void{
    this.user = {
      name:'',
      phone:'',
      email:'',
      address:'',
      city:'',
      country:'',
      password:'',
      password2:''
    };
  }
  signup(){
    let alert = this.alertCtrl.create({
      title: 'Registrado Exitoso',
      subTitle: 'Por favor ingrese con sus crendenciales',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.setRoot(LoginPage);
  }
}
