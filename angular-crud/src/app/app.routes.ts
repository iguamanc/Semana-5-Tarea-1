import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Users } from './pages/users/users';
import { About } from './pages/about/about';
import { Terceros } from './pages/terceros/terceros';
import { Crear as CrearTercero } from './pages/terceros/crear/crear';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'terceros',component:Terceros},
    {path:'usuarios',component:Users},
    {path:'nosotros',component:About},
    {path:'terceros/crear',component:CrearTercero},
    {path:'tercero/editar/:id',component:CrearTercero},
    {path:'**',redirectTo:''}
];
