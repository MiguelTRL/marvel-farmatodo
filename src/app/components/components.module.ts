import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAddedComponent } from './modal-added/modal-added.component';



@NgModule({
  declarations: [ModalAddedComponent],
  imports: [
    CommonModule,
  ],
  exports : [
    ModalAddedComponent
  ]

})
export class ComponentsModule { }
