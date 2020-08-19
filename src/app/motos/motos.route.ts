import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { MotosAppComponent } from './motos.app.component';
import { AnunciosComponent } from './anuncios/anuncios.component';


const motosRouterConfig: Routes = [
    {
        path: '', component: MotosAppComponent,
        children: [
            { path: 'anuncios', component: AnunciosComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(motosRouterConfig)
    ],
    exports: [RouterModule]
})

export class MotosRoutingModule { }