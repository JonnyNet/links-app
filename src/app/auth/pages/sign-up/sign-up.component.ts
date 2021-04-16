import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthStoreService } from '../../services/auth-store.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  error$!: Observable<string | undefined>;
  form!: FormGroup;

  constructor(private authService: AuthStoreService) {
    this.error$ = this.authService.error$;
    const required = Validators.required;
    this.form = new FormGroup({
      name: new FormControl('', required),
      email: new FormControl('', [required, Validators.email]),
      password: new FormControl('', required),
    });
  }

  onSubmit(): void {
    if (!this.form.valid) { return; }
    const data = this.form.value;
    this.authService.saveUser(data);
  }
}
