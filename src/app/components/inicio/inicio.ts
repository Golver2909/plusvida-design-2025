import { Component } from '@angular/core';
import { NgIcon, provideIcons  } from '@ng-icons/core';
import { tdesignSearch,tdesignUser1Filled, tdesignPlus } from '@ng-icons/tdesign-icons';

@Component({
  selector: 'app-inicio',
  imports:[NgIcon],
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

constructor(){
  this.usuarioActivo = "Lucas"
}

}
