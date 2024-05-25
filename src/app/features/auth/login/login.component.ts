import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.setFormLogin();
  }

  public setFormLogin(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  public login(): void {
    const formValue = this.loginForm.value
    
    this.authService.login(formValue.email, formValue.password).subscribe(
      success => {
        if (success) {
          this.router.navigate(['/pages/home']);
        } else {
          alert('Error al iniciar sesion');
        }
      },
      error => alert('Error al iniciar sesion')
    );
  }

}
