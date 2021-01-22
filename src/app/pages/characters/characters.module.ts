import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersPageComponent } from './characters-page/characters-page.component';
import { Routes, RouterModule } from '@angular/router';
import {FilterCharacterPipe}from './pipes/filter-character.pipe';
import {FormsModule,ReactiveFormsModule} from  '@angular/forms'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginatorPipe } from './pipes/paginator.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import  { ComponentsModule} from  '../../components/components.module';
const routes: Routes = [
  {
    path: '',
    component: CharactersPageComponent
  }
];


@NgModule({
  declarations: [CharactersPageComponent,FilterCharacterPipe, PaginatorPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    NgbModule,
    ComponentsModule
    

  ]
})
export class CharactersModule { }
