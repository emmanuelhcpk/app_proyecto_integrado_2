import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { DataService } from '../../services/data.service';

/*
  Generated class for the Network page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html'
})
export class UserDetailPage implements OnInit{
  public user:Object;
  private userId:string;
  serviceAddress:string;
  constructor(private data:DataService, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.userId = navParams.get('user');
    this.user = this.data.getUser(this.userId);
  }
  ngOnInit(){
  }
  OnInit(){
    
  }
  hire(){
    //let address = 'Direccion de prueba';
    let alert = this.alertCtrl.create({
      title: 'Mensaje enviado',
      subTitle: 'La notificación fue enviada al contratista, por favor espere mientras el lo contácta',
      buttons: ['Ok']
    });
    alert.present();
  }

}
