import { Component, OnInit } from '@angular/core';
import {SpotityService} from '../../services/spotity.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(private _spotifyService: SpotityService) { }

  ngOnInit() {
    this._spotifyService.getArtistas('metallica').
      subscribe(data =>{
        console.log('Esto es del search.component.ts');
        console.log(data);
    });
  }

}
