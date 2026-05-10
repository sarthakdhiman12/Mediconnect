import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
 
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
 
  registrationForm!: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  selectedRole: string | null = null;
 
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {}
 
  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9]+$/)
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/)
      ]],
      role: ['', Validators.required],
      fullName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      specialty: [''],
      yearsOfExperience: [''],
      dateOfBirth: [''],
      address: [''],
    });
  }

 
  onRoleChange(event: Event): void {
    this.selectedRole = (event.target as HTMLSelectElement).value;
  }
 
  onSubmit(): void {
    if (this.registrationForm.invalid) {
      this.errorMessage = 'Please fill out all fields correctly.';
      this.successMessage = null;
      return;
    }
 
    this.authService.createUser(this.registrationForm.value).subscribe(()=>{
      this.successMessage = 'Registration successful!';
      this.errorMessage = null;
      this.resetForm();
      // setTimeout(() => {
      //   this.router.navigate(['/']);
      // }, 2000);
    })
  }
//   onSubmit(): void {
//   this.successMessage = null;
//   this.errorMessage = null;

//   if (this.registrationForm.invalid) {
//     this.registrationForm.markAllAsTouched();
//     this.errorMessage = 'Please fill out all fields correctly.';
//     return;
//   }

//   const formData = {
//     ...this.registrationForm.value,
//     email: this.registrationForm.value.email.trim().toLowerCase()
//   };

//   this.authService.createUser(formData).subscribe({
//     next: (response) => {
//       this.successMessage = 'Registration successful!';
//       this.errorMessage = null;

//       this.registrationForm.reset();
//       this.selectedRole = null;

//       setTimeout(() => {
//         this.router.navigate(['/']);
//       }, 2000);
//     },

//     error: (error) => {
//       console.error('Registration failed:', error);

//       if (error.status === 400 && error.error) {
//         this.errorMessage = error.error;
//       } else {
//         this.errorMessage = 'Registration failed. Please try again.';
//       }

//       this.successMessage = null;
//     }
//   });
// }
 
  resetForm(): void {
    this.registrationForm.reset();
    this.selectedRole = null;
    this.successMessage = null;
    this.errorMessage = null;
  }
}