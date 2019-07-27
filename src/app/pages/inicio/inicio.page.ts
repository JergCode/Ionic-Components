import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Page } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss']
})
export class InicioPage implements OnInit {
  pages: Observable<Page[]>;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.pages = this.dataService.getMenu();
  }
}
