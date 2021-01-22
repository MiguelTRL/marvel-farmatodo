import { Injectable } from '@angular/core';
import { HttpserviceService } from '../services/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {


  constructor(private httpservice: HttpserviceService) { }

  getCharacters() {
    return this.httpservice.get('characters');

  }

  getComicByCharcterId(character_id) {
    console.log("el caracter es ")
    return this.httpservice.get(`characters/${character_id}/comics`)

  }
}
