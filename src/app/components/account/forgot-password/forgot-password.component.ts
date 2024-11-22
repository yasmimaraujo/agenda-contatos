import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

formForgotPassword = new FormGroup({
  email : new FormControl('', [
  Validators.required,
  Validators.email
  ])
});
get form(): any {
  return this.formForgotPassword.controls;
}
 
onSubmit(): void {
  console.log(this.formForgotPassword.value);
}
}
