import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss']
})
export class DatetimePage implements OnInit {
  fechaNacimiento = new Date();
  constructor() {}

  ngOnInit() {}

  cambiarFecha(event) {
    this.fechaNacimiento.setDate(event.detail.value);
  }
}
