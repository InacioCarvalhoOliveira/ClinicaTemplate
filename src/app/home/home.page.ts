import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
//import { ModalComponent } from ''; // Adjust the path accordingly

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) {}

  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

}
