import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/models/user';
import { AuthStoreService } from 'src/app/auth/services/auth-store.service';
import { Link } from 'src/app/shared/models/link';
import { LinkStoreService } from '../../services/link-store.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  links$!: Observable<Link[]>;
  user$!: Observable<User>;
  form!: FormGroup;

  constructor(
    public linkStore: LinkStoreService,
    public authService: AuthStoreService,
    buil: FormBuilder) {
    this.links$ = this.linkStore.lisks$;
    this.user$ = this.authService.user$;
    this.form = buil.group({
      url: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.authService.user();
    this.linkStore.getLinks();
  }

  saveLink(): void {
    if (!this.form.valid) { return; }
    const data = this.form.value;
    this.linkStore.saveLink(data);
    this.form.reset();
  }
}
