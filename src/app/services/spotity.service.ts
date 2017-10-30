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
    headers.append('authorization', 'Bearer BQBCnCB8pvNA-NH3roWF3HC0K-Z-ma_ScljqcDX4w7jCXOGIJSn_X2vY7I0Y09yDEQsf_7APtBRk41i3Wf0p4g');


    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url, {headers})
      .map(res => {
        this.artistas = res.json().artists.items;
        console.log(this.artistas);
        // return res.json().artists.items;
      });
  }
}
