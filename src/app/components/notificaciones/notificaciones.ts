import { Component } from '@angular/core';
import { Usuario } from '../../services/usuario/usuario';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tdesignPlus } from '@ng-icons/tdesign-icons';
import { Notification } from '../../interfaces/notification';

@Component({
  selector: 'app-notificaciones',
  imports: [NgIcon],
  templateUrl: './notificaciones.html',
  styleUrl: './notificaciones.css',
  viewProviders: [provideIcons({ tdesignPlus })]
})
export class Notificaciones {
  usuarioActivo: string | null

  cantNotificaciones:number

  notifications:Notification[]

  constructor(userService:Usuario){
    this.usuarioActivo = userService.usuarioActivo

    this.notifications = userService.allUserNotifications

    this.cantNotificaciones = userService.notificacionesNum
  }


}
