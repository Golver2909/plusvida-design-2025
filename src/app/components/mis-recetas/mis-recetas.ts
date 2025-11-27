import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tdesignPlus } from '@ng-icons/tdesign-icons';
import { Recipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-mis-recetas',
  imports: [NgIcon],
  templateUrl: './mis-recetas.html',
  styleUrl: './mis-recetas.css',
  viewProviders: [provideIcons({ tdesignPlus })]
})
export class MisRecetas {

  recetasUsuario:Recipe[]

  recetaVisible:Recipe

  mostrarAllRecetas:boolean //Valor booleano para mostrar todas las recetas

  constructor(){
    this.mostrarAllRecetas = true

    this.recetaVisible = {
      id:0,
      fechaEmision:"",
      plazoVencimiento:0,
      doctor:'',
      habilitado:false,
      detalles:""
    }

    this.recetasUsuario =[
      {
        id: 1,
        fechaEmision: "09-10-2025",
        plazoVencimiento: 60,
        doctor:"Gerardo Zelloti",
        habilitado: true,
        detalles:`
        Ibuprofeno 1gr. 8 capsulas
        `
      },
      {
        id: 2,
        fechaEmision: "24-06-2025",
        plazoVencimiento: 60,
        doctor:"Santiago Palermo",
        habilitado: false,
         detalles:`
          Refrianex 20 capsulas
          `
      },
      {
        id: 3,
        fechaEmision: "17-08-2025",
        plazoVencimiento: 60,
        doctor:"Juan Roman Riquelme",
        habilitado: false,
         detalles:`
          ¿Objeto o pastel? 
         `
      },
      {
        id: 4,
        fechaEmision: "28-10-2025",
        plazoVencimiento: 60,
        doctor:"Santiago Palermo",
        habilitado: true,
         detalles:`
          Refrianex 20 capsulas
          `
      }
    ]
  }

  verMas(receta:Recipe):void{
    this.recetaVisible = {
      id:receta.id,
      fechaEmision:receta.fechaEmision,
      plazoVencimiento:receta.plazoVencimiento,
      doctor:receta.doctor,
      habilitado:receta.habilitado,
      detalles:receta.detalles
    }

    this.mostrarAllRecetas = false
  }
}
