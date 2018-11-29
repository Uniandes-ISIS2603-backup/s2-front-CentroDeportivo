import {NgModule} from '@angular/core/';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgxPermissionsGuard} from 'ngx-permissions';

import{DeportistaListComponent} from './deportista/deportista-list/deportista-list.component';
import{EjercicioListComponent} from './ejercicio/ejercicio-list/ejercicio-list.component';
import{EspecialistaListComponent} from './especialista/especialista-list/especialista-list.component';
import {EspecialistaDetailComponent} from './especialista/especialista-detail//especialista-detail.component';
import{ImplementoListComponent} from './implemento/implemento-list/implemento-list.component';
import {ImplementoDetailComponent} from './implemento/implemento-detail/implemento-detail.component';
import{MaquinaListComponent} from './maquina/maquina-list/maquina-list.component';
import {MaquinaDetailComponent} from './maquina/maquina-detail/maquina-detail.component';
import{ObjetivoListComponent} from './objetivo/objetivo-list/objetivo-list.component';
import{RutinaListComponent} from './rutina/rutina-list/rutina-list.component';
import {RutinaDetailComponent} from './rutina/rutina-detail/rutina-detail.component';
import{ZonacuerpoListComponent} from './zonacuerpo/zonacuerpo-list/zonacuerpo-list.component';
import {EjercicioDetailComponent} from './ejercicio/ejercicio-detail/ejercicio-detail.component';
import {ZonacuerpoDetailComponent} from './zonacuerpo/zonacuerpo-detail/zonacuerpo-detail.component';
import {DeportistaDetailComponent} from './deportista/deportista-detail/deportista-detail.component';
import {ObjetivoDetailComponent} from './objetivo/objetivo-detail/objetivo-detail.component';
import {HomeComponent} from './home/home.component';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from './auth/auth-sign-up/auth-sign-up.component';

const routes: Routes =
[
    {
        path: 'deportistas',
        children: [
            {
                path: 'list',
                component: DeportistaListComponent
            },
            {
                path: ':id',
                component: DeportistaDetailComponent
            }
        ]
    },
    {
        path: 'ejercicios',
        children: [
            {
                path: 'list',
                component: EjercicioListComponent
            },
            {
                path: ':id',
                component: EjercicioDetailComponent
            }
        ]
    },
    {
        path: 'especialistas',
        children: [
            {
                path: 'list',
                component: EspecialistaListComponent
            },
            {
                path: ':id',
                component: EspecialistaDetailComponent
            }
        ]
    },
    {
        path: 'implementos',
        children: [
            {
                path: 'list',
                component: ImplementoListComponent
            },
            {
                path: ':id',
                component: ImplementoDetailComponent
            }
        ]
    },
    {
        path: 'maquinas',
        children: [
            {
                path: 'list',
                component: MaquinaListComponent
            },
            {
                path: ':id',
                component: MaquinaDetailComponent
            }
        ]
    },
    {
        path: 'objetivos',
        children: [
            {
                path: 'list',
                component: ObjetivoListComponent
            },
            {
                path: ':id',
                component: ObjetivoDetailComponent
            }
        ]
    },
    {
        path: 'rutinas',
        children: [
            {
                path: 'list',
                component: RutinaListComponent
            },
            {
                path: ':id',
                component: RutinaDetailComponent
            }
        ]
    },
    {
        path: 'zonascuerpo',
        children: [
            {
                path: 'list',
                component: ZonacuerpoListComponent
            },
            
            {
                path: ':id',
                component: ZonacuerpoDetailComponent
            }
        ]
    },
     {
         path: 'home',
         component: HomeComponent
    },
    {
         path: ' ',    
         redirectTo: 'home', 
         pathMatch:'full'   
    },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation : 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
