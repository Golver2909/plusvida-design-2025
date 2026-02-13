import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Route } from '../../interfaces/route';
import { NgIcon } from '@ng-icons/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgIcon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  routes:Route[]

  constructor(){ 
    //Informacion relativa a rutas usadas en los items del Navbar. Necesario para el uso de @for
    this.routes = [
      {ruta:"/", texto:"Inicio", icon:"tdesignHome"},
      {ruta:"/recetas", texto:"Recetas" , icon:"tdesignRootList"},
      {ruta:"/notificaciones", texto:"Avisos" , icon:"tdesignNotification"},
      {ruta:"/perfil-usuario", texto:"Perfil", icon:"tdesignUser"}
    ]
  }

  //Metodo temporal. Eliminable/modificable en versiones mas avanzadas.
  noDisponible():void{
    Swal.fire({
      icon:"error",
      title:"Vista no disponible",
      text:"Comuniquese con su desarrollador.",
      confirmButtonColor:"#276678"
    })
  }
}
