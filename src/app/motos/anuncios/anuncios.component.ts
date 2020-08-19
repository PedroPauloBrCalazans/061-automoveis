import { Component, OnInit } from '@angular/core';
import { Moto } from '../models/moto';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html'
})
export class AnunciosComponent implements OnInit {

  motos: Moto [];
  mapped: Moto [];

  constructor() { }

  ngOnInit() {

    this.motos = [
      {
        id: 1,
        nome: 'CB Twister Especial Edition',
        descricaoMoto: 'Moto muito nova apenas 14.000 km, todas as revisões feita na concessionária, apenas venda.',
        valor: 15945.00,
        img: 'cb250.jpg'
      },
      {
        id: 2,
        nome: 'CG 160 titan',
        descricaoMoto: 'Moto nova, todas as revisões feita na concessionária, aceito trocas em moto de maior valor.',
        valor: 10000.00,
        img: 'cg_160_titan.jpg'
      },
      {
        id: 3,
        nome: 'Honda Cb 600 hornet',
        descricaoMoto: 'Revisão ok, pega e andar',
        valor: 20000.00,
        img: 'hornet600.jpg'
      }
    ];

    this.mapped = this.motos.map(motos => {
      return{
        id: motos.id,
        nome: motos.nome,
        descricaoMoto: motos.descricaoMoto,
        valor: motos.valor,
        img: motos.img
      }
    });
  }
}
