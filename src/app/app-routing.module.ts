import {NgModule} from '@angular/core/';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

import{DeportistaListComponent} from './deportista/deportista-list/deportista-list.component';
import{EjercicioListComponent} from './ejercicio/ejercicio-list/ejercicio-list.component';
import{EspecialistaListComponent} from './especialista/especialista-list/especialista-list.component';
import{ImplementoListComponent} from './implemento/implemento-list/implemento-list.component';
import{MaquinaListComponent} from './maquina/maquina-list/maquina-list.component';
import{ObjetivoListComponent} from './objetivo/objetivo-list/objetivo-list.component';
import{RutinaListComponent} from './rutina/rutina-list/rutina-list.component';
import{ZonacuerpoListComponent} from './zonacuerpo/zonacuerpo-list/zonacuerpo-list.component';

//import { EjercicioDetailComponent } from './ejercicio/ejercicio-detail/ejercicio-detail.component';

const routes: Routes =
[
    {
        path: 'deportistas',
        children: [
            {
                path: 'list',
                component: DeportistaListComponent
            }
        ]
    },
    {
        path: 'ejercicios',
        children: [
            {
                path: 'list',
                component: EjercicioListComponent
            }
//            ,
//            {
//                path: ':id',
//                component: EjercicioDetailComponent
//            }
        ]
    },
    {
        path: 'especialistas',
        children: [
            {
                path: 'list',
                component: EspecialistaListComponent
            }
        ]
    },
    {
        path: 'implementos',
        children: [
            {
                path: 'list',
                component: ImplementoListComponent
            }
        ]
    },
    {
        path: 'maquinas',
        children: [
            {
                path: 'list',
                component: MaquinaListComponent
            }
        ]
    },
    {
        path: 'objetivos',
        children: [
            {
                path: 'list',
                component: ObjetivoListComponent
            }
        ]
    },
    {
        path: 'rutinas',
        children: [
            {
                path: 'list',
                component: RutinaListComponent
            }
        ]
    },
    {
        path: 'zonascuerpo',
        children: [
            {
                path: 'list',
                component: ZonacuerpoListComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}