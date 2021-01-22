import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../../../services/marvel-api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddedComponent } from '../../../components/modal-added/modal-added.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.css']
})
export class CharactersPageComponent implements OnInit {

  constructor(private _marvelApi: MarvelApiService,
    private modalService: NgbModal,
  ) { }
  characters = [];
  favourites = [];
  filterCharacter = '';
  page_size = 10;
  page: any;
  name = '';
  ngOnInit(): void {
    this.getCharacters();

    if (localStorage.getItem('favourites')) {
      this.favourites = JSON.parse(localStorage.getItem('favourites'));

    }
  }

  getCharacters() {
    this._marvelApi.getCharacters().then(res => {
      this.characters = res.data.data.results;
    })
  }

  showMore(character) {


    console.log("character", character)
    this._marvelApi.getComicByCharcterId(character.id).then(res => {
      console.log("comiics is ", res)

      const modalRef = this.modalService.open(ModalAddedComponent, { "size": "lg", "centered": true });
      modalRef.componentInstance.commics = res.data.data.results;

      modalRef.result.then(res => {
        console.log("recibimos el favorito", res);
        var validate = false;
        this.favourites.map(commic => {
          console.log("comic")

          if (commic.id == res.data.id) {
            validate = true;
          }
        })

        if (validate) {
          Swal.fire('Este commic ya esta en favoritos', '', 'error')

        } else {
          Swal.fire('commic agregado', '', 'success')
          this.favourites.push(res.data);
          localStorage.setItem('favourites', JSON.stringify(this.favourites))
        }




      })

    })
  }

  paginator(event) {

    this.page = event.pageIndex + 1;

  }


  deleteCommic(i) {
    this.favourites.splice(i, 1);
    localStorage.setItem('favourites', JSON.stringify(this.favourites))

  }
}
