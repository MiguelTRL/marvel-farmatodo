import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-added',
  templateUrl: './modal-added.component.html',
  styleUrls: ['./modal-added.component.css']
})
export class ModalAddedComponent implements OnInit {
  @Input() commics;
  favourites = [];
  constructor(
    private modalService: NgbActiveModal,

  ) { }

  ngOnInit(): void {

  }

  addFavourites(commic) {

    const responseData = {
      data: commic,
      message: "favourite"
    }
    this.modalService.close(responseData);

  }


  buy() {

  }

}
