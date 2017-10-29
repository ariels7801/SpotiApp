import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotityService {

  artistas: any[] = [];
  urlBusqueda = 'https://api.spotify.com/v1/search';

  constructor(private http: Http) { }

  getArtistas(termino: string) {

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQDYam8E8ds_aaf9brYwtI2RdStbFfPN1Vden1idVlQK-ILK4Mg88xp--Uxsi8qA3-iNgAbqjIzUc-Vq2OvNLg');


    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url, {headers})
      .map(res => {
        this.artistas = res.json().artists.items;
        console.log(this.artistas);
        return res.json().artists.items;
      });
  }
}
