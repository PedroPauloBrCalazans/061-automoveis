import { Component, OnInit, AfterContentInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControlName, FormControl } from '@angular/forms';


import { Cadastro } from './models/cadastro';
import { ValidationMensagens, FormValidation, DisplayMessage } from 'src/app/utils/generic-form-validation';
import { Observable, fromEvent, merge } from 'rxjs';
import { NgBrazilValidators } from 'ng-brazil';
import  { utilsBr } from 'js-brasil';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html'
})
export class ContatoComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  
  contatoForms: FormGroup;
  cadastro: Cadastro;
  contatoResult: string = '';
  MASKS = utilsBr.MASKS;


  validationMensagens: ValidationMensagens;
  formValidation: FormValidation;
  displayMessage: DisplayMessage = {};

  constructor(private fb: FormBuilder) { 
    this.validationMensagens = {
      nome: {
        required: 'O Nome é requerido',
        minlength: 'O Nome precisa ter no mínimo 2 caracteres',
        maxlength: 'O Nome precisa ter no máximo 50 caracteres'
      },
      sobrenome: {
        required: 'O SobreNome é requerido',
        minlength: 'O SobreNome precisa ter no mínimo 2 caracteres',
        maxlength: 'O SobreNome precisa ter no máximo 50 caracteres'
      },
      telefone: {
        required: 'Telefone é requerido',
        telefone: 'Telefone em formato inválido'
      },
      mensagem: {
        required: 'Preencha o campo Mensagem',
        minlength: 'A Mensagem precisa ter no mínimo 2 caracteres',
        maxlength: 'A Mensagem precisa ter no máximo 150 caracteres'
      }
    };

    this.formValidation = new FormValidation(this.validationMensagens);
  }
  
  ngOnInit() {

    this.contatoForms = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      sobrenome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      telefone: ['', [Validators.required, NgBrazilValidators.telefone]],
      mensagem: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]]

    });
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
    .map((FormControl: ElementRef) => fromEvent(FormControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.formValidation.processarMensagens(this.contatoForms);
    });
  }

  adicionarCadastro(){
   if(this.contatoForms.dirty && this.contatoForms.valid){
     this.cadastro = Object.assign({}, this.cadastro, this.contatoForms.value);
     this.contatoResult = JSON.stringify(this.contatoForms.value);
   }
  }
}