import { Component, OnInit }                                      from '@angular/core';
import { NavController, NavParams, Events, AlertController }      from 'ionic-angular';
import { UserService }                                            from '../../services/user.service';
import { DataService }                                            from '../../services/data.service';
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage implements OnInit{
  user:any;
  showError:boolean = false;
  errorMsg:string;
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, private events:Events, private userService:UserService, private dataService:DataService) {
    this.user = userService.getUser();
  }
  ngOnInit():void{
  }
  edit(){
    let alert = this.alertCtrl.create({
      title: 'Edición Exitosa',
      subTitle: 'Por favor ingrese con sus crendenciales',
      buttons: ['Ok']
    });
    alert.present();
  }
}
