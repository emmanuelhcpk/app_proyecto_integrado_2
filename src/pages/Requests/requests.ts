import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataService } from '../../services/data.service';

import { UserListPage } from '../user-list/user-list'
@Component({
  selector: 'page-requests',
  templateUrl: 'requests.html'
})
export class RequestsPage implements OnInit{
  constructor(private data:DataService, public navCtrl: NavController, public navParams: NavParams) {}
  public categories:Object;
  ngOnInit(){
    this.categories = this.data.requests;
  }
  selectCategory(category){
    this.navCtrl.push(UserListPage,{category:category})
  }

}
