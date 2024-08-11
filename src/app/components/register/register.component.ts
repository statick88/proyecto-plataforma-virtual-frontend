import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  selectedFile: File | null = null;

  constructor(private http: HttpClient) { }

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(registerForm: NgForm) {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('name', registerForm.value.name);
      formData.append('email', registerForm.value.email);
      formData.append('password', registerForm.value.password);
      formData.append('cpass', registerForm.value.cpass);
      formData.append('image', this.selectedFile);

      this.http.post('http://localhost:8080/api/users/register', formData)
        .subscribe(response => {
          // Manejar la respuesta
          console.log('Registro exitoso', response);
        }, error => {
          // Manejar el error
          console.error('Error en el registro', error);
          if (error.error && typeof error.error === 'string') {
            // Muestra este mensaje al usuario
            console.log('Mensaje de error del servidor:', error.error);
          }
        });
    }
  }
}
