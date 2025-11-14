import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { MisRecetas } from './components/mis-recetas/mis-recetas';

export const routes: Routes = [
    {
        component: Inicio, path: ''
    },
    {
        component: MisRecetas, path: 'recetas'
    }
];
