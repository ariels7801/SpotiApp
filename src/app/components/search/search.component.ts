import { Component, OnInit } from '@angular/core';
import {SpotityService} from '../../services/spotity.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  termino: string;
  constructor(private _spotifyService: SpotityService) { }

  ngOnInit() {

  }

  buscarArtista() {
    this._spotifyService.getArtistas(this.termino).
    subscribe();

  }

}
