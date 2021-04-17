import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthStoreService } from '../../services/auth-store.service';

import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInComponent ],
      imports: [SharedModule],
      providers: [
        {
          provide: AuthStoreService,
          useValue: {
            error$: of(''),
            userAuth: jasmine.createSpy('userAuth'),
          }
        }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onSubmit', () => {
    const service = TestBed.inject(AuthStoreService);
    component.onSubmit();
    component.form.controls.email.setValue('test@test.com');
    component.form.controls.password.setValue('123456');
    component.onSubmit();
    expect(service.userAuth).toHaveBeenCalled();
  });
});
