import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthStoreService } from '../../services/auth-store.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  error$!: Observable<string | undefined>;
  form!: FormGroup;

  constructor(private authService: AuthStoreService) {
    this.error$ = this.authService.error$;
    const required = Validators.required;
    this.form = new FormGroup({
      email: new FormControl('', [required, Validators.email]),
      password: new FormControl('', required),
    });
  }

  onSubmit(): void {
    if (!this.form.valid) { return; }
    const data = this.form.value;
    this.authService.userAuth(data);
  }
}
