import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {
  items = Array(40);

  constructor(private pop: PopoverController) {}

  ngOnInit() {}

  onClick(n: number) {
    console.log(n);

    this.pop.dismiss({
      item: n
    });
  }
}
