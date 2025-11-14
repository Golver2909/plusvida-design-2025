import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inicio } from '../../components/inicio/inicio';
import { Navbar } from '../../components/navbar/navbar';
import { NgIconsModule } from '@ng-icons/core';
import { tdesignHome, tdesignNotification, tdesignRootList, tdesignUser, tdesignUser1Filled, tdesignSearch } from '@ng-icons/tdesign-icons';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Inicio,
    Navbar,
    NgIconsModule.withIcons({ 
      tdesignSearch,
      tdesignUser,
      tdesignHome, 
      tdesignNotification, 
      tdesignRootList,
      tdesignUser1Filled
    }),
  ],
  exports:[
    Inicio,
    Navbar,
    NgIconsModule
  ]
})
export class MainModule { }
