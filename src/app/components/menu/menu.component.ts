import { Component, OnInit } from '@angular/core';
import { Page } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  pages: Observable<Page[]>;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.pages = this.dataService.getMenu();
  }
}
