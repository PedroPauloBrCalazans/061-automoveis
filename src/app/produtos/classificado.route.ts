import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ClassificadoAppComponent } from './classificado.app.component';
import { ClassificadosComponent } from './classificados/classificados.component';


const classificadoConfig: Routes = [ 
    {
        path: '', component: ClassificadoAppComponent,
        children: [
            { path: 'classificados', component: ClassificadosComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(classificadoConfig)
    ],
    exports: [RouterModule]
})

export class ClassificadoRoutingModule { }