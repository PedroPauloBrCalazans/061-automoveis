import { FormGroup } from '@angular/forms'




export class FormValidation {
    constructor(private validationMensagens: ValidationMensagens) {   }

    processarMensagens(container: FormGroup): { [key: string]: string } {
        let mensagem = {};
        for (let controlKey in container.controls) {
            if (container.controls.hasOwnProperty(controlKey)) {
                let c = container.controls[controlKey];

                if (c instanceof FormGroup) {
                    let childMensagens = this.processarMensagens(c);
                    Object.assign(mensagem, childMensagens);
                } else {
                    if (this.validationMensagens[controlKey]) {
                        mensagem[controlKey] = '';
                        if ((c.dirty || c.touched) && c.errors) {
                            Object.keys(c.errors).map(messageKey => {
                                if (this.validationMensagens[controlKey][messageKey]) {
                                    mensagem[controlKey] += this.validationMensagens[controlKey][messageKey] + '<br />';
                                }
                            });
                        }
                    }
                }
            }
        }
        return mensagem;
    }
}


export interface DisplayMessage {
    [key: string]: string
}

export interface ValidationMensagens {
    [key: string]: { [key: string]: string }
}