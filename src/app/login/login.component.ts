import { Component } from '@angular/core';

import { Router } from '@angular/router';

constructor(private router: Router) {}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  password: string;

  onSubmit() {
    // Aquí va la lógica de inicio de sesión

    // Si el inicio de sesión es exitoso, redirigir al usuario a la página de bienvenida
    this.router.navigate(['/welcome']);
  }
  
}
