import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MotosAppComponent } from './motos.app.component';
import { AnunciosComponent } from './anuncios/anuncios.component';

import { MotosRoutingModule } from './motos.route';

@NgModule({
    declarations: [
        MotosAppComponent,
        AnunciosComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MotosRoutingModule
    ]
})

export class MotosModule { }