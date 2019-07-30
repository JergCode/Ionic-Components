import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Heroe } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss']
})
export class SegmentPage implements OnInit {
  @ViewChild(IonSegment) segment: IonSegment;
  publisher: '';
  heroes: Observable<Heroe[]>;
  constructor(private service: DataService) {}

  ngOnInit() {
    this.segment.value = 'todos';
    this.heroes = this.service.getHeroes();
  }

  segmentChanged(event) {
    if (event.detail.value === 'todos') {
      this.publisher = '';
    } else {
      this.publisher = event.detail.value;
    }
  }
}
