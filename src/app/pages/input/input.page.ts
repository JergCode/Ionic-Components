import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss']
})
export class InputPage implements OnInit {
  usuario: Usuario = {
    nombre: '',
    email: '',
    password: ''
  };

  constructor() {}

  ngOnInit() {}

  onSubmitTemplate(form: NgForm) {
    console.log(this.usuario);
  }
}

interface Usuario {
  nombre: string;
  email: string;
  password: string;
}
