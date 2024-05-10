import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'ejercicio1', component: Ejercicio1Component}
];
