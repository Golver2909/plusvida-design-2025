import { Component } from '@angular/core';
import { NgIcon, provideIcons  } from '@ng-icons/core';
import { tdesignSearch,tdesignUser1Filled, tdesignPlus } from '@ng-icons/tdesign-icons';
import { Usuario } from '../../services/usuario/usuario';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-inicio',
  imports: [NgIcon, RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
  viewProviders:[provideIcons({
    tdesignSearch,
    tdesignUser1Filled,
    tdesignPlus 
  })]
})
export class Inicio {
usuarioActivo: string | null

cantidadNotifications:number

constructor(userService:Usuario){
  this.usuarioActivo = userService.usuarioActivo

  this.cantidadNotifications = userService.notificacionesNum
}

}
