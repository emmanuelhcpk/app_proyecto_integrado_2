import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DataService } from '../../services/data.service';

import { UserListPage } from '../user-list/user-list'
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage implements OnInit{
  constructor(private data:DataService, public navCtrl: NavController, public navParams: NavParams) {}
  public categories:Object;
  ngOnInit(){
    this.categories = this.data.categories;
    console.log('the categories ade',this.categories)
  }
  selectCategory(category){
    console.log('i will go to userlistpage',category)
    this.navCtrl.push(UserListPage,{category:category})
  }

}
