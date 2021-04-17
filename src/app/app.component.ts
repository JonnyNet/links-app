import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkStoreService } from './link/services/link-store.service';
import { HelperService } from './shared/services/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  active$!: Observable<boolean>;

  constructor(private helper: HelperService) {
    this.active$ = this.helper.stateLoad();
  }
}
