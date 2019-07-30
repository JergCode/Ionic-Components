import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss']
})
export class SearchbarPage implements OnInit {
  albums: any[] = [];
  textoBuscar = '';
  constructor(private service: DataService) {}

  ngOnInit() {
    this.service.getAlbums().subscribe((albums: any[]) => {
      this.albums = albums;
    });
  }

  search(event) {
    this.textoBuscar = event.detail.value;
  }
}
