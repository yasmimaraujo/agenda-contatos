import { AbstractControl } from "@angular/forms";

/*
classe para validação customizada de comparação de senhas
*/
export class MatchPasswordValidator {
    /*
    método para realizar a validação de match de senhas
    */
    static matchPassword(AbstractControl: AbstractControl) {

        //capturar o valor do campo senha do formulário
        let senha = AbstractControl.get('senha')?.value;
        //capturar o campo 'senha confirmação'
        let senhaConfirmacao = AbstractControl.get('senhaConfirmacao')?.value;

        //verificando se os campos estão com valores diferentes
        if (senhaConfirmacao.lenght > 0 && senhaConfirmacao != senha) {
            //gerando um erro de validação
            AbstractControl.get('senhaConfirmacao')?.setErrors({
                //definindo o nome do erro
                matchPassword: true,
            });
        }
        return null;
    }

}