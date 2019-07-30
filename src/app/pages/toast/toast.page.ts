import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, ToastController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss']
})
export class ToastPage implements OnInit {
  usuarios: any;
  @ViewChild('lista') lista: IonList;
  constructor(private service: DataService, private toast: ToastController) {}

  ngOnInit() {
    this.usuarios = this.service.getUsers();
  }

  favorite(user) {
    this.lista.closeSlidingItems();
    this.presentToast(user.name);
  }

  async presentToast(name: string) {
    const toast = await this.toast.create({
      message: 'Se ha agregado ' + name + ' a tus favoritos',
      position: 'bottom',
      color: 'primary',
      buttons: [
        // {
        //   side: 'start',
        //   icon: 'star',
        //   text: 'Favorite',
        //   handler: () => {
        //     console.log('Favorite clicked');
        //   }
        // },
        {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
}
