import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-classificados',
  templateUrl: './classificados.component.html'
})
export class ClassificadosComponent implements OnInit {

  produtos: Produto [];
  mapped: Produto [];

  constructor() { }

  ngOnInit() {

    this.produtos = [
      {
        id: 1,
        nome: 'Jogo de Roda e pneus aro 17  Orbital',
        descricao: '4 mesês de uso nunca reformadas, pneus 90%.',
        valor: 2000.00,
        imagem: 'orbital17.jpg'
      },
      {
        id: 2,
        nome: 'DVD Player Automotivo Pioneer',
        descricao: 'DVH-7880AV 1 Din 3 Pol USB AUX MP3 CD WMA AM FM RCA.',
        valor: 1400.00,
        imagem: 'dvd.jpg'
      },
      {
        id: 3,
        nome: 'Jogo de rodas aro 18 ',
        descricao: 'Modelo Long Beach 4 Furos Vw nunca usadas.',
        valor: 3000.00,
        imagem: 'long.jpg'
      },
      {
        id: 4,
        nome: 'Alto Falante 6x9 Pioneer',
        descricao: '420w 69 Quadriaxial Ts-6990br Novos.',
        valor: 560.00,
        imagem: 'ts69.jpg'
      },
      {
        id: 5,
        nome: 'Kit turbo AP Pulsativo no Farol Carburado ou Injetado',
        descricao: 'Kit turbo novo completo AP Pulsativo no Farol Carburado ou Injetado turbina modelo HX40 Holset.',
        valor: 3500.00,
        imagem: 'kitTurbo.jpg'
      },
      {
        id: 6,
        nome: 'KIT FILTRO AR ESPORTIVO AIR COOL',
        descricao: 'Esse conjunto oferece uma modificação simples e prática para o veículo, aumentando ligeiramente a potência e o torque do motor ao deixar a mistura ar combustível mais rica.',
        valor: 250.00,
        imagem: 'filtroAr.jpg'
      },
    ];

    this.mapped = this.produtos.map(produto => {
      return {
        id: produto.id,
        nome: produto.nome,
        descricao: produto.descricao,
        valor: produto.valor,
        imagem: produto.imagem
      }
    });
  }
}
