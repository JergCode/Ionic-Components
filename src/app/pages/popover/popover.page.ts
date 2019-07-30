import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../components/popover/popover.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss']
})
export class PopoverPage implements OnInit {
  constructor(private pop: PopoverController) {}

  ngOnInit() {}

  async showPop(ev: any) {
    const popover = await this.pop.create({
      component: PopoverComponent,
      event: ev,
      mode: 'ios',
      backdropDismiss: false
    });

    await popover.present();

    // ============================== onDidDismiss ==============================
    /* Envía la información al padre una vez que se cierra el modal o el popover, esta es
    más lenta ya que el padre recibe la información hasta que se cierra por completo el
    componente */
    // const { data } = await popover.onDidDismiss();

    // ============================== onWillDismiss ==============================
    /* Envía la información al padre cuando se va a ejecutar el cierre el modal o del
    pop over, esta es más rápida ya que envia la información al momento de dar click
    en el botón que ejecuta la acción */
    const { data } = await popover.onWillDismiss();

    console.log('Padre', data);
  }
}
