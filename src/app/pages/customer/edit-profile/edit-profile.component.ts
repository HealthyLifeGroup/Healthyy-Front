import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { UserProfileService } from '../../../core/services/user-profile.service';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatCardModule, MatSnackBarModule, RouterLink, MatSelectModule, MatFormFieldModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  profileForm: FormGroup

  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private profileService = inject(UserProfileService);
  constructor() {
    this.profileForm = this.fb.group({
      userName: ['', [Validators.required]],
      height: ['', [Validators.required, Validators.min(1)]],
      weight: ['', [Validators.required, Validators.min(1)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(120)]],
      gender: ['', [Validators.required]],
      healthConditions: ['']
    });
  }
  onSubmit(){

  }
  controlHasError(control: string, error: string) {
    return this.profileForm.controls[control].hasError(error);
  }
  showSnackBar(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
