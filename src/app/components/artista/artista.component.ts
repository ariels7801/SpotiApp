import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {SpotityService} from '../../services/spotity.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {
  artista:any;
  constructor(private activatedRoute: ActivatedRoute,
              private _spotityService: SpotityService) { }

  ngOnInit() {

    this.activatedRoute.params
      .map(parametros => parametros['id'])
      .subscribe(id => {
        this._spotityService.getArtista(id)
          .subscribe( data => this.artista = data);
      });
  }

}
