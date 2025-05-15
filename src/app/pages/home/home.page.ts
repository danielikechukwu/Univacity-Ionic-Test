import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, IonItem, ModalController, IonBadge } from '@ionic/angular/standalone';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, IonItem, IonBadge],
})

export class HomePage implements OnInit, OnDestroy {

  message = 'This modal example uses the modalController to present and dismiss modals.';

  constructor(private modalCtrl: ModalController) {}

  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    
  }

  async openModal() {

    const modal = await this.modalCtrl.create({
      component: ModalComponent
    });

    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if(role === 'confirm'){
      this.message = `Hello, ${data}!`;
    }
  }




}
