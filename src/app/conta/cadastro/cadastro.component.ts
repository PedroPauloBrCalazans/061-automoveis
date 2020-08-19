import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormControlName } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { ContaService } from '../services/conta.service';
import { ValidationMensagens, FormValidation, DisplayMessage } from 'src/app/utils/generic-form-validation';

import { Observable, fromEvent, merge } from 'rxjs';


import { CustomValidators } from 'ngx-custom-validators';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})

export class CadastroComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  errors: any[] = [];
  cadastroForm: FormGroup;
  usuario: Usuario;
  cadastroResult: string = '';

  validationMensagens: ValidationMensagens;
  formValidation: FormValidation;
  displayMessage: DisplayMessage = { };
  

  constructor(private fb: FormBuilder,
             private contaService: ContaService) {

              this.validationMensagens = {
                email: {
                  required: 'Informe seu e-mail',
                  email: 'Email inválido'
                },
                password: {
                  required: 'Informe a Senha',
                  rangeLength: 'A senha deve possuir entre 6 e 10 caracteres'
                },
                confirmPassword: {
                  required: 'Informe a senha novamente',
                  rangeLength: 'A senha deve possuir entre 6 e 10 caracteres',
                  equalTo: 'As senha não conferem'
                }
              };

              this.formValidation = new FormValidation(this.validationMensagens);
            }
  

  ngOnInit(): void {

    let senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 10])]);
    let senhaConfirm = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 10]), CustomValidators.equalTo(senha)]);

    this.cadastroForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password: senha,
      confirmPassword: senhaConfirm
    });
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
    .map((FormControl: ElementRef) => fromEvent(FormControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.formValidation.processarMensagens(this.cadastroForm);
    });
  }

  adicionarConta(){
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.cadastroResult = JSON.stringify(this.cadastroForm.value);
      
      this.contaService.registraUsuario(this.usuario);
    }
  }
}
