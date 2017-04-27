import { Component } from '@angular/core';

@Component({
  selector: 'loading-modal',
  templateUrl: 'loading-modal.html',
})
export class LoadingModalComponent {

  isBusy:Boolean;
  constructor() {
    this.isBusy = false;
  }
  show(){
    this.isBusy = true;
  }
 
  hide(){
    this.isBusy = false;
  }

}
