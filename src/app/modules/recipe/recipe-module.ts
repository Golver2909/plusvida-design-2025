import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisRecetas } from '../../components/mis-recetas/mis-recetas';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MisRecetas
  ],
  exports:[
    MisRecetas
  ]
})
export class RecipeModule { }
