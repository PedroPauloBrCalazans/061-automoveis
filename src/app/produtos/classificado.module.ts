import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClassificadosComponent } from './classificados/classificados.component';
import { ClassificadoAppComponent } from './classificado.app.component';

import { ClassificadoRoutingModule } from './classificado.route';



@NgModule({
    declarations:[
        ClassificadosComponent,
        ClassificadoAppComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ClassificadoRoutingModule

    ],
    
})

export class ClassificadoModule { }