import { Injectable } from '@angular/core';
import { Notification } from '../../interfaces/notification';

@Injectable({
  providedIn: 'root',
})
export class Usuario {
  usuarioActivo:string|null = "Lucas"

  allUserNotifications:Notification[] = [
    {
      id:1,
      title:"Aviso de vencimiento de receta",
      description:"Su receta emitida el 02-09-2025 se encuentra vencida" 
    },
    {
      id:2,
      title:"Emision de receta",
      description:"Su receta fue emitida con exito el 02-09-2025. Cuenta con un plazo de 60 dias antes de su vencimiento" 
    }
  ]

  notificacionesNum:number = this.allUserNotifications.length

  cambiarUsuarioActivo(username:string):void{
    this.usuarioActivo = username
  }
  
}
