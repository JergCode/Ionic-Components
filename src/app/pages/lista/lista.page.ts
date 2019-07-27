import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss']
})
export class ListaPage implements OnInit {
  usuarios: any;
  @ViewChild('lista') lista: IonList;
  constructor(private service: DataService) {}

  ngOnInit() {
    this.usuarios = this.service.getUsers();
  }

  favorite(user) {
    console.log('favorite', user);
    this.lista.closeSlidingItems();
  }

  share(user) {
    console.log('share', user);
    this.lista.closeSlidingItems();
  }

  delete(user) {
    console.log(user);
    this.lista.closeSlidingItems();
  }
}
