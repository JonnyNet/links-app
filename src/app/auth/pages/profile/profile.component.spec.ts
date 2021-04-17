import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthStoreService } from '../../services/auth-store.service';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [SharedModule],
      providers: [
        {
          provide: AuthStoreService,
          useValue: {
            user$: of(''),
            user(): void { }
          }
        }
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
