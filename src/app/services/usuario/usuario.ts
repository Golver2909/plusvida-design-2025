import { Injectable } from '@angular/core';
import { Notification } from '../../interfaces/notification';

@Injectable({
  providedIn: 'root',
})
export class Usuario {
  //Variable para obtener el nombre de usuario activo. A modificar en proximas versiones.
  usuarioActivo:string|null = "Lucas"

  //Variable para obtener notificaciones del tipo "Notification". A modificar en proximas versiones.
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

  //Variable que guarda la cantidad de notificaciones del usuario activo. Eliminable.
  notificacionesNum:number = this.allUserNotifications.length

  //Metodo temporal para cambiar al usuario activo. Eliminar una vez se conecte la base de datos.
  cambiarUsuarioActivo(username:string):void{
    this.usuarioActivo = username
  }
  
}
