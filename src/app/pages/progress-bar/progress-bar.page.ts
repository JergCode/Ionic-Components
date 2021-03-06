import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss']
})
export class ProgressBarPage implements OnInit {
  progress: number;
  constructor() {}

  ngOnInit() {
    this.progress = 0.05;
  }

  cambiarValor(ev) {
    console.log(ev.detail.value);
  }
}
