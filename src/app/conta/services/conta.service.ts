import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable()

export class ContaService{

    constructor(private http: HttpClient) { }

    registraUsuario(usuario: Usuario) {

    }

    login(usuario: Usuario) {

    }
}