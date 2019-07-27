import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IonReorderGroup, IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-lista-reorder',
  templateUrl: './lista-reorder.page.html',
  styleUrls: ['./lista-reorder.page.scss']
})
export class ListaReorderPage implements OnInit {
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;
  @ViewChildren(IonItemSliding) slidings;
  usuarios: any[];
  constructor(private service: DataService) {}

  ngOnInit() {
    this.service.getUsers().subscribe((resp: any[]) => (this.usuarios = resp));
  }

  async reorder(event) {
    // event.detail.complete(this.usuarios);
    this.usuarios = await event.detail.complete(this.usuarios);
  }

  toogleReoder() {
    for (const sliding of this.slidings._results) {
      sliding.disabled = this.reorderGroup.disabled;
    }
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }

  delete(user) {
    const idx = this.usuarios.findIndex(usuario => user === usuario);
    this.usuarios.splice(idx, 1);
    console.log(idx);
  }
}
