import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { AuthStoreService } from '../../services/auth-store.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user$!: Observable<User>;

  constructor(private authService: AuthStoreService) {
    this.user$ = this.authService.user$;
    this.authService.user();
  }
}
