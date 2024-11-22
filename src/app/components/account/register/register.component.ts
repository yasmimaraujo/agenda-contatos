import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPasswordValidator } from '../../../validators/match-password.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  //criando a estrutura do formulário
  formRegister = new FormGroup({
    /*campo nome */
    nome: new FormControl('', [
      Validators.required /* campo obrigatório */,
      Validators.minLength(8) /* mínimo de caracteres */,
      Validators.maxLength(100) /* máximo de caracteres */
    ]),
    /* campo email */
    email: new FormControl('', [
      Validators.required /* campo obrigatório */,
      Validators.email /* formato de email */,
    ]),
    /* campo senha */
    senha: new FormControl('', [
      Validators.required /* campo obrigatório */,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/),
    ]),
    /* campo senhaConfirmacao */
    senhaConfirmacao: new FormControl('', [
      Validators.required
    ])
  },
    /*adicionando validações customizadas  */
    {
      validators: [MatchPasswordValidator.matchPassword],
    }
  );

  /* função para permitir o acesso aos 
  campos contidos no formulário */

get form(): any{
  //retornar os campos do formulário
  return this.formRegister.controls;
}

/* função para capturar o evento do submit*/
onSubmit(): void {
  /* imprimir os campos do formulário */
  console.log(this.formRegister.value);
}
}
