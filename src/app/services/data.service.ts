import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Page, Heroe } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenu() {
    return this.http.get<Page[]>('/assets/data/menu.json');
  }

  getAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes() {
    return this.http
      .get<Heroe[]>('/assets/data/superheroes.json')
      .pipe(delay(2000));
  }
}
