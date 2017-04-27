import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataService } from '../../services/data.service';
import { UserDetailPage } from '../user-detail/user-detail';
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html'
})
export class UserListPage implements OnInit{
  public users: Array<{name: string, email: string, id: string, phone: string, categories:Array<string>, description:string}>;
  public categories:Object;
  private categoryId:String;
  constructor(private data:DataService, public navCtrl: NavController, public navParams: NavParams) {
    console.log('here i am in users',navParams.get('category'))
    this.categoryId = navParams.get('category');
    this.users = this.data.getUserFromCategory(this.categoryId)
    console.log('the users are',this.users)
  }
  ngOnInit(){
  }
  selectUser(user){
    this.navCtrl.push(UserDetailPage,{user:user})
  }

}
