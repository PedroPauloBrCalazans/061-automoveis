import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';

import { ContatoComponent } from './institucional/contato/contato.component';
import { NotfoundComponent } from './navegacao/notfound/notfound.component';





const rootRoutesConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'sobre', component: SobreComponent },
    { path: 'contato', component: ContatoComponent},
    { 
        path: 'produtos',
        loadChildren: () => import('./produtos/classificado.module')
        .then(p => p.ClassificadoModule)  
    },
    {
        path: 'motos',
        loadChildren: () => import('./motos/motos.module')
        .then(m => m.MotosModule)
    },
    { 
        path: 'conta',
        loadChildren: () => import('./conta/conta.module')
        .then(c => c.ContaModule)
    },


    { path: '**', component: NotfoundComponent }

];

@NgModule({
    imports: [
        RouterModule.forRoot(rootRoutesConfig)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{ }