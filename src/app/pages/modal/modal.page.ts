import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss']
})
export class ModalPage implements OnInit {
  datos: any;
  constructor(private modal: ModalController) {}

  ngOnInit() {}
  async abrirModal() {
    const modal = await this.modal.create({
      component: ModalInfoPage,
      componentProps: {
        firstName: 'Emmanuel',
        lastName: 'Ramirez',
        pais: 'Mexico'
      }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    this.datos = data;

    console.log('Retorno de la información del modal', data);
  }
}
