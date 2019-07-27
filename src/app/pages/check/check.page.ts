import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss']
})
export class CheckPage implements OnInit {
  public form = [
    { val: 'primary', isChecked: true },
    { val: 'secondary', isChecked: false },
    { val: 'tertiary', isChecked: false },
    { val: 'success', isChecked: true }
  ];
  constructor() {}

  ngOnInit() {}

  onClick(check) {
    console.log(check);
  }
}
