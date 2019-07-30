import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss']
})
export class ModalInfoPage implements OnInit {
  constructor(private modalController: ModalController) {}
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() pais: string;

  ngOnInit() {}

  salirConArgumentos() {
    this.modalController.dismiss({
      firstName: 'Joaquin',
      lastName: 'Enrique',
      pais: 'España'
    });
  }

  salirSinArgumentos() {
    this.modalController.dismiss();
  }
}
