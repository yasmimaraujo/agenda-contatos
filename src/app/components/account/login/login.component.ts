import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

// método construtor
constructor (
  // injeção de dependencia
  private NgxSpinnerService: NgxSpinnerService
){

}

//criando a estrutura do formulário
formLogin = new FormGroup({
  /* campo 'email'*/ 
  email: new FormControl('', [
  Validators.required /* campo obrigatório */,
  Validators.email,
  ]),

  senha: new FormControl('', [
  Validators.required/* campo obrigatório */,
  Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/),
  ]),
});

//função para permitir o acesso aos 
//campos contidos no formulário
get form(): any{
//retornar os campos do formulário
return this.formLogin.controls;
}

//Função executada no submit do formulário
 onSubmit(): void {
  /* imprimir os campos do formulário */
  console.log(this.formLogin.value);
  //exibindo o spinner
  this.NgxSpinnerService.show();
 }
}
